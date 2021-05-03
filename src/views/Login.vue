<template>
  <div class="container">
    <div class="mx-auto">
      <div class="w-25 mx-auto my-auto mx-auto">
        <div class=" mx-automy-4">
          <h4 v-if="incorrectAuth">Please enter your correct details.</h4>
        </div>
        <form v-on:submit.prevent="login" class="mx-auto my-4">
          <div class="mx-auto my-3">
            <h4>Login</h4>
          </div>
          <div class="mx-auto">
            <input type="text" name="user.username" id="user" v-model="username">
          </div>
          <div class="mx-auto">
            <input type="password" name="user.password" id="pass" v-model="password">
          </div>
          <div class="float-right mx-4 my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
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