(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(173),o=r(4),a=r(174),i=r.n(a),s=r(172),p=r(175),c=r(176),l=r(0),d=r.n(l),u=r(170),b=r.n(u),m=r(177),v=r(178),f=function(e){function t(t){var r;return(r=e.call(this,t)||this).playerRef=d.a.createRef(),r.mountIframe=Object(m.debounce)((function(){var e=r.playerRef.current;e&&(r.props.variant&&e.setAttribute("data-variant",r.props.variant),e.innerHTML=r.props.children?Object(v.renderToString)(r.props.children):"",window.podlovePlayer(e,r.props.episode,r.props.config).then((function(e){r.props.onLoaded&&r.props.onLoaded(e),r.props.playtime&&e.dispatch(Object(p.a)(r.props.playtime)),r.props.tab&&e.dispatch(Object(s.a)(r.props.tab))})))}),600),r}Object(o.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,Object(c.a)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.componentWillReceiveProps=function(e){Object(m.isEqual)(Object(m.omit)(e,"onLoaded"),Object(m.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},r.render=function(){var e=b()({default:{player:{marginBottom:"15px"}}});return d.a.createElement("div",{style:e.player,ref:this.playerRef})},t}(d.a.Component)},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(169)),i=r(171),s={title:"Error"},p={unversionedId:"v5/templating/components/error",id:"v5/templating/components/error",isDocsHomePage:!1,title:"Error",description:"Error overlay that handles issues with configuration, network issues or media issues.",source:"@site/web-player/v5/templating/components/error.mdx",slug:"/v5/templating/components/error",permalink:"/podlove-web-player/v5/templating/components/error",version:"current",sidebar:"0",previous:{title:"Subscribe Button",permalink:"/podlove-web-player/v5/templating/components/subscribe-button"},next:{title:"Localization",permalink:"/podlove-web-player/v5/templating/localization"}},c=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],l={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Error overlay that handles issues with configuration, network issues or media issues.")),Object(a.b)("h3",{id:"preview"},"Preview"),Object(a.b)(i.a,{config:"/assets/web-player/v5/config.json",mdxType:"Player"},Object(a.b)("root",{class:"p-4 flex justify-center h-64"},Object(a.b)("error",null))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"It is only displayed if an error happens"),Object(a.b)("li",{parentName:"ul"},"Network related issues will also display a retry button to recover from the error")))),Object(a.b)("h3",{id:"code"},"Code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center h-64">\n  <error></error>\n</root>\n')))}d.isMDXComponent=!0}}]);