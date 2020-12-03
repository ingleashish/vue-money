<template>
  <div class='investments'>
    <div class="investment-data-container">
      <div>
        <h3>Total Investments</h3>
        <h2>{{message}}</h2>
      </div>
      <div>
        <h3>Current Value</h3>
        <h2>---</h2>
      </div>
    </div>
    <div class="returns-data-container">
      <div>
        <h4>Returns since created</h4>
        <h3>---</h3>
      </div>
      <div>
        <div>
          <b-button block variant="primary">Analyze my investments</b-button>
        </div>
      </div>
    </div>
    <PortfolioTable v-bind:items="investmentList" />
  </div>
</template>

<style scoped lang="scss">
.investment-data-container {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
.returns-data-container {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
</style>

<script>
// @ is an alias to /src
import PortfolioTable from '@/components/PortfolioTable.vue'

export default {
  name: 'Investments',
  props: {
    investmentList: Array,
    message: String
  },
  components: {
    PortfolioTable
  }
}
</script>
