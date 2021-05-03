<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">FakeCSV</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to = "{ name:'schema_list' }">Schemas</router-link>
        </li>
      </ul>
      <div class="navar-right">
        <span class="navbar-text mx-3">
          Hello, {{ this.$store.state.username }}
        </span>
        <span class="navbar-text mx-3">
            <p><router-link :to = "{ name:'logout' }">Logout</router-link></p>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  computed: mapState(['accessToken'])
}
</script>

<style scoped>
a {
  color:#000;
}
</style>