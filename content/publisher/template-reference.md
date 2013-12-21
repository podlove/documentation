---
title: "Template Reference"
has_toc: false
---

<% templateRefClasses.each do |item| %>
####<%= item['class']['classname'] %>

<% filter :typogruby do
	filter :kramdown do
		filter :syntax_highlight do %><%= item['class']['description'] %><% end
	end
end %>

<table>
	<% item['methods'].each do |method| %>
		<tr>
			<td valign="top">
				<code>
					<%= item['class']['templatetag'] %>.<%= method['methodname'] %>
				</code>
			</td>
			<td>
				<strong>
					<%= method['title'] %>
				</strong>
				<% filter :typogruby do
					filter :kramdown do
						filter :syntax_highlight do %><%= method['description'] %><% end
					end
				end %>
			</td>
		</tr>
	<% end %>
</table> 

<% end %>

