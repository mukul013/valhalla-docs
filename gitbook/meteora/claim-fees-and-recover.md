---
description: Take your earned fees and recover SOL locked in empty accounts and dust.
---

# Claim fees and reclaim SOL

## Claim fees

1. Open **Meteora LP > Overview**.
2. On the position, click **Claim fees**. The dialog shows the position, the wallet that signs, **Claimable now** and the **Claim fee**.
3. Click **Queue claim**. The button then reads **Claim queued**.

The claim fee is 3%, or 4% on a Preset position. See [Fees](fees.md).

Claims under $2 show a warning. To go ahead, tick **Claim anyway**.

{% hint style="info" %}
DAMM positions have no **Claim fees** button. Positions opened outside Valhalla are read only.
{% endhint %}
{% hint style="info" %}
**Screenshot needed: Claim fees dialog**

Show: The Claim fees dialog with a claimable amount

Highlight: Claimable now, Claim fee and the Queue claim button

Save as: `meteora-claim-dialog.png` and insert it here.
{% endhint %}
## Reclaim SOL

Open **Meteora LP > Wallets**, then the **Reclaim** tab. The page is titled **Reclaim SOL** and has one card per kind of recoverable item.

| Card | Action |
|---|---|
| Empty token accounts | **Recover empty-account rent** |
| pump.fun cashback | **Claim pump.fun cashback** |
| Leftover wrapped SOL | **Unwrap SOL** |
| Dust tokens | **Sell dust tokens** (pays the standard trade fee) |
| Tokens with no value | **Burn tokens permanently** (cannot be undone) |

{% hint style="info" %}
**Screenshot needed: Reclaim SOL page**

Show: /dashboard/meteora/wallets/reclaim with several cards showing amounts

Highlight: Each card and its action button

Save as: `meteora-reclaim.png` and insert it here.
{% endhint %}
{% hint style="danger" %}
Burning is permanent. Check the token list before you confirm.
{% endhint %}
