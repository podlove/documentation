---
title: Shortcode Reference
has_toc: true
---

## Web Player & Downloads

Use these in an episode post:

`[podlove-episode-downloads]`: Display downloads in a dropdown menu.  
`[podlove-episode-downloads style="buttons"]` : Display download buttons for all available formats.  
`[podlove-web-player]`: Display a web player.  
`[podlove-podcast-license]`: Display the podcast license.  
`[podlove-episode-license]`: Display the episode license (with fallback to podcast license if none is defined). 

## Episode Data
`[podlove-episode field="..."]`

Displays the fields data.

### Parameters

**field:** _(required)_ Name of the data field. Possible values:  
title, subtitle, summary, slug, duration, chapters, image, record_date, publication_date  
**format:** _(optional)_ used by `duration` field. Possible values: `full`, `HH:MM:SS`. Default: `HH:MM:SS`  
**date_format:** _(optional)_ used by `record_date` and `publication_date`. For options, see [date manual](http://php.net/manual/en/function.date.php). Defaults to WordPress settings.

```
[podlove-episode field="subtitle"]
[podlove-episode field="summary"]
[podlove-episode field="slug"]
[podlove-episode field="duration"]
[podlove-episode field="chapters"]
```

## Podcast Data

`[podlove-podcast field="..."]`

Displays the fields data.  

### Parameters

**field**: *(required)* Name of the data field. Possible values:  
title, slug, subtitle, cover_image, summary, author_name, owner_name, owner_email,
publisher_name, publisher_url, license_name, license_url, keywords, explicit,
label, episode_prefix, media_file_base_uri, uri_delimiter, episode_number_length, language

## Contributors

`[podlove-contributor-list]`

Lists all contributors of the current episode. If used on a non-episode page, it lists all existing contributors with at least one contribution to an episode. Requires "Contributors" module.

> **WARNING** `[podlove-contributors]` is *deprecated*. Please replace it with a `[podlove-contributor-list]` shortcode if you are using it.

### Parameters

- **preset:** "table", "list" or "comma separated". Default: "table"
- **title:** Optional table header title. Default: none
- **avatars:** "yes" or "no". Display avatars. Default: "yes"
- **role:** Filter lists by role. Default: "all"
- **donations:** "yes" or "no". Display donation column. Default: "no"
- **linkto:** One of "none", "publicemail", "www", "adn", "twitter", "facebook", "amazonwishlist". Links contributor name to the service if available. Default: "none"

## Templates

`[podlove-template id="Template Title"]`

Renders configured episode template.

`[podlove-template id="..."]`

### Parameters

**title:** _(required)_ Title of template to render.  
**autop:** _(optional)_ Wraps blocks of text in p tags. 'yes' or 'no'. Default: 'yes'

