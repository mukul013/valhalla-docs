---
title: Settings reference
description: Every Meteora setting, with its exact label, where it lives and what it does.
---

Settings live in two places: the **follow editor** (per follow, under **Copy trade**) and the account **Settings** page. Discord also has a settings hub (`/valhalla settings_dlmm`).

## Per follow

| Tab | Setting | What it does |
|---|---|---|
| Sizing | Copy DLMM positions, Copy DAMM positions | Which pool types this follow copies. DAMM is [beta](damm.md) |
| Sizing | Copy ratio | Your size relative to the target. 100% is the same size. Minimum 0.01% |
| Sizing | Max trade size | Most SOL spent per copied trade. 0 copies no entries |
| Sizing | Auto-balance | Resizes ratio and max trade size from your current SOL balance |
| Safety | Entry mode | SOL only, SOL or USDC, SOL-led, Any entry. See [Entry modes](entry-modes.md) |
| Safety | Smart Token Retention | See [Smart Token Retention](smart-token-retention.md) |
| Safety | Single Pool Per Token | One position per token |
| Safety | Auto Close Above Range | Close after N minutes above range |
| Safety | Min Bin Count Check | Skip positions under 3 bins |
| Safety | Auto-ban | Pause after repeated bad trades. See [Limits and protection](limits-and-protection.md) |
| Filters | Token filters | See [Token filters](token-filters.md) |
| Filters | Min target position size | Skip small target positions (SOL, measured on the target's deposit) |
| Limits | Max open positions, Repeated entries, Stop loss, Take profit | See [Limits and protection](limits-and-protection.md) |
| Advanced | Copy strategy | Spot, Curve, BidAsk. Only copy the shapes you pick |
| Advanced | Infinite Add Liquidity | Copy every add, not only the first and the funding add |
| Advanced, Swaps and adds | Jupiter Ultra, OKX Swap | Swap routing toggles. OKX Swap is off for embedded wallets |

## Account Settings page

| Section | Setting | What it does |
|---|---|---|
| Protection defaults | Global stop loss, Stop loss timer, Take profit | Defaults for every follow. Timer is 0 to 60 minutes |
| Protection defaults | Rug check stop loss, Rug check threshold | Check the token before a stop-loss exit |
| Protection defaults | Min price range (%), Max per token (SOL) | Minimum range width, and a per-token ceiling. 0 is off |
| Protection defaults | Max open positions | Account-wide cap |
| Trade execution | Use available balance | Enter with the whole available balance. Off by default |
| Trade execution | Slippage | Maximum price slippage |
| Trade execution | Priority fee tier, Priority fee max cap | Low, Medium or High. Cap in SOL, default 0.001 |
| Notifications | Daily balance tracking | A balance message on Discord every 2 hours |
| Ignored tokens | Token mint and label | Never copied |

::shot[Follow editor Safety tab | Follow editor on the Safety tab | Entry mode cards and the Positions section | meteora-settings-safety.png]
::shot[Account settings | /dashboard/meteora/settings with Protection defaults and Trade execution | Priority fee tier and Max per token | meteora-settings.png]

:::tip
A Medium or Low priority fee tier and a lower max cap keep network costs down for most people.
:::
