---
title: Migration
has_toc: true
---

# Migrating your Podcast

This page is for you if you are currently using WordPress to publish a podcast — and looking for a way to move all your data into the Podlove Publisher. There is a module to help you as much as possible.

## Activating the Assistant Module

If it's not already active, enable the module by going to `Podlove > Modules` and activating the "Migration" checkbox.

<a href="/assets/images/migration/activate.jpg" class="th radius">
	<img src="/assets/images/migration/activate.jpg" />
</a>

## The Migration

Right now, you probably have both podcast episodes and blog posts. The episodes will be determined and displayed to you, so you can select which ones are real episodes you like to migrate. They will appear as **Episodes** below **Posts** in the WordPress sidebar menu.

All post data — title, content, comments, post meta, ... — will just be copied. However, episode critical metadata will be extracted and migrated into the Publisher format for you, if available: subtitle, summary, duration etc. To further ease the migration, you may choose to automatically remove player shortcodes from the current post contents.

**Feeds will be created automatically**. But careful: it _might_ happen that the new feeds have exactly the same URLs as your previous ones. You may have to deactivate your previous podcasting plugin to see the new Podlove Publisher feeds.

It's possible that you can't keep your episode URLs. However, **redirects are created automatically** redirecting your current URLs to the new episode URLs.

Good Luck!

## Will my podcast work while I try to migrate?

Yes. The Migration assistant only *looks* at your existing data, it *does not change anything*. Even when you start the migration, all new episodes will be created *pending*, meaning you can preview them to check if everything looks as expected — while your old system still works like before. Only when you have verified that everything looks fine you hit the switch which turns off all old posts and publishes all the new episodes. Even at this point your old posts still exist — only they are not accessible by the public.
