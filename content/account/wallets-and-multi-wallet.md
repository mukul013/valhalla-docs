---
title: Wallets and multi-wallet
description: How wallets work for each LP, and how to run several Solana wallets from one account.
beta: true
---

:::beta
Multi-wallet is a beta feature. Unlock it in **Profile > Beta features** on the website. See [Beta features](beta-features.md).
:::

## Wallets per LP

- **Meteora:** a Solana wallet created at start. You can export keys and withdraw. A numeric passcode protects both.
- **Robinhood Chain:** a separate EVM wallet. You give signing permission so Valhalla can act while you are offline. See [Robinhood set up](../robinhood/set-up.md).

## Run several Solana wallets

With multi-wallet, one account owns several Solana wallets and they all copy at the same time. Each wallet has its own settings, follows and positions.

1. Open **Meteora LP > Wallets** on the website.
2. Click **Add wallet** and fund it. You can have up to 5 wallets.
3. Use **Make selected** on the wallet you want to view and edit. It gets a **Selected** badge.
4. Set its follows and limits. Nothing carries over from your other wallets.

::shot[Wallets page | /dashboard/meteora/wallets with two wallets and the multi-wallet chip visible | The chip, the Selected marker and each wallet balance | wallets-multi.png]

### Selected Wallet versus copying

The Selected Wallet only decides what the screens show and edit. Copying, closing and stop-loss run for whichever wallet owns the follow or position, selected or not.

### What is per wallet and what is per account

| Per wallet | For all wallets |
|---|---|
| Protection defaults (stop loss, take profit, max per token) | Trade execution, Ignored tokens, Notifications |
| Follows and their settings | Global open-position cap (default 50) |
| Positions and activity | Referrals |

You can follow the same target from two wallets. Each wallet opens its own copy.

### All wallets view

The dashboard defaults to the Selected Wallet. Use the **View** control and choose **All wallets** for totals. Totals can come back partial if one wallet is slow to load, and the page says so.

### In Discord

`/valhalla wallets` lists each wallet with copy trading on or off, its follow count and which one is selected. A panel stays tied to the wallet it was opened for. If it is stale, Discord asks you to reopen it.

:::note
Without beta access, switching wallets is refused while a position is open, and settings and follows move to the new wallet. With beta access, switching only changes the selection.
:::

You cannot delete a wallet. Each row has a **Copying** column, so you can switch copying off for it.
