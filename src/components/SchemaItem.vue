<template>
  <tr v-if="!this.isDeleted">
    <td>{{ schema.id }}</td>
    <td>
      <router-link :to="{name: 'download_schema_list', params: {id: schema.id}}">
        {{ schema.Name }}
      </router-link>
    </td>
    <td>{{ schema.DateModified.slice(0,10)}}</td>
    <td>
      <div class="container">
        <button class="btn btn-outline-primary float-left p-md-1" v-on:click="editLink(schema.id)">
          Edit schema
        </button>
        <button class="btn btn-outline-danger float-right p-md-1"
                v-on:click="removeSchema(schema.id)"
        >Remove schema</button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "SchemaItem",
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isDeleted: false
    }
  },
  methods: {
    removeSchema(id) {
      this.$emit('remove-schema', id)
      this.isDeleted = true
    },
    editLink(id) {
      this.$router.push({name: 'edit_schema', params: {'id': id}})
    }
  }
}
</script>

<style scoped>

</style>