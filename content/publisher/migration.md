---
title: Migration
has_toc: true
---

# Migrating your Podcast

## Who is this for?

- you already have a WordPress based podcast and want to switch to the Podlove Publisher
- explicit support for podPress and PowerPress
- should be possible to migrate any WordPress data based on "enclosures". Not sure? Just try, you'll see if the assistant can detect the episodes.

## What will be migrated?

- url redirect
- assets will be created
- feeds for the assets will be created
- some metadata: subtitle, summary, duration
- post text will be untouched except: all players will be removed
- all comments
- all metadata except enclosures (because they are stored differently now)

## Will my podcast work while I try to migrate?

Yes. The Migration assistant only *looks* at your existing data, it *does not change anything*. Even when you start the migration, all new episodes will be created *pending*, meaning you can preview them to check if everything looks as expected — while your old system still works like before. Only when you have verified that everything looks fine you hit the switch which turns off all old posts and publishes all the new episodes. Even at this point your old posts still exist — only they are not accessible by the public.

## What should you do before you migrate?

- backup
- move all media files to the same url directory

## Troubleshooting

- If you are using a caching plugin, please clear the cache

