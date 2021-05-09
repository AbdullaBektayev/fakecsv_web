<template>
  <tr>
    <td>{{ schemaDownload.id }}</td>
    <td>{{ schemaDownload.DateModified.slice(0,10) }}</td>

    <td v-if="schemaDownload.id == ''"><div class="btn btn-secondary btn-sm float-left disabled" >Process</div></td>
    <td v-else><div class="btn btn-success btn-sm float-left disabled" >Ready</div></td>

    <td v-if="schemaDownload.id == ''"></td>
    <td v-else>
      <div class="d-flex justify-content-between">
        <button  v-on:click="DownloadSchemaFromLink(schemaDownload.id)"
                 class="btn btn-outline-primary"
        >
          Download
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "SchemaDownloadItem",
  props: ['schemaDownload'],
  methods: {
    async DownloadSchemaFromLink(id) {
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/download/' + id, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        }
      })
          .then(response => {
            console.log(response.status === 401, response.status)
            if(response.status === 401){
              this.$router.push({ name: 'logout' })
            }
            return response.json()
          })
          .then(json => {
            window.open(json['link'], '_blank')
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>