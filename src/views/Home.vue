<template>
  <div class="home">
    <form>
      {% crsf_token %}
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>
