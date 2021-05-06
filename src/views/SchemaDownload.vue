<template>
  <div class="container ml-0" style="width:70%">
    <div class="container  my-4">
      <div class="float-left"><h3>Data sets</h3></div>
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
  async mounted() {
    await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/download/list/' + this.$route.params.id, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.DownloadSchemas = json
      })
      .catch(err => console.log(err))
  },
  methods: {
    async Generate(number_of_rows){
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/create/csv/', {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        },
        method: 'POST',
        body: JSON.stringify({
          'pk': this.$route.params.id,
          'row_num': number_of_rows
        }),
      })
          .then(result => result.json())
          .then(
              json => console.log(json)
              // json => this.DownloadSchemas.push(json),
          )
    }
  }
}
</script>

<style scoped>

</style>