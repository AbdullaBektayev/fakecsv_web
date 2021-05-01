<template>
  <tbody>
      <SchemaItem
          v-for="schema in schemas" :key="schema.id"
          v-bind:schema="schema"
          v-on:remove-schema="removeSchema"
      />
  </tbody>
</template>

<script>
import SchemaItem from "@/components/SchemaItem";
export default {
  name: "SchemaList",
  props: ['schemas'],
  components: {
    SchemaItem
  },
  methods: {
    removeSchema(id) {
      this.$emit('remove-schema', id)
    }
  }
}
</script>

<style scoped>

</style>