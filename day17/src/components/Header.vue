<template>
  <div class="header">
    <slot name="name"></slot>
    <p>{{website}}</p>
    <slot name="age"></slot>
    <h1>Please input the keywords you want to search</h1>
    <br />
    <input type="text" v-model="keywords" />
    <br />
    <button @click="searcha">Search</button>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  data() {
    return {
      website: "www.littlecontrol.top",
      keywords: ""
    };
  },
  methods: {
    searcha() {
      PubSub.publish("search", this.keywords);
    }
  }
};
</script>

<style>
</style>