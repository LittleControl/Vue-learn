<template>
  <div id="app">
    <p>TestState: {{ this.$store.getters.cstate }}</p>
    <p>Count: {{ this.$store.state.count }} State: {{ cstate }}</p>
    <button @click="add">+</button>
    <button @click="less">-</button>
    <br />
    <br />
    <button @click="oddAdd">OddAdd</button>
    <button @click="asyncAdd">AsyncAdd</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // count: this.$store.state.count
      // state: "Odd"
    };
  },
  methods: {
    add() {
      this.$store.dispatch("add");
    },
    less() {
      this.$store.dispatch("less");
    },
    oddAdd() {
      this.$store.dispatch("oddAdd");
    },
    asyncAdd() {
      this.$store.dispatch("asyncAdd");
    }
  },
  computed: {
    cstate() {
      return this.$store.getters.cstate;
    }
  }
};
</script>

<style>
</style>
