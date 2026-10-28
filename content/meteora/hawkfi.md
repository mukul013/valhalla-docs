---
title: HawkFi wallets
description: How Valhalla follows wallets that use the HawkFi keeper.
---

Some targets run their positions through the HawkFi keeper, which signs transactions on their behalf.

- **Default:** you copy the target's **full closes** that the keeper signs.
- **With full mirroring:** you copy the whole automation step by step. Valhalla enables this for you as it rolls out.

Normally Valhalla only counts transactions the target signed itself. HawkFi is the one exception.
