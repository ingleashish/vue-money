<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  computed: {
    didAutoLogout () {
      return this.$store.getters.didAutoLogout
    }
  },
  created () {
    this.$store.dispatch('tryLogin')
  },
  watch: {
    didAutoLogout (curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches')
      }
    }
  }
}
</script>
