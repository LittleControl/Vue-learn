<template>
  <div>
    <h1>Welcome to my Header!</h1>
    <div class="key">
      <router-link to="/header/list">List</router-link>
      <router-link to="/header/saying">Saying</router-link>
    </div>
    <div class="value">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.key {
  background-color: #bfa;
}
.value {
  background-color: pink;
}
</style>