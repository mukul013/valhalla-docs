// Converts content/ + nav.json into a Gitbook-ready folder (gitbook/): README.md, SUMMARY.md, pages with Gitbook hint syntax.
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

type Section = { id: string; title: string; subtitle?: string; lp?: { summary: string; chain: string; status: string; beta?: boolean }; pages: string[] };
const nav: { site: { name: string; tagline: string }; sections: Section[] } = JSON.parse(readFileSync('nav.json', 'utf8'));
const out = 'gitbook';
rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, '.gitbook/assets'), { recursive: true });

const parse = (raw: string) => {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const meta: Record<string, string> = {};
  if (m) for (const l of m[1].split('\n')) { const i = l.indexOf(':'); if (i > 0) meta[l.slice(0, i).trim()] = l.slice(i + 1).trim(); }
  return { meta, body: m ? raw.slice(m[0].length) : raw };
};
const hint = (style: string, body: string) => `{% hint style="${style}" %}\n${body.trim()}\n{% endhint %}`;
const title = (s: Section, slug: string) => { const { meta } = parse(readFileSync(`content/${s.id}/${slug}.md`, 'utf8')); return meta.beta === 'true' && !s.lp?.beta ? `${meta.title} (Beta)` : meta.title; };

function convert(s: Section, slug: string): string {
  const { meta, body } = parse(readFileSync(`content/${s.id}/${slug}.md`, 'utf8'));
  let md = body
    .replace(/^::shot\[(.+)\]\s*$/gm, (_m, b: string) => {
      const [screen = '', state = '', mark = '', file = ''] = b.split('|').map((x) => x.trim());
      if (file && existsSync(join('assets/shots', file))) {
        cpSync(join('assets/shots', file), join(out, '.gitbook/assets', file));
        return `![${screen}](../.gitbook/assets/${file})`;
      }
      return hint('info', `**Screenshot needed: ${screen}**\n\nShow: ${state}\n\nHighlight: ${mark}\n\nSave as: \`${file}\` and insert it here.`);
    })
    .replace(/^:::(beta|warn|tip|note)\n([\s\S]*?)\n:::\s*$/gm, (_m, k: string, b: string) =>
      hint({ beta: 'warning', warn: 'danger', tip: 'success', note: 'info' }[k] ?? 'info', b));
  if (slug === 'welcome') {
    const list = nav.sections.filter((x) => x.lp).map((x) => `* [${x.title}${x.lp!.beta ? ' (Beta)' : ''}](../${x.id}/${x.pages[0]}.md) (${x.lp!.chain}): ${x.lp!.summary}`).join('\n');
    md = md.replace(/<div class="lp-wrap">\{\{lp-cards\}\}<\/div>/, list);
  }
  const head = `---\ndescription: ${meta.description ?? ''}\n---\n\n# ${title(s, slug)}\n\n`;
  return head + md.trim() + '\n';
}

const summary: string[] = ['# Table of contents', '', '* [Welcome](README.md)', ''];
for (const s of nav.sections) {
  summary.push(`## ${s.title}${s.subtitle ? ` (${s.subtitle})` : ''}`, '');
  for (const slug of s.pages) {
    if (s.id === 'start' && slug === 'welcome') continue;
    const dest = join(out, s.id, `${slug}.md`);
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, convert(s, slug));
    summary.push(`* [${title(s, slug)}](${s.id}/${slug}.md)`);
  }
  summary.push('');
}
writeFileSync(join(out, 'SUMMARY.md'), summary.join('\n'));
// Gitbook's landing page is README.md, so the Welcome page becomes README.md (links rewritten one level up).
const welcome = nav.sections[0];
writeFileSync(join(out, 'README.md'), convert(welcome, 'welcome').replace(/\]\(\.\.\//g, '](').replace(/\]\((?!https?:|#|\.gitbook)([a-z-]+)\.md/g, `](${welcome.id}/$1.md`));
writeFileSync('.gitbook.yaml', 'root: ./gitbook/\nstructure:\n  readme: README.md\n  summary: SUMMARY.md\n');
console.log('exported to gitbook/');
