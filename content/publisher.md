---
title: Podlove Publisher
---

Hi. Here are some guides regarding the Podlove Publisher plugin for WordPress.

- [Download the plugin](http://wordpress.org/extend/plugins/podlove-podcasting-plugin-for-wordpress/)
- visit [podlove.org](http://podlove.org/) for updates on everything happening in the Podlove universe

## Guides

<ul>
<% @item.children.each do |item| %>
	<li>
		<a href="<%= item.path %>"><%= item[:title] %></a>
	</li>
<% end %>
</ul>