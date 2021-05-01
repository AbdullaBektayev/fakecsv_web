<template>
<div>
  <editSchemaItem
    v-bind:schema="schema"
    @update-schema="updateSchema"
  />
</div>
</template>

<script>
import editSchemaItem from "@/components/editSchemaItem";
export default {
  name: "editSchema",
  data() {
    return {
      schema: [],
    }
  },
  mounted(id) {
    fetch('http://0.0.0.0:8000/api/schema/' + id, {
      method: 'GET',
    })
        .then(response => response.json())
        .then(json => {
          this.schema = json
        })
  },
  components: {
    editSchemaItem
  },
  methods: {
    updateSchema(schema) {
      fetch('http://0.0.0.0:8000/api/update_schema/' + schema.id, {
        method: 'PUT',
        data: schema
      })
        .then(result => result.text())
        .then(text => console.log(text))
    }
  }
}
</script>

<style scoped>

</style>