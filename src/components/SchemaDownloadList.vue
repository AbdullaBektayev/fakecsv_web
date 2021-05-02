<template>
  <tbody>
    <SchemaDownloadItem
      v-for="schemaDownload in DownloadSchemas" :key="schemaDownload.id"
      v-bind:schemaDownload="schemaDownload"
    />
  </tbody>
</template>

<script>
import SchemaDownloadItem from "@/components/SchemaDownloadItem";
export default {
  name: "SchemaDownloadList",
  props: ['DownloadSchemas'],
  components: {
    SchemaDownloadItem
  }
}
</script>

<style scoped>

</style>