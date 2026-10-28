# Facts to confirm before replacing the Gitbook

Every page was checked against the app code. These items could not be verified in code and need an owner decision.

## Kept from the old Gitbook, not found in code
- Meteora opening fee 0.015% (once per hour per token) and "holding up to 7 days costs one opening charge".
- Jupiter Ultra retry charges 0.1% (meteora/fees.md).
- Claim fee 3% (4% on Preset) is confirmed in the claim dialog. NFT and Farmer discounts are confirmed in code.
- Claim minimum $2 is a soft warning with a Claim anyway tick, as documented.

## Removed because the code has no such setting
- "Max target wallets per position", a Jito fee setting, Early copy (Robinhood), the `/ratio-help` command, the Burnlify tip, and the wallet feed access rules in the FAQ.

## Needs an owner call
- Robinhood performance fee rate: the code has the fee but no user-visible rate. fees.md says it shows in Activity.
- Robinhood follow editor shows a "Default" badge on "Pools with my base currency only", but the code default is Any pool. Fix the badge in the app.
- ADR 0027 and CONTEXT.md still say base currency defaults to ETH. The code defaults new accounts to USDG. The docs follow the code.
- Preset names (Moderate, Long Term) come from the database.
- Success Stories and the affiliate announcement were not ported.
- Discord invite and support channel names are not linked. Add the canonical links.
- The Terms page is the in-repo text (version 2.0, September 9, 2026). Re-copy it when it changes.

## Screenshots
Every `::shot[...]` is a placeholder (about 60). Blur wallet addresses and codes. The QA captures in the bot repo under `qa-out/W1/` can seed some, after checking for test data.
