<template>
  <tr>
    <td>{{ schemaDownload.id }}</td>
    <td>{{ schemaDownload.DateModified }}</td>
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