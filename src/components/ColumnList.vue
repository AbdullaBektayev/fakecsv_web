<template>
  <div>
    <columnItem
      v-for="column in columns" :key="column.id"
      v-bind:column="column"
      v-on:remove-column="removeColumn"
    />
  </div>
</template>

<script>
import columnItem from "@/components/ColumnItem";
export default {
  name: "columnList",
  props: ['columns'],
  components: {
    columnItem
  },
  methods: {
    removeColumn(id) {
      this.$emit('remove-column', id)
    }
  }
}
</script>

<style scoped>

</style>