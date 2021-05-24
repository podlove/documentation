(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return v})),n.d(t,"toc",(function(){return f})),n.d(t,"default",(function(){return x}));var a=n(3),r=n(7),o=n(0),i=n.n(o),s=n(169),l=n(4),p=n(172),c=n(183),d=n(184),u=n(193),b=n(171),h=function(e){function t(t){var n,a,r,o;return(o=e.call(this,t)||this).store=null,o.state={tab:"chapters"},o.tabs=[{name:"Chapters",value:"chapters"},{name:"Share",value:"share"},{name:"Files",value:"files"},(n={value:"Shownotes"},n.value="shownotes",n),(a={value:"Playlist"},a.value="playlist",a),(r={value:"Transcripts"},r.value="transcripts",r)],o}Object(l.a)(t,e);var n=t.prototype;return n.updateTab=function(e){this.store.dispatch(Object(p.a)(e))},n.loadStore=function(e){this.store=e,this.store.dispatch(Object(p.a)("chapters"))},n.render=function(){return i.a.createElement("div",null,i.a.createElement(b.a,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",onLoaded:this.loadStore.bind(this)},i.a.createElement("root",{class:"p-4 flex justify-center"},i.a.createElement("tab",{name:"chapters"},"Chapters"),i.a.createElement("tab",{name:"share"},"Share"),i.a.createElement("tab",{name:"files"},"Files"),i.a.createElement("tab",{name:"shownotes"},"Shownotes"),i.a.createElement("tab",{name:"playlist"},"Playlist"),i.a.createElement("tab",{name:"transcripts"},"Transcripts"))),i.a.createElement(d.a,null,i.a.createElement(c.a,{label:"tab",description:"Active tab",last:!0},i.a.createElement(u.a,{options:this.tabs,onChange:this.updateTab.bind(this)}))))},t}(i.a.Component),m={title:"Tabs"},v={unversionedId:"v5/templating/components/tabs",id:"v5/templating/components/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tab enlcosure that handles the visibility state",source:"@site/web-player/v5/templating/components/tabs.mdx",slug:"/v5/templating/components/tabs",permalink:"/podlove-web-player/v5/templating/components/tabs",version:"current",sidebar:"0",previous:{title:"Chapter Current",permalink:"/podlove-web-player/v5/templating/components/chapter-current"},next:{title:"Tab Trigger",permalink:"/podlove-web-player/v5/templating/components/tab-trigger"}},f=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],g={toc:f};function x(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Tab enlcosure that handles the visibility state")),Object(s.b)("h3",{id:"preview"},"Preview"),Object(s.b)(h,{mdxType:"Tabs"}),Object(s.b)("h3",{id:"code"},"Code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <tab name="chapters">Chapters</tab>\n  <tab name="share">Share</tab>\n  <tab name="files">Files</tab>\n  <tab name="shownotes">Shownotes</tab>\n  <tab name="playlist">Playlist</tab>\n  <tab name="transcripts">Transcripts</tab>\n</root>\n')))}x.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(173),r=n(4),o=n(174),i=n.n(o),s=n(172),l=n(175),p=n(176),c=n(0),d=n.n(c),u=n(170),b=n.n(u),h=n(177),m=n(178),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=d.a.createRef(),n.mountIframe=Object(h.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?Object(m.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.episode,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch(Object(l.a)(n.props.playtime)),n.props.tab&&e.dispatch(Object(s.a)(n.props.tab))})))}),600),n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,Object(p.a)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){Object(h.isEqual)(Object(h.omit)(e,"onLoaded"),Object(h.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=b()({default:{player:{marginBottom:"15px"}}});return d.a.createElement("div",{style:e.player,ref:this.playerRef})},t}(d.a.Component)},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4),r=n(0),o=n.n(r),i=n(170),s=n.n(i),l=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=s()({default:{container:{display:"flex",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",alignItems:"center",padding:"10px"},label:{fontWeight:"700",width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",fontStyle:"italic",fontWeight:300,overflow:"hidden",textOverflow:"ellipsis"}},last:{container:{borderBottom:"none"}}},{last:this.props.last});return o.a.createElement("div",{style:e.container},o.a.createElement("div",{style:e.label},this.props.label),o.a.createElement("div",{style:e.control},this.props.children),o.a.createElement("div",{style:e.description},this.props.description))},t}(o.a.Component)},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4),r=n(0),o=n.n(r),i=n(170),s=n.n(i),l=function(e){function t(t){return e.call(this,t)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=s()({default:{container:{boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",alignItems:"center",padding:"10px",borderRadius:"5px",marginBottom:"15px"},header:{color:"rgb(102, 102, 102)",textTransform:"uppercase",letterSpacing:"2px",display:"flex",padding:"5px 10px",marginBottom:"5px",fontSize:"0.8rem"},label:{width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",overflow:"hidden",textOverflow:"ellipsis"}}});return o.a.createElement("div",{style:e.container},o.a.createElement("div",{style:e.header},o.a.createElement("div",{style:e.label},"Name"),o.a.createElement("div",{style:e.control},"Control"),o.a.createElement("div",{style:e.description},"Description")),o.a.createElement("div",null,this.props.children))},t}(o.a.Component)},193:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(4),r=n(0),o=n.n(r),i=n(170),s=n.n(i),l=function(e){function t(t){return e.call(this,t)||this}Object(a.a)(t,e);var n=t.prototype;return n.handleChange=function(e){this.props.onChange&&this.props.onChange(e.target.value)},n.render=function(){var e=s()({default:{select:{width:"100%",border:"0px none",boxSizing:"inherit",display:"block",margin:0,background:"rgb(255, 255, 255)",padding:"6px 20px 6px 10px",fontSize:"13px",position:"relative",transition:"box-shadow 200ms ease-out 0s, opacity 200ms ease-out 0s",color:"rgb(51, 51, 51)",boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",borderRadius:"4px",lineHeight:"20px",flex:"1 1 0%",height:"32px",userSelect:"none",appearance:"menulist"}}});return o.a.createElement("select",{style:e.select,onChange:this.handleChange.bind(this),value:this.props.value},this.props.options.map((function(e){return o.a.createElement("option",{value:e.value,key:e.value},e.name||e.value)})))},t}(o.a.Component)}}]);