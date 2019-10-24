<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <router-link to="/">Index</router-link>
      <router-link to="/header">Header</router-link>
      <router-link to="/footer">Footer</router-link>
    </div>
    <hr />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active {
  color: red;
}
</style>
