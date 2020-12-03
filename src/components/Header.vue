<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">Vue Money</b-navbar-brand>
      <b-navbar-nav align="left">
        <b-nav-item to="/home">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="isLoggedIn" @click="logout">Sign out</b-nav-item>
        <b-nav-item v-else right to="/auth?signin=true">Sign in</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.replace('/auth?signin=true')
    }
  }
}
</script>
