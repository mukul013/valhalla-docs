---
description: Add a target wallet. Valhalla sizes the copy for you, then you fine-tune it.
---

# Follow a wallet

## Before you start

- A funded wallet ([Set up](set-up.md)).
- A target wallet address. Research it first with **Look up a wallet** (see [Wallet research](../help/wallet-research.md)).

## Steps

1. Open **Meteora LP > Copy trade**.
2. Click **Copy trade a wallet**.
3. Paste the address into **Target wallet**. Optionally add a **Wallet label**.
4. Click **Copy trade a wallet** to confirm.

{% hint style="info" %}
**Screenshot needed: Add follow dialog**

Show: /dashboard/meteora/copy-trade with the Copy trade a wallet dialog open and an address pasted

Highlight: The Target wallet and Wallet label fields

Save as: `meteora-add-follow.png` and insert it here.
{% endhint %}
Sizing is automatic. Valhalla sets the copy ratio and max trade size from your SOL balance and the target's. **Copying starts as soon as the follow is added.** Change any setting afterwards.

You can also start from **Look up a wallet**: open a wallet there and use **Copy trade this wallet**.

## Fine-tune a follow

Open the follow to get its editor. It has four tabs.

| Tab | What is in it |
|---|---|
| Sizing | Copy ratio, Max trade size, Auto-balance, Copy DLMM and DAMM toggles |
| Safety | Entry mode, Smart Token Retention, auto-ban and more |
| Filters | Token filters. See [Token filters](token-filters.md) |
| Limits | Open-position limits, repeated entries, stop-loss and take-profit |

Review your changes and confirm **Save changes**.

{% hint style="info" %}
**Screenshot needed: Follow editor**

Show: The follow editor sheet on the Sizing tab

Highlight: The four tabs, Copy ratio, Max trade size and Auto-balance

Save as: `meteora-follow-editor.png` and insert it here.
{% endhint %}
## Pick a ratio

**Copy ratio** is your size relative to the target. 100% is the same size. Click **Auto-balance** (resize from your current SOL balance) to let Valhalla recalculate it.

By hand, divide your SOL by the target's total SOL, including open positions. 5 SOL against 100 SOL is 5%. A ratio that is too high makes your trades larger than the target's relative to capital, and your losses larger too.

## Pause

Use the pause control on the follow's row. A paused follow opens nothing new.

{% hint style="info" %}
`Max trade size` of `0` means Valhalla copies none of that follow's DLMM entries.
{% endhint %}
## If something is off

- **Nothing copies:** check the follow is not paused, the wallet has SOL, and **Activity > Skipped** for the reason.
- **Max trade size is 0:** this blocks all DLMM entries on that follow.
