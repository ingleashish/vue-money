<template>
  <div class='hello'>
    <h2 class='title'>Explore</h2>
    <ul class='nav'>
      <li class='nav-item'>
        <a class='nav-link' v-on:click='onMutualFundsClick()'>Mutual Funds</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' v-on:click='onFixedDepositsClick()'
          >Fixed deposits</a
        >
      </li>
      <li class='nav-item'>
        <a class='nav-link' v-on:click='onGoldClick()'>Gold</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' v-on:click='onStocksClick()'>Stocks</a>
      </li>
      <li class='nav-item'>
        <a class='nav-link' v-on:click='onUSstocksClick()'>US Stocks</a>
      </li>
    </ul>
    <div class='row popular' v-if='popularmutualFunds'>
      <div class='cards-area col-lg-8'>
        <div class='col-lg-12 row'>
          <div class='col-lg-9'><span class='heading'>Popular Funds</span></div>
          <span class='col-lg-3'>
          <a class='nav-link' v-on:click='onSeeAllMutualFunds()'>See All Mutual Funds</a></span>
        </div>
        <div class='col-lg-12 row'>
          <div class='col-lg-4' v-for='(item, index) in popularItems' :key='index'>
            <div class='card mf-card'>
              <div class='card-body'>
                <div class='card-img'><img class='logo' src='item.src' /></div>
                <div class='card-title'>
                  <strong>{{ item.title }}</strong>
                </div>
                <div class='card-factor'>{{ item.factor }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='col-lg-4'>
        <div class='explore-mf-card'>
            <div class='card'>
              <div class='card-body'>
                <div class='card-img'>
                  <img class='bank-logo' src='@/assets/bank.jpg' />
                </div>
                <div class='card-title'>
                  <strong>New to Mutual Funds?</strong>
                </div>
                <div class='card-factor'>
                  Start exploring mutual funds to begin your journey.
                </div>
                <button class='btn btn-primary explore-btn'>Explore Mutual Funds</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class='row all' v-if='mutualFunds'>
          <div class='col-lg-3' v-for='(item, index) in items' :key='index'>
            <div class='card mf-card'>
              <div class='card-body'>
                <div class='card-img'><img class='logo' src='item.src' /></div>
                <div class='card-title'>
                  <strong>{{ item.title }}</strong>
                </div>
                <div class='card-factor'>{{ item.factor }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class='no-data' v-if='noData'>
          <p>There is no data to show. Please try again later.</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  data () {
    return {
      mutualFunds: false,
      fixedDeposits: false,
      noData: false,
      isLoading: false,
      items: [],
      popularItems: [],
      popularmutualFunds: false
    }
  },
  created () {
    this.onMutualFundsClick()
  },
  methods: {
    onMutualFundsClick () {
      this.popularmutualFunds = true
      this.mutualFunds = false
      this.noData = false
      this.popularItems = [
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
        }
      ]
    },
    onSeeAllMutualFunds () {
      this.mutualFunds = true
      this.popularmutualFunds = false
      this.items = [
        {
          src: './assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/axis_logo.png',
          title: 'Axis Mid Cap direct Plan Growth',
          factor: '26.7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Technology Direct Plan',
          factor: '26.7% (3Y)'
        }
      ]
    },
    onFixedDepositsClick () {
      this.noData = false
      this.mutualFunds = true
      this.popularmutualFunds = false
      this.items = [
        {
          src: './assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (5Y)'
        },
        {
          src: './assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (5Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: './assets/axis_logo.png',
          title: 'Axis Fixed Deposit',
          factor: '7% (3Y)'
        },
        {
          src: './assets/icici logo.jpeg',
          title: 'ICICI Prudential Fixed Deposit',
          factor: '7% (3Y)'
        }
      ]
    },
    onGoldClick () {
      this.noData = true
      this.mutualFunds = false
      this.popularmutualFunds = false
    },
    onStocksClick () {
      this.noData = true
      this.mutualFunds = false
      this.popularmutualFunds = false
    },
    onUSstocksClick () {
      this.noData = true
      this.mutualFunds = false
      this.popularmutualFunds = false
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>

.hello{
box-sizing: border-box;
width: 100%;
padding:10px;
color:#404040;}
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

.explore-btn{
  color:white;
  font-weight:700;
  background-color: #42b983;
  border:none;
  margin:10px;
}

.popular{
  padding:25px;
}
.all{
  padding:25px;
}
.cards-area {
  text-align: left;
}
.title {
  text-align: left;
  padding: 20px;
}
.bank-logo {
  max-height: 40%;
  max-width: 50%;
}
.no-data{
  padding:40px;
  color:rgb(160,160,160)
}
.heading {
  font-size: 24px;
  font-weight: 700;
}
.explore-mf-card{
margin-top:35px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)!important;
transition: 0.3s;
}

.card{
border:none!important;
}
.mf-card:hover ,.explore-mf-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)!important;
}
.mf-card {
  margin-bottom: 10px;
  height: 220px;
  width: 260px;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)!important;
  transition: 0.3s;
  .card-img {
    height: 80px;
  }
  .logo {
    max-width: 20%;
    max-height: 20%;
  }
  .card-title {
    height: 50px;
    line-height: 18px;
    font-size: 16px;
  }
  .card-factor {
    height: 30px;
    line-height: 16px;
    font-size: 14px;
  }
}
</style>
