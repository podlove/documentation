(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[3383],{6763:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return f}});var a=n(2122),i=n(9756),o=n(7294),r=n(3905),l=n(4090),s=n(3552),p=n(9941),d=n(5918),c=n(8082),m=n(6162),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).store=null,n.state={variant:"xl"},n.variants=[{value:"xl",name:"XL"},{value:"l",name:"L"},{value:"m",name:"M"}],n}(0,s.Z)(t,e);var n=t.prototype;return n.updateVariant=function(e){this.setState({variant:e})},n.render=function(){var e=(0,p.ZP)({default:{container:{marginBottom:"15px"}}});return o.createElement("div",{style:e.container},o.createElement(l.PodloveWebPlayer,{style:{marginBottom:"15px"},episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",variant:this.state.variant}),o.createElement(c.X,null,o.createElement(d.o,{label:"variant",description:"Player layout variant",last:!0},o.createElement(m.P,{options:this.variants,onChange:this.updateVariant.bind(this),value:this.state.variant}))))},t}(o.Component),v=["components"],h={title:"Getting Started"},g={unversionedId:"v5/templating/getting-started",id:"v5/templating/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Podlove Web Player 5 has a build in templating engine based on Vue component rendering in combination with the tailwind css framework 1.x. Each player part is available as an isolated component with an automatic store binding.",source:"@site/web-player/v5/templating/getting-started.mdx",sourceDirName:"v5/templating",slug:"/v5/templating/getting-started",permalink:"/podlove-web-player/v5/templating/getting-started",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v5/templating/getting-started.mdx",version:"current",frontMatter:{title:"Getting Started"},sidebar:"0",previous:{title:"Theming",permalink:"/podlove-web-player/v5/theming"},next:{title:"Root Node",permalink:"/podlove-web-player/v5/templating/components/root"}},f=[{value:"Variants",id:"variants",children:[]},{value:"Custom Templating",id:"custom-templating",children:[]}],x={toc:f};function y(e){var t=e.components,n=(0,i.Z)(e,v);return(0,r.kt)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Podlove Web Player 5 has a build in templating engine based on Vue component rendering in combination with the ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"tailwind css framework 1.x"),". Each player part is available as an isolated component with an automatic store binding."),(0,r.kt)("h2",{id:"variants"},"Variants"),(0,r.kt)("p",null,"Based on this template engine, the player provides three different layouts out of the box. Each variant can be defined via the ",(0,r.kt)("inlineCode",{parentName:"p"},"data-variant")," attribute on the targeted dom element."),(0,r.kt)(u,{mdxType:"Variants"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// HTML\n<div id=\"variant-xl\" data-variant=\"xl\"></div>\n<div id=\"variant-l\" data-variant=\"l\"></div>\n<div id=\"variant-m\" data-variant=\"m\"></div>\n\n// Javascript\npodlovePlayer('#variant-xl', 'episode.json', 'config.json');\npodlovePlayer('#variant-l', 'episode.json', 'config.json');\npodlovePlayer('#variant-m', 'episode.json', 'config.json');\n")),(0,r.kt)("h2",{id:"custom-templating"},"Custom Templating"),(0,r.kt)("p",null,"Podlove Web Player grants you access to the complete player dom with state bound components. Instead of using a predefined variant you can provide a template either via the ",(0,r.kt)("inlineCode",{parentName:"p"},"data-template")," attribute or inline as part of the target dom. While creating a custom template keep in mind that the used player components still adhere their styles from the selected theme. Also if you aren't familiar yet with ",(0,r.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"tailwind css framework")," or it's concept around responsive design, make sure to read the basic introduction. It is a fairly simple framework that should enable rapid player templating."),(0,r.kt)(l.PodloveWebPlayer,{style:{marginBottom:"15px"},episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"PodloveWebPlayer"},(0,r.kt)("root",{style:{maxWidth:"950px",minWidth:"260px"},class:"p-4 flex justify-center rounded"},(0,r.kt)("play-button",null))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Inline Template --\x3e\n<div id="inline-template">\n  <root style="max-width:950px;min-width:260px;" class="p-4 flex justify-center rounded">\n    <play-button></play-button>\n  </root>\n</div>\n\n\x3c!-- External Template --\x3e\n<div id="external-template" data-template="/path/to/external/template.html"></div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'window.podlovePlayer("#inline-template", "episode.json", "config.json");\nwindow.podlovePlayer("#external-template", "episode.json", "config.json");\n')))}y.isMDXComponent=!0},8082:function(e,t,n){"use strict";n.d(t,{X:function(){return r}});var a=n(3552),i=n(7294),o=n(9941),r=function(e){function t(t){return e.call(this,t)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(0,o.ZP)({default:{container:{boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",alignItems:"center",padding:"10px",borderRadius:"5px",marginBottom:"15px"},header:{color:"rgb(102, 102, 102)",textTransform:"uppercase",letterSpacing:"2px",display:"flex",padding:"5px 10px",marginBottom:"5px",fontSize:"0.8rem"},label:{width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",overflow:"hidden",textOverflow:"ellipsis"}}});return i.createElement("div",{style:e.container},i.createElement("div",{style:e.header},i.createElement("div",{style:e.label},"Name"),i.createElement("div",{style:e.control},"Control"),i.createElement("div",{style:e.description},"Description")),i.createElement("div",null,this.props.children))},t}(i.Component)},5918:function(e,t,n){"use strict";n.d(t,{o:function(){return r}});var a=n(3552),i=n(7294),o=n(9941),r=function(e){function t(t){return e.call(this,t)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=(0,o.ZP)({default:{container:{display:"flex",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",alignItems:"center",padding:"10px"},label:{fontWeight:"700",width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",fontStyle:"italic",fontWeight:300,overflow:"hidden",textOverflow:"ellipsis"}},last:{container:{borderBottom:"none"}}},{last:this.props.last});return i.createElement("div",{style:e.container},i.createElement("div",{style:e.label},this.props.label),i.createElement("div",{style:e.control},this.props.children),i.createElement("div",{style:e.description},this.props.description))},t}(i.Component)},6162:function(e,t,n){"use strict";n.d(t,{P:function(){return r}});var a=n(3552),i=n(7294),o=n(9941),r=function(e){function t(t){return e.call(this,t)||this}(0,a.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){this.props.onChange&&this.props.onChange(e.target.value)},n.render=function(){var e=(0,o.ZP)({default:{select:{width:"100%",border:"0px none",boxSizing:"inherit",display:"block",margin:0,background:"rgb(255, 255, 255)",padding:"6px 20px 6px 10px",fontSize:"13px",position:"relative",transition:"box-shadow 200ms ease-out 0s, opacity 200ms ease-out 0s",color:"rgb(51, 51, 51)",boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",borderRadius:"4px",lineHeight:"20px",flex:"1 1 0%",height:"32px",userSelect:"none",appearance:"menulist"}}});return i.createElement("select",{style:e.select,onChange:this.handleChange.bind(this),value:this.props.value},this.props.options.map((function(e){return i.createElement("option",{value:e.value,key:e.value},e.name||e.value)})))},t}(i.Component)}}]);