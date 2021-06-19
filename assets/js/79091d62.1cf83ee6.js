(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[4235],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return b}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(t),b=i,f=u["".concat(l,".").concat(b)]||u[b]||p[b]||s;return t?o.createElement(f,r(r({ref:n},d),{},{components:t})):o.createElement(f,r({ref:n},d))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,r[1]=a;for(var c=2;c<s;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3171:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var o=t(2122),i=t(9756),s=(t(7294),t(3905)),r=["components"],a={title:"Templates"},l={unversionedId:"reference/templates/templates",id:"reference/templates/templates",isDocsHomePage:!1,title:"Templates",description:"The Publisher comes with existing templates. You can include these in your own templates or use them as inspiration. Embed them by using the Twig include keyword, for example: {% raw %}{% include '@core/shortcode/downloads-select.twig' %}{% endraw %}",source:"@site/publisher/reference/templates/templates.mdx",sourceDirName:"reference/templates",slug:"/reference/templates/templates",permalink:"/podlove-publisher/reference/templates/templates",editUrl:"https://github.com/podlove/podlove.github.com/edit/master/publisher/publisher/reference/templates/templates.mdx",version:"current",frontMatter:{title:"Templates"},sidebar:"0",previous:{title:"Shortcodes",permalink:"/podlove-publisher/reference/shortcodes"},next:{title:"Podcast",permalink:"/podlove-publisher/reference/templates/template-tags/podcast"}},c=[{value:"Core Templates",id:"core-templates",children:[{value:"Downloads (Select)",id:"downloads-select",children:[]},{value:"Downloads (Buttons)",id:"downloads-buttons",children:[]},{value:"List of Feeds",id:"list-of-feeds",children:[]},{value:"List of Episodes",id:"list-of-episodes",children:[]},{value:"License",id:"license",children:[]}]},{value:"Contributor Templates",id:"contributor-templates",children:[{value:"List of Podcast Contributors",id:"list-of-podcast-contributors",children:[]},{value:"Table of Podcast Contributors",id:"table-of-podcast-contributors",children:[]},{value:"Episode Contributors (comma separated)",id:"episode-contributors-comma-separated",children:[]},{value:"Episode Contributors (as list)",id:"episode-contributors-as-list",children:[]},{value:"Episode Contributors (as table)",id:"episode-contributors-as-table",children:[]}]},{value:"Social Templates",id:"social-templates",children:[{value:"List of Podcast Donations",id:"list-of-podcast-donations",children:[]},{value:"List of Podcast Social Media Services",id:"list-of-podcast-social-media-services",children:[]}]}],d={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Publisher comes with existing templates. You can include these in your own templates or use them as inspiration. Embed them by using the Twig ",(0,s.kt)("inlineCode",{parentName:"p"},"include")," keyword, for example: ",(0,s.kt)("inlineCode",{parentName:"p"},"{% raw %}{% include '@core/shortcode/downloads-select.twig' %}{% endraw %}")),(0,s.kt)("h2",{id:"core-templates"},"Core Templates"),(0,s.kt)("p",null,"These templates come with the Podlove Publisher and are always available."),(0,s.kt)("h3",{id:"downloads-select"},"Downloads (Select)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @core/shortcode/downloads-select.twig #}\n\n{% spaceless %}\n<form action="#">\n <div class="episode_downloads">\n    {% if podcast.setting("tracking", "mode") in ["ptm", "ptm_analytics"] %}\n        <input type="hidden" name="ptm_source" value="download" />\n        <input type="hidden" name="ptm_context" value="select-button" />\n    {% endif %}\n    <select name="download_media_file">\n    {% for file in episode.files %}\n        {% set asset = file.asset %}\n        {% if asset.downloadable %}\n            <option value="{{ file.id }}" data-raw-url="{{ file.publicUrl("download", "select-show") }}">{{ asset.title }} [{{ file.size|formatBytes }}]</option>\n        {% endif %}\n    {% endfor %}\n    </select>\n    <button class="primary">Download</button>\n    <button class="secondary">Show URL</button>\n </div>\n</form>\n{% endspaceless %}\n{% endraw %}\n')),(0,s.kt)("h3",{id:"downloads-buttons"},"Downloads (Buttons)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @core/shortcode/downloads-buttons.twig #}\n\n<ul class="episode_download_list">\n    {% for file in episode.files %}\n        {% set asset = file.asset %}\n        {% if asset.downloadable %}\n            <li>\n                <a href="{{ file.publicUrl("download", "buttonlist") }}">{{ asset.title }}<span class="size">{{ file.size|formatBytes }}</span></a>\n            </li>\n        {% endif %}\n    {% endfor %}\n</ul>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"list-of-feeds"},"List of Feeds"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @core/shortcode/feed-list.twig #}\n\n<table>\n    <thead>\n        <tr>\n            <th>Feed</th>\n            <th>Enclosure</th>\n        </tr>\n    </thead>\n    <tbody>\n    {% for feed in podcast.feeds %}\n        {% if feed.discoverable %}\n            <tr>\n                <td>\n                    <a href="{{ feed.url }}">{{ feed.title }}</a>\n                </td>\n                <td>\n                    <span title="{{ feed.asset.fileType.mimeType }} ({{ feed.asset.fileType.extension }})">\n                        {{ feed.asset.title }}\n                    </span>\n                </td>\n            </tr>\n        {% endif %}\n    {% endfor %}\n    </tbody>\n</table>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"list-of-episodes"},"List of Episodes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @core/shortcode/episode-list.twig #}\n\n<table>\n    <thead>\n        <th></th>\n        <th>Date</th>\n        <th>Title</th>\n        <th>Duration</th>\n    </thead>\n    <tbody>\n    {% for episode in podcast.episodes %}\n        <tr class="podcast_archive_element">\n            <td class="thumbnail">\n                {{ episode.image({fallback: true}).html({width: 64, height: 64}) }}\n            </td>\n            <td class="date">\n                <span class="release_date">\n                    {{ episode.publicationDate }}\n                </span>\n            </td>\n            <td class="title">\n                <a href="{{ episode.url }}">\n                    <strong>{{ episode.title }}</strong><br>\n                    {{ episode.subtitle }}\n                </a>\n            </td>\n            <td class="duration">\n                {% set duration = episode.duration %}\n                {{ duration.hours }}:{{ duration.minutes|padLeft("0",2) }}:{{ duration.seconds|padLeft("0",2) }}\n            </td>\n        </tr>\n    {% endfor %}\n    </tbody>\n</table>\n\n<style type="text/css">\n.podcast_archive_element .thumbnail {\n    width: 64px;\n    padding: 5px !important;\n}\n\n.podcast_archive_element td {\n    vertical-align: top;\n}\n</style>\n\n{% endraw %}\n')),(0,s.kt)("h3",{id:"license"},"License"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @core/license.twig #}\n\n{#\n    Include example:\n    {% include \'@core/license.twig\' %}\n\n    You can pass in a license to determine which one is displayed:\n    {% include \'@core/license.twig\' with {\'license\': podcast.license} %}\n#}\n{% if license is not defined %}\n    {% if episode is not null and episode.license.valid %}\n        {% set license = episode.license %}\n    {% else %}\n        {% set license = podcast.license %}\n    {% endif %}\n{% endif %}\n\n{% if license.valid %}\n    {% if license.creativeCommons %}\n        <div class="podlove_cc_license">\n            <img src="{{ license.imageUrl }}" alt="License" />\n            <p>\n                This work is licensed under a <a rel="license" href="{{ license.url }}">{{ license.name }}</a>\n            </p>\n        </div>\n    {% else %}\n        This work is licensed under the <a href="{{ license.url }}">{{ license.name }}</a> license.\n    {% endif %}\n{% else %}\n    <div class="podlove_license">\n        <p style="color: red;">\n            This work is (not yet) licensed, as no license was chosen.\n        </p>\n    </div>\n{% endif %}\n{% endraw %}\n')),(0,s.kt)("h2",{id:"contributor-templates"},"Contributor Templates"),(0,s.kt)("p",null,'These templates come with the "Contributors" module.'),(0,s.kt)("h3",{id:"list-of-podcast-contributors"},"List of Podcast Contributors"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @contributors/podcast-contributor-list.twig #}\n\n<table class="podlove-global-contributors">\n    {% if option.title %}\n        <thead>\n            <tr>\n                <th colspan="2">{{ option.title }}</th>\n            </tr>\n        </thead>\n    {% endif %}\n    <tbody>\n        {% for contributor in podcast.contributors %}\n            {% if contributor.visible %}\n                <tr>\n                    <td rowspan="2" class="avatar-cell" width="60">\n                        {{ contributor.image.html({width: 60, height: 60, class: "avatar avatar-" ~ size ~  " photo", alt: "avatar" }) }}\n                    </td>\n                    <td class="social-cell">\n                        <strong class="contributor-name">{{ contributor.name }}</strong>\n                        <div class="social-icons">\n                            {% for service in contributor.socialServices %}\n                                <a target="_blank" title="{{ service.title }}" href="{{ service.profileUrl }}">\n                                    {{\n                                        service.image.html({\n                                            width: 32,\n                                            class: "podlove-contributor-button",\n                                            alt: service.title ~ " Icon"\n                                        })\n                                    }}\n                                </a>\n                            {% endfor %}\n                        </div>\n                    </td>\n                </tr>\n                <tr class="episode-row">\n                    <td class="episodes-cell">\n                        <ul>\n                        {% for episode in contributor.episodes %}\n                            <li>\n                                <a href="{{ episode.url }}">{{ episode.title }}</a>\n                            </li>\n                        {% endfor %}\n                        </ul>\n                    </td>\n                </tr>\n            {% endif %}\n        {% endfor %}\n    </tbody>\n</table>\n\n<script type="text/javascript">\n(function ($) {\n    $(document).ready(function() {\n        $(".podlove-global-contributors .episodes-cell").each(function() {\n            var items = $("li", this);\n\n\n            if (items.length > 5) {\n                $("li:gt(4)", this).hide();\n                $(\'<span class="show-all-episodes"><a href="#">\u2026 show all episodes</a><span>\').insertAfter($("ul", this));\n            }\n        });\n\n        $(".podlove-global-contributors").on("click", ".show-all-episodes a", function(e) {\n            e.preventDefault();\n\n            $(this).closest(".episodes-cell")\n                .find("li").show().end()\n                .find(".show-all-episodes").hide();\n        });\n    });\n}(jQuery));\n<\/script>\n\n<style type="text/css">\n.podlove-global-contributors td {\n    vertical-align: top;\n    line-height: 1.3em;\n}\n\n.podlove-global-contributors .avatar-cell {\n    max-width: 100px;\n    text-align: center;\n}\n\n.podlove-global-contributors td {\n    border-top-width: 0px;\n}\n\n.podlove-global-contributors .episode-row {\n    /*margin-bottom: 10px;*/\n}\n\n.podlove-global-contributors td ul {\n    margin: 0;\n}\n\n.podlove-global-contributors .social-cell li {\n    margin: 0;\n}\n\n.podlove-global-contributors .episodes-cell {\n    padding-top: 0px;\n}\n\n.podlove-global-contributors .episodes-cell li {\n    display: inline-block;\n    margin: 0;\n}\n\n.podlove-global-contributors .episodes-cell li a {\n    background: #eee;\n    padding: 2px 10px;\n    line-height: 170%;\n    border-radius: 10px;\n}\n\n</style>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"table-of-podcast-contributors"},"Table of Podcast Contributors"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},"{% raw %}\n{# @contributors/podcast-contributor-table.twig #}\n\n<table class=\"podlove-contributors-table\">\n    <tbody>\n        {% for contributor in podcast.contributors({group: option.group, role: option.role, scope: 'podcast'}) %}\n            {% if contributor.visible %}\n                {% include '@contributors/_contributor-table-row.twig' %}\n            {% endif %}\n        {% endfor %}\n    </tbody>\n</table>\n\n{% if option.flattr == \"yes\" %}\n    {% include '@contributors/_contributor-table-flattr.twig' %}\n{% endif %}\n\n{% include '@contributors/_contributor-table-css.twig' %}\n{% endraw %}\n")),(0,s.kt)("h3",{id:"episode-contributors-comma-separated"},"Episode Contributors (comma separated)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @contributors/contributor-comma-separated.twig #}\n\n<span class="podlove-contributors">\n    {% for contributor in episode.contributors({group: group, role: role}) %}\n        {% if contributor.visible %}\n            <span>\n                {% if option.avatars == "yes" %}\n                    {{ contributor.image.html({width: 18, height: 18, class: "avatar avatar-" ~ size ~  " photo", alt: "avatar" }) }}\n                {% endif %}\n                <span class="name">{{ contributor.name }}</span></span>{% if not loop.last %}, {% endif %}\n        {% endif %}\n    {% endfor %}\n</span>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"episode-contributors-as-list"},"Episode Contributors (as list)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @contributors/contributor-list.twig #}\n\n<ul class="podlove-contributors">\n{% for contributor in episode.contributors({group: group, role: role}) %}\n    {% if contributor.visible %}\n        <li>\n            {% if option.avatars == "yes" %}\n                <span class="avatar">\n                    {{ contributor.image.html({width: size|default(50), height: size|default(50), class: "avatar avatar-" ~ size|default(50) ~  " photo", alt: "avatar" }) }}\n                </span>\n            {% endif %}\n            <span class="name">{{ contributor.name }}</span>\n        </li>\n    {% endif %}\n{% endfor %}\n</ul>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"episode-contributors-as-table"},"Episode Contributors (as table)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @contributors/contributor-table.twig #}\n\n{% set colspan = 2 %}\n{% if avatars == "yes"   %}{% set colspan = colspan + 1 %}{% endif %}\n{% if groups == "yes"    %}{% set colspan = colspan + 1 %}{% endif %}\n{% if roles == "yes"     %}{% set colspan = colspan + 1 %}{% endif %}\n{% if donations == "yes" %}{% set colspan = colspan + 1 %}{% endif %}\n{% if flattr == "yes"    %}{% set colspan = colspan + 1 %}{% endif %}\n\n<table class="podlove-contributors-table">\n    {% if option.title %}\n        <thead>\n            <tr>\n                <th colspan="{{ colspan }}">{{ title }}</th>\n            </tr>\n        </thead>\n    {% endif %}\n    <tbody>\n        {% if option.groupby == "group" %}\n            {% for contributorGroup in episode.contributors({groupby: \'group\', group: option.group, role: option.role}) %}\n                <tr>\n                    <th colspan="{{ colspan }}" class="contributor-group">\n                        {% if contributorGroup.group %}\n                            {{ contributorGroup.group.title }}\n                        {% else %}\n                            &nbsp;\n                        {% endif %}\n                    </th>\n                </tr>\n                {% for contributor in contributorGroup.contributors %}\n                    {% if contributor.visible %}\n                        {% include \'@contributors/_contributor-table-row.twig\' %}\n                    {% endif %}\n                {% endfor %}\n            {% endfor %}\n        {% else %}\n            {% for contributor in episode.contributors({group: option.group, role: option.role}) %}\n                {% if contributor.visible %}\n                    {% include \'@contributors/_contributor-table-row.twig\' %}\n                {% endif %}\n            {% endfor %}\n        {% endif %}\n    </tbody>\n</table>\n\n{% if option.flattr == "yes" %}\n    {% include \'@contributors/_contributor-table-flattr.twig\' %}\n{% endif %}\n\n{% include \'@contributors/_contributor-table-css.twig\' %}\n{% endraw %}\n')),(0,s.kt)("h2",{id:"social-templates"},"Social Templates"),(0,s.kt)("p",null,'These templates come with the "Social ',"&",' Donations" module.'),(0,s.kt)("h3",{id:"list-of-podcast-donations"},"List of Podcast Donations"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @social/podcast-donations-list.twig #}\n\n<ul class="podcast_services">\n{% for service in podcast.services({category: "donation"}) %}\n    <li>\n        <a href="{{ service.profileUrl }}" title="{{ service.description }}">\n            {{\n                service.image.html({\n                    width: 16,\n                    alt: service.title ~ " Icon"\n                })\n            }} {{ service.title }}\n        </a>\n    </li>\n{% endfor %}\n</ul>\n\n<style>\n.podcast_services li {\n    list-style: none;\n}\n</style>\n{% endraw %}\n')),(0,s.kt)("h3",{id:"list-of-podcast-social-media-services"},"List of Podcast Social Media Services"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-handlebars"},'{% raw %}\n{# @social/podcast-social-media-list.twig #}\n\n<ul class="podcast_services">\n{% for service in podcast.services({category: "social"}) %}\n    <li>\n        <a href="{{ service.profileUrl }}" title="{{ service.description }}">\n            {{\n                service.image.html({\n                    width: 16,\n                    alt: service.title ~ " Icon"\n                })\n            }} {{ service.title }}\n        </a>\n    </li>\n{% endfor %}\n</ul>\n\n<style>\n.podcast_services li {\n    list-style: none;\n}\n</style>\n{% endraw %}\n')))}p.isMDXComponent=!0}}]);