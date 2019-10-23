<template>
  <header class="header">
    <h1>Vue-todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      @keyup.enter="addItem($event)"
      v-focus
    />
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addItem(e) {
      if (e.target.value.trim()) {
        this.$emit("addItem", e.target.value);
        e.target.value = "";
      }
    }
  }
};
</script>

<style>
</style>