(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[8833],{397:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return b}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(2355),p=["components"],s={title:"Tab Trigger"},l={unversionedId:"v5/templating/components/tab-trigger",id:"v5/templating/components/tab-trigger",isDocsHomePage:!1,title:"Tab Trigger",description:"Toggle to show/hide a tab",source:"@site/web-player/v5/templating/components/tab-trigger.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/tab-trigger",permalink:"/podlove-web-player/v5/templating/components/tab-trigger",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v5/templating/components/tab-trigger.mdx",version:"current",frontMatter:{title:"Tab Trigger"},sidebar:"0",previous:{title:"Tabs",permalink:"/podlove-web-player/v5/templating/components/tabs"},next:{title:"Tab Chapters",permalink:"/podlove-web-player/v5/templating/components/tab-chapters"}},c=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],d={toc:c};function b(t){var e=t.components,n=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Toggle to show/hide a tab")),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(o.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,i.kt)("root",{class:"p-4"},(0,i.kt)("div",{class:"flex justify-between pt-4 px-4"},(0,i.kt)("div",{class:"flex justify-between w-full"},(0,i.kt)("tab-trigger",{tab:"chapters"},(0,i.kt)("icon",{type:"chapter"})),(0,i.kt)("tab-trigger",{tab:"transcripts"},(0,i.kt)("icon",{type:"transcripts"})),(0,i.kt)("tab-trigger",{tab:"files"},(0,i.kt)("icon",{type:"download"})),(0,i.kt)("tab-trigger",{tab:"playlist"},(0,i.kt)("icon",{type:"playlist"})),(0,i.kt)("tab-trigger",{tab:"share"},(0,i.kt)("icon",{type:"share"})))),(0,i.kt)("div",{class:"w-full relative overflow-hidden"},(0,i.kt)("tab",{name:"chapters"},"Chapters"),(0,i.kt)("tab",{name:"transcripts"},"Transcripts"),(0,i.kt)("tab",{name:"files"},"Files"),(0,i.kt)("tab",{name:"playlist"},"Playlist"),(0,i.kt)("tab",{name:"share"},"Share")))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4">\n  <div class="flex justify-between pt-4 px-4">\n    <div class="flex justify-between w-full">\n      <tab-trigger tab="chapters">\n        <icon type="chapter"></icon>\n      </tab-trigger>\n      <tab-trigger tab="transcripts">\n        <icon type="transcripts"></icon>\n      </tab-trigger>\n      <tab-trigger tab="files">\n        <icon type="download"></icon>\n      </tab-trigger>\n      <tab-trigger tab="playlist">\n        <icon type="playlist"></icon>\n      </tab-trigger>\n      <tab-trigger tab="share">\n        <icon type="share"></icon>\n      </tab-trigger>\n    </div>\n  </div>\n  <div class="w-full relative overflow-hidden">\n    <tab name="chapters">\n      Chapters\n    </tab>\n    <tab name="transcripts">\n      Transcripts\n    </tab>\n    <tab name="files">\n      Files\n    </tab>\n    <tab name="playlist">\n      Playlist\n    </tab>\n    <tab name="share">\n      Share\n    </tab>\n  </div>\n</root>\n')))}b.isMDXComponent=!0},2355:function(t,e,n){"use strict";n.d(e,{J:function(){return u}});var r=n(2137),a=n(3552),i=n(7757),o=n.n(i),p=n(939),s=n(5794),l=n(4745),c=n(7294),d=n(9941),b=n(6486),g=n(7762),u=function(t){function e(e){var n;return(n=t.call(this,e)||this).playerRef=c.createRef(),n.mountIframe=(0,b.debounce)((function(){var t=n.playerRef.current;t&&(n.props.variant&&t.setAttribute("data-variant",n.props.variant),t.innerHTML=n.props.children?(0,g.renderToString)(n.props.children):"",window.podlovePlayer(t,n.props.episode,n.props.config).then((function(t){n.props.onLoaded&&n.props.onLoaded(t),n.props.playtime&&t.dispatch((0,s.RJ)(n.props.playtime)),n.props.tab&&t.dispatch((0,p.S)(n.props.tab))})))}),600),n}(0,a.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=(0,r.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.podlovePlayer=void 0,t.next=3,(0,l.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.componentWillReceiveProps=function(t){(0,b.isEqual)((0,b.omit)(t,"onLoaded"),(0,b.omit)(this.props,"onLoaded"))||(this.props=t,this.mountIframe())},n.render=function(){var t=(0,d.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:t.player,ref:this.playerRef})},e}(c.Component)}}]);