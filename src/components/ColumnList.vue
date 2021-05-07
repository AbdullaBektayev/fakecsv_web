<template>
  <div>
    <ColumnItem
      v-for="column in columns" :key="column.id"
      v-bind:column="column"
      v-on:remove-column="removeColumn"
    />
  </div>
</template>

<script>
import ColumnItem from "@/components/ColumnItem";
export default {
  name: "ColumnList",
  props: ['columns'],
  components: {
    ColumnItem
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