"use strict";(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6860],{3905:function(e,t,l){l.d(t,{Zo:function(){return u},kt:function(){return m}});var r=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,r,o=function(e,t){if(null==e)return{};var l,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var l=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(l),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return l?r.createElement(b,n(n({ref:t},u),{},{components:l})):r.createElement(b,n({ref:t},u))}));function m(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=l.length,n=new Array(a);n[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var p=2;p<a;p++)n[p]=l[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}c.displayName="MDXCreateElement"},90121:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=l(87462),o=l(63366),a=(l(67294),l(3905)),n=["components"],i={title:"Shortcodes"},s=void 0,p={unversionedId:"reference/shortcodes",id:"reference/shortcodes",title:"Shortcodes",description:"Web Player",source:"@site/publisher/reference/shortcodes.mdx",sourceDirName:"reference",slug:"/reference/shortcodes",permalink:"/podlove-publisher/reference/shortcodes",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/reference/shortcodes.mdx",tags:[],version:"current",frontMatter:{title:"Shortcodes"},sidebar:"0",previous:{title:"Slacknotes",permalink:"/podlove-publisher/modules/slacknotes"},next:{title:"Templates",permalink:"/podlove-publisher/reference/templates/"}},u=[{value:"Web Player",id:"web-player",children:[],level:4},{value:"Feeds",id:"feeds",children:[],level:4},{value:"Episode Archive",id:"episode-archive",children:[],level:4},{value:"Downloads",id:"downloads",children:[],level:4},{value:"Subscribe Button",id:"subscribe-button",children:[{value:"Parameters",id:"parameters",children:[],level:5},{value:"Examples",id:"examples",children:[],level:5}],level:4},{value:"Contributors",id:"contributors",children:[{value:"Parameters",id:"parameters-1",children:[],level:5},{value:"Examples",id:"examples-1",children:[],level:5}],level:4},{value:"Templates",id:"templates",children:[{value:"Parameters",id:"parameters-2",children:[],level:5}],level:4}],d={toc:u};function c(e){var t=e.components,l=(0,o.Z)(e,n);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"web-player"},"Web Player"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-web-player]")," displays the Podlove Web Player."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-episode-web-player post_id="123"]')," displays the Podlove Web Player for the given episode.")),(0,a.kt)("h4",{id:"feeds"},"Feeds"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-feed-list]")," lists all discoverable feeds for easy subscription.")),(0,a.kt)("h4",{id:"episode-archive"},"Episode Archive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-list]")," lists all episodes including their episode image, publication date, title, subtitle and duration chronologically.")),(0,a.kt)("h4",{id:"downloads"},"Downloads"),(0,a.kt)("p",null,"Use these in an episode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-downloads]")," displays downloads in a dropdown menu."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-episode-downloads style="buttons"]')," displays download buttons for all available formats.")),(0,a.kt)("h4",{id:"subscribe-button"},"Subscribe Button"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-podcast-subscribe-button]")," displays a universal subscribe button for your Podcast.")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"format:")," Choose a button format, options are 'rectangle', 'square' and 'cover' (",(0,a.kt)("strong",{parentName:"li"},"Note"),": 'cover' has a max size of 300px) Default: 'cover'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style:")," Choose a button style, options are 'filled', 'outline' and 'frameless'. Default: 'filled'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size:")," Size and style of the button ('small', 'medium', 'big'). All of the sizes can be combined with 'auto' to adapt the button width to the available space like this: 'big auto'. Default: 'big'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"color:")," Define the color of the button. Allowed are all notations for colors that CSS can understand (keyword, rgb-hex, rgb, rgba, hsl, hsla). Please Note: It is not possible to style multiple buttons/popups on the same page differently."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language:")," 'de', 'en', 'eo', 'fi', 'fr', 'nl', 'zh' and 'ja'. Defaults to podcast language setting.\nIf you set the buttonid to \"example123\", your element must have the class \"podlove-subscribe-button-example123\"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hide:")," Set to",(0,a.kt)("inlineCode",{parentName:"li"},"{% raw %}true{% endraw %}")," if you want to hide the default button element. Useful if you provide your own button via the",(0,a.kt)("inlineCode",{parentName:"li"},"{% raw %}buttonid{% endraw %}")," setting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"buttonid:")," Use this if you want to trigger the button by clicking an element controlled by you."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"show:"),' If you are using the "Shows" module, pass the show slug to create a subscribe button for that show.')),(0,a.kt)("h5",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[podlove-podcast-subscribe-button]              // big button with logo\n[podlove-podcast-subscribe-button size="small"] // small button without logo\n')),(0,a.kt)("h4",{id:"contributors"},"Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-contributor-list]")," lists all contributors of the current episode.")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"preset:"),' "table", "list" or "comma separated". Default: "table"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title:")," Optional table header title. Default: none"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"avatars:"),' "yes" or "no". Display avatars. Default: "yes"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"role:"),' Filter lists by role. Default: "all"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"roles:"),' One of "yes", "no". Display role title. Default: "no"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group:"),' Filter lists by group. Default: "all"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groups:"),' One of "yes", "no". Display group title. Default: "no"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groupby:"),' Set to "group" to get separated contributor groups. Each group has its name as heading. Only works with "table" preset.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"donations"),' One of "yes", "no". Display donation column. Default: "yes"')),(0,a.kt)("h5",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[podlove-episode-contributor-list avatars="no" role="guest"] // show only guests, but without avatar\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[podlove-podcast-contributor-list]")),(0,a.kt)("p",null,"Lists all contributors configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"Podlove > Podcast Settings > Contributors"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[podlove-global-contributor-list]")),(0,a.kt)("p",null,"Lists all podcast contributors and shows related episodes."),(0,a.kt)("h4",{id:"templates"},"Templates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-template template="Template Title"]')," renders a template.")),(0,a.kt)("p",null,"All custom shortcode parameters will be accessible in the template. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},'[podlove-template template="..." customvariable="foo"]'),". Please read the ",(0,a.kt)("a",{parentName:"p",href:"/podlove-publisher/guides/templates/"},"Templates guide")," for more details."),(0,a.kt)("h5",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"title:")," ",(0,a.kt)("em",{parentName:"p"},"(required)")," Title of template to render.\n",(0,a.kt)("strong",{parentName:"p"},"autop:")," ",(0,a.kt)("em",{parentName:"p"},"(optional)")," Wraps blocks of text in p tags. 'yes' or 'no'. Default: 'yes'"))}c.isMDXComponent=!0}}]);