---
title: Claim fees and reclaim SOL
description: Take your earned fees and recover SOL locked in empty accounts and dust.
---

## Claim fees

1. Open **Meteora LP > Overview**.
2. On the position, click **Claim fees**. The dialog shows the position, the wallet that signs, **Claimable now** and the **Claim fee**.
3. Click **Queue claim**. The button then reads **Claim queued**.

The claim fee is 3%, or 4% on a Preset position. See [Fees](fees.md).

Claims under $2 show a warning. To go ahead, tick **Claim anyway**.

:::note
DAMM positions have no **Claim fees** button. Positions opened outside Valhalla are read only.
:::

::shot[Claim fees dialog | The Claim fees dialog with a claimable amount | Claimable now, Claim fee and the Queue claim button | meteora-claim-dialog.png]

## Reclaim SOL

Open **Meteora LP > Wallets**, then the **Reclaim** tab. The page is titled **Reclaim SOL** and has one card per kind of recoverable item.

| Card | Action |
|---|---|
| Empty token accounts | **Recover empty-account rent** |
| pump.fun cashback | **Claim pump.fun cashback** |
| Leftover wrapped SOL | **Unwrap SOL** |
| Dust tokens | **Sell dust tokens** (pays the standard trade fee) |
| Tokens with no value | **Burn tokens permanently** (cannot be undone) |

::shot[Reclaim SOL page | /dashboard/meteora/wallets/reclaim with several cards showing amounts | Each card and its action button | meteora-reclaim.png]

:::warn
Burning is permanent. Check the token list before you confirm.
:::
