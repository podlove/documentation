---
layout: page
title: "Constants"
---

Podlove Publisher behavior can be modified using PHP constants. There are various places where you can set these. If you are unsure, `wp-config.php` is a good place, _above_ the line `/* That's all, stop editing! Happy blogging. */`.

| Constant        | Description           |
| ------------- |-------------|
| `PODLOVE_TEMPLATE_CACHE` | Set to `false` to disable template caches. This will significantly increase response times for websites and feeds but might be acceptable if a page cache is used. |
| `PODLOVE_IMAGE_CACHE_FORCE_DYNAMIC_URL` | When set to `true`, the static "physical" URL is never exposed, only the dynamic URL. This can be  helpful when page caches keep serving the static URL even though it  does not exist for some reason. The dynamic URL always works. Drawback is that serving with the dynamic URL is a bit slower because it has to go through the PHP stack. |
| `PODLOVE_DISABLE_IMAGE_CACHE` | Set to `true` to disable image caching and resizing. Last resort if your setup appears to be unable to serve images like episode images and contrubutor avatars. Undesirable as all images will be served full size instead of optimized. |

<style>
table td {
  padding: 10px 5px 10px 0px;
  vertical-align: top;
}
</style>

