---
layout: page
title: "DSGVO / GDPR"
---

_This page is still a draft and subject to changes._

## What User Data is used or accessible to other services?

If the **Bitlove Module** is active, requests to `bitlove.org` are made.

If the **Flattr Module** is active, requests to `flattr.com` are made.

Both **Podlove Subscribe Button** and **Podlove Web Player** may be served via [keycdn.com](https://www.keycdn.com) ([keycdn GDPR statement](https://www.keycdn.com/gdpr)). You can choose to not use our CDN to serve these applications in the module settings. 

If **Tracking/Analytics** is enabled, user IP addresses are used to determine their geographic location. IP addresses are not saved, but anonymized and then hashed together with the User Agent to generate a `request id`, which is saved. The User Agent is saved as well but cannot be connected to the user since the user IP is never saved.

This information aims to inform you, the user of Podlove Publisher. Feel free to copy the following text into your sites disclaimer to inform your users. Remove the sections that don't apply to you if you're not using some module. 

This is not legal advice. 

If you have improvement suggestions for these texts, please let us know in the forums: https://community.podlove.org/.

### English

This website uses http://bitlove.org to provide downloads via bittorrent. 

This website uses https://flattr.com and displays buttons served by Flattr.

Both **Podlove Subscribe Button** and **Podlove Web Player** are served by [keycdn.com](https://www.keycdn.com) ([keycdn GDPR statement](https://www.keycdn.com/gdpr)).

Podlove Publisher tracks download statistics. IP adresses are used to determine an estimated geographic location (city or state level). IP adresses are anonymized and then hashed for statistical analysis. The User Agent is stored as well.

### Deutsch

Diese Website verwendet http://bitlove.org um Downloads via Bittorrent anzubieten.

Diese Website verwendet http://flattr.com und zeigt Buttons an, die von Flattr ausgeliefert werden.

Sowohl **Podlove Subscribe Button** als auch **Podlove Web Player** werden von [keycdn.com](https://www.keycdn.com) ([keycdn GDPR Stellungnahme](https://www.keycdn.com/gdpr)) ausgeliefert.

Podlove Publisher erfasst Download Statistiken. IP Adressen werden benutzt, um eine geschätzte geographische Verortung durchzuführen (Stadt / Land). IP Adressen werden für statistische Auswertungen anonymisiert und gehashed. Der Browser "User Agent" wird ebenso gespeichert.

## IP Addresses

If you are using Podlove Publisher Tracking/Analytics, an update to version 2.7.5 or higher is recommended.

Tracking uses a `request_id` to be able to determine when two requests came from the same user and should be counted as one unique access. This request id used to be a hash of the original IP address and the user agent. This approach however is vulnerable to a brute force attack to get the IP address back from the hash. Here's what we are doing about that:

First, we anonymize the IP before generating the hash. So instead of using `171.23.11.209`, we use `171.23.11.0`.

Second, you need to deal with the existing `request_id`s. There is a new "DSGVO" section under "Tools" with a button that will rehash all existing `request_id`s with a randomly generated salt. That way it will become unfeasible to determine the original IP address but your analytics will stay the same.

In case you have a lot of downloads (let's say much more than 50.000), you may want to do this via command line because that will be _much_ quicker than via the tools section. You need [wp-cli](https://wp-cli.org/), then simply call `wp eval 'podlove_rehash_tracking_request_ids();'`. On a multisite, pass the blog id as a parameter: `wp eval 'podlove_rehash_tracking_request_ids(42);'`.
