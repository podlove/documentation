---
title: Creating a Podcast Archive Page
---

Would you like to have a page listing all your podcast episodes like [newz-of-the-world.com/archive](http://newz-of-the-world.com/archive/)? This is a planned feature for the Publisher but until it actually ships, you can still create such a page with the help of another plugin.

## Steps

1. Install the [Archivist plugin](http://wordpress.org/extend/plugins/archivist-custom-archive-templates/).
2. Go to `Settings > Archivist` and add a template named "podcast" (or whatever you like).  
   Copy & paste the template below or build your own.
3. Create a WordPress page called "Archive" and paste the following shortcode: `[archivist template="podcast" query="post_type=podcast"]`. Done!

## Example Template

**Before**

```html
<table>
	<thead>
		<th></th>
		<th>Date</th>
		<th>Title</th>
		<th>Duration</th>
	</thead>
<tbody>
```

**Element**

```html
<tr class="podcast_archive_element">
	<td class="thumbnail">
		<img src='[podlove-episode field="image"]'/>
	</td>
	<td class="date">
		<span class="release_date">%DATE|d.m.Y%</span>
	</td>
	<td class="title">
		<a href="%PERMALINK%"><strong>%TITLE%</strong></a>
		<br>
		[podlove-episode field="subtitle"]
	</td>
	<td class="duration">
		[podlove-episode field="duration"]
	</td>
</tr>
```

**After**

```html
	</tbody>
</table>
```

**Custom CSS**

```css
.archivist_wrapper .permalink {
	font-weight: bold;
}

.archivist_wrapper td {
	vertical-align: top;
}

.archivist_wrapper img {
	padding: 5px;
	height: 64px;
	width: 64px;
}

.podcast_archive_element .thumbnail {
    width: 64px;
    padding: 5px !important;
}
```