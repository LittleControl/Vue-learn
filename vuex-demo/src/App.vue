<template>
  <div id="app">
    <p>TestState: {{ cstate }}</p>
    <p>Count: {{ count }} State: {{ cstate }}</p>
    <button @click="add">+</button>
    <button @click="less">-</button>
    <br />
    <br />
    <button @click="oddAdd">OddAdd</button>
    <button @click="asyncAdd">AsyncAdd</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      // ...mapState(["count"])
    };
  },
  methods: {
    ...mapActions(["add", "less", "oddAdd", "asyncAdd"])
    // add() {
    //   this.$store.dispatch("add");
    // },
    // less() {
    //   this.$store.dispatch("less");
    // },
    // oddAdd() {
    //   this.$store.dispatch("oddAdd");
    // },
    // asyncAdd() {
    //   this.$store.dispatch("asyncAdd");
    // }
  },
  computed: {
    ...mapGetters(["cstate"]),
    ...mapState(["count"])
  }
};
</script>

<style>
</style>
