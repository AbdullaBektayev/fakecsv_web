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
        <select v-model="schema.ColumnSeparator" class="form-control" id="Schema_separator">
          <option
              v-for="separator in separatorChoices"
              v-bind:key="separator"
          >
            {{ separator }}
          </option>
        </select>
      </div>

      <div class="form-group col-md-12">
        <label for="Schema_Char" class="float-left">stringChar</label>
        <select v-model="schema.StringChar" class="form-control" id="Schema_Char">
          <option
              v-for="stringChar in stringCharChoices"
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

    <columnList
        v-bind:columns="schema.column"
        @remove-column="removeColumn"
    />

    <addColumn
        v-bind:schema="schema"
    />
  </div>
</template>

<script>
import columnList from "@/components/columnList";
import addColumn from "@/components/addColumn";
export default {
  name: "editSchemaItem",
  components: {
    columnList,
    addColumn
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
    onSubmit(id) {
      fetch('http://0.0.0.0:8000/api/schema/' + id + '/update', {
        method: 'PUT',
        body: JSON.stringify(this.schema),
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.accessToken}`
        }
      })
          .then(result => result.text())
      this.$router.push({name: 'schema_list'})
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