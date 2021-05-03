<template>
  <tr>
    <td>{{ schemaDownload.id }}</td>
    <td>{{ schemaDownload.DateModified.slice(0,10) }}</td>
    <td>Some day</td>
    <div class="d-flex justify-content-between">
      <button class="rm"
      >
        <a :href="'http://0.0.0.0:8000/api/schema/download/' + schemaDownload.id">Download</a>
      </button>
    </div>
  </tr>
</template>

<script>
export default {
  name: "SchemaDownloadItem",
  props: ['schemaDownload'],
}
</script>

<style scoped>

</style>