---
layout: page
title: Web Player Themes
---

The CSS files are available both in minified or extended version<br>
For example:<br>
`pwp-dark.css`<br>
`pwp-dark.min.css`

CSS theme files can be found here:<br>
`dist/css/pwp-<name-of-theme>.css`

## Pick one of the color presets

See all previews of <a href="/guides/previews-of-themes/">available Themes</a>.

For example: Theme Silver Blaze

<section class="mb45">
<figure class="mb">
  <img src="/assets/webplayer/examples/04-silver-blaze.png" alt="Theme Silver Blaze" class="fullwidth-img shadow mb">
  <figcaption class="mb"><code>pwp-silver-blaze.min.css</code></figcaption>
</figure>

<section class="mb45">
## Create Your Own Theme

After modifying colors, check resulting color contrasts, they might not fully fit accessibility standards.

Path to theme folder:

  `/src/sass/themes/`

Open any `scss` file and modify an existing theme by playing with colors and changing their values:<br>
For example `_light.scss`

{% highlight html %}
//
// Light Theme
// --------------------------------------------------

$theme: (
    player-base:     #fff,
    player-contrast: #000,
    meta-base:       #fff,
    meta-contrast:   #535353,
    accent-base:     #42478a,
    accent-contrast: #fff
);
{% endhighlight %}

After modifying colors, check resulting color contrasts, they might not fully meet accessibility standards.<br><br>


<div class="alert alert-danger" role="alert">Advanced Mode:<br>
If you know what you're doing, you could also modify the color functions.<br>

Open file:<br>

  <code>/src/sass/_colors.scss</code>

</div>

</section>
