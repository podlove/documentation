(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(7),i=(a(0),a(169)),b={title:"Podcast"},r={unversionedId:"reference/template-tags/podcast",id:"reference/template-tags/podcast",isDocsHomePage:!1,title:"Podcast",description:"Title",source:"@site/publisher/reference/template-tags/podcast.mdx",slug:"/reference/template-tags/podcast",permalink:"/podlove-publisher/reference/template-tags/podcast",version:"current",sidebar:"0",previous:{title:"Templates",permalink:"/podlove-publisher/reference/templates"},next:{title:"Episode",permalink:"/podlove-publisher/reference/template-tags/episode"}},o=[{value:"Title",id:"title",children:[]},{value:"Subtitle",id:"subtitle",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Mnemonic / Abbreviation",id:"mnemonic--abbreviation",children:[]},{value:"Type",id:"type",children:[]},{value:"Image URL",id:"image-url",children:[]},{value:"Image",id:"image",children:[]},{value:"Author name",id:"author-name",children:[]},{value:"Owner name",id:"owner-name",children:[]},{value:"Publisher name",id:"publisher-name",children:[]},{value:"Publisher URL",id:"publisher-url",children:[]},{value:"Podcast Home URL",id:"podcast-home-url",children:[]},{value:"Episodes",id:"episodes",children:[]},{value:"Feeds",id:"feeds",children:[]},{value:"Feed",id:"feed",children:[]},{value:"License",id:"license",children:[]},{value:"Setting",id:"setting",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Contributor",id:"contributor",children:[]},{value:"Seasons",id:"seasons",children:[]},{value:"Shows",id:"shows",children:[]},{value:"Services",id:"services",children:[]},{value:"Subscribe Button",id:"subscribe-button",children:[]}],c={toc:o};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"title"},"Title"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.title")),Object(i.b)("h3",{id:"subtitle"},"Subtitle"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.subtitle")),Object(i.b)("h3",{id:"summary"},"Summary"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.summary")),Object(i.b)("h3",{id:"mnemonic--abbreviation"},"Mnemonic / Abbreviation"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.mnemonic")),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.type")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"One of: episodic, serial")),Object(i.b)("h3",{id:"image-url"},"Image URL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.imageUrl")),Object(i.b)("h3",{id:"image"},"Image"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.image")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"see ",Object(i.b)("a",{parentName:"li",href:"./image"},"Image"))),Object(i.b)("h3",{id:"author-name"},"Author name"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.authorName")),Object(i.b)("h3",{id:"owner-name"},"Owner name"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.ownerEmail")),Object(i.b)("h3",{id:"publisher-name"},"Publisher name"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.publisherName")),Object(i.b)("h3",{id:"publisher-url"},"Publisher URL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.publisherUrl")),Object(i.b)("h3",{id:"podcast-home-url"},"Podcast Home URL"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.landingPageUrl")),Object(i.b)("h3",{id:"episodes"},"Episodes"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.episodes")),Object(i.b)("p",null,"Filter and order episodes with parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"post_id"),": one episode matching the given post id"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"post_ids"),": list of episodes matching the given list of post ids"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"category"),": list of episodes matching the category slug"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"slug"),": one episode matching the given slug"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"slugs"),": list of episodes matching the given list of slugs"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"post_status"),": Publication status of the post. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"publish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"order"),": Designates the ascending or descending order of the ",Object(i.b)("inlineCode",{parentName:"li"},"orderby")," parameter. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"DESC"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ASC")," - ascending order from lowest to highest values (1, 2, 3; a, b, c)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DESC")," - descending order from highest to lowest values (3, 2, 1; c, b, a)."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"orderby"),": Sort retrieved episodes by parameter. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"publicationDate"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"publicationDate")," - Order by publication date."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"recordingDate")," - Order by recording date."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"title")," - Order by title."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"slug")," - Order by episode slug."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"limit"),": Limit the number of returned episodes.")),Object(i.b)("h4",{id:"examples"},"Examples"),Object(i.b)("p",null,"Iterate over all published episodes, ordered by publication date."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"{% for e in podcast.episodes %}\n  {{ e.title }}\n{% endfor %}\n")),Object(i.b)("p",null,"Order by title in ascending order."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"{% for e in podcast.episodes({orderby: 'title', 'order': 'ASC'}) %}\n  {{ e.title }}\n{% endfor %}\n")),Object(i.b)("p",null,"Fetch one ",Object(i.b)("a",{parentName:"p",href:"./episode"},"episode")," by slug."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"{{ podcast.episodes({slug: 'pod001'}).title }}\n")),Object(i.b)("h3",{id:"feeds"},"Feeds"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.feeds")),Object(i.b)("p",null,"see ",Object(i.b)("a",{parentName:"p",href:"./feed"},"feed")),Object(i.b)("h3",{id:"feed"},"Feed"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.feed")),Object(i.b)("p",null,"Single Feed by Slug/ID"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},'{% set feed = podcast.feed("mp3") %}\nThe Feed: <a href="{{ feed.url }}">{{ feed.title }}</a>\n')),Object(i.b)("p",null,"see ",Object(i.b)("a",{parentName:"p",href:"./feed"},"feed")),Object(i.b)("h3",{id:"license"},"License"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.license")),Object(i.b)("p",null,"To render an HTML license, use ",Object(i.b)("inlineCode",{parentName:"p"},"{% include '@core/license.twig'")," with ",Object(i.b)("inlineCode",{parentName:"p"},"{'license': podcast.license} %}")),Object(i.b)("p",null,"see ",Object(i.b)("a",{parentName:"p",href:"./license"},"license")),Object(i.b)("h3",{id:"setting"},"Setting"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.setting")),Object(i.b)("p",null,"Get a podcast setting. Valid namespaces / names:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"website",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"merge_episodes"),Object(i.b)("li",{parentName:"ul"},"hide_wp_feed_discovery"),Object(i.b)("li",{parentName:"ul"},"use_post_permastruct"),Object(i.b)("li",{parentName:"ul"},"custom_episode_slug"),Object(i.b)("li",{parentName:"ul"},"episode_archive"),Object(i.b)("li",{parentName:"ul"},"episode_archive_slug"),Object(i.b)("li",{parentName:"ul"},"url_template"),Object(i.b)("li",{parentName:"ul"},"ssl_verify_peer"))),Object(i.b)("li",{parentName:"ul"},"metadata",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"enable_episode_recording_date"),Object(i.b)("li",{parentName:"ul"},"enable_episode_explicit"),Object(i.b)("li",{parentName:"ul"},"enable_episode_license"))),Object(i.b)("li",{parentName:"ul"},"redirects",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"podlove_setting_redirect"))),Object(i.b)("li",{parentName:"ul"},"tracking",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mode")))),Object(i.b)("h3",{id:"contributors"},"Contributors"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.contributors")),Object(i.b)("p",null,"List of podcast contributors"),Object(i.b)("h4",{id:"examples-1"},"Examples"),Object(i.b)("p",null,"Iterating over a list of contributors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},'{% for contributor in podcast.contributors({scope: "podcast"}) %}\n    {{ contributor.name }}\n    {% if not loop.last %}, {% endif %}\n{% endfor %}\n')),Object(i.b)("p",null,"Iterating over a grouped list of contributors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},'{% for contributorGroup in podcast.contributors({scope: "podcast", groupby: "group"}) %}\n    <strong>{{ contributorGroup.group.title }}:</strong>\n    {% for contributor in contributorGroup.contributors %}\n        {{ contributor.name }}\n        {% if not loop.last %}, {% endif %}\n    {% endfor %}\n{% endfor %}\n')),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"id"),": Fetch one contributor by its id. DEPRECATED: Usepodcast.contributor(id) instead."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"scope"),": Either ",Object(i.b)("inlineCode",{parentName:"li"},"global"),", ",Object(i.b)("inlineCode",{parentName:"li"},"globa-active")," or ",Object(i.b)("inlineCode",{parentName:"li"},"podcast"),". - ",Object(i.b)("inlineCode",{parentName:"li"},"global")," returns all contributors. - ",Object(i.b)("inlineCode",{parentName:"li"},"globa"),"-active\u201d returns all contributors with at least one contribution in a published episode. - ",Object(i.b)("inlineCode",{parentName:"li"},"podcast")," returns the contributors configured in podcast settings. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"globa"),"-active\u201d."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"group"),": filter by group slug. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"all"),", which does not filter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"role"),": filter by role slug. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"all"),", which does not filter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"groupby"),": group or role slug. Group by ",Object(i.b)("inlineCode",{parentName:"li"},"group")," or ",Object(i.b)("inlineCode",{parentName:"li"},"role"),". If used, the returned data is has another layer for the groups. See examples for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"order"),": Designates the ascending or descending order of the ",Object(i.b)("inlineCode",{parentName:"li"},"orderby")," parameter. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"DESC"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ASC")," - ascending order from lowest to highest values (1, 2, 3; a, b, c)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DESC")," - descending order from highest to lowest values (3, 2, 1; c, b, a)."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"orderby"),": Sort contributors by parameter. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"name"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - Order by public name.")))),Object(i.b)("h3",{id:"contributor"},"Contributor"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.contributor")),Object(i.b)("p",null,"Get one contributor by id."),Object(i.b)("h4",{id:"examples-2"},"Examples"),Object(i.b)("p",null,"Iterating over a list of contributors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"{{ podcast.contributor('james').name }}\n")),Object(i.b)("h3",{id:"seasons"},"Seasons"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.seasons")),Object(i.b)("p",null,"List of podcast seasons"),Object(i.b)("p",null,"Parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"order"),": (optional) ",Object(i.b)("inlineCode",{parentName:"li"},"DESC")," or ",Object(i.b)("inlineCode",{parentName:"li"},"ASC"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"ASC"))),Object(i.b)("h3",{id:"shows"},"Shows"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.shows")),Object(i.b)("p",null,"List of all Podcast shows."),Object(i.b)("h4",{id:"examples-3"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"This podcast features several shows:\n<ul>\n    {% for show in podcast.shows %}\n     <li>{{ show.title }}</li>\n {% endfor %}\n</ul>\n")),Object(i.b)("h3",{id:"services"},"Services"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.services")),Object(i.b)("p",null,"List of service profiles"),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"category"),": (optional) ",Object(i.b)("inlineCode",{parentName:"li"},"social"),", ",Object(i.b)("inlineCode",{parentName:"li"},"donation")," or ",Object(i.b)("inlineCode",{parentName:"li"},"all"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"all")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"type"),": (optional) Filter services by type. List of all service types: 500px, amazon wishlist, app.net, bandcamp, bitbucket, bitcoin, deviantart, diaspora, dogecoin, dribbble, facebook, flattr, flickr, generic wishlist, github, google+, instagram, jabber, last.fm, linkedin, litecoin, openstreetmap, paypal, miiverse, pinboard, pinterest, playstation network, skype, soundcloud, soup, steam, steam wishlist, thomann wishlist, twitch, tumblr, twitter, website, xbox live, xing, youtube")),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},'{% for service in podcast.services({category: "social"}) %}\n  <a target="_blank" title="{{ service.title }}" href="{{ service.profileUrl }}">\n    {{ service.image.html({width: 20}) }}\n  </a>\n{% endfor %}\n')),Object(i.b)("h3",{id:"subscribe-button"},"Subscribe Button"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"podcast.subscribeButton")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-twig"},"{{ podcast.subscribeButton }}\n\n{{ podcast.subscribeButton({format: 'square', color: '#000000', style: 'frameless', size: 'medium'}) }}\n")),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"show"),': If you are using the "Shows" module, you can set the show slug. The button will then be for that show instead of the main podcast.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"format"),": Choose a button format, options are ",Object(i.b)("inlineCode",{parentName:"li"},"rectangle"),", ",Object(i.b)("inlineCode",{parentName:"li"},"square")," and ",Object(i.b)("inlineCode",{parentName:"li"},"cover")," (Note: ",Object(i.b)("inlineCode",{parentName:"li"},"cover")," has a max size of 300px) Default: ",Object(i.b)("inlineCode",{parentName:"li"},"cover")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"style"),": Choose a button style, options are ",Object(i.b)("inlineCode",{parentName:"li"},"filled"),", ",Object(i.b)("inlineCode",{parentName:"li"},"outline")," and ",Object(i.b)("inlineCode",{parentName:"li"},"frameless"),". Default: ",Object(i.b)("inlineCode",{parentName:"li"},"filled")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"size"),": Size and style of the button (",Object(i.b)("inlineCode",{parentName:"li"},"small"),", ",Object(i.b)("inlineCode",{parentName:"li"},"medium"),", ",Object(i.b)("inlineCode",{parentName:"li"},"big"),"). All of the sizes can be combined with ",Object(i.b)("inlineCode",{parentName:"li"},"auto")," to adapt the button width to the available space like this: ",Object(i.b)("inlineCode",{parentName:"li"},"bi")," auto\u2019. Default: ",Object(i.b)("inlineCode",{parentName:"li"},"big")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"color"),": Define the color of the button. Allowed are all notations for colors that CSS can understand (keyword, rgb-hex, rgb, rgba, hsl, hsla). Please Note: It is not possible to style multiple buttons/popups on the same page differently."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"language"),": ",Object(i.b)("inlineCode",{parentName:"li"},"de"),", ",Object(i.b)("inlineCode",{parentName:"li"},"en"),", ",Object(i.b)("inlineCode",{parentName:"li"},"eo"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fi"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fr"),", ",Object(i.b)("inlineCode",{parentName:"li"},"nl"),", ",Object(i.b)("inlineCode",{parentName:"li"},"zh")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ja"),'. Defaults to podcast language setting. If you set the buttonid to "example123", your element must have the class \u201cpodlove-subscribe-button-example123\u201d.'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hide"),": Set totrue if you want to hide the default button element. Useful if you provide your own button via thebuttonid setting."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"buttonid"),": Use this if you want to trigger the button by clicking an element controlled by you.")))}s.isMDXComponent=!0},169:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),s=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(b,".").concat(d)]||p[d]||u[d]||i;return a?l.a.createElement(m,r(r({ref:t},c),{},{components:a})):l.a.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,b[1]=r;for(var c=2;c<i;c++)b[c]=a[c];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);