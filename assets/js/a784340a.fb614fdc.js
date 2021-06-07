(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[7744],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3413:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],p={title:"Installation"},i={unversionedId:"v4/installation",id:"v4/installation",isDocsHomePage:!1,title:"Installation",description:"Podlove Webplayer can be integrated in different ways. We provide the always latest version via CDN or all versions as an npm package.",source:"@site/web-player/v4/installation.mdx",sourceDirName:"v4",slug:"/v4/installation",permalink:"/podlove-web-player/v4/installation",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/web-player/web-player/v4/installation.mdx",version:"current",frontMatter:{title:"Installation"},sidebar:"0",previous:{title:"Features",permalink:"/podlove-web-player/v4/features"},next:{title:"Embedding",permalink:"/podlove-web-player/v4/embedding"}},s=[{value:"CDN",id:"cdn",children:[]},{value:"NPM",id:"npm",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podlove Webplayer can be integrated in different ways. We provide the always latest version via CDN or all versions as an npm package."),(0,o.kt)("h2",{id:"cdn"},"CDN"),(0,o.kt)("p",null,"The easiest way to integrate the player is to simply integrate this script in your page:"),(0,o.kt)("p",null,"For https context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.podlove.org/web-player/4.x/embed.js"><\/script>\n')),(0,o.kt)("p",null,"For http context:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="http://cdn.podlove.org/web-player/4.x/embed.js"><\/script>\n')),(0,o.kt)("p",null,"Afterwards ",(0,o.kt)("inlineCode",{parentName:"p"},"podlovePlayer")," should be available on the window object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  podlovePlayer('#example', '/path/to/podcast/definition/or/object');\n<\/script>\n")),(0,o.kt)("p",null,"Please be aware to ",(0,o.kt)("strong",{parentName:"p"},"not")," set ",(0,o.kt)("inlineCode",{parentName:"p"},"reference.base")," because this will break the binding to the cdn."),(0,o.kt)("h2",{id:"npm"},"NPM"),(0,o.kt)("p",null,"If you want to serve a special player version you can find the player as the npm package ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@podlove/podlove-web-player"},"@podlove/podlove-web-player"),"."),(0,o.kt)("p",null,"To integrate the player you first have to install tha package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"npm install @podlove/podlove-web-player --save\n")),(0,o.kt)("p",null,"Afterwards move the player assets to a public folder of some webserver. By default the player will try to load further chunks from the webserver base. If the player files are located in a subpath you have to adapt the ",(0,o.kt)("inlineCode",{parentName:"p"},"reference.base")," accordingly (see ","[config]","({{ $withBase('config.html') }})"))}u.isMDXComponent=!0}}]);