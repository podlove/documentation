(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[5130],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(n),d=o,m=y["".concat(s,".").concat(d)]||y[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5899:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"Player Syncing"},s={unversionedId:"v5/extensions/player-syncing",id:"v5/extensions/player-syncing",isDocsHomePage:!1,title:"Player Syncing",description:"Sometimes it multiple players are present on a single page. Since each sandboxed instance doesn't know about other players it is possible to play multiple episodes at the same time. This behaviour can be orchestrated:",source:"@site/web-player/v5/extensions/player-syncing.mdx",sourceDirName:"v5/extensions",slug:"/v5/extensions/player-syncing",permalink:"/podlove-web-player/v5/extensions/player-syncing",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v5/extensions/player-syncing.mdx",version:"current",frontMatter:{title:"Player Syncing"},sidebar:"0",previous:{title:"External Control",permalink:"/podlove-web-player/v5/extensions/plugin-external"},next:{title:"Features",permalink:"/podlove-web-player/v4/features"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sometimes it multiple players are present on a single page. Since each sandboxed instance doesn't know about other players it is possible to play multiple episodes at the same time. This behaviour can be orchestrated:"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/player-synced-bfh1u?autoresize=1&hidenavigation=1&codemirror=1&fontsize=14",class:"codesandbox",title:"Syncing Plugin Playground",style:{width:"100%",border:"none",height:"600px"},sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}))}u.isMDXComponent=!0}}]);