(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[9895],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7976:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Usage"},c={unversionedId:"v5/usage",id:"v5/usage",isDocsHomePage:!1,title:"Usage",description:"`javascript",source:"@site/web-player/v5/usage.mdx",sourceDirName:"v5",slug:"/v5/usage",permalink:"/podlove-web-player/v5/usage",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v5/usage.mdx",version:"current",frontMatter:{title:"Usage"},sidebar:"0",previous:{title:"Installation",permalink:"/podlove-web-player/v5/installation"},next:{title:"Configuration",permalink:"/podlove-web-player/v5/configuration"}},s=[{value:"Signature",id:"signature",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'/*\n *   Podlove Player Factory\n *   @param {string, dom node}   selector        - CSS selector or dom node\n *   @param {string, object}     episode         - Path to JSON episode or episode object\n *   @param {string, object}     configuration   - Path to JSON config or configuration object\n *   @returns {Promise}          store           - Promise returning a redux store\n */\n\nwindow\n  .podlovePlayer("#app", "episode.json", "config.json")\n  .then(store => {\n    store.subscribe(() => {\n      console.log(store.getState());\n    });\n  });\n')),(0,a.kt)("h3",{id:"signature"},"Signature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selector can be a css selector or a dom node reference"),(0,a.kt)("li",{parentName:"ul"},"An iframe as the canvas is injected into the reference, encapsulating the player"),(0,a.kt)("li",{parentName:"ul"},"Configuration can be provided as a meta object or an url to the configuration json file"),(0,a.kt)("li",{parentName:"ul"},"Canvas width can be defined by the template"),(0,a.kt)("li",{parentName:"ul"},"Canvas height is adapted to players height")),(0,a.kt)("p",null,"Using a selector that matches multiple elements the player will be rendered in the first matching element.\nThe ",(0,a.kt)("em",{parentName:"p"},"podlovePlayer")," returns a promise with a redux store as a result that can be used to change the player state from outside."))}p.isMDXComponent=!0}}]);