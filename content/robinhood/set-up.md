---
title: Set up Robinhood Chain
description: Create your Robinhood wallet, authorize signing and fund it.
beta: true
---

Four separate steps, each one required: **create, authorize, fund, enable.** A wallet that exists is not yet ready to copy.

## Before you start

- [Beta unlocked](unlock-beta.md).
- ETH on Robinhood Chain to fund gas and entries. USDG if you will use USDG as base.

## Steps

1. Open **Robinhood** and start **Setup**. Valhalla creates an EVM wallet tied to your account.
2. Give the **Signing Authorization**. This lets Valhalla sign copy actions while you are offline.
3. Open **Wallets** and click **Deposit** to see your address.
4. Send funds to it from your own wallet.
5. Turn copy trading on in **Settings**.

::shot[Signing authorization | The Privy authorization prompt on /dashboard/robinhood/wallets | The approve button and what it permits | robinhood-authorize.png]
::shot[Deposit dialog | The deposit dialog with the address and QR code | Address (blur it in the published shot) | robinhood-deposit.png]

## What you should see

The wallet shows your balance and the checklist marks create, authorize and fund as done.

## If something is off

- **Copies do not start:** the checklist step you skipped is highlighted. Finish it, then turn copy trading on.
- **Balance missing:** make sure you sent on Robinhood Chain, not another network.
