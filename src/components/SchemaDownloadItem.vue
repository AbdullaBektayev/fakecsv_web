<template>
  <tr>
    <td>{{ schemaDownload.id }}</td>
    <td>{{ schemaDownload.DateModified.slice(0,10) }}</td>
    <td><div class="btn btn-success btn-sm float-left disabled" >Ready</div></td>
    <td>
      <div class="d-flex justify-content-between">
        <button class="btn btn-outline-primary "
        >
          <a :href="'https://enigmatic-dawn-95775.herokuapp.com/api/schema/download/' + schemaDownload.id">Download</a>
        </button>
      </div>
    </td>
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