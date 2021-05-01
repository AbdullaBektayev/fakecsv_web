<template>
  <div class="container">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>#</th>
        <th>Modified</th>
        <th>Title</th>
        <th>Action</th>
      </tr>
      </thead>
      <SchemaList
        v-bind:schemas="schemas"
        @remove-schema="removeSchema"
      />
    </table>
  </div>
</template>

<script>
import SchemaList from "@/components/SchemaList";
export default {
  name: "Schema",
  data() {
    return {
      schemas: []
    }
  },
  mounted() {
    fetch('http://0.0.0.0:8000/api/schema/', {method: 'GET'})
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.schemas = json
      })
  },
  methods: {
    removeSchema(id) {
      fetch('http://0.0.0.0:8000/api/delete_schema/' + id, {
        method: 'DELETE',
      })
        .then(result => result.text())
    }
  },
  components: {
    SchemaList
  }
}
</script>

<style scoped>

</style>