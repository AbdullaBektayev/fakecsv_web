<template>
  <div class="container">
    <div class="row align-items-center">
    <div class="col-xl-12 d-flex justify-content-center align-items-center">
      <form v-on:submit.prevent="login" class="my-4">
        <div class="form-group my-5">
          <h3>Login</h3>
        </div>
        <div class="form-group" v-if="incorrectAuth">
          <h4 >Please enter your correct details.</h4>
        </div>
        <div class="form-group">
          <input
              type="text"
              class="form-control"
              placeholder="Enter email"
              v-model="username"
          >
        </div>
        <div class="form-group">
          <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
          >
        </div>
        <div class="form-group col-md-12">
          <button type="submit" class="btn btn-primary float-right">Login</button>
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
      incorrectAuth: false
    }
  },
  methods: {
    async login()
    {
      await this.$store.dispatch('userLogin', {
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