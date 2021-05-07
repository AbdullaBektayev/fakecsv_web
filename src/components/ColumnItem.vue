<template>
  <div v-if="!this.isDeleted" class="container">
    <div class="form-row container">
      <div class="form-group col">
        <label :for="'name_' + column.id" >Column name</label>
        <input v-model="column.Name" :id="'name_' + column.id" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label :for="'Type_' + column.id" >Type</label>
        <select :id="'Type_' + column.id" v-model="column.Type" class="form-control">
          <option
              v-for="typeChoice in typeChoices"
              v-bind:key="typeChoice"
          >
            {{ typeChoice }}
          </option>
        </select>
      </div>

      <div class="form-group col">
        <label :for="'Form_' + column.id" v-if="rangeChoices.includes(column.Type)">From</label>
        <input v-model="column.From" :id="'Form_' + column.id" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label :for="'To_' + column.id" v-if="rangeChoices.includes(column.Type)">To</label>
        <input v-model="column.To" :id="'To_' + column.id" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label :for="'Order_' + column.id" >Order</label>
        <input v-model="column.Order" :id="'Order_' + column.id" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label :for="'Delete_' + column.id" >Delete</label>
        <button
                v-on:click="removeColumn(column.id)"
                :id="'Delete_' + column.id"
                class="form-control btn btn-outline-danger"
        >Remove column</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColumnItem",
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