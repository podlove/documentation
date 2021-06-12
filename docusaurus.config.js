/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Podlove Documentation",
  tagline: "Open Source Technology for Independent Podcasting",
  url: "https://docs.podlove.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "podlove", // Usually your GitHub org/user name.
  projectName: "podlove.github.com", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Podlove Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "podlove-publisher/index.html",
          activeBasePath: "podlove-publisher",
          label: "Podlove Publisher",
          position: "left",
        },
        {
          to: "podlove-web-player/index.html",
          activeBasePath: "podlove-web-player",
          label: "Podlove Web Player",
          position: "left",
        },
        {
          href: "https://subscribe-button.podlove.org",
          label: "Podlove Subscribe Button",
          position: "left",
        },
        {
          href: "https://opencollective.com/podlove",
          label: "Donation",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Podlove Community",
              href: "https://community.podlove.org/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/podlove_org",
            },
            {
              label: "Discord",
              href: "https://discord.gg/tHnGgvg",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/podlove",
            },
            {
              label: "Podlovers Podcast",
              href: "https://podlovers.org",
            },
          ],
        },
      ],
    },
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      additionalLanguages: ["twig"],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "web-player",
        path: "web-player",
        routeBasePath: "podlove-web-player",
        editUrl: 'https://github.com/podlove/podlove.github.com/edit/master/web-player',
        sidebarPath: require.resolve("./web-player/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "publisher",
        path: "publisher",
        routeBasePath: "podlove-publisher",
        editUrl: 'https://github.com/podlove/podlove.github.com/edit/master/publisher',
        sidebarPath: require.resolve("./publisher/sidebar.js"),
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        toExtensions: ["html"],
        fromExtensions: ["html"],
        redirects: [
          {
            from: ["/podlove-publisher/guides/join-the-beta"],
            to: "/podlove-publisher/join-the-beta",
          },
          {
            from: ["/podlove-publisher/guides/dsgvo-gdpr"],
            to: "/podlove-publisher/reference/dsgvo-gdpr",
          },
          {
            from: ["/podlove-publisher/guides/download-analytics"],
            to: "/podlove-publisher/reference/download-analytics",
          },
          {
            from: ["/podlove-publisher/guides/image-cache"],
            to: "/podlove-publisher/faq/image-cache",
          },
          {
            from: ["/podlove-publisher/guides/chapter-marks"],
            to: "/podlove-publisher/faq/chapter-marks",
          },
          {
            from: ["/podlove-publisher/guides/episode-images"],
            to: "/podlove-publisher/faq/episode-images",
          },
          {
            from: ["/podlove-publisher/guides/understanding-templates"],
            to: "/podlove-publisher/guides/templates",
          },
          {
            from: ["/podlove-publisher/guides/slacknotes"],
            to: "/podlove-publisher/modules/slacknotes",
          },
          {
            from: ["/ref/shortcodes"],
            to: "/podlove-publisher/reference/shortcodes",
          },
          {
            from: ["/reference/template-tags"],
            to: "/podlove-publisher/reference/templates/template-tags/podcast",
          },
          {
            from: ["/guides/understanding-templates"],
            to: "/podlove-publisher/guides/templates",
          },
        ],
      },
    ],
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        docsRouteBasePath: '/'
      },
    ],
  ],
};
