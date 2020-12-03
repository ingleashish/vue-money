<template>
  <div class="portfolio-table">
    <div>
      <b-table striped hover :items="items"></b-table>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .portfolio-table {
    margin-top: 30px;
  }
</style>
<script>
export default {
  name: 'PortfolioTable',
  props: {
    items: Array
  }
}
</script>
