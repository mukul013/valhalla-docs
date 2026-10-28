---
title: HawkFi wallets
description: How Valhalla follows wallets that use the HawkFi keeper.
---

Some targets run their positions through the HawkFi keeper, which signs transactions on their behalf.

- **Default:** you copy the target's **full closes** that the keeper signs.
- **With the mirror enabled:** you copy the whole automation step by step. The mirror is rolled out by Valhalla.

Normally Valhalla only counts transactions the target signed itself. HawkFi is the one exception.
