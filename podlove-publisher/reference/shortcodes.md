---
layout: page
title: "Shortcodes"
redirect_from:
  - /publisher/shortcodes/
  - /ref/shortcodes.html
  - /reference/shortcodes/
---

#### Web Player

- `[podlove-episode-web-player]` displays the Podlove Web Player.

#### Feeds

- `[podlove-feed-list]` lists all discoverable feeds for easy subscription.

#### Episode Archive

- `[podlove-episode-list]` lists all episodes including their episode image, publication date, title, subtitle and duration chronologically.

#### Downloads

Use these in an episode:

- `[podlove-episode-downloads]` displays downloads in a dropdown menu.  
- `[podlove-episode-downloads style="buttons"]` displays download buttons for all available formats. 

#### Subscribe Button

- `[podlove-podcast-subscribe-button]` displays a universal subscribe button for your Podcast.

##### Parameters

- **format:** Choose a button format, options are 'rectangle', 'square' and 'cover' (**Note**: 'cover' has a max size of 300px) Default: 'cover'
- **style:** Choose a button style, options are 'filled', 'outline' and 'frameless'. Default: 'filled'
- **size:** Size and style of the button ('small', 'medium', 'big'). All of the sizes can be combined with 'auto' to adapt the button width to the available space like this: 'big auto'. Default: 'big'
- **color:** Define the color of the button. Allowed are all notations for colors that CSS can understand (keyword, rgb-hex, rgb, rgba, hsl, hsla). Please Note: It is not possible to style multiple buttons/popups on the same page differently.
- **language:** 'de', 'en', 'eo', 'fi', 'fr', 'nl', 'zh' and 'ja'. Defaults to podcast language setting.
If you set the buttonid to "example123", your element must have the class "podlove-subscribe-button-example123".
- **hide:** Set to`{% raw %}true{% endraw %}` if you want to hide the default button element. Useful if you provide your own button via the`{% raw %}buttonid{% endraw %}` setting.
- **buttonid:** Use this if you want to trigger the button by clicking an element controlled by you. 
- **show:** If you are using the "Shows" module, pass the show slug to create a subscribe button for that show.

##### Examples

```
[podlove-podcast-subscribe-button]              // big button with logo
[podlove-podcast-subscribe-button size="small"] // small button without logo
```

#### Contributors

- `[podlove-episode-contributor-list]` lists all contributors of the current episode.

##### Parameters

- **preset:** "table", "list" or "comma separated". Default: "table"
- **title:** Optional table header title. Default: none
- **avatars:** "yes" or "no". Display avatars. Default: "yes"
- **role:** Filter lists by role. Default: "all"
- **roles:** One of "yes", "no". Display role title. Default: "no"
- **group:** Filter lists by group. Default: "all"
- **groups:** One of "yes", "no". Display group title. Default: "no" 
- **groupby:** Set to "group" to get separated contributor groups. Each group has its name as heading. Only works with "table" preset.
- **donations** One of "yes", "no". Display donation column. Default: "yes"
- **flattr:** "yes" or "no". Display Flattr column. Default: "no"

##### Examples

```
[podlove-episode-contributor-list flattr="yes"] // enables flattr column
[podlove-episode-contributor-list avatars="no" role="guest"] // show only guests, but without avatar
```

`[podlove-podcast-contributor-list]`

Lists all contributors configured in `Podlove > Podcast Settings > Contributors`.

`[podlove-global-contributor-list]`

Lists all podcast contributors and shows related episodes.

#### Templates

- `[podlove-template template="Template Title"]` renders a template.

All custom shortcode parameters will be accessible in the template. Example: `[podlove-template template="..." customvariable="foo"]`. Please read the [Understanding Templates](/guides/understanding-templates/) for more details.

##### Parameters

**title:** _(required)_ Title of template to render.  
**autop:** _(optional)_ Wraps blocks of text in p tags. 'yes' or 'no'. Default: 'yes'

#### Flattr

Requires "Flattr" module.

- `[podlove-podcast-flattr-button]` shows Flattr button for the podcast.
- `[podlove-episode-flattr-button]` shows Flattr button for the current episode.

##### Parameters

- **style:** Button style."large", "compact" or "static". Default: "compact".
