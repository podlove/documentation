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
        'guides/getting-started',
        'guides/chapter-marks',
        'guides/episode-images',
        'guides/podcast-migration',
        'guides/podcast-network',
        'guides/understanding-templates',
        'guides/download-analytics',
        'guides/dsgvo-gdpr',
        'guides/image-cache',
        'guides/slacknotes',
        'guides/join-the-beta',
      ]
    },
    {
      type: "category",
      label: "Reference",
      items:[
        'reference/shortcodes',
        'reference/templates',
        {
          type: "category",
          label: "Template Tags",
          items: [
            'reference/template-tags/podcast',
            'reference/template-tags/episode',
            'reference/template-tags/network',
            'reference/template-tags/podcast-list',
            'reference/template-tags/chapter',
            'reference/template-tags/feed',
            'reference/template-tags/asset',
            'reference/template-tags/file',
            'reference/template-tags/image',
            'reference/template-tags/tag',
            'reference/template-tags/category',
            'reference/template-tags/duration',
            'reference/template-tags/contributor',
            'reference/template-tags/season',
            'reference/template-tags/service',
            'reference/template-tags/show',
            'reference/template-tags/license',
            'reference/template-tags/flattr',
            'reference/template-tags/date-time',
            'reference/template-tags/line',
            'reference/template-tags/group',
          ]
        },
        'reference/template-conditionals',
        'reference/php-constants',
      ]
    },
    {
      type: "category",
      label: "Developer",
      items:[
        'developer/background-jobs',
        'developer/modules',
        'developer/projects'
      ]
    }
  ]
]
