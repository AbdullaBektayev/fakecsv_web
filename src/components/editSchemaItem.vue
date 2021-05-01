<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h3>Name</h3>
      <br>
      <input
          type="text"
          v-model="schema.Name"
          placeholder="Name"
      >
      <h3>Separator</h3>
      <br>

      <select v-model="schema.ColumnSeparator">
        <option
            v-for="separator in separatorChoices"
            v-bind:key="separator"
        >
          {{ separator }}
        </option>
      </select>

      <h3>stringChar</h3>
      <br>

      <select v-model="schema.StringChar">
        <option
          v-for="stringChar in stringCharChoices"
          v-bind:key="stringChar"
        >
          {{ stringChar }}
        </option>
      </select>
      <button type="submit">Submit</button>
<!--        <addColumn-->
<!--          @add-column="addColumn"-->
<!--        />-->
    </form>
    <columnList
        v-bind:columns="schema.column"
        @remove-column="removeColumn"
    />
  </div>
</template>

<script>
import columnList from "@/components/columnList";
export default {
  name: "editSchemaItem",
  components: {
    columnList
  },
  props: {
    schema: {
      type: Object,
    }
  },
  data() {
    return {
      separatorChoices: ['Comma', 'Space'],
      stringCharChoices: ['Apostrophe', 'Quotation Marks']
    }
  },
  methods: {
    onSubmit() {
      this.$emit('update-schema', this.schema)
      this.$router.push({name: 'schema_list'})
    },
    addColumn(column) {
      this.columns.push(column)
    },
    removeColumn(id) {
      fetch('http://0.0.0.0:8000/api/column/' + id + '/delete', {
        method: 'DELETE',
      })
          .then(result => result.text())
    }
  }
}
</script>

<style scoped>

</style>