module.exports = {
  title: 'Introduction au webdesign',
  tagline: 'Comment imaginer, concevoir et programmer un site web.',
  url: 'https://harkle.github.io/ecal-web/',
  baseUrl: '/ecal-web/',
  favicon: 'img/favicon.ico',
  organizationName: 'harkle', // Usually your GitHub org/user name.
  projectName: 'ecal-web', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  onBrokenLinks: 'ignore',
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      title: '',
      logo: {
        alt: 'ECAL Web',
        src: 'img/ecal-logo.svg',
      },
      items: [
        /*{to: 'docs/introduction_history', label: 'Introduction', position: 'left'},
        {to: 'docs/design_basics_1', label: 'Design', position: 'left'},*/
        {to: 'docs/programming/basics/tools', label: 'Programmation', position: 'left'},
        {to: 'docs/references', label: 'Références', position: 'left'},
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
          editUrl: 'https://github.com/harkle/ecal-web',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
