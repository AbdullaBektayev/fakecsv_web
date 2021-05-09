<template>
  <div class="container">
    <div class="container clearfix my-3">
      <h3 class="float-left">New schema</h3>
    </div>
    <form @submit.prevent="onSubmit(schema.id)" class="my-3 clearfix">
      <div class="row">
        <div class="col">
          <div class="form-group col-md-12">
            <label for="Schema_name" class="float-left">Name</label>
            <input class="form-control"
                   id="Schema_name"
                   type="text"
                   v-model="schema.Name"
                   placeholder="Name"
            >
          </div>
          <div class="form-group col-md-12">
            <label for="Schema_separator" class="float-left">Separator</label>
            <select v-model="schema.Delimiter" class="form-control" id="Schema_separator">
              <option
                  v-for="separator in DelimiterChoices"
                  v-bind:key="separator"
              >
                {{ separator }}
              </option>
            </select>
          </div>

          <div class="form-group col-md-12">
            <label for="Schema_Char" class="float-left">stringChar</label>
            <select v-model="schema.QuoteChar" class="form-control" id="Schema_Char">
              <option
                  v-for="stringChar in QuoteCharChoices"
                  v-bind:key="stringChar"
              >
                {{ stringChar }}
              </option>
            </select>
          </div>

        </div>
        <div class="col clearfix">
          <button type="submit" class="btn btn-primary float-right">Submit</button>
        </div>
      </div>
    </form>

    <div class="container clearfix my-3">
      <h3 class="float-left">Schema columns</h3>
    </div>

    <ColumnList
        v-bind:columns="schema.column"
        @remove-column="removeColumn"
    />

    <AddColumn
        v-bind:schema="schema"
    />
  </div>
</template>

<script>
import ColumnList from "@/components/ColumnList";
import AddColumn from "@/components/AddColumn";
export default {
  name: "editSchemaItem",
  components: {
    ColumnList,
    AddColumn
  },
  props: {
    schema: {
      type: Object,
    }
  },
  data() {
    return {
      DelimiterChoices: ['Comma (,)', 'Semicolon (;)'],
      QuoteCharChoices: ["Single-quote (')", 'Double-quote (")']
    }
  },
  methods: {
    async onSubmit(id) {
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/' + id + '/update', {
        method: 'PUT',
        body: JSON.stringify(this.schema),
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        }
      })
        .then(response => {
          console.log(response.status === 401, response.status)
          if(response.status === 401){
            this.$router.push({ name: 'logout' })
          }
          return response.text()
        })

      await this.$router.push({name: 'schema_list'})
    },
    async removeColumn(id) {
      await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/column/' + id + '/delete', {
        method: 'DELETE',
      })
        .then(response => {
          console.log(response.status === 401, response.status)
          if(response.status === 401){
            this.$router.push({ name: 'logout' })
          }
          return response.text()
        })
    }
  }
}
</script>

<style scoped>

</style>