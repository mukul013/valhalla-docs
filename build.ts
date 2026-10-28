// Static docs build: content/<section>/<page>.md + nav.json -> dist/. No framework.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, posix } from 'node:path';
import { marked } from 'marked';

type Section = {
  id: string;
  title: string;
  subtitle?: string;
  lp?: { summary: string; chain: string; status: string; logo: string; beta?: boolean };
  pages: string[];
};
type Nav = { site: { name: string; tagline: string }; sections: Section[] };
type Page = {
  section: Section;
  slug: string;
  url: string;
  title: string;
  description: string;
  beta: boolean;
  html: string;
  toc: { id: string; text: string; depth: number }[];
};

const nav: Nav = JSON.parse(readFileSync('nav.json', 'utf8'));
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = (s: string) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const ICON = {
  camera:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  info: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  warn: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 2.5 20h19z"/><path d="M12 10v5M12 17.5h.01"/></svg>',
  flask:
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/></svg>',
  spark:
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
};

// ::shot[screen | state to capture | highlight or redact | file.png]  and  :::beta|warn|tip ... :::
function directives(md: string, root: string): string {
  const shot = (_: string, body: string) => {
    const [screen = '', state = '', mark = '', file = ''] = body.split('|').map((s) => s.trim());
    const img = file && existsSync(join('assets/shots', file));
    if (img)
      return `\n<figure class="shot has-img"><img src="${root}assets/shots/${file}" alt="${esc(screen)}" loading="lazy"><figcaption>${esc(screen)}</figcaption></figure>\n`;
    return `\n<figure class="shot"><div class="shot-head">${ICON.camera}<strong>Screenshot needed: ${esc(screen)}</strong></div><dl><dt>Show</dt><dd>${esc(state)}</dd><dt>Highlight</dt><dd>${esc(mark)}</dd><dt>Save as</dt><dd><code>assets/shots/${esc(file)}</code></dd></dl></figure>\n`;
  };
  const callout = (_: string, kind: string, body: string) => {
    const label = { beta: 'Beta', warn: 'Warning', tip: 'Tip', note: 'Note' }[kind] ?? 'Note';
    const icon = { beta: ICON.flask, warn: ICON.warn, tip: ICON.spark, note: ICON.info }[kind] ?? ICON.info;
    return `\n<aside class="callout ${kind}"><div class="callout-label">${icon}<span>${label}</span></div>\n\n${body.trim()}\n\n</aside>\n`;
  };
  return md
    .replace(/^::shot\[(.+)\]\s*$/gm, shot)
    .replace(/^:::(beta|warn|tip|note)\n([\s\S]*?)\n:::\s*$/gm, (m, k, b) => callout(m, k, b));
}

function frontMatter(raw: string): { meta: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: raw.slice(m[0].length) };
}

