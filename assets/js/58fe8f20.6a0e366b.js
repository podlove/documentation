(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[7854],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4284:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return u}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),a=["components"],c={title:"Feed"},i={unversionedId:"reference/templates/template-tags/feed",id:"reference/templates/template-tags/feed",isDocsHomePage:!1,title:"Feed",description:"Title",source:"@site/publisher/reference/templates/template-tags/feed.mdx",sourceDirName:"reference/templates/template-tags",slug:"/reference/templates/template-tags/feed",permalink:"/podlove-publisher/reference/templates/template-tags/feed",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/publisher/reference/templates/template-tags/feed.mdx",version:"current",frontMatter:{title:"Feed"},sidebar:"0",previous:{title:"Chapter",permalink:"/podlove-publisher/reference/templates/template-tags/chapter"},next:{title:"Asset",permalink:"/podlove-publisher/reference/templates/template-tags/asset"}},p=[{value:"Title",id:"title",children:[]},{value:"URL",id:"url",children:[]},{value:"Discoverable",id:"discoverable",children:[]},{value:"protected",id:"protected",children:[]},{value:"Asset",id:"asset",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"title"},"Title"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"feed.title")),(0,l.kt)("h3",{id:"url"},"URL"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"feed.url")),(0,l.kt)("h3",{id:"discoverable"},"Discoverable"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"feed.discoverable\nIs the feed URL discoverable?")),(0,l.kt)("h3",{id:"protected"},"protected"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"feed.passwordProtected\nIs the feed protected by a password?")),(0,l.kt)("h3",{id:"asset"},"Asset"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"feed.asset")),(0,l.kt)("p",null,"see ",(0,l.kt)("a",{parentName:"p",href:"./asset"},"asset")))}u.isMDXComponent=!0}}]);