---
title: Robinhood Chain overview
description: Copy Uniswap v3 and v4 liquidity positions on Robinhood Chain.
beta: true
---

:::beta
Robinhood LP Copy is in beta. Unlock it in **Profile > Beta**. Meteora on Solana stays open to everyone in the meantime. See [Unlock beta](unlock-beta.md).
:::

You follow a target wallet. When it opens or adds to a Uniswap position, Valhalla copies it from your Robinhood wallet. It also manages exits for positions it copied.

## How it differs from Meteora

| | Robinhood Chain | Meteora |
|---|---|---|
| Chain and wallet | An EVM wallet, separate from Solana | Solana wallet |
| Pools | Uniswap v3 and v4 | DLMM, DAMM (beta) |
| Ranges | Uniswap ticks | DLMM bins |
| Spend | ETH or USDG (base currency) | SOL |
| Gas | ETH | SOL |
| Risk gate | Own token risk gate | Jupiter Shield and token filters |
| Setup | Mostly on the website | Website or Discord |

There are no Presets, DAMM, HawkFi or Smart Token Retention on Robinhood Chain.

## Read in this order

1. [Unlock beta](unlock-beta.md)
2. [Set up](set-up.md)
3. [Follow a wallet](follow-a-wallet.md)
4. [Base currency](base-currency.md) and [Settings reference](settings-reference.md)

::shot[Robinhood overview | /dashboard/robinhood with wallet, base currency and a position | The Beta badge and base currency | robinhood-overview.png]