function render(section: Section, slug: string): Page {
  const file = `content/${section.id}/${slug}.md`;
  if (!existsSync(file)) throw new Error(`nav.json lists ${file} but it does not exist`);
  const { meta, body } = frontMatter(readFileSync(file, 'utf8'));
  if (!meta.title) throw new Error(`${file}: missing title`);
  if (body.includes('—')) throw new Error(`${file}: contains an em dash (repo style rule)`);
  const root = '../';
  const toc: Page['toc'] = [];
  const renderer = new marked.Renderer();
  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    const id = slugify(text);
    if (depth === 2 || depth === 3) toc.push({ id, text: text.replace(/<[^>]+>/g, ''), depth });
    return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-label="Link to this section">#</a>${text}</h${depth}>\n`;
  };
  renderer.table = function (token) {
    const head = token.header.map((c) => `<th>${this.parser.parseInline(c.tokens)}</th>`).join('');
    const rows = token.rows.map((r) => `<tr>${r.map((c) => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('');
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>\n`;
  };
  const html = marked
    .parse(directives(body, root), { renderer, async: false })
    .replace(/href="([^"#]+)\.md(#[^"]*)?"/g, 'href="$1.html$2"');
  return {
    section,
    slug,
    url: `${section.id}/${slug}.html`,
    title: meta.title,
    description: meta.description ?? '',
    beta: meta.beta === 'true',
    html,
    toc,
  };
}

const pages = nav.sections.flatMap((s) => s.pages.map((p) => render(s, p)));
const byUrl = new Map(pages.map((p) => [p.url, p]));

function lpCards(root: string): string {
  return `<div class="lp-grid">${nav.sections
    .filter((s) => s.lp)
    .map((s) => {
      const lp = s.lp!;
      const first = `${root}${s.id}/${s.pages[0]}.html`;
      return `<a class="lp-card" href="${first}"><img src="${root}${lp.logo}" alt="" width="28" height="28"><span class="lp-name">${esc(s.title)}${lp.beta ? ' <span class="badge">Beta</span>' : ''}</span><span class="lp-chain">${esc(lp.chain)} · ${esc(lp.status)}</span><span class="lp-sum">${esc(lp.summary)}</span></a>`;
    })
    .join('')}</div>`;
}

function sidebar(current: Page, root: string): string {
  return nav.sections
    .map((s) => {
      const open = s.id === current.section.id ? ' open' : '';
      const items = s.pages
        .map((slug) => {
          const p = byUrl.get(`${s.id}/${slug}.html`)!;
          const cur = p === current ? ' aria-current="page"' : '';
          return `<li><a href="${root}${p.url}"${cur}>${esc(p.title)}${p.beta ? ' <span class="badge">Beta</span>' : ''}</a></li>`;
        })
        .join('');
      const logo = s.lp ? `<img src="${root}${s.lp.logo}" alt="" width="16" height="16">` : '';
      return `<details class="group"${open}><summary>${logo}<span>${esc(s.title)}</span>${s.subtitle ? `<small>${esc(s.subtitle)}</small>` : ''}</summary><ul>${items}</ul></details>`;
    })
    .join('');
}

const flat = pages;
function shell(p: Page): string {
  const root = '../';
  const i = flat.indexOf(p);
  const prev = flat[i - 1];
  const next = flat[i + 1];
  const pn = (x: Page | undefined, dir: string) =>
    x ? `<a class="pn ${dir}" href="${root}${x.url}"><small>${dir === 'prev' ? 'Previous' : 'Next'}</small><span>${esc(x.title)}</span></a>` : '<span></span>';
  const toc = p.toc.length
    ? `<nav class="toc" aria-label="On this page"><h2>On this page</h2><ul>${p.toc.map((t) => `<li class="d${t.depth}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></nav>`
    : '';
  const body = p.html.replace('{{lp-cards}}', lpCards(root));
  return `<!doctype html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)} | ${esc(nav.site.name)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="icon" href="${root}assets/logo.webp">
<link rel="stylesheet" href="${root}assets/site.css">
<link rel="stylesheet" href="${root}pagefind/pagefind-ui.css">
<script>try{var t=localStorage.getItem('theme');if(!t)t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
  <button class="menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="side"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  <a class="brand" href="${root}start/welcome.html"><img src="${root}assets/logo.webp" alt="" width="28" height="28"><span>${esc(nav.site.name)}</span></a>
  <div id="search" class="search"></div>
  <button class="theme-btn" aria-label="Switch light and dark theme"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/></svg></button>
</header>
<div class="layout">
  <nav id="side" class="side" aria-label="Documentation">${sidebar(p, root)}</nav>
  <main id="main" class="main">
    <div class="crumbs"><a href="${root}start/welcome.html">Docs</a><span aria-hidden="true">/</span><span>${esc(p.section.title)}</span></div>
    <article class="prose">
      <h1>${esc(p.title)}${p.beta ? ' <span class="badge">Beta</span>' : ''}</h1>
      ${p.description ? `<p class="lede">${esc(p.description)}</p>` : ''}
      ${body}
    </article>
    <div class="pn-row">${pn(prev, 'prev')}${pn(next, 'next')}</div>
    <footer class="foot">Something wrong or missing? Tell us in the community Discord. Valhalla is not financial advice. You are responsible for your funds.</footer>
  </main>
  ${toc}
</div>
<script src="${root}pagefind/pagefind-ui.js" defer></script>
<script src="${root}assets/site.js" defer></script>
</body>
</html>`;
}

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('assets', 'dist/assets', { recursive: true });
for (const p of pages) {
  mkdirSync(dirname(`dist/${p.url}`), { recursive: true });
  writeFileSync(`dist/${p.url}`, shell(p));
}
const home = pages[0].url;
writeFileSync('dist/index.html', `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${home}"><link rel="canonical" href="${home}"><a href="${home}">Open the docs</a>`);
writeFileSync('dist/404.html', `<!doctype html><meta charset="utf-8"><title>Page not found</title><p>That page moved or never existed. <a href="index.html">Go to the docs home</a>.</p>`);
writeFileSync('dist/.nojekyll', '');

// Link check: every internal href must land on a built page or asset.
const known = new Set(pages.map((p) => p.url));
let bad = 0;
for (const p of pages) {
  for (const m of shell(p).matchAll(/(?:href|src)="([^"]+)"/g)) {
    const ref = m[1];
    if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
    const target = posix.normalize(posix.join(posix.dirname(p.url), ref.split('#')[0]));
    if (target.startsWith('pagefind/')) continue;
    if (!known.has(target) && !existsSync(`dist/${target}`)) {
      console.error(`BROKEN ${p.url}: ${ref}`);
      bad++;
    }
  }
}
if (bad) {
  console.error(`${bad} broken link(s)`);
  process.exit(1);
}
console.log(`built ${pages.length} pages, 0 broken links`);
