---
title: Follow a wallet
description: Add a target wallet and set the size you copy.
---

## Before you start

- A funded wallet ([Set up](set-up.md)).
- A target wallet address. Research it first with [Wallet research](../help/wallet-research.md).

## Steps

1. Open **Meteora > Copy trade**.
2. Click **Add follow** and paste the target wallet address.
3. Set **Copy ratio**. 100% means the same size as the target. See the [ratio rule](#pick-a-ratio).
4. Set **Max trade size** in SOL. This caps every single trade.
5. Choose an **Entry mode**. See [Entry modes](entry-modes.md).
6. Add token filters you want. See [Token filters](token-filters.md).
7. Save and switch the follow on.

::shot[Follow editor | /dashboard/meteora/copy-trade follow editor with address, ratio, max trade size and entry mode filled | Ratio, Max trade size and the on switch | meteora-follow-editor.png]

## What you should see

The follow shows as active. When the target next opens a position that passes your rules, it appears in Activity.

## Pick a ratio

Divide your SOL by the target's total SOL, including their open positions. 5 SOL against 100 SOL is 5%. Too high a ratio makes your trades bigger than the target's, relative to capital, and your losses bigger too. Run `/ratio-help` for a calculator.

## Several wallets, different rules

Each follow has its own settings. A careful follow can use SOL Only with no score minimum, and a riskier one can demand a high Jupiter score.

## Pause or stop

Pausing a follow stops new entries. Exits on positions it already opened keep being mirrored.

## If something is off

- **Nothing copies:** check the follow is on, the wallet has SOL, and Activity > Skipped for the reason.
- **Max trade size is 0:** this blocks all DLMM entries on that follow.
