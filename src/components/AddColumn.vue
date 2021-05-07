<template>
  <div class="container border my-3 clearfix">
    <h5 v-if="isError">Fields in From, To or Order isn't correct</h5>
    <div class="form-row my-3">
      <div class="form-group col">
        <label for="'new_name'" >Column name</label>
        <input v-model="column.Name" id="'new_name'" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label for="new_type" >Type</label>
        <select id="new_type" v-model="column.Type" class="form-control">
          <option
              v-for="typeChoice in typeChoices"
              v-bind:key="typeChoice"
          >
            {{ typeChoice }}
          </option>
        </select>
      </div>

      <div class="form-group col">
        <label for="new_from" v-if="rangeChoices.includes(column.Type)">From</label>
        <input v-model="column.From" id="new_from" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label for="new_to" v-if="rangeChoices.includes(column.Type)">To</label>
        <input v-model="column.To" id="new_to" type="text" class="form-control"
               v-if="rangeChoices.includes(column.Type)"
        />
      </div>

      <div class="form-group col">
        <label for="new_order" >Order</label>
        <input v-model="column.Order" id="new_order" type="text" class="form-control"/>
      </div>

      <div class="form-group col">
        <label for="new_delete" >Delete</label>
        <button
            id="new_delete"
            class="form-control btn btn-outline-danger"
        >Remove column</button>
      </div>
    </div>
    <button
        v-on:click="AddColumn()"
        class="btn btn-primary float-left mb-3"
    >
      Add column
    </button>
  </div>
</template>

<script>
export default {
  name: "AddColumn",
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
      rangeChoices: ['Integer', 'Text'],
      typeChoices: ['Job','Email', 'Integer', 'Text', 'FullName'],
      isError: false
    }
  },
  methods: {
    async AddColumn() {
      this.column.Schema = this.schema.id
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/create/column/', {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        },
        method: 'POST',
        body: JSON.stringify(this.column),
      })
        .then( function( response ){
          if( response.status != 201 ){
            this.isError = true
            console.log( response.status );
          }else{
            response.json().then( function( json ){
              this.isError = false
              this.schema.column.push(json)
            }.bind(this));
          }
        }.bind(this))
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