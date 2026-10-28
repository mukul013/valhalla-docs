---
title: DAMM
description: Copy Meteora DAMM pools, chosen per follow.
beta: true
---

:::beta
DAMM copying is a beta feature. Unlock it in **Profile > Beta features**. See [Beta features](../account/beta-features.md).
:::

DAMM is Meteora's dynamic AMM. Valhalla can copy those pools as well as DLMM.

:::warn
DAMM is marked **Experimental and high risk**. Pools are mostly new tokens and many rug. DAMM is only available while your wallet holds 10 SOL or less (liquid SOL plus open DLMM value). Above that, a "DAMM is limited to low-funded accounts" message appears.
:::

## Turn on DAMM for a follow

1. Open the follow's editor and go to the **Sizing** tab.
2. In the **DAMM trading** section, switch on **Copy DAMM positions**.
3. Set **DAMM copy ratio** (%) and **DAMM max trade size** (SOL).
4. Save.

::shot[DAMM trading section | Follow editor, Sizing tab, DAMM trading section with the Experimental badge | The toggle, DAMM copy ratio and DAMM max trade size | meteora-damm.png]

## Good to know

- Entry mode does not apply to DAMM.
- DLMM token filters do not apply to DAMM.
- DAMM positions have no **Claim fees** button on the overview.
