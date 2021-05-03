<template>
<div>
  <editSchemaItem
    v-bind:schema="schema"
  />
</div>
</template>

<script>
import editSchemaItem from "@/components/editSchemaItem";
export default {
  name: "editSchema",
  data() {
    return {
      schema: {},
    }
  },
  mounted() {
    fetch('http://0.0.0.0:8000/api/schema/' + this.$route.params.id, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      }
    })
        .then(response => response.json())
        .then(json => {
          this.schema = json
        })
  },
  components: {
    editSchemaItem
  }
}
</script>

<style scoped>

</style>