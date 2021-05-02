<template>
<div class="container">
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>#</th>
      <th>Created</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    </thead>
    <SchemaDownloadList
        v-bind:DownloadSchemas="DownloadSchemas"
    />
  </table>
</div>
</template>

<script>
import SchemaDownloadList from "@/components/SchemaDownloadList";
export default {
  name: "SchemaDownload",
  data() {
    return {
      DownloadSchemas: [],
    }
  },
  components:{
    SchemaDownloadList
  },
  mounted() {
    fetch('http://0.0.0.0:8000/api/schema/download/list/' + this.$route.params.id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => {
        this.DownloadSchemas = json
      })
      .catch(err => console.log(err))
  },
}
</script>

<style scoped>

</style>