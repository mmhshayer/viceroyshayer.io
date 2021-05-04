import getRoutes from "./utils/getRoutes";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'viceroyshayer.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/svg-module#readme
    "@nuxtjs/svg",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/yandex-metrika-module
    '@nuxtjs/yandex-metrika',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/@nuxtjs/markdownit
    '@nuxtjs/markdownit',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/feed-module
    '@nuxtjs/feed',
    // https://www.npmjs.com/package/@nuxtjs/sitemap#installation
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // https://color-mode.nuxtjs.org/#tailwind-v2
  colorMode: {
    classSuffix: '-mode',
  },

  // https://www.npmjs.com/package/@nuxtjs/sitemap#installation
  sitemap: {
    hostname: 'https://viceroyshayer.github.io',
    exclude: ['/404'],
    routes() {
      return getRoutes();
    },
  },

  // https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: '*',
    Disallow: '/',
    Sitemap: 'https://viceroyshayer.github.io/sitemap.xml',
  },

  // https://yandex.com/support/metrica/code/counter-initialize.html
  yandexMetrika: {
    id: '77652091',
    webvisor: true,
    clickmap: true,
    useCDN: false,
    trackLinks: true,
    accurateTrackBounce: true,
    childIframe: true,
    trackHash: true,
  },

  // https://www.npmjs.com/package/@nuxtjs/markdownit
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
  },

  // https://github.com/nuxt-community/feed-module
  feed: [
    {

      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: 'Viceroys Blog',
          description: 'Personal WEbsite and Blog',
          link: 'https://viceroyshayer.github.io/feed.xml',
        };

        const { $content } = require('@nuxt/content');

        const posts = await $content('blog').fetch();

        posts.forEach((post) => {

          const url = `https://viceroyshayer.github.io/blog/${post.slug}`;

          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.blurb,
            content: post.bodyText,
          });
        });
      },

      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {

      const md = require('markdown-it')();
      if (document.extension === '.md') {

        const { text } = require('reading-time')(document.text);

        document.readingTime = text;

        const mdToHtml = md.render(document.text);
        document.bodyText = mdToHtml;
      }
    },
  },

}
