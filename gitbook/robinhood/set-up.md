---
description: Create your wallet with permission, fund it, then add a follow and switch copying on.
---

# Set up Robinhood Chain

## Before you start

- [Beta unlocked](unlock-beta.md).
- ETH on Robinhood Chain for gas. About **0.050 ETH** is suggested. Copies are skipped when gas runs out.
- USDG to copy with, if USDG is your base currency. New accounts start in USDG. See [Base currency](base-currency.md).

## Steps

1. Open **Robinhood LP > Wallets**. The card reads **Step 1 of 2: Create your wallet and grant permission**.
2. Tick **Let Valhalla trade from this wallet**, then click **Create wallet**. This creates the wallet and gives Valhalla signing permission in one step, so it can act while you are offline.
3. In **Step 2 of 2: Fund your Robinhood LP wallet**, click **Add funds**. A dialog shows a QR code, **Your deposit address** and the network, **Robinhood Chain**. It waits for your deposit.
4. Send ETH for gas and USDG to copy with, on Robinhood Chain.
5. Open **Robinhood LP > Copy trade** and follow a wallet. See [Follow a wallet](follow-a-wallet.md).
6. Resume the follow and turn the **Robinhood copying** switch on.

{% hint style="info" %}
**Screenshot needed: Create wallet card**

Show: /dashboard/robinhood/wallets at Step 1 of 2

Highlight: The checkbox and the Create wallet button

Save as: `robinhood-create-wallet.png` and insert it here.
{% endhint %}
{% hint style="info" %}
**Screenshot needed: Deposit dialog**

Show: The Add funds dialog with QR code and address

Highlight: Network and Your deposit address (blur it in the published shot)

Save as: `robinhood-deposit.png` and insert it here.
{% endhint %}
## What you should see

The wallet shows its balance and a **Signing permission** badge: **Granted**. The **Setup** page marks the Robinhood card **Ready to copy**.

You can revoke permission any time under **Danger zone > Revoke signing permission**. If permission shows **Not granted** or **Revoked**, click **Grant permission**.

## If something is off

- **Copies do not start:** check the **Robinhood copying** switch is on and the follow is not paused.
- **Low gas banner:** add ETH. USDG-base accounts top up gas automatically by swapping small USDG amounts.
- **Funds missing:** make sure you sent on Robinhood Chain, not another network.
