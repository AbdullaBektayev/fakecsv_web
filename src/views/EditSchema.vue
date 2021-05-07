<template>
<div>
  <Loader v-if="loading"/>
  <editSchemaItem
    v-bind:schema="schema"
  />
</div>
</template>

<script>
import editSchemaItem from "@/components/EditSchemaItem";
import Loader from "@/components/Loader";
export default {
  name: "EditSchema",
  data() {
    return {
      schema: {},
      loading: true
    }
  },
  async mounted() {
    await fetch('https://enigmatic-dawn-95775.herokuapp.com/api/schema/' + this.$route.params.id, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.$store.state.accessToken}`
      }
    })
        .then(response => response.json())
        .then(json => {
          this.schema = json
          this.loading = false
        })
  },
  components: {
    Loader,
    editSchemaItem
  }
}
</script>

<style scoped>

</style>