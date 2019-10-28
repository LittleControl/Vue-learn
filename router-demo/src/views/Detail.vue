<template>
  <div>
    <span>ID: {{ details.id }}</span>
    <br />
    <span>Name: {{ details.name }}</span>
    <br />
    <span>Age: {{ details.age }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {}
    };
  },
  mounted() {
    const items = [
      {
        id: 0,
        name: "LittleControl",
        age: 19
      },
      {
        id: 1,
        name: "RainSorrowControl",
        age: 17
      },
      {
        id: 2,
        name: "Avalon",
        age: 20
      }
    ];
    this.datas = items;
    this.id = this.$route.params.id * 1;
    this.details = this.datas.find(item => item.id === this.id);
  },
  watch: {
    $route: {
      deep: true,
      handler: function(value) {
        //这个value就是新的$route
        this.id = value.params.id * 1;
        this.details = this.datas.find(item => item.id === this.id);
        console.log(this.details);
      }
    }
  }
};
</script>

<style>
</style>