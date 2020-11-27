<template>
  <div class="hello">
    <h2 class="title">Explore</h2>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" v-on:click="onMutualFundsClick()">Mutual Funds</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="onFixedDepositsClick()">Fixed deposits</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="onGoldClick()">Gold</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="onStocksClick()">Stocks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-on:click="onUSstocksClick()">US Stocks</a>
      </li>
    </ul>

    <div class="cards-area" >
    <div class="row" v-if="mutualFunds">
     <div class="col-sm-2" v-for="(item, index) in items" :key="index">
          <div class="card">
            <div class="card-body">
            <div class="card-img"> <img class="logo" src="item.src" /></div>
              <div class="card-title"><strong>{{item.title}}</strong></div>
              <div class="card-factor">{{item.factor}}</div>
            </div>
          </div>
      </div></div>
      <div class="no-data"  v-if="noData">
      <p> There is no data to show. Please try again later.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
      mutualFunds: true,
      fixedDeposits: false,
      noData: false,
      isLoading: false,
      items: []
    }
  },
  methods: {
    onMutualFundsClick () {
      this.mutualFunds = true
      this.noData = false
      this.items = [
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        }]
    },
    onFixedDepositsClick () {
      this.noData = false
      this.mutualFunds = true
      this.items = [
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (5Y)'
        },
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (5Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: '@/assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: '@/assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (3Y)'
        }]
    },
    onGoldClick () {
      this.noData = true
      this.mutualFunds = false
    },
    onStocksClick () {
      this.noData = true
      this.mutualFunds = false
    },
    onUSstocksClick () {
      this.noData = true
      this.mutualFunds = false
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer;
}

.cards-area {
  padding: 30px;
}
.title {
  text-align: left;
  padding: 20px;
}

.card {
  margin-bottom: 10px;
  height:220px;
  width:220px;
  text-align:left;
.card-img{
height:80px;}
.logo {
  max-width: 20%;
  max-height: 20%;
}
.card-title{
  height:50px;
  line-height:18px;
  font-size:16px;
}
.card-factor{
height:30px;
line-height:16px;
font-size:14px;
}
}
</style>
