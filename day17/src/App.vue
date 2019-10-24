<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld />
    <slot name="name">
      <p>Avalon</p>
    </slot>
    <slot name="age">
      <p>18</p>
    </slot>
    <Header />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/Header";
import PubSub from "pubsub-js";
import axios from "axios";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header
  },
  mounted() {
    PubSub.subscribe("search", (msg, keywords) => {
      axios.get("www.littlecontrol.top").then(
        resolve => {
          console.log(resolve.data);
        },
        reject => {
          console.log("Nothing");
          console.log(reject);
        }
      );
    });
  }
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
</style>
