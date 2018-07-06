---
layout: page
title: "Podcast Network"
redirect_from:
  - /tutorial/podcast-network/
  - /guides/podcast-network/
---

There comes a time in the life of every podcaster when she has to admit that one podcast is not enough. A separate channel would be nice, right? There are multiple ways to achieve podcast networks using Podlove Publisher, serving different requirements.

If you are looking for totally separate podcast channels with their own sites, read _Option 1: WordPress Network_. If all you episodes are related but you would like to offer separate feeds, _Option 2: Shows Module_ might be for you. If shows seem too heavyweight, read _Option 3: Category based Feeds_.

## Option 1: WordPress Network

**Advantages**

- manage multiple podcasts in a WordPress Network
- custom themes, domains etc. for each podcast

**How To**

1. Follow the instructions on [WordPress: Create A Network][1] to turn your WordPress setup into a network.
2. _Network Activate_ the Podlove Publisher at `/wp-admin/network/plugins.php` if you want to host a podcast on _every_ site in the network. Otherwise, activate the Podlove Publisher separately for each site.

Optional: Assign custom domains to network sites using the [Domain Mapping Plugin][4].

**Further Reading**

- [WordPress: Create A Network][1]
- [WordPress: Multisite Network Administration][2]

## Option 2: Shows Module

Use shows to offer feeds to subtopics of your podcast. If your shows are unrelated, a WordPress Network is better suited than the shows module.

**Advantages**

- keep all episodes in a single master-feed
- offer separate feeds per show with the option to override feed meta: title, slug, subtitle, summary, image and language

**How To**

1. Activate the _Shows_ Publisher module. Go to `Publisher -> Modules` and find the _Metadata_ section.
2. Create one or multiple shows at `Publisher -> Shows`.
3. Announce show feeds on your website. You can find them at `Publisher -> Shows`.

**WordPress Templates**

Internally shows are WordPress taxonomies. That means you also get show archives for your website under `/show/<show-slug>`. When creating themes, the following template hierarchy applies:

```
taxonomy-shows-<show-slug>.php
taxonomy-shows.php
taxonomy.php
archive.php
index.php
```


## Option 3: Category based Feeds

**Advantages**

- does not require a WordPress Network
- separate feeds by category but keep one big feed containing everything

**How To**

1. Activate the _Categories_ Publisher module. Go to `Publisher -> Modules` and find the _Metadata_ section.
2. Assign categories to your episodes using the episode forms. 
3. Announce the category feeds on your website. For example: You have the feed `example.com/feed/mp3` and created the categories "weather" and "plants". Then the feeds `example.com/category/weather/feed/mp3` and `example.com/category/plants/feed/mp3` are available now.

Good to know: There are also feeds for arbitrary search terms. `example.com/search/fnord/feed/mp3` is a dynamic feed for episodes mentioning "Fnord".

**Further Reading**

- [WordPress: Feeds][3]

[1]: http://codex.wordpress.org/Create_A_Network
[2]: http://codex.wordpress.org/Multisite_Network_Administration
[3]: http://codex.wordpress.org/WordPress_Feeds
[4]: https://wordpress.org/plugins/wordpress-mu-domain-mapping/
