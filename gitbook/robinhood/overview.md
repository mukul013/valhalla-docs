---
description: Copy Uniswap v3 and v4 liquidity positions on Robinhood Chain.
---

# Robinhood Chain overview

{% hint style="warning" %}
Robinhood LP Copy is in beta. Unlock it in **Profile > Beta features**. Meteora on Solana stays open to everyone in the meantime. See [Unlock beta](unlock-beta.md).
{% endhint %}
You follow a target wallet. When it opens or adds to a Uniswap position, Valhalla copies it from your Robinhood wallet. It also manages exits for positions it copied.

## How it differs from Meteora

| | Robinhood Chain | Meteora |
|---|---|---|
| Chain and wallet | An EVM wallet, separate from Solana | Solana wallet |
| Pools | Uniswap v3 and v4 | DLMM, DAMM (beta) |
| Ranges | Uniswap ticks | DLMM bins |
| Spend | USDG (new accounts) or ETH, your base currency | SOL |
| Gas | Always ETH | SOL |
| Risk gate | Own token risk gate | Jupiter Shield and token filters |
| Setup | Website. Discord has a hub with links out | Website or Discord |

There are no Presets, DAMM, HawkFi or Smart Token Retention on Robinhood Chain.

## Read in this order

1. [Unlock beta](unlock-beta.md)
2. [Set up](set-up.md)
3. [Follow a wallet](follow-a-wallet.md)
4. [Base currency](base-currency.md) and [Settings reference](settings-reference.md)
5. [Token risk filters](token-risk-filters.md)

The **Overview** page shows open positions, allocated, returned and ETH for gas.

{% hint style="info" %}
**Screenshot needed: Robinhood overview**

Show: /dashboard/robinhood with the stat strip and a position

Highlight: The Beta badge and the ETH for gas figure

Save as: `robinhood-overview.png` and insert it here.
{% endhint %}
