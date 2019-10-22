<template>
  <div>
    <p>{{ tip }}</p>
    <input type="text" v-model="msg">
    <br />
    <button @click="add($event)">Add</button>
    <br />
    <Commits :dock="dock" />
  </div>
</template>

<script>
import Commits from "./components/Commits";
export default {
  data() {
    return {
      tip: "Please input the words you want",
      dock: [],
      msg: ''
    };
  },
  components: {
      Commits
  },
  methods: {
      add(e) {
        //   console.log('Nothing')
          console.log(this.msg)
          this.dock.push(this.msg)
          console.log(this.dock)
      }
  }
}
</script>

<style>
</style>