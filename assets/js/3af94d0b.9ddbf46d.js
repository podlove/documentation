(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6346],{1730:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=o(2122),r=o(9756),p=(o(7294),o(3905)),s=o(2355),i=["components"],a={title:"Poster"},l={unversionedId:"v5/templating/components/poster",id:"v5/templating/components/poster",isDocsHomePage:!1,title:"Poster",description:"Preview",source:"@site/web-player/v5/templating/components/poster.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/poster",permalink:"/podlove-web-player/v5/templating/components/poster",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v5/templating/components/poster.mdx",version:"current",frontMatter:{title:"Poster"},sidebar:"0",previous:{title:"Show Title",permalink:"/podlove-web-player/v5/templating/components/show-title"},next:{title:"Play Button",permalink:"/podlove-web-player/v5/templating/components/play-button"}},c=[],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h4",{id:"preview"},"Preview"),(0,p.kt)(s.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,p.kt)("root",{class:"p-4 flex justify-center"},(0,p.kt)("poster",{class:"w-48 h-48"}))),(0,p.kt)("h4",{id:"code"},"Code"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <poster class="w-48 h-48"></poster>\n</root>\n')))}d.isMDXComponent=!0},2355:function(e,t,o){"use strict";o.d(t,{J:function(){return v}});var n=o(2137),r=o(3552),p=o(7757),s=o.n(p),i=o(939),a=o(5794),l=o(4745),c=o(7294),u=o(9941),d=o(6486),m=o(7762),v=function(e){function t(t){var o;return(o=e.call(this,t)||this).playerRef=c.createRef(),o.mountIframe=(0,d.debounce)((function(){var e=o.playerRef.current;e&&(o.props.variant&&e.setAttribute("data-variant",o.props.variant),e.innerHTML=o.props.children?(0,m.renderToString)(o.props.children):"",window.podlovePlayer(e,o.props.episode,o.props.config).then((function(e){o.props.onLoaded&&o.props.onLoaded(e),o.props.playtime&&e.dispatch((0,a.RJ)(o.props.playtime)),o.props.tab&&e.dispatch((0,i.S)(o.props.tab))})))}),600),o}(0,r.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=(0,n.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,l.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),o.componentWillReceiveProps=function(e){(0,d.isEqual)((0,d.omit)(e,"onLoaded"),(0,d.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},o.render=function(){var e=(0,u.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:e.player,ref:this.playerRef})},t}(c.Component)}}]);