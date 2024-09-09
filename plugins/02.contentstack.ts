import contentstack, { Region } from "@contentstack/delivery-sdk"

export default defineNuxtPlugin({
  name: "contentstack",
  async setup(nuxtApp) {
    const { $preview } = nuxtApp

    const {
      apiKey,
      deliveryToken,
      previewToken,
    } = nuxtApp.$config.public;

    const stack = contentstack.stack({
      apiKey,
      host: "eu-app.contentstack.com",
      endpoint: "eu-api.contentstack.com",
      deliveryToken,
      environment: "development",
      region: Region.EU,
      locale: "en-us",
      live_preview: {
        enable: $preview ? true : false,
        preview_token: previewToken,
        host: "eu-rest-preview.contentstack.com",
      }
    });

    return {
      provide: {
        stack,
      },
    };
  },
});


