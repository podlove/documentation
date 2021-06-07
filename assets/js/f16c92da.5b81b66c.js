(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6860],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return c}});var l=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,r=function(e,t){if(null==e)return{};var o,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(o),c=r,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return o?l.createElement(b,n(n({ref:t},u),{},{components:o})):l.createElement(b,n({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,n=new Array(a);n[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var p=2;p<a;p++)n[p]=o[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9505:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var l=o(2122),r=o(9756),a=(o(7294),o(3905)),n=["components"],i={title:"Shortcodes"},s={unversionedId:"reference/shortcodes",id:"reference/shortcodes",isDocsHomePage:!1,title:"Shortcodes",description:"Web Player",source:"@site/publisher/reference/shortcodes.mdx",sourceDirName:"reference",slug:"/reference/shortcodes",permalink:"/podlove-publisher/reference/shortcodes",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/publisher/reference/shortcodes.mdx",version:"current",frontMatter:{title:"Shortcodes"},sidebar:"0",previous:{title:"Slacknotes",permalink:"/podlove-publisher/modules/slacknotes"},next:{title:"Templates",permalink:"/podlove-publisher/reference/templates/templates"}},p=[],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,n);return(0,a.kt)("wrapper",(0,l.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"web-player"},"Web Player"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-web-player]")," displays the Podlove Web Player."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-episode-web-player post_id="123"]')," displays the Podlove Web Player for the given episode.")),(0,a.kt)("h4",{id:"feeds"},"Feeds"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-feed-list]")," lists all discoverable feeds for easy subscription.")),(0,a.kt)("h4",{id:"episode-archive"},"Episode Archive"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-list]")," lists all episodes including their episode image, publication date, title, subtitle and duration chronologically.")),(0,a.kt)("h4",{id:"downloads"},"Downloads"),(0,a.kt)("p",null,"Use these in an episode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-downloads]")," displays downloads in a dropdown menu."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-episode-downloads style="buttons"]')," displays download buttons for all available formats.")),(0,a.kt)("h4",{id:"subscribe-button"},"Subscribe Button"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-podcast-subscribe-button]")," displays a universal subscribe button for your Podcast.")),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"format:")," Choose a button format, options are 'rectangle', 'square' and 'cover' (",(0,a.kt)("strong",{parentName:"li"},"Note"),": 'cover' has a max size of 300px) Default: 'cover'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style:")," Choose a button style, options are 'filled', 'outline' and 'frameless'. Default: 'filled'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"size:")," Size and style of the button ('small', 'medium', 'big'). All of the sizes can be combined with 'auto' to adapt the button width to the available space like this: 'big auto'. Default: 'big'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"color:")," Define the color of the button. Allowed are all notations for colors that CSS can understand (keyword, rgb-hex, rgb, rgba, hsl, hsla). Please Note: It is not possible to style multiple buttons/popups on the same page differently."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"language:")," 'de', 'en', 'eo', 'fi', 'fr', 'nl', 'zh' and 'ja'. Defaults to podcast language setting.\nIf you set the buttonid to \"example123\", your element must have the class \"podlove-subscribe-button-example123\"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hide:")," Set to",(0,a.kt)("inlineCode",{parentName:"li"},"{% raw %}true{% endraw %}")," if you want to hide the default button element. Useful if you provide your own button via the",(0,a.kt)("inlineCode",{parentName:"li"},"{% raw %}buttonid{% endraw %}")," setting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"buttonid:")," Use this if you want to trigger the button by clicking an element controlled by you."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"show:"),' If you are using the "Shows" module, pass the show slug to create a subscribe button for that show.')),(0,a.kt)("h5",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[podlove-podcast-subscribe-button]              // big button with logo\n[podlove-podcast-subscribe-button size="small"] // small button without logo\n')),(0,a.kt)("h4",{id:"contributors"},"Contributors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-contributor-list]")," lists all contributors of the current episode.")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"preset:"),' "table", "list" or "comma separated". Default: "table"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"title:")," Optional table header title. Default: none"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"avatars:"),' "yes" or "no". Display avatars. Default: "yes"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"role:"),' Filter lists by role. Default: "all"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"roles:"),' One of "yes", "no". Display role title. Default: "no"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"group:"),' Filter lists by group. Default: "all"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groups:"),' One of "yes", "no". Display group title. Default: "no"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"groupby:"),' Set to "group" to get separated contributor groups. Each group has its name as heading. Only works with "table" preset.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"donations"),' One of "yes", "no". Display donation column. Default: "yes"'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"flattr:"),' "yes" or "no". Display Flattr column. Default: "no"')),(0,a.kt)("h5",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[podlove-episode-contributor-list flattr="yes"] // enables flattr column\n[podlove-episode-contributor-list avatars="no" role="guest"] // show only guests, but without avatar\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[podlove-podcast-contributor-list]")),(0,a.kt)("p",null,"Lists all contributors configured in ",(0,a.kt)("inlineCode",{parentName:"p"},"Podlove > Podcast Settings > Contributors"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"[podlove-global-contributor-list]")),(0,a.kt)("p",null,"Lists all podcast contributors and shows related episodes."),(0,a.kt)("h4",{id:"templates"},"Templates"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[podlove-template template="Template Title"]')," renders a template.")),(0,a.kt)("p",null,"All custom shortcode parameters will be accessible in the template. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},'[podlove-template template="..." customvariable="foo"]'),". Please read the ",(0,a.kt)("a",{parentName:"p",href:"/podlove-publisher/guides/understanding-templates/"},"Understanding Templates")," for more details."),(0,a.kt)("h5",{id:"parameters-2"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"title:")," ",(0,a.kt)("em",{parentName:"p"},"(required)")," Title of template to render.\n",(0,a.kt)("strong",{parentName:"p"},"autop:")," ",(0,a.kt)("em",{parentName:"p"},"(optional)")," Wraps blocks of text in p tags. 'yes' or 'no'. Default: 'yes'"),(0,a.kt)("h4",{id:"flattr"},"Flattr"),(0,a.kt)("p",null,'Requires "Flattr" module.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-podcast-flattr-button]")," shows Flattr button for the podcast."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[podlove-episode-flattr-button]")," shows Flattr button for the current episode.")),(0,a.kt)("h5",{id:"parameters-3"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"style:"),' Button style."large", "compact" or "static". Default: "compact".')))}d.isMDXComponent=!0}}]);