<template>
  <div>
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

        <select v-model="selectedSeparator">
          <option
              v-for="separator in separatorChoices"
              v-bind:key="separator"
          >
            {{ separator }}
          </option>
        </select>

        <h3>stringChar</h3>
        <br>

        <select v-model="selectedChar">
          <option
            v-for="stringChar in stringCharChoices"
            v-bind:key="stringChar"
          >
            {{ stringChar }}
          </option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "editSchemaItem",
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      separatorChoices: ['Comma', 'Space'],
      stringCharChoices: ['Apostrophe', 'Quotation Marks'],
      selectedSeparator: 'Comma',
      selectedChar: 'Apostrophe'
    }
  },
  methods: {
    onSubmit() {
      const newSchema = {
        id: this.schema.id,
        Name: this.schema.Name,
        ColumnSeparator: this.selectedSeparator,
        StringChar: this.selectedChar
      }
      this.$emit('update-schema', newSchema)
      this.$router.push({name: 'schema_list'})
    }
  }
}
</script>

<style scoped>

</style>