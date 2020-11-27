<template>
  <div class="home">
    <MyInvestments/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyInvestments from '@/components/MyInvestments.vue'

export default {
  name: 'MyInvestmentsView',
  components: {
    MyInvestments
  }
}
</script>
