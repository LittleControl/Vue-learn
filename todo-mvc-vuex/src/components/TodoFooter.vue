<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ leftItems }}</strong> item left
    </span>
    <ul class="filters">
      <li>
        <a :class="{selected: hashText == ''}" href="#/">All</a>
      </li>
      <li>
        <a :class="{selected: hashText == 'active'}" href="#/active">Active</a>
      </li>
      <li>
        <a :class="{selected: hashText == 'completed'}" href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearCompleted">Clear completed</button>
  </footer>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  // props: ["hashText", "leftItems"],
  methods: {
    ...mapActions(["clearCompleted"])
    // clearCompleted() {
    //   this.$store.dispatch('clearCompleted')
    //   // this.$emit("clearCompleted");
    // }
  },
  computed: {
    ...mapState("[hashText]"),
    ...mapGetters(["leftItmes"])
  }
};
</script>

<style>
</style>