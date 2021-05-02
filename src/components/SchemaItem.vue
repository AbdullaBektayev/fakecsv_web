<template>
  <tr v-if="!this.isDeleted">
    <td>{{ schema.id }}</td>
    <td>
      <router-link :to="{name: 'download_schema_list', params: {id: schema.id}}">
        {{ schema.Name }}
      </router-link>
    </td>
    <td>Some day</td>
    <div class="d-flex justify-content-between">
      <button class="rm">
        <router-link :to="{name: 'edit_schema', params: {id: schema.id}}">Edit schema</router-link>
      </button>
      <button class="rm"
              v-on:click="removeSchema(schema.id)"
      >Remove schema</button>
    </div>
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
    }
  }
}
</script>

<style scoped>

</style>