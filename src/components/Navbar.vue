<template>
<!--  <div class="nav-bar">-->
<!--    <nav class="navbar navbar-expand-lg navbar-light bg-white nav-1">-->
<!--      <div class="container mw-0 px-3">-->
<!--        <div class="collapse navbar-collapse" id="navbarSupportedContent">-->
<!--          <ul class="navbar-nav mr-auto">-->
<!--            <li class="nav-item" v-if="accessToken!=null"><router-link :to = "{ name:'logout' }">Logout</router-link></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--    </nav>-->
<!--  </div>-->

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