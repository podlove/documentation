---
title: Understanding Templates
has_toc: true
---

Templates are user-defined, dynamic, reusable snippets of HTML. The publisher provides an API to [every piece of data][3] related to your podcast. Using templates, you can display every detail in every layout you like.

[Twig][1] is used to make templates dynamic. Printing a variable in Twig looks like this:

```html
<strong>{{ podcast.title }}</strong>
```

You can iterate over a list of items:

```html
<ul>
{% for episode in podcast.episodes %}
	<li>
		<a href="{{ episode.url }}">
			{{ episode.title }}
		</a> — {{ episode.subtitle }}
	</li>
{% endfor %}
</ul>
```

These are the basics. You can refer to the [Twig Documentation][2] for all available options.

## Creation & Usage

To create a template, go to `Podlove → Templates` and click "Add New".

The _ID_ is used to reference the template from your episodes or pages. Choose a descriptive name. The fun starts below. The _HTML Template_ is a freeform textfield. Write HTML/Twig there. All [template variables][3] and WordPress shortcodes are available. Click save when you are done.

Go to any post, page or episode and paste the template shortcode. It should look like this:

```
[podlove-template id="episode"]
```

Save and view the edited page. You should see the contents of your template. You can now go back to the template and edit until you like the results.

## Episode Templates

Templates which are used in episodes are special. In episodes, an additional variable is available: `episode`. It contains the current episode object.

For example, you could build your own download list:

```html
<ul>
	{% for file in episode.files %}
		{% if file.asset.downloadable %}
			<li>
				<a href="{{ file.url }}">{{ file.asset.title }}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>
```

## Subtemplates

If you are looking for a way to reuse template parts or want to split up complex templates, subtemplates are the solution. They allow to embed templates in templates while keeping the scope of one local variable. All global variables are available as usual.

An example:

The template `file-link` contains the markup to render the link to a file.

```html
<a href="{{ file.url }}">{{ file.asset.title }}</a>
```

Now this template can be used in another template:

```html
<ul>
	{% for file in episode.files %}
		{% if file.asset.downloadable %}
			<li>{{ file|template("file-link") }}</li>
		{% endif %}
	{% endfor %}
</ul>
```



[1]: http://twig.sensiolabs.org/
[2]: http://twig.sensiolabs.org/doc/templates.html
[3]: /publisher/template-reference/