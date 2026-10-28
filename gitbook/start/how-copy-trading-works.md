---
description: The few ideas behind every LP in Valhalla, in plain language.
---

# How copy trading works

## The loop

1. You **follow** a Target Wallet, the wallet whose positions you want to copy.
2. The target opens or adds to a liquidity position.
3. Valhalla checks your rules: token filters, size limits, entry mode, open-position caps.
4. If every rule passes, Valhalla opens a position from **your** wallet, sized by your ratio and caps.
5. When the target removes or closes, Valhalla closes yours and swaps the proceeds back to your base asset.

Copies trade from your own Valhalla wallet. Skipped trades are listed in Activity with the reason.

## Ideas to know

| Term | Meaning |
|---|---|
| Target Wallet | The wallet you follow. Only transactions it signed itself count. |
| Follow | One target plus your settings for it. Each follow has its own rules. |
| Copy ratio | Your size relative to the target. 5 SOL against a 100 SOL target is a 5% ratio. |
| Max trade size | The most you spend on one copied trade. `0` means copy none of that LP's entries. |
| Exits | Closes, removals and fee claims are always mirrored, even if you paused entries. |
| Skipped | A trade a rule blocked. Never silent: see Activity > Skipped. |

## What differs by LP

| | Meteora (Solana) | Robinhood Chain |
|---|---|---|
| Pools | DLMM, and DAMM (beta) | Uniswap v3 and v4 |
| Wallet | Solana wallet | Separate EVM wallet |
| Spend asset | SOL | ETH or USDG (your base currency) |
| Access | Open to everyone | Beta |

Each LP guide follows the same layout: Overview, Set up, Follow a wallet, Settings, Filters and safety, Activity, Fees.

{% hint style="success" %}
Follow one or two wallets at first. Crowded wallets often get worse entries and exits for everyone who copies them.
{% endhint %}
