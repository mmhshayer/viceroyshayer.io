export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MMH',
    titleTemplate: '%s | viceroyshayer.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan'
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@viceroyshayer' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://viceroyshayer.github.io',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'viceroyshayer.io',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://viceroyshayer.github.io/icon.png',
      },

      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '%s - viceroyshayer.io',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://viceroyshayer.github.io',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'viceroyshayer.io',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://viceroyshayer.github.io/icon.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content:
          'https://viceroyshayer.github.io/icon.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'viceroyshayer.io',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main',
    '~/assets/css/fonts',
    '~/assets/css/stars',
    '~/assets/css/theme',
    '~/assets/css/scroll-bar',
    '~/assets/css/shooting-stars',
    '~/assets/css/index-animation',
    '~/assets/css/static-animation',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/aos' }
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
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/yandex-metrika-module
    '@nuxtjs/yandex-metrika',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',,
    // https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      description: 'Personal Website & Blog',
      icon: true,
    },
    meta: [
      { name: 'viceroyshayer' },
      { author: 'Mohammad Mustakim Hassan' },
      { theme_color: 'green' }
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  // https://color-mode.nuxtjs.org/#tailwind-v2
  colorMode: {
    classSuffix: '-mode',
  },

  // https://i18n.nuxtjs.org/setup
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en-us.json',
      },
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文',
        file: 'zh-cn.json',
      },
      // {
      //   code: 'bn',
      //   iso: 'bn-BD',
      //   name: 'বাংলা',
      //   file: 'bn-bd.json',
      // },
      // {
      //   code: 'hi',
      //   iso: 'hi-IN',
      //   name: 'हिंदी',
      //   file: 'hi-in.json',
      // },
    ],
    baseUrl: 'https://mmhshayer.github.io/viceroyshayer.io/',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: '~i18n/',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // https://yandex.com/support/metrica/code/counter-initialize.html
  yandexMetrika: {
    id: '77652091',
    webvisor: true,
    clickmap: true,
    useCDN: false,
    trackLinks: true,
  },
}
