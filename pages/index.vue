<script setup>
import { QueryOperation } from "@contentstack/delivery-sdk";

const { $stack, $preview } = useNuxtApp();

const result = await $stack
  .contentType("page")
  .entry()
  .includeReference("components.two_columns.two_column_connection")
  .query()
  .where("url", QueryOperation.EQUALS, "/")
  .find();

$stack.livePreviewQuery({
  contentTypeUid: "page",
  entryUid: "blt41315565c6fbd337",
  live_preview: "init",
});

onMounted(() => {
  if ($preview) {
    console.log("⚡️ Nuxt Preview mode engaged");
  }
});
</script>

<template>
  <div>
    <ClientOnly>
      <cs-preview v-if="$preview" />
    </ClientOnly>

    <p>Home entry:</p>
    <pre>{{ result.entries[0] }}</pre>
  </div>
</template>
