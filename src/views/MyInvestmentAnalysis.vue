<template>
<b-container>
  <b-row>
    <b-col>
        <doughnut-chart
        v-if="loaded"
        :chartdata="doughnutData"
        :options="options"/>
    </b-col>
    <b-col>
        <bar-chart
        v-if="loaded"
        :chartdata="barData"
        :options="options"/>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import DoughnutChart from '../components/DoughnutChart.vue'
import BarChart from '../components/BarChart.vue'

export default {
  name: 'ChartContainer',
  components: { DoughnutChart, BarChart },
  data: () => ({
    loaded: false,
    doughnutData: null,
    barData: null
  }),
  async mounted () {
    this.loaded = false
    try {
      // const { userlist } = await fetch('/api/userlist')
      this.doughnutData = {
        labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
          }
        ]
      }
      this.barData = this.doughnutData
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
