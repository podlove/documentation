---
layout: page
title: Getting Started
script: "/js/getting-started.js"
---

## Basics

### Get the Latest Player Release

Having [bower](http://bower.io/) installed on your system, run
{% highlight sh %}
bower install podlove-web-player#3
{% endhighlight %}
to get the player package.

You will find a lot of examples in `{{site.playerPath}}examples`.
Some of them are explained here in greater detail.

## Integrate the web player into a website

### Example directory structure

{% highlight sh %}

├── page.html
├── player.html
├── audio.m4a
└── coverimage.png

{% endhighlight %}

As you can see there are 2 HTML pages. The **page.html** contains your content
and placeholders that the **podlove-web-moderator** will replace with iframes
containing the **player.html**.
You could include the player directly into your page but would miss out on
later features like embedding your player on third party pages.
As of now it is highly recommended to use this two page setup to circumvent
certain problems like overriding CSS rules.

### Create the <code>page.html</code> file

This file will be the host for the iframe of the embedded player (player.html).

Add an element where the player should appear.
{% highlight html %}
<audio data-podlove-web-player-source="player.html">
  <source src="audio.m4a" type="audio/m4a">
</audio>
{% endhighlight %}
You can use any HTML element but *the audio tag also serves as the non-js fallback*.

Add the moderator script to the head of your html file
{% highlight html %}
<script src="/bower_components/podlove-web-player/dist/js/moderator.min.js"></script>
{% endhighlight %}

Now, tell the moderator which elements to replace with embedded players.
{% highlight html %}
<script>$('audio').podlovewebplayer();</script>
{% endhighlight %}

### Create the <code>player.html</code> file

This file will show the player itself.

Choose a theme css-file and place it in the head of your document.
[Further information about 'Themes'](/podlove-web-player/guides/themes).

{% highlight html %}
<link href="/bower_components/podlove-web-player/dist/css/pwp-dark-green.css" rel="stylesheet" media="screen" type="text/css" />
{% endhighlight %}

Create the audio element that will extended.
{% highlight html %}
<audio>
  <source src="episode1.m4a" type="audio/m4a">
</audio>
{% endhighlight %}

Add following scripts at the bottom of your document:
{% highlight html %}
<script src="/bower_components/podlove-web-player/dist/js/vendor/jquery.min.js"></script>
<script src="/bower_components/podlove-web-player/dist/js/podlove-web-player.js"></script>
{% endhighlight %}

Call the player script with the configuration object as its only parameter:
{% highlight js %}
$('audio').podlovewebplayer({
  poster: 'coverimage.png',
  title: 'My Very First Episode',
  subtitle: 'This is the episode\'s subtitle one-liner',
  show: {
    title: 'My Very First Podcast',
    subtitle: 'Short one-liner',
    summary: 'Paragraphs of text about your show and its topic. *yada yada*'
  },
  chapters: [
    {
      start: '00:00:00.000',
      title: 'First chapter'
    },
    {
      start: '00:00:01.234',
      title: 'Last chapter'
    }
  ],
  downloads: [
    {
      assetTitle: 'My Very First Episode (mp4)',
      size: 12345,
      url: 'audio.m4a'
    }
  ]
});
{% endhighlight %}

### Result

You can view the result for both the page and the player itself below.

* [page.html](../page.html) [(view source)](view-source:../page.html)
* [player.html](../player.html) [(view source)](view-source:../player.html)
