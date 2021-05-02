<template>
<div>
  <form @submit.prevent="Generate()">
    <input v-model="number_of_rows">
    <button type="submit">Generate</button>
  </form>
</div>
</template>

<script>
export default {
  name: "AddSchemaDownloadItem",
  props: ['DownloadSchemas'],
  data() {
    return {
      number_of_rows: 0
    }
  },
  methods: {
    Generate() {
      this.$emit('generate-schema', this.number_of_rows)
    }
  }
}
</script>

<style scoped>

</style>