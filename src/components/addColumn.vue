<template>
  <div>
    <table class="table borderless">
      <thead>
      <tr>
        <th>Column name</th>
        <th>Type</th>
        <th>From</th>
        <th>To</th>
        <th>Order</th>
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

      </tr>
      </tbody>
    </table>
    <button
        v-on:click="addColumn()"
    >
      Add column
    </button>
  </div>
</template>

<script>
export default {
  name: "addColumn",
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      column: {
        Name: '',
        Type: 'Job',
        From: 0,
        To: 0,
        Order: 0,
        Schema:0
      },
      typeChoices: ['Job','Email', 'Number']
    }
  },
  methods: {
    addColumn() {
      this.column.Schema = this.schema.id
      fetch('http://0.0.0.0:8000/api/create/column/', {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        },
        method: 'POST',
        body: JSON.stringify(this.column),
      })
          .then(result => result.json())
          .then(
              json => this.schema.column.push(json),
          )
      this.column.Name = ''
      this.column.Type = 'Job'
      this.column.From = 0
      this.column.To = 0
      this.column.Order = 0
    }
  }
}
</script>

<style scoped>

</style>