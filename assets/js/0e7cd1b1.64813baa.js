(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(173),o=r(4),i=r(174),a=r.n(i),p=r(172),c=r(175),s=r(176),u=r(0),l=r.n(u),d=r(170),m=r.n(d),b=r(177),v=r(178),f=function(e){function t(t){var r;return(r=e.call(this,t)||this).playerRef=l.a.createRef(),r.mountIframe=Object(b.debounce)((function(){var e=r.playerRef.current;e&&(r.props.variant&&e.setAttribute("data-variant",r.props.variant),e.innerHTML=r.props.children?Object(v.renderToString)(r.props.children):"",window.podlovePlayer(e,r.props.episode,r.props.config).then((function(e){r.props.onLoaded&&r.props.onLoaded(e),r.props.playtime&&e.dispatch(Object(c.a)(r.props.playtime)),r.props.tab&&e.dispatch(Object(p.a)(r.props.tab))})))}),600),r}Object(o.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,Object(s.a)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.componentWillReceiveProps=function(e){Object(b.isEqual)(Object(b.omit)(e,"onLoaded"),Object(b.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},r.render=function(){var e=m()({default:{player:{marginBottom:"15px"}}});return l.a.createElement("div",{style:e.player,ref:this.playerRef})},t}(l.a.Component)},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),i=(r(0),r(169)),a=r(171),p={title:"Timer Current"},c={unversionedId:"v5/templating/components/timer-current",id:"v5/templating/components/timer-current",isDocsHomePage:!1,title:"Timer Current",description:"Displays the current episode playtime",source:"@site/web-player/v5/templating/components/timer-current.mdx",slug:"/v5/templating/components/timer-current",permalink:"/podlove-web-player/v5/templating/components/timer-current",version:"current",sidebar:"0",previous:{title:"Tab Share",permalink:"/podlove-web-player/v5/templating/components/tab-share"},next:{title:"Timer Duration",permalink:"/podlove-web-player/v5/templating/components/timer-duration"}},s=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Displays the current episode playtime")),Object(i.b)("h3",{id:"preview"},"Preview"),Object(i.b)(a.a,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",playtime:6e4,mdxType:"Player"},Object(i.b)("root",{class:"p-4 flex justify-center"},Object(i.b)("timer-current",null))),Object(i.b)("h3",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <timer-current></timer-current>\n</root>\n')))}l.isMDXComponent=!0}}]);