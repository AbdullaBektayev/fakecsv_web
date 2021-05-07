<template>
  <div class="container ml-0" style="width:70%">
    <div class="container">
      <div class="float-left my-3"><h3>Data schemas</h3></div>
      <div class="float-right my-3">
        <button v-on:click="createNewSchema" class="btn btn-success">New schema</button>
      </div>
    </div>
    <div class="container">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Modified</th>
          <th style="width:35%">Action</th>
        </tr>
        </thead>
        <SchemaList
          v-bind:schemas="schemas"
          @remove-schema="removeSchema"
        />
      </table>
      <Loader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import SchemaList from "@/components/SchemaList";
import Loader from "@/components/Loader";

export default {
  name: "Schema",
  data() {
    return {
      schemas: [],
      loading: true
    }
  },
  async mounted() {
    await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.schemas = json
        this.loading = false
      })
      .catch(err => console.log(err))
  },
  methods: {
    async removeSchema(id) {
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/' + id + '/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        }
      })
        .then(result => result.text())
    },
    async createNewSchema() {
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/create_schema/', {
        headers: {
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        },
        method: 'POST',
      })
      .then(response => response.json())
      .then(json => {
        this.$router.push({name: 'edit_schema', params: {'id': json.id}})
      })
    }
  },
  components: {
    Loader,
    SchemaList
  }
}
</script>

<style scoped>

</style>