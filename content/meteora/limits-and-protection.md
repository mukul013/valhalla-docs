---
title: Limits and protection
description: Stop-loss, take-profit, position caps and automatic closes.
---

## Stop-loss and take-profit

Set a percentage to exit a position that falls or gains by that much. A stop-loss timer waits a set number of minutes before acting. Turn on **rug check** so a stop-loss does not sell into a token that is already dead. Per-follow values override the account values.

## Position limits

1. **Max open positions** with a timeframe: open the follow's advanced settings, set a number and a window in minutes (60 is one hour).
2. **Max entries per pair** with a window.
3. **Max target wallets per position**: how many followed wallets can trigger the same token within a window. Counts opens and closes.
4. **Auto-ban**: stop copying a target after repeated bad trades within a window.

## Automatic protection

- **Out of range:** close above range after a set number of minutes.
- **Failsafe:** a background check that converts leftover tokens and watches positions.
- **Ignored tokens:** never copied.
- **Max per token:** a ceiling on how much you put into one token across follows.

::shot[Limits section | Follow advanced settings with max open positions and timeframe | The timeframe field in minutes | meteora-limits.png]

:::warn
Manually opened DLMM positions in your wallet are not copied and may be auto-closed.
:::
