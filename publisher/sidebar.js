module.exports = [
  [
    {
      type: "doc",
      id: "publisher-landing",
    },
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/getting-started",
        "guides/podcast-network",
        "guides/templates",
        "guides/api-usage"
      ],
    },
    {
      type: "category",
      label: "Modules",
      items: ["modules/transcripts", "modules/shownotes", "modules/slacknotes"],
    },
    {
      type: "category",
      label: "Reference",
      items: [
        "reference/shortcodes",
        {
          type: "category",
          label: "Templates",
          items: [
            "reference/templates/templates",
            {
              type: "category",
              label: "Template Tags",
              items: [
                "reference/templates/template-tags/podcast",
                "reference/templates/template-tags/episode",
                "reference/templates/template-tags/network",
                "reference/templates/template-tags/podcast-list",
                "reference/templates/template-tags/chapter",
                "reference/templates/template-tags/feed",
                "reference/templates/template-tags/asset",
                "reference/templates/template-tags/file",
                "reference/templates/template-tags/image",
                "reference/templates/template-tags/tag",
                "reference/templates/template-tags/category",
                "reference/templates/template-tags/duration",
                "reference/templates/template-tags/contributor",
                "reference/templates/template-tags/season",
                "reference/templates/template-tags/service",
                "reference/templates/template-tags/show",
                "reference/templates/template-tags/shownotes",
                "reference/templates/template-tags/license",
                "reference/templates/template-tags/date-time",
                "reference/templates/template-tags/line",
                "reference/templates/template-tags/group",
              ],
            },
            "reference/templates/template-conditionals",
          ],
        },

        "reference/php-constants",
        "reference/dsgvo-gdpr",
        "reference/download-analytics",
      ],
    },
    {
      type: "category",
      label: "Developer",
      items: [
        "developer/projects",
        "developer/modules",
        "developer/background-jobs",
      ],
    },
    {
      type: "category",
      label: "Faq",
      items: ["faq/image-cache", "faq/chapter-marks", "faq/episode-images"],
    },
    "requirements",
    "join-the-beta",,
    {
      type: 'link',
      label: 'API',
      href: '/podlove-publisher/api',
    },
  ],
];
