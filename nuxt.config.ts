const isProd = process.env.NODE_ENV === 'production'
const transpiles = isProd ? ['tslib', '@contentstack/delivery-sdk'] : []


export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  build: {
    transpile: transpiles,
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.CONTENTSTACK_API_KEY,
      deliveryToken: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      previewToken: process.env.CONTENTSTACK_PREVIEW_TOKEN,
      managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN
    },
  },
})
