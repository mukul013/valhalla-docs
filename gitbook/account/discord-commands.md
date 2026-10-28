---
description: Every slash command and what it does.
---

# Discord command reference

The root command is `/valhalla`. The website is the full interface. Discord covers core management.

## Meteora

| Command | What it does |
|---|---|
| `/valhalla start` | Creates your wallet and profile. Shows an optional **Referral code** box. |
| `/valhalla settings_dlmm` | Follow wallets, set filters and limits. |
| `/valhalla settings` | General settings hub. |
| `/valhalla top_trade_wallets` | Shows top-performing wallets. |
| `/valhalla meteora_positions` | Lists your open positions. |
| `/valhalla close_all_positions` | Closes every DLMM and DAMM position and swaps to SOL. |
| `/valhalla get_pnl wallet:` | Shows a wallet's performance and follower count. |
| `/valhalla buy_dlmm_tx tx: amount:` | Copies one specific DLMM transaction. |
| `/valhalla wallets` | Lists your wallets (multi-wallet). |
| `/valhalla export_keys` | Exports wallet keys. Optional numeric `passcode`. |
| `/valhalla withdraw` | Withdraws SOL to another address. Options: `amount` (minimum 0.01), `to_address`, optional `passcode`. |

## Robinhood Chain (beta)

| Command | What it does |
|---|---|
| `/valhalla robinhood` | Opens **Robinhood LP** with **Wallet**, **Follows** and **Activity** buttons. Withdrawals and setup are on the website. |

Token risk filters, wallet setup and withdrawals are done on the website. The Follows screen can add a follow, suggest a ratio, set Max per Pool, pause or enable, and change protocols.

{% hint style="info" %}
**Screenshot needed: Command picker**

Show: Discord showing the /valhalla command list

Highlight: The command names

Save as: `discord-command-list.png` and insert it here.
{% endhint %}
