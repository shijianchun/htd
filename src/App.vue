<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* { margin: 0; padding: 0; }
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
}
a { text-decoration: none;color: #ffffff;}
li { list-style: none; }

body {
  margin: 0px;
  padding: 0px;
  background: #fff;//#8fc31f
  font-family: 黑体 , 'Heiti SC', 'Microsoft YaHei', Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    }
#app {
  text-align: center;
  color: #ffffff;
  /* min-width: 900px; */
}
</style>
