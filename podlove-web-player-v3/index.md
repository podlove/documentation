---
layout: default
script: "/js/injected.js"
---

<div class="jumbotron">
    <h1>Podlove Web Player 3.0</h1>
    <h2>
       The metadata-rich media player for podcasts and videos.
    </h2>
    <p>
        Standalone or embeddable as WordPress Plugin.
    </p>
    <p>
        <audio id="inject">
            <source src="{{site.playerPath}}/examples/which-format/podlove-test-track.mp4" type="audio/mp4"/>
            <source src="{{site.playerPath}}/examples/which-format/podlove-test-track.mp3" type="audio/mpeg"/>
            <source src="{{site.playerPath}}/examples/which-format/podlove-test-track.ogg" type="audio/ogg; codecs=vorbis"/>
            <source src="{{site.playerPath}}/examples/which-format/podlove-test-track.opus" type="audio/ogg; codecs=opus"/>
        </audio>
    </p>
    <p style="line-height: 1.75em">
        <a class="btn btn-primary" href="/podlove-web-player-v3/guides/getting-started.html" title="Learn how to get started">Get Started</a>
        <a class="btn btn-primary" href="https://github.com/podlove/podlove-web-player-v3" title="Go to Web Player Github Site">GitHub</a>
        <a class="btn btn-primary" href="http://sourcerer.org/blog" title="Go to Web Player Wordpress Demo">WordPress Example</a>
    </p>
</div>
<script src="/js/injected.js" type="text/javascript" charset="utf-8"></script>
