<template>
  <div class="container">
    <div class="container">
      <AddSchemaDownloadItem
          v-on:generate-schema="Generate"
      />
    </div>
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
            v-model="DownloadSchemas"
            v-bind:DownloadSchemas="DownloadSchemas"
        />
      </table>
    </div>
  </div>
</template>

<script>
import SchemaDownloadList from "@/components/SchemaDownloadList";
import AddSchemaDownloadItem from "@/components/AddSchemaDownloadItem";
export default {
  name: "SchemaDownload",
  data() {
    return {
      DownloadSchemas: [],
    }
  },
  components:{
    AddSchemaDownloadItem,
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
  methods: {
    Generate(number_of_rows){
      fetch('http://0.0.0.0:8000/api/schema/create/csv/', {
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          'pk': this.$route.params.id,
          'row_num': number_of_rows
        }),
      })
          .then(result => result.json())
          .then(
              json => this.DownloadSchemas.push(json),
          )
    }
  }
}
</script>

<style scoped>

</style>