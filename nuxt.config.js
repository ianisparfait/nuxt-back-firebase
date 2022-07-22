import routes from "./utils/pages";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt-back-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '60x60', href: '/icons/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '76x76', href: '/icons/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '120x120', href: '/icons/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '152x152', href: '/icons/apple-touch-icon-152x152.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/icons/apple-touch-icon-180x180.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '192x192', href: '/icons/android-chrome-192x192.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '512x512', href: '/icons/android-chrome-512x512.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon-klixmar.svg' },
      { rel: 'icon', type: 'image/x-icon', sizes: '144x144', href: '/icons/msapplication-icon-144x144.png' },
      { rel: 'icon', type: 'image/x-icon', sizes: '150x150', href: '/icons.mstile-150x150.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/icons/safari-pinned-tab.svg' },
      { rel: 'preconnect', ty: "normal", name: "Google fonts", href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', ty: "normal", name: "Google fonts static", href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', ty: "normal", name: "google fonts families", href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'},
      { rel: 'stylesheet', ty: "normal", name: "Unicons", href: 'https://unicons.iconscout.com/release/v3.0.1/css/line.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/tinymce", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    '@nuxt/content',

    '@nuxtjs/i18n',

    '@nuxtjs/dotenv',
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-EN", file: 'en-EN.ts', name: "English" },
      { code: "fr", iso: "fr-FR", file: 'fr-FR.ts', name: "Français" },
      { code: "es", iso: "es-ES", file: 'es-ES.ts', name: "Español" }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    sortRoutes: true,
    vuex: { moduleName: 'i18n', syncRouteParams: false },
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    langDir : 'lang/',
    parsePages: false,   // Disable acorn parsing
    baseUrl: process.env.SITEMAP_HOSTNAME,
    pages: routes
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
