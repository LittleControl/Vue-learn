<template>
  <ul>
    <li v-for="item in lists" :key="item.id">
      <span>{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    const lists = [
      {
        id: 0,
        name: "LittleControl"
      },
      {
        id: 1,
        name: "Avalon"
      },
      {
        id: 2,
        name: "RainSorrowControl"
      }
    ];
    this.lists = lists;
  }
};
</script>

<style>
</style>