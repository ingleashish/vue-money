<template>
  <div class="hello">
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="/explore">Explore</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/myinvestments">My Investments</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Invite friends</a>
  </li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  props: {
    msg: String
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
}
</style>
