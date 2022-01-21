(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[812],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=i(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2504:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),r=["components"],p={title:"Templates"},s={unversionedId:"guides/templates",id:"guides/templates",isDocsHomePage:!1,title:"Templates",description:"Templates are user-defined, dynamic, reusable snippets of HTML. The publisher provides an API to every piece of data related to your podcast. Using templates, you can display every detail in every layout you like.",source:"@site/publisher/guides/templates.mdx",sourceDirName:"guides",slug:"/guides/templates",permalink:"/podlove-publisher/guides/templates",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/guides/templates.mdx",version:"current",frontMatter:{title:"Templates"},sidebar:"0",previous:{title:"Podcast Network",permalink:"/podlove-publisher/guides/podcast-network"},next:{title:"Transcripts",permalink:"/podlove-publisher/modules/transcripts"}},i=[{value:"Creating Twig Templates \u2014 For Podlove Publisher Users",id:"creating-twig-templates--for-podlove-publisher-users",children:[{value:"Episode Templates",id:"episode-templates",children:[]},{value:"Shortcode Options",id:"shortcode-options",children:[]},{value:"Subtemplates",id:"subtemplates",children:[]},{value:"Macros",id:"macros",children:[]}]},{value:"Creating PHP Templates \u2014 For Theme Developers",id:"creating-php-templates--for-theme-developers",children:[{value:"API Entry Points",id:"api-entry-points",children:[]},{value:"Hint: Short syntax for PHP 5.6+",id:"hint-short-syntax-for-php-56",children:[]}]}],d={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Templates are user-defined, dynamic, reusable snippets of HTML. The publisher provides an API to ",(0,l.kt)("a",{parentName:"p",href:"/podlove-publisher/reference/templates/template-tags/podcast"},"every piece of data")," related to your podcast. Using templates, you can display every detail in every layout you like."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://twig.sensiolabs.org/"},"Twig")," is used to make templates dynamic. Printing a variable in Twig looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},"{% raw %}\n<strong>{{ podcast.title }}</strong>\n{% endraw %}\n")),(0,l.kt)("p",null,"You can iterate over a list of items:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n<ul>\n{% for episode in podcast.episodes %}\n  <li>\n    <a href="{{ episode.url }}">\n      {{ episode.title }}\n    </a> \u2014 {{ episode.subtitle }}\n  </li>\n{% endfor %}\n</ul>\n{% endraw %}\n')),(0,l.kt)("p",null,"These are the basics. You can refer to the ",(0,l.kt)("a",{parentName:"p",href:"http://twig.sensiolabs.org/doc/templates.html"},"Twig Documentation")," for all available options."),(0,l.kt)("h2",{id:"creating-twig-templates--for-podlove-publisher-users"},"Creating Twig Templates \u2014 For Podlove Publisher Users"),(0,l.kt)("p",null,"To create a template, go to ",(0,l.kt)("inlineCode",{parentName:"p"},"Podlove \u2192 Templates"),' and click "Add New".'),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"ID")," is used to reference the template from your episodes or pages. Choose a descriptive name. The fun starts below. The ",(0,l.kt)("em",{parentName:"p"},"HTML Template")," is a freeform textfield. Write HTML/Twig there. All ",(0,l.kt)("a",{parentName:"p",href:"/podlove-publisher/reference/templates/template-tags/podcast"},"template variables")," and WordPress shortcodes are available. Click save when you are done."),(0,l.kt)("p",null,"Go to any post, page or episode and paste the template shortcode. It should look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[podlove-template template="episode"]\n')),(0,l.kt)("p",null,"Save and view the edited page. You should see the contents of your template. You can now go back to the template and edit until you like the results."),(0,l.kt)("h3",{id:"episode-templates"},"Episode Templates"),(0,l.kt)("p",null,"Templates which are used in episodes are special. In episodes, an additional variable is available: ",(0,l.kt)("inlineCode",{parentName:"p"},"episode"),". It contains the current episode object."),(0,l.kt)("p",null,"For example, you could build your own download list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n<ul>\n    {% for file in episode.files %}\n        {% if file.asset.downloadable %}\n            <li>\n                <a href="{{ file.url }}">{{ file.asset.title }}</a>\n            </li>\n        {% endif %}\n    {% endfor %}\n</ul>\n{% endraw %}\n')),(0,l.kt)("h3",{id:"shortcode-options"},"Shortcode Options"),(0,l.kt)("p",null,"To make template modular and reusable, you can pass options to the template shortcode. They are then available under the ",(0,l.kt)("inlineCode",{parentName:"p"},"option")," accessor. So a template embedded using ",(0,l.kt)("inlineCode",{parentName:"p"},'[podlove-template template="episode" language="en"]')," will have access to the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"{{ option.language }}"),"."),(0,l.kt)("p",null,"To set option defaults. Here is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},"{% raw %}\n{# call shortcode with, for example, size=\"small\" parameter, or let it default to \"big-logo\" #}\n\n{% set option = {\n    size: 'big-logo',\n    colors: 'black;;;#ffffff'\n}|merge(option) %}\n\n{{ podcast.subscribeButton({colors: option.colors, size: option.size}) }}\n{% endraw %}\n")),(0,l.kt)("h3",{id:"subtemplates"},"Subtemplates"),(0,l.kt)("p",null,"If you are looking for a way to reuse template parts or want to split up complex templates, subtemplates are the solution. They allow to embed templates in templates while keeping the scope of one local variable. All global variables are available as usual."),(0,l.kt)("p",null,"An example:"),(0,l.kt)("p",null,"The template ",(0,l.kt)("inlineCode",{parentName:"p"},"file-link")," contains the markup to render the link to a file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n<a href="{{ file.url }}">{{ file.asset.title }}</a>\n{% endraw %}\n')),(0,l.kt)("p",null,"Now this template can be used in another template. All variables from the parent template are available in the child template."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n<ul>\n    {% for file in episode.files %}\n        {% if file.asset.downloadable %}\n            <li>{{ include("file-link") }}</li>\n        {% endif %}\n    {% endfor %}\n</ul>\n{% endraw %}\n')),(0,l.kt)("h3",{id:"macros"},"Macros"),(0,l.kt)("p",null,"Twig allows you to create ",(0,l.kt)("a",{parentName:"p",href:"http://twig.sensiolabs.org/doc/tags/macro.html"},"macros"),' to put often used HTML idioms into reusable elements to not repeat yourself. To be able to use them in multiple templates, they are best saved in a separate template. You might call it "mymacros":'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n\x3c!-- template "mymacros" --\x3e\n{% macro input(name, value, type, size) %}\n    <input type="{{ type|default(\'text\') }}" name="{{ name }}" value="{{ value|e }}" size="{{ size|default(20) }}" />\n{% endmacro %}\n{% endraw %}\n')),(0,l.kt)("p",null,"To use them in another template, you need to import the macros before using them:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},"{% raw %}\n{% import \"mymacros\" as forms %}\n{{ forms.input('username') }}\n{% endraw %}\n")),(0,l.kt)("h2",{id:"creating-php-templates--for-theme-developers"},"Creating PHP Templates \u2014 For Theme Developers"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available from Podlove Publisher version 2.3")),(0,l.kt)("p",null,"You have access to the complete Podlove Publisher template system from PHP, which is ideal for creating themes."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/podlove-publisher/reference/templates/template-tags/podcast"},"template variables and API")," is identical to the one provided by Twig. Just the syntax is different."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-handlebars"},"{% raw %}\n<ul>\n{% for episode in podcast.episodes %}\n    <li>{{ episode.title }}</li>\n{% endfor %}\n</ul>\n{% endraw %}\n")),(0,l.kt)("p",null,"is equivalent to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<ul>\n<?php foreach (\\Podlove\\get_podcast()->episodes() as $episode): ?>\n    <li><?php echo $episode->title() ?></li>\n<?php endforeach ?>\n</ul>\n")),(0,l.kt)("h3",{id:"api-entry-points"},"API Entry Points"),(0,l.kt)("p",null,"There are currently 4 entry points to the API: through the podcast, episode, network or Flattr."),(0,l.kt)("h4",{id:"podcast"},"Podcast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Get Podlove podcast template object.\n *\n * @param  int $blog_id              Optional. Blog ID. Defaults to global $blog_id.\n * @return \\Podlove\\Template\\Podcast\n */\nfunction \\Podlove\\get_podcast($blog_id = null);\n\n// example\n$podcast = \\Podlove\\get_podcast();\necho $podcast->title();\n?>\n")),(0,l.kt)("h4",{id:"episode"},"Episode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Get Podlove episode template object.\n *\n * @param  int|WP_Post $post          Optional. Post ID or post object. Defaults to global $post.\n * @return \\Podlove\\Template\\Episode\n */\nfunction \\Podlove\\get_episode($id = null);\n\n// example\n$episode = \\Podlove\\get_episode();\necho $episode->player(['context' => 'episode']);\n?>\n")),(0,l.kt)("h4",{id:"network"},"Network"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Get Podlove network template object.\n *\n * Only available in WordPress Multisite environments.\n *\n * @return \\Podlove\\Modules\\Networks\\Template\\Network\n */\nfunction \\Podlove\\get_network();\n\n// example\n$network_lists = \\Podlove\\get_network()->lists();\n?>\n")),(0,l.kt)("h4",{id:"flattr"},"Flattr"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Get Podlove Flattr template object.\n *\n * Requires \"Flattr\" module.\n *\n * @return \\Podlove\\Modules\\Flattr\\Template\\Flattr\n */\nfunction \\Podlove\\get_flattr();\n\n// example\necho \\Podlove\\get_flattr([\n    'url' => 'http://wordpress.org/extend/plugins/podlove-podcasting-plugin-for-wordpress/',\n    'user' => 'ericteubert'\n]);\n?>\n")),(0,l.kt)("h3",{id:"hint-short-syntax-for-php-56"},"Hint: Short syntax for PHP 5.6+"),(0,l.kt)("p",null,"If you develop a theme for PHP 5.6+ environments, you may want to use function importing for a nicer syntax, like that:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n// once at the beginning of each file, ONLY PHP 5.6+\nuse function \\Podlove\\get_episode;\nuse function \\Podlove\\get_podcast;\n\necho get_podcast()->title();\n?>\n")))}u.isMDXComponent=!0}}]);