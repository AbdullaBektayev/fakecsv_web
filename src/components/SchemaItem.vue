<template>
  <tr>
    <td>{{ schema.id }}</td>
    <td>{{ schema.Name }}</td>
    <td>Some day</td>
    <div class="d-flex justify-content-between">
      <button class="rm">
        <router-link :to="{name: 'edit_schema', params: {id: schema.id}}">Edit schema</router-link>
      </button>
      <button class="rm"
              v-on:click="$emit('remove-schema', schema.id)"
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
  }
}
</script>

<style scoped>

</style>