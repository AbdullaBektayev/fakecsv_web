<template>
<div class="float-right">
  <form @submit.prevent="Generate()">
    <div class="row">
      <div class="col my-auto">Rows:</div>
      <div class="col my-auto"><input v-model="number_of_rows"></div>
      <div class="col my-auto"><button type="submit" class="btn btn-success">Generate</button></div>
    </div>
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