---
title: Discord command reference
description: Every slash command and what it does.
---

The root command is `/valhalla`. The website is the full interface. Discord covers core management.

## Meteora

| Command | What it does |
|---|---|
| `/valhalla start` | Creates your wallet and profile. Asks for a referral code. |
| `/valhalla settings_dlmm` | Follow wallets, set filters and limits. |
| `/valhalla settings` | General settings, such as the maximum Jito fee. |
| `/valhalla top_trade_wallets` | Shows top-performing wallets. |
| `/valhalla meteora_positions` | Lists your open positions. |
| `/valhalla close_all_positions` | Closes every DLMM and DAMM position and swaps to SOL. |
| `/valhalla get_pnl wallet:` | Shows a wallet's performance and follower count. |
| `/valhalla buy_dlmm_tx tx: amount:` | Copies one specific DLMM transaction. |
| `/valhalla wallets` | Lists your wallets (multi-wallet). |
| `/valhalla export_keys` | Exports wallet keys. Protected by a PIN. |
| `/valhalla withdraw` | Withdraws funds. Protected by a PIN. |

## Robinhood Chain (beta)

| Command | What it does |
|---|---|
| `/valhalla robinhood` | Opens the hub with buttons for Wallet, Follows, Activity, Withdrawal and the web handoff link. |

Token risk filters and some setup steps are website only.

::shot[Command picker | Discord showing the /valhalla command list | The command names | discord-command-list.png]
