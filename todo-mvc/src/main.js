import Vue from 'vue'
import App from './App.vue'

Vue.directive('focus', {
  inserted(el, binding) {
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
})

window.onhashchange = function () {
  app.hashText = window.location.hash.slice(2)
}

window.onhashchange();
