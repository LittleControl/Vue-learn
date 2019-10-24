<template>
  <section class="todoapp" id="app">
    <TodoHeader v-on:addItem="addItem($event)" />
    <TodoMain
      v-if="this.todos.length"
      v-bind:filterTodos="filterTodos"
      v-on:deleteItem="deleteItem($event)"
      :currentItem="currentItem"
      @toEditing="toEditing($event)"
      @doneEdit="doneEdit($event)"
      @cancelEdit="cancelEdit($event)"
      :isAllCompleted="isAllCompleted"
      @toggleAll="toggleAll($event)"
    />
    <TodoFooter
      v-if="this.todos.length"
      :leftItems="leftItems"
      @clearCompleted="clearCompleted"
      :hashText="hashText"
    />
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";

let todos = [];
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem("todos")) || todos,
      currentItem: null
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  props: ["hashText"],
  methods: {
    addItem(e) {
      if (e.trim()) {
        let obj = {
          value: e,
          id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
          isCompleted: false
        };
        this.todos.push(obj);
      }
    },
    deleteItem(index) {
      this.todos.splice(index, 1);
    },
    toEditing(item) {
      this.currentItem = item;
    },
    doneEdit(e) {
      this.todos[e.index].value = e.value;
      this.currentItem = null;
    },
    cancelEdit(e) {
      this.currentItem = null;
    },
    toggleAll(res) {
      for (let item of this.todos) {
        item.isCompleted = res;
      }
    },
    clearCompleted() {
      this.todos = this.todos.filter(item => !item.isCompleted);
    }
  },
  computed: {
    isAllCompleted() {
      return this.todos.every(item => item.isCompleted);
    },
    leftItems() {
      return this.todos.filter(item => !item.isCompleted).length;
    },
    filterTodos() {
      if (this.hashText === "completed") {
        return this.todos.filter(item => item.isCompleted);
      } else if (this.hashText === "active") {
        return this.todos.filter(item => !item.isCompleted);
      } else {
        return this.todos;
      }
    }
  },
  watch: {
    todos: {
      handler: function() {
        window.localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true
    }
  }
};
</script>

<style>
</style>
