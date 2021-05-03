<template>
  <div v-if="!this.isDeleted" class="container">
    <div class="form-row container">
      <div class="form-group col">
        <label for="ex1" >Column name</label>
        <input v-model="column.Name" id="ex1" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label for="ex2" >Type</label>
        <select id="ex2" v-model="column.Type" class="form-control">
          <option
              v-for="typeChoice in typeChoices"
              v-bind:key="typeChoice"
          >
            {{ typeChoice }}
          </option>
        </select>
      </div>

      <div class="form-group col">
        <label for="ex3" v-if="rangeChoices.includes(column.Type)">From</label>
        <input v-model="column.From" id="ex3" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label for="ex4" v-if="rangeChoices.includes(column.Type)">To</label>
        <input v-model="column.To" id="ex4" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label for="ex5" >Order</label>
        <input v-model="column.Order" id="ex5" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label for="ex6" >Delete</label>
        <button
                v-on:click="removeColumn(column.id)"
                id="ex6"
                class="form-control btn btn-outline-danger"
        >Remove column</button>
      </div>
    </div>
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
      rangeChoices: ['Integer', 'Text'],
      typeChoices: ['Job','Email', 'Integer', 'Text', 'FullName'],
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