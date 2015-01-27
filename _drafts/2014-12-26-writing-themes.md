---
layout: page
title: "Writing Themes"
---

Developing themes for WordPress is easy to get started with, but hard to do perfectly. The Podlove Publisher relies on [Custom Post Types][cpt] and if you want your theme to work smoothly, please read on.

## Custom Queries

It's a good idea to see how the default themes, like "[twentyfifteen][t15]", are coded. They only use the simplest query methods: `have_posts()` and `the_post()`. If you keep to that, you're golden.

Chances are, you want to offer theme features that require custom queries using the [`WP_Query` class][wpq] to fetch posts.

### Respect Main Query

### Set `post_type` with Care

## Post Classes

[cpt]: http://codex.wordpress.org/Post_Types#Custom_Post_Types
[t15]: https://wordpress.org/themes/twentyfifteen
[wpq]: http://codex.wordpress.org/Class_Reference/WP_Query