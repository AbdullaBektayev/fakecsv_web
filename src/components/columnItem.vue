<template>
  <div v-if="!this.isDeleted">
    <table class="table borderless">
      <thead>
      <tr>
        <th>Column name</th>
        <th>Type</th>
        <th>From</th>
        <th>To</th>
        <th>Order</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr>
          <td><input v-model="column.Name"/></td>

          <td>
            <select v-model="column.Type">
              <option
                  v-for="typeChoice in typeChoices"
                  v-bind:key="typeChoice"
              >
                {{ typeChoice }}
              </option>
            </select>
          </td>

          <td>
            <input v-model="column.From"/>
          </td>

          <td>
            <input v-model="column.To"/>
          </td>

          <td>
            <input v-model="column.Order"/>
          </td>

          <td>
            <div>
              <button class="rm"
                      v-on:click="removeColumn(column.id)"
              >Remove column</button>
            </div>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "columnItem",
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      typeChoices: ['Job','Email', 'Number'],
      isDeleted: false,
    }
  },
  methods: {
    removeColumn(id) {
      this.$emit('remove-column', id)
      this.isDeleted = true
    }
  }
}
</script>

<style scoped>

</style>