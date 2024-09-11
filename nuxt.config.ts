const isProd = process.env.NODE_ENV === 'production'
const transpiles = isProd ? ['tslib', '@contentstack/delivery-sdk'] : []

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,

  build: {
    transpile: transpiles,
  },

  modules: [],

  security: {
    headers: {
      contentSecurityPolicy: {
        'frame-ancestors': ["'self'", "https://eu-app.contentstack.com"],
        'connect-src': ["'self'",
          "*.csnonprod.com",
          "*.contentstack.com",
          "*.salesforce-sites.com",
          "https://cdn-personalization.contentstack.com",
          "https://cdn.contentstack.io",
          "https://api.appcues.net",
          "wss://api.appcues.net",
          "https://liveagentcontentstack.secure.force.com",
          "https://api-iam.intercom.io",
          "wss://nexus-websocket-a.intercom.io",
          "wss://ws-mt1.pusher.com",
          "https://widget.usersnap.com",
          "https://api.commandbar.com",
          "https://t.commandbar.com",
          "https://s3.us-west-2.amazonaws.com",
          "https://*.browser-intake-datadoghq.eu"]
      },
    },
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.CONTENTSTACK_API_KEY,
      deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      previewToken: process.env.CONTENTSTACK_PREVIEW_TOKEN,
      managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN
    },
  },

  modules: ["nuxt-security"],
})