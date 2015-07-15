---
layout: page
title: "Understanding Templates"
category: guides
date: 2014-11-09 15:44:18
redirect_from:
  - /tut/understanding-templates.html
---

Templates are user-defined, dynamic, reusable snippets of HTML. The publisher provides an API to [every piece of data][3] related to your podcast. Using templates, you can display every detail in every layout you like.

[Twig][1] is used to make templates dynamic. Printing a variable in Twig looks like this:

```jinja
{% raw %}
<strong>{{ podcast.title }}</strong>
{% endraw %}
```

You can iterate over a list of items:

```jinja
{% raw %}
<ul>
{% for episode in podcast.episodes %}
	<li>
		<a href="{{ episode.url }}">
			{{ episode.title }}
		</a> — {{ episode.subtitle }}
	</li>
{% endfor %}
</ul>
{% endraw %}
```

These are the basics. You can refer to the [Twig Documentation][2] for all available options.

## Creating Twig Templates — For Podlove Publisher Users

To create a template, go to `Podlove → Templates` and click "Add New".

The _ID_ is used to reference the template from your episodes or pages. Choose a descriptive name. The fun starts below. The _HTML Template_ is a freeform textfield. Write HTML/Twig there. All [template variables][3] and WordPress shortcodes are available. Click save when you are done.

Go to any post, page or episode and paste the template shortcode. It should look like this:

```
[podlove-template template="episode"]
```

Save and view the edited page. You should see the contents of your template. You can now go back to the template and edit until you like the results.

### Episode Templates

Templates which are used in episodes are special. In episodes, an additional variable is available: `episode`. It contains the current episode object.

For example, you could build your own download list:

```jinja
{% raw %}
<ul>
	{% for file in episode.files %}
		{% if file.asset.downloadable %}
			<li>
				<a href="{{ file.url }}">{{ file.asset.title }}</a>
			</li>
		{% endif %}
	{% endfor %}
</ul>
{% endraw %}
```

### Shortcode Options

To make template modular and reusable, you can pass options to the template shortcode. They are then available under the `option` accessor. So a template embedded using `[podlove-template template="episode" language="en"]` will have access to the variable `{{ option.language }}`.

To set option defaults. Here is an example:

```jinja
{% raw %}
{# call shortcode with, for example, size="small" parameter, or let it default to "big-logo" #}

{% set option = {
    size: 'big-logo',
    colors: 'black;;;#ffffff'
}|merge(option) %}

{{ podcast.subscribeButton({colors: option.colors, size: option.size}) }}
{% endraw %}
```

### Subtemplates

If you are looking for a way to reuse template parts or want to split up complex templates, subtemplates are the solution. They allow to embed templates in templates while keeping the scope of one local variable. All global variables are available as usual.

An example:

The template `file-link` contains the markup to render the link to a file.

```jinja
{% raw %}
<a href="{{ file.url }}">{{ file.asset.title }}</a>
{% endraw %}
```

Now this template can be used in another template. All variables from the parent template are available in the child template.

```jinja
{% raw %}
<ul>
	{% for file in episode.files %}
		{% if file.asset.downloadable %}
			<li>{{ include("file-link") }}</li>
		{% endif %}
	{% endfor %}
</ul>
{% endraw %}
```

### Macros

Twig allows you to create [macros][4] to put often used HTML idioms into reusable elements to not repeat yourself. To be able to use them in multiple templates, they are best saved in a separate template. You might call it "mymacros":

```jinja
{% raw %}
<!-- template "mymacros" -->
{% macro input(name, value, type, size) %}
    <input type="{{ type|default('text') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />
{% endmacro %}
{% endraw %}
```

To use them in another template, you need to import the macros before using them:

```jinja
{% raw %}
{% import "mymacros" as forms %}
{{ forms.input('username') }}
{% endraw %}
```

## Creating PHP Templates — For Theme Developers

You have access to the complete Podlove Publisher template system from PHP, which is ideal for creating themes.

The [template variables and API][3] is identical to the one provided by Twig. Just the syntax is different. 

```jinja
{% raw %}
<ul>
{% for episode in podcast.episodes %}
	<li>{{ episode.title }}</li>
{% endfor %}
</ul>
{% endraw %}
```

is equivalent to

```php
<ul>
<?php foreach (\Podlove\get_podcast()->episodes() as $episode): ?>
	<li><?php echo $episode->title() ?></li>
<?php endforeach ?>
</ul>
```

There are currently 4 entry points to the API: through the podcast, episode, network or Flattr. 

##### Podcast

```php
<?php
/**
 * Get Podlove podcast template object.
 * 
 * @param  int $blog_id              Optional. Blog ID. Defaults to global $blog_id.
 * @return \Podlove\Template\Podcast
 */
function \Podlove\get_podcast($blog_id = null);

// example
$podcast = \Podlove\get_podcast();
echo $podcast->title();
?>
```

##### Episode

```php
<?php
/**
 * Get Podlove episode template object.
 * 
 * @param  int|WP_Post $post          Optional. Post ID or post object. Defaults to global $post.
 * @return \Podlove\Template\Episode
 */
function \Podlove\get_episode($id = null);

// example
$episode = \Podlove\get_episode();
echo $episode->player(['context' => 'episode']);
?>
```

##### Network

```php
<?php
/**
 * Get Podlove network template object.
 * 
 * Only available in WordPress Multisite environments.
 * 
 * @return \Podlove\Modules\Networks\Template\Network
 */
function \Podlove\get_network();

// example
$network_lists = \Podlove\get_network()->lists();
?>
```

##### Flattr

```php
<?php
/**
 * Get Podlove Flattr template object.
 * 
 * Requires "Flattr" module.
 * 
 * @return \Podlove\Modules\Flattr\Template\Flattr
 */
function \Podlove\get_flattr();

// example
echo \Podlove\get_flattr([
	'url' => 'http://wordpress.org/extend/plugins/podlove-podcasting-plugin-for-wordpress/', 
	'user' => 'ericteubert'
]);
?>
```

#### Hint: Short syntax for PHP 5.6+

If you develop a theme for PHP 5.6+ environments, you may want to use function importing for a nicer syntax, like that:

```php
<?php
// once at the beginning of each file, ONLY PHP 5.6+
use function \Podlove\get_episode; 
use function \Podlove\get_podcast; 

echo get_podcast()->title();
?>
```

[1]: http://twig.sensiolabs.org/
[2]: http://twig.sensiolabs.org/doc/templates.html
[3]: /publisher/template-reference/
[4]: http://twig.sensiolabs.org/doc/tags/macro.html