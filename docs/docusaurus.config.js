module.exports = {
  title: 'Introduction to webdesign',
  tagline: 'A website about designing and programming websites',
  url: 'https://harkle.github.io/ecal-web/',
  baseUrl: '/ecal-web/',
  favicon: 'img/favicon.ico',
  organizationName: 'harkle', // Usually your GitHub org/user name.
  projectName: 'ecal-web', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'ECAL Web',
      logo: {
        alt: 'ECAL Web',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/design_basics_1', label: 'Designing', position: 'left'},
        {to: 'docs/programming_html_1', label: 'Programming', position: 'left'},
        {
          href: 'https://github.com/harkle/ecal-web',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Copyright © 2020 ECAL, Lionel Tardy',
    },
    algolia: {
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: '',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
