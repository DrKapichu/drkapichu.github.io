const path = require('path');

module.exports = {
  title: 'datacraft blog',
  tagline: 'datablog - The blog of the datacraft community. A blog for rocky discussions.',
  url: 'https://drkapichu.github.io/',
  deploymentBranch: 'gh-pages',
  baseUrl: '/',
  organizationName: 'DrKapichu', // 'datacraft', // Usually your GitHub org/user name.
  projectName: 'drkapichu.github.io',  // 'DrKapichu.github.io', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon',
  themeConfig: {
    image:"http://ekimetrics.github.io/img/10-cubecube03.jpg",
    prism: {theme: require('prism-react-renderer/themes/dracula'), additionalLanguages: ['python'],},
    colorMode:{defaultMode:"dark", disableSwitch:true,},
    googleAnalytics: {trackingID: 'UA-124520099-9',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: 'datacraft',
      logo: {
        alt: ' ',
        src: 'img/favicon.png',
      },
      items: [
        {to: 'blog/', label: 'Blog', position: 'left'},
        {to: 'docs/', label: 'Docs', position: 'left'},
        {to: 'opensource/', label: 'Open Source', position: 'left',},

        {href: 'https://datacraft.paris/', label: 'datacraft website', position: 'right'},
        {href: 'http://eepurl.com/hfkB9z', label: 'Newsletter', position: 'right'},
        {href: 'https://github.com/datacraft-paris', label: 'Github', position: 'right',},
      ],
    },
    footer: {
//      style: 'dark',
      links: [
        {
          title: 'About us',
          items: [
            {label: 'Who we are ?', to: 'https://ekimetrics.com/who-we-are/',},
            {label: 'Our team', to: 'https://ekimetrics.com/our-team/',},
            {label: 'Subscribe to our newsletter', to: 'http://eepurl.com/hfkB9z',},
          ],
        },
        {
          title: 'Find us',
          items: [
            {label: 'Github', href: 'https://github.com/datacraft-paris',},
            {label: 'Careers', href: 'https://ekimetrics.com/careers/',},
            {label: 'Eki on Welcome to the jungle', href: 'https://www.welcometothejungle.com/fr/companies/ekimetrics',},
          ],
        },
        {
          title: 'Made by kapichu & Co.',
        },
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
