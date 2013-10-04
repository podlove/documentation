---
title: Shortcodes
has_toc: true
---

## Web Player & Downloads

Use these in an episode post:

`[podlove-episode-downloads]`: Display downloads in a dropdown menu.  
`[podlove-episode-downloads style="buttons"]` : Display download buttons for all available formats.  
`[podlove-web-player]`: Display a web player.

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

`[podlove-contributors]`

Lists all contributors of the current episode. If used on a non-episode page, it lists all existing contributors with at least one contribution to an episode. Requires "Contributors" module.

### Parameters

For lists:

- **style**: Choose between predefined styles. "table" provides a detailed view of your contributors. "list" is a compact, comma separated list of names. Default: "table"
- **avatars**: One of "yes", "no". Display avatars in list views or not. Default: "yes"

For single contributor avatars:

- **id**: Specify a contributor id to display a specific contributor avatar.
- **avatarsize**: Specify avatar size in pixel for single contributors. Default: 50
- **align**: One of "left", "right", "none". Align contributor. Default: none
- **caption**: Optional caption for contributor avatars.
- **role**: Filter lists by role. Default: "all"

For both lists and single views:

- **linkto**: Links contributor name to the service if available. One of "none", "publicemail", "www", "adn", "twitter", "facebook", "amazonwishlist".  Default: "none"

## Templates

`[podlove-template id="Template Title"]`

Renders configured episode template.

`[podlove-template id="..."]`

### Parameters

**title:** _(required)_ Title of template to render.  
**autop:** _(optional)_ Wraps blocks of text in p tags. 'yes' or 'no'. Default: 'yes'

