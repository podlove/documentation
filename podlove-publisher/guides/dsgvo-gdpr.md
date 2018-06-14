---
layout: page
title: "DSGVO / GDPR"
---

_Last Modified: 2018-06-14_

## Information for Podcasters / Users of Podlove Publisher

### What User Data is used or accessible to other services?

If the **Bitlove Module** is active, requests to `bitlove.org` are made.

If the **Flattr Module** is active, requests to `flattr.com` are made.

Both **Podlove Subscribe Button** and **Podlove Web Player** may be served via [keycdn.com](https://www.keycdn.com) ([keycdn GDPR statement](https://www.keycdn.com/gdpr)). You can choose to not use our CDN to serve these applications in the module settings. 

If **Tracking/Analytics** is enabled, user IP addresses are used to determine their geographic location. IP addresses are not saved, but anonymized and then hashed together with the User Agent to generate a `request id`, which is saved. The User Agent is saved as well but cannot be connected to the user since the user IP is never saved.

This information aims to inform you, the user of Podlove Publisher.

### IP Addresses

If you are using Podlove Publisher Tracking/Analytics, an update to version 2.7.5 or higher is recommended.

Tracking uses a `request_id` to be able to determine when two requests came from the same user and should be counted as one unique access. This `request_id` is a has made of the request IP address and user agent. Unfortunately it is not possible to anonymize IP addresses without skewing download statistics. However, since the request IDs are only used for grouping in the same hour, they can be anonymized after a day without losing tracking accuracy. Once a day, all `request_id`s older than 24 hours are salted in a way that makes it impossible to restore the original IP address.

Second, you need to deal with the existing `request_id`s. There is a new "DSGVO" section under "Tools" with a button that will rehash all existing `request_id`s with a randomly generated salt. That way it will become unfeasible to determine the original IP address but your analytics will stay the same.

In case you have a lot of downloads (let's say much more than 50.000), you may want to do this via command line because that will be _much_ quicker than via the tools section. You need [wp-cli](https://wp-cli.org/), then simply call `wp eval 'podlove_rehash_tracking_request_ids();'`. On a multisite, pass the blog id as a parameter: `wp eval 'podlove_rehash_tracking_request_ids(42);'`.

## Text Snippets for your Privacy Page

Feel free to copy the following text into your sites disclaimer to inform your users. Remove the sections that don't apply to you if you're not using some module. 

This is not legal advice. 

If you have improvement suggestions for these texts, please let us know in the forums: [community.podlove.org](https://community.podlove.org/).

### English

**Bitlove**

This website uses [bitlove.org](http://bitlove.org) to provide downloads via bittorrent. 

When you access pages of this website that contain bitlove functionality, your browser connects directly to Bitlove's servers.

**Flattr**

Within this online offer buttons of the micropayment service "Flattr" are included, which are provided by Flattr Network Ltd. mit Sitz in 2nd Floor, White bear yard 114A, Clerkenwell Road, London, Middlesex, England, EC1R 5DF, United Kingdom. When you access pages of this website that contain these buttons, your browser connects directly to Flattr's servers.

If users have created an account with Flattr, with which they are logged in at the same time, Flattr receives the information that users have visited the respective page of this online offer. If users have a Flattr account, are logged in and interact with the button, information about it will be transmitted to Flattr and stored there for billing purposes according to local guidelines. Even if users are not logged in, usage data may be collected and stored. To see exactly how your data is processed when you click the Flattr button, users can visit [flattr.com/privacy](https://flattr.com/privacy).

**Podlove**

Both **Podlove Subscribe Button** and **Podlove Web Player** are served by [keycdn.com](https://www.keycdn.com) ([keycdn GDPR statement](https://www.keycdn.com/gdpr)).

Podlove Publisher tracks download statistics. IP adresses are used to determine an estimated geographic location (city or state level). 

IP addresses are stored temporarily (up to 48 hours) as part of a request id. This is necessary because the podcast owner needs to know how often episodes are downloaded to prove the viability of her/his endeavours.

To determine a realistic download number, the system must be able to recognise repeated access to the same file by the same user. The only reliable way to achieve this is by considering the IP address in combination with the User Agent. Using an anonymised IP address is not possible because it would lead to wrong results. An access to the same file by the same user on different days can be considered separate downloads, therefore it is necessary to store IPs for only up to 48 hours.

After 48 hours request ids are _salted_ in a way that makes it impossible to restore the original IP address.

The User Agent is stored as well.

### Deutsch

**Bitlove**

Diese Website verwendet [bitlove.org](http://bitlove.org) um Downloads via Bittorrent anzubieten.

Wenn Sie Seiten dieses Internetangebots, die Bitlove-Funktionalität enthalten, aufrufen, wird von Ihrem Browser eine direkte Verbindung zu Servern von Bitlove hergestellt.

**Flattr**

Innerhalb dieses Onlineangebotes sind Schaltflächen des Micropayment-Dienstes „Flattr“ eingebunden, der von der Firma Flattr Network Ltd. mit Sitz in 2nd Floor, White bear yard 114A, Clerkenwell Road, London, Middlesex, England, EC1R 5DF, Großbritannien, betrieben wird. Wenn Sie Seiten dieses Internetangebots, die diese Schaltflächen enthalten, aufrufen, wird von Ihrem Browser eine direkte Verbindung zu Servern von Flattr hergestellt.

Sofern Nutzer bei Flattr ein Konto angelegt haben, mit dem sie gleichzeitig eingeloggt sind, erhält Flattr die Information, dass Nutzer die jeweilige Seite dieses Onlineangebots besucht haben. Sofern Nutzer ein Flattr-Konto besitzen, eingeloggt sind und mit der Schaltfläche interagieren, werden Informationen darüber an Flattr übermittelt und nach den dort geltenden Richtlinien dort zu Abrechnungszwecken gespeichert. Auch wenn Nutzer nicht eingeloggt sind, können ggf. Nutzungsdaten erhoben und auch gespeichert werden. Wie Ihre Daten genau verarbeitet werden, wenn Sie die Flattr-Schaltfläche anklicken, erfahren Nutzer unter [flattr.com/privacy](https://flattr.com/privacy).

**Podlove**

Sowohl **Podlove Subscribe Button** als auch **Podlove Web Player** werden von [keycdn.com](https://www.keycdn.com) ([keycdn GDPR Stellungnahme](https://www.keycdn.com/gdpr)) ausgeliefert.

Podlove Publisher erfasst Download Statistiken. IP Adressen werden benutzt, um eine geschätzte geographische Verortung durchzuführen (Stadt / Land). 

IP Adressen werden kurzzeitig (bis zu 48 Stunden) als Teil einer "request id" gespeichert. Das ist notwendig, damit der/die Podcast Betreiber/in die Tragfähigkeit seiner/ihrer Bemühungen nachweisen kann.

Um realistische Download Zahlen zu ermitteln, muss das System erneuten Zugriff auf die gleiche Datei vom selben Nutzer erkennen können. Der einzige verlässliche Weg dies zu erreichen ist, die IP zusammen mit dem User Agent zu betrachten. Eine anonymisierte IP zu benutzen ist nicht möglich, da dies zu falschen Ergebnissen führen würde. Ein Zugriff auf die gleiche Datei vom selben Nutzer an verschiedenen Tagen kann als separater Download betrachtet werden. Darum genügt es, IPs lediglich für bis zu 48 Stunden vorzuhalten.

Nach 48 Stunden werden "request ids" "salted", was es unmöglich macht, die ursprüngliche darin enthaltene IP wiederherzustellen.

Der Browser "User Agent" wird ebenso gespeichert.
