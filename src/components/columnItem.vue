<template>
  <div>
    <form>
      <h3>Name</h3>
      <input :value="column.Name"/>

      <h3>Type</h3>
      <select v-model="selectedType">
        <option
            v-for="typeChoice in typeChoices"
            v-bind:key="typeChoice"
        >
          {{ typeChoice }}
        </option>
      </select>

      <h3>From</h3>
      <div>
      <input :value="column.From"/>
      </div>

      <h3>To</h3>
      <input :value="column.To"/>

      <h3>Order</h3>
      <input :value="column.Order"/>

    </form>
    <div>
      <button class="rm"
              v-on:click="$emit('remove-column', column.id)"
      >Remove column</button>
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
      typeChoices: ['Job','Email', 'Number'],
      selectedType: 'Job'
    }
  }
}
</script>

<style scoped>

</style>