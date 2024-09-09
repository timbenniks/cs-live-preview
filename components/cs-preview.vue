<script setup>
import ContentstackLivePreview from "@contentstack/live-preview-utils";

onMounted(() => {
  const { $stack, $preview } = useNuxtApp();

  if ($preview) {
    ContentstackLivePreview.init({
      ssr: false,
      editButton: {
        enable: true,
        position: "bottom-left",
        includeByQueryParameter: false,
      },
      cleanCslpOnProduction: false,
      clientUrlParams: {
        host: "eu-app.contentstack.com",
      },
      stackSdk: $stack,
      stackDetails: {
        apiKey: $stack.config.apiKey,
        environment: "development",
      },
    });

    console.log("⚡️ ContentstackLivePreview event: initialized");

    ContentstackLivePreview.onEntryChange(() => {
      console.log("⚡️ ContentstackLivePreview event: onEntryChange");
    });

    ContentstackLivePreview.onLiveEdit(() => {
      console.log("⚡️ ContentstackLivePreview event: onLiveEdit");
    });
  }
});
</script>

<template>
  <p>Preview mode: ON</p>
  <p>Stack info:</p>
  <pre>{{ $stack }}</pre>
</template>
