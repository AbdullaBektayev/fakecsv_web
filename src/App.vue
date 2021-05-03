<template>
  <div id="app">
    <Navbar  v-if="$store.getters.loggedIn"></Navbar>
    <main class=" p-1">
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>