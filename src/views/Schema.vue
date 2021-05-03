<template>
  <div>
    <div>
      <button v-on:click="createNewSchema">New schema</button>
    </div>
    <div class="container">
      <table class="table table-bordered">
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Modified</th>
          <th>Action</th>
        </tr>
        </thead>
        <SchemaList
          v-bind:schemas="schemas"
          @remove-schema="removeSchema"
        />
      </table>
    </div>
  </div>
</template>

<script>
import SchemaList from "@/components/SchemaList";

export default {
  name: "Schema",
  data() {
    return {
      schemas: [],
    }
  },
  mounted() {
    fetch('http://0.0.0.0:8000/api/schema/', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      }
    })
      .then(response => response.json())
      .then(json => {
        this.schemas = json
      })
      .catch(err => console.log(err))
  },
  methods: {
    removeSchema(id) {
      fetch('http://0.0.0.0:8000/api/schema/' + id + '/delete', {
        method: 'DELETE',
      })
        .then(result => result.text())
    },
    createNewSchema() {
      fetch('http://0.0.0.0:8000/api/create_schema/', {
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
    SchemaList
  }
}
</script>

<style scoped>

</style>