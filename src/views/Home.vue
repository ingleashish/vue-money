<template>
  <div class='home'>
    <b-button variant="info" class="portfolio-button">Create portfolio</b-button>
    <div>
      <b-tabs content-class='mt-3'>
        <b-tab title='Explore' active><HelloWorld msg="Explore" /></b-tab>
        <b-tab title='My Investments'><Investments v-bind:investmentList="investmentData" message="test"/></b-tab>
        <b-tab title='Invite friends'><HelloWorld msg="Investments" /></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .portfolio-button {
    position: absolute;
    right: 0;
  }
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Investments from '@/components/Investments.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('getInvestments')
  },
  computed: mapState({
    investmentData: state => state.investmentData
  }),
  components: {
    HelloWorld,
    Investments
  }
}
</script>
