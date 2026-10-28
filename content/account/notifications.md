---
title: Notifications
description: Get trade alerts and PnL images on Discord, and choose what you hear about.
---

Valhalla sends a Discord direct message when a trade opens or closes, with a PnL image on closes. Robinhood closes also produce a shareable PnL card.

## Connect Discord alerts

If you signed in with Google or email, link your Discord first.

1. Open **Profile** (called **Account** in the left rail) and find the **Alerts** card.
2. Authorize the bot so it can message you.
3. Copy the code shown. It is valid for 10 minutes.
4. Send the bot a direct message: `!connect_alerts <code>`.
5. Return to the Alerts card. It confirms the connection.

If you signed in with Discord, alerts go to that Discord by default.

::shot[Alerts card | /dashboard/profile Alerts card showing the code and the command | The code and the connected status (blur the code) | profile-alerts.png]
::shot[Trade alert DM | A Discord DM showing a closed position with the PnL image | The PnL image and fee line | dm-pnl-image.png]

## Choose what you hear about

Open **Meteora LP > Settings > Notifications**.

- **Daily balance tracking:** a balance message every 2 hours.
- Rebalancing warnings, low balance alerts and daily PnL leaderboard posts arrive on Discord when they apply.

::shot[Notifications section | /dashboard/meteora/settings scrolled to Notifications | The toggles | settings-notifications.png]

If DMs stop arriving, check that Discord still lets the bot message you, then reconnect from the Alerts card.
