<template>
  <div class="login-form">
    <div class="lg">
      <h2 v-if="wrongCred">Wrong credentials entered!. Please enter your correct details.</h2>
      <form v-on:submit.prevent="loginUser">
        <label for="user">Username</label>
        <input type="text" name="user.username" id="user" v-model="username">
        <label for="pass">Password</label>
        <input type="password" name="user.password" id="pass" v-model="password">
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      wrongCred: false // activates appropriate message if set to true
    }
  },
  methods: {
    loginUser () {
      axios.post('http://0.0.0.0:8000/api/accounts/login', {
        username: this.username,
        password: this.password,
      }).then(result => result.text())
          .then(text => console.log(text))
    }
  }
}
</script>

<style scoped>
</style>