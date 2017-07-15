---
layout: page
title: v2.0 Documentation
---


## Plugin Info

<p>Contributors:
  <a href="https://github.com/gerritvanaaken">Gerrit van Aaken</a>,
  <a href="https://github.com/SimonWaldherr">Simon Waldherr</a>,
  <a href="https://github.com/eteubert">Eric Teubert</a>,
  <a href="https://github.com/Kambfhase">Frank Hase</a><br/>
  Tags: podcasting, podlove, html5audio, audio, video, podcast, player<br/>
  Requires at least: 3.4.0<br/>
  Tested up to: 3.5.1<br/>
  Stable tag: 2.0.4<br/>
  License: BSD 2-Clause License<br/>
  License URI: <a href="http://opensource.org/licenses/BSD-2-Clause">http://opensource.org/licenses/BSD-2-Clause</a>
</p>
<p>HTML5 based audio/video player, focused on podcasts and similar media blogs. It supports chapters, deeplinks, captions and even more.
</p>

<p><strong>The Podlove Web Player can be used as player for
    <a href="http://podlove.org/podlove-podcast-publisher/">ppp</a>
    as well as stand alone player.</strong>
</p>

### Credits

The Podlove Web Player is built upon the MediaElement.js library. Check out
[mediaElementjs.com](http://mediaelementjs.com/) for more information on that.

Most of the icons are from [Font-Awesome](https://github.com/fortawesome/Font-Awesome/#).
The plugin architecture was originally forked from the [Video.js plugin](http://wordpress.org/extend/plugins/videojs-html5-video-player-for-wordpress/, but heavily adopted since then.

### Installation

<ol>
  <li>Upload the
    <code>podlove-web-player</code>
    folder to the
    <code>/wp-content/plugins/</code>
    directory</li>
  <li>Activate the plugin through the
    <code>Plugins</code>
    menu in WordPress</li>
  <li>Use the
    <code>[podlovevideo]</code>
    or
    <code>[podloveaudio]</code>
    shortcode in your post or page with the options on the front page.</li>
  <li>Visit the options page</li>
</ol>

### Frequently Asked Questions
#### How can I configure the player’s appearance?

Just use the shortcode options that are described on this FAQ page!

##### src
<p>This location of any audio or video file, local ore remote:</p>
<pre><code>[podloveaudio src="http://mysite.com/mymedia.mp3"]
  </code>
</pre>

##### type
<p>The media type of the resource:</p>
<pre><code>[podlovevideo src="http://mysite.com/mymedia.m4v" type="video/mp4"]
  </code>
</pre>

##### mp4 / webm / ogg
The location of a file with a specific video type:
<pre><code>[podlovevideo mp4="mymedia.mp4" webm="mymedia.webm" ogg="mymedia.ogv"]
  </code>
</pre>

##### mp4 / mp3 / ogg / opus
<pre><code>[podloveaudio mp4="mymedia.m4a" mp3="mymedia.mp3" ogg="mymedia.oga" opus="mymedia.opus"]
  </code>
</pre>

##### poster
The location of the poster frame for the video (or cover image for the rich audio player):
<pre><code>\[podlovevideo poster="http://mysite.com/mymedia.png"] [podloveaudio poster="http://mysite.com/mymedia.png"]
  </code>
</pre>

##### width
The width of the video (or the audio player):
<pre><code>[podlovevideo width="640"]
  </code>
</pre>

##### height
The height of the video:
<pre><code>[podlovevideo height="264"]
  </code>
</pre>

##### loop
Loops the video or audio when it ends:
<pre><code>\[podlovevideo src="http://mysite.com/mymedia.mp4" loop="true"]
  </code>
</pre>

##### preload
Start loading the video as soon as possible, before the user clicks play. This might not work on all browsers.
<pre><code>[podloveaudio preload="true"]
  </code>
</pre>

##### autoplay
Start playing the video as soon as it's ready. This might not work on all (mobile) devices.
<pre><code>[podlovevideo autoplay="true"]
  </code>
</pre>

##### fullscreen
Disables the fullscreen button for video:
<pre><code>[podlovevideo fullscreen="false"]
  </code>
</pre>

##### duration
Enables display of duration without having to load the media file. Use seconds or timecode as a unit:
<pre><code>[podlovevideo duration="3522"] [podloveaudio duration="00:58:42"]
  </code>
</pre>

##### alwaysShowHours
Displays the time in 00:00:00 instead of 00:00. Default is "true".
<pre><code>[podloveaudio alwaysShowHours="false"]
  </code>
</pre>

##### alwaysShowControls
Defines whether the player control bar is permanently visible. For videos, it might be suitable to fade the controls out when not hovering the video.
<pre><code>[podlovevideo alwaysShowControls="false"]
  </code>
</pre>

##### volume
Disables the volume slider:
<pre><code>[podloveaudio volume="false"]
  </code>
</pre>

##### progress
Disables the progress bar:
<pre><code>[podlovevideo progress="false"]
  </code>
</pre>

##### captions
URL to a WebVTT captions file:
<pre><code>\[podlovevideo captions="http://mysite.com/mymedia.vtt"]
  </code>
</pre>

##### chapters
Takes chapter string from the defined custom field (the standard WordPress ones) and builds an interactive chapter table. Can be referenced to an external text file, too. Chapters must be written in the following format:

00:00:00.000 Introduction<br/>
00:00:57.099 First chapter title<br/>
00:10:03.104 Second chapter title<br/>
00:12:44.625 Final chapter

<pre><code>[podloveaudio chapters="my_chapter_field"] [podloveaudio chapters="http://mychapters.com/chapters.txt"]
  </code>
</pre>

##### chapterlinks
Option for the jumplink behaviour in chapter table.
<pre><code>\[podloveaudio chapterlinks="all"] (default, all chapter links are clickable)
\[podloveaudio chapterlinks="buffered"] (only buffered chapters are clickable)
\[podloveaudio chapterlinks="false"] (chapters are not linked)
  </code>
</pre>

##### Rich Podlove Web Player player with meta information
If you have an audio file and use one of the following attributes, the player will sport a richer visual experience: "title", "subtitle", "summary", "poster", "permalink". Full example:</p>
<pre>
<code>
\[podloveaudio
mp3="http://mysite.com/mymedia.mp3"
ogg="http://mysite.com/mymedia.ogg"
title="PWP – First show"
subtitle="We talk about this and that"
summary="Here goes a summary of the episode which should be about 256 characters long"
poster="http://mysite.com/mymedia.jpg"
permalink="http://mysite.com/my-first-episode/"
]
  </code>
</pre>
