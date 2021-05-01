<template>
  <div class="login-form">
    <div class="lg">
      <h2 v-if="!incorrectAuth">Wrong credentials entered!. Please enter your correct details.</h2>
      <form v-on:submit.prevent="login">
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
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      incorrectAuth: false // activates appropriate message if set to true
    }
  },
  methods: {
    login()
    {
      this.$store.dispatch('userLogin', {
        username: this.username,
        password: this.password,
      })
      .then(() => {
        this.$router.push({ name: 'schema_list' })
      })
      .catch(err => {
        console.log(err)
        this.incorrectAuth = true
      })
    }
  }
}
</script>

<style scoped>
</style>