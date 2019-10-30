import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

Vue.directive('todo-focus', {
  update(el, binding) {
    if (binding.value) {
      el.focus()
    }
  }
})

const app = new Vue({
  el: '#app',
  components: {
    App,
  },
  data: {
    hashText: ''
  },
  template: `<App :hashText="hashText" />`,
  store
})

window.onhashchange = function () {
  app.hashText = window.location.hash.slice(2)
}

window.onhashchange();
