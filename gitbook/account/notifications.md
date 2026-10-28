---
description: Get trade alerts and PnL images on Discord, and choose what you hear about.
---

# Notifications

Valhalla sends a Discord direct message when a trade opens or closes, with a PnL image on closes. Robinhood closes also produce a shareable PnL card.

## Connect Discord alerts

If you signed in with Google or email, link your Discord first.

1. Open **Profile** (called **Account** in the left rail) and find the **Alerts** card.
2. Authorize the bot so it can message you.
3. Copy the code shown. It is valid for 10 minutes.
4. Send the bot a direct message: `!connect_alerts <code>`.
5. Return to the Alerts card. It confirms the connection.

If you signed in with Discord, alerts go to that Discord by default.

{% hint style="info" %}
**Screenshot needed: Alerts card**

Show: /dashboard/profile Alerts card showing the code and the command

Highlight: The code and the connected status (blur the code)

Save as: `profile-alerts.png` and insert it here.
{% endhint %}
{% hint style="info" %}
**Screenshot needed: Trade alert DM**

Show: A Discord DM showing a closed position with the PnL image

Highlight: The PnL image and fee line

Save as: `dm-pnl-image.png` and insert it here.
{% endhint %}
## Choose what you hear about

Open **Meteora LP > Settings > Notifications**.

- **Daily balance tracking:** a balance message every 2 hours.
- Rebalancing warnings, low balance alerts and daily PnL leaderboard posts arrive on Discord when they apply.

{% hint style="info" %}
**Screenshot needed: Notifications section**

Show: /dashboard/meteora/settings scrolled to Notifications

Highlight: The toggles

Save as: `settings-notifications.png` and insert it here.
{% endhint %}
If DMs stop arriving, check that Discord still lets the bot message you, then reconnect from the Alerts card.
