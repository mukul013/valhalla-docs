---
title: Wallets and multi-wallet
description: How wallets work for each LP, and how to run several Solana wallets from one account.
beta: true
---

:::beta
Multi-wallet is a beta feature. Unlock it in **Profile > Beta** on the website. See [Beta features](beta-features.md).
:::

## Wallets per LP

- **Meteora:** a Solana wallet created at start. You can export keys and withdraw, both protected by a PIN.
- **Robinhood Chain:** a separate EVM wallet created for you. You give a signing authorization so Valhalla can act while you are offline. See [Robinhood set up](../robinhood/set-up.md).

## Run several Solana wallets

With multi-wallet, one account owns several Solana wallets and they all copy at the same time. Each wallet has its own settings, follows and positions.

1. Open **Meteora > Wallets** on the website.
2. Add a wallet and fund it.
3. Pick the wallet you want to view. This is your **Selected Wallet**.
4. Set its follows and limits. Nothing carries over from your other wallets.

::shot[Wallets page | /dashboard/meteora/wallets with two wallets and the multi-wallet chip visible | The chip, the Selected marker and each wallet balance | wallets-multi.png]

### Selected Wallet versus copying

The Selected Wallet only decides what the screens show and edit. Copying, closing and stop-loss run for whichever wallet owns the follow or position, selected or not.

### What is per wallet and what is per account

| Per wallet | Per account |
|---|---|
| Max per token, max open positions, one position per token | Global open-position cap |
| Entry mode and follow settings | Ignored tokens |
| Positions and activity | Referrals |

You can follow the same target from two wallets. Each wallet opens its own copy.

### All wallets view

The dashboard defaults to the Selected Wallet. Switch to **All wallets** for totals. Totals can come back partial if one wallet is slow to load, and the page says so.

### In Discord

`/valhalla wallets` lists each wallet with copy trading on or off, its follow count and which one is selected. A panel stays tied to the wallet it was opened for. If it is stale, Discord asks you to reopen it.

:::note
Without beta access, switching wallets is refused while a position is open, and settings and follows move to the new wallet. With beta access, switching only changes the selection.
:::

You cannot delete a wallet. You can switch it off.
