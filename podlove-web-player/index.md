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
    <p>
        <a class="btn btn-primary btn-block" href="/podlove-web-player/guides/getting-started.html" title="Learn how to get started">Get Started</a>
        <a class="btn btn-primary btn-block" href="https://github.com/podlove/podlove-web-player" title="Go to Web Player Github Site">GitHub</a>
        <a class="btn btn-primary btn-block" href="http://sourcerer.org/blog" title="Go to Web Player Wordpress Demo">WordPress Example</a>
        <a class="btn btn-primary btn-block" href="http://sandkastenlie.be/playground.html" title="Interactive Playground">Playground</a>
    </p>
</div>
<script src="/js/injected.js" type="text/javascript" charset="utf-8"></script>
