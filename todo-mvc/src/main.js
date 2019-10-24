import Vue from 'vue'
import App from './App.vue'
// import AllFooter from './components/AllFooter.vue'

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
    // AllFooter
  },
  data: {
    hashText: ''
  },
  // template: `<div><App :hashText="hashText" /><AllFooter /></div>`,
  template: `<App :hashText="hashText" />`,
  // template: `<section class="todoapp" id="app"><App :hashText="hashText" /><AllFooter /></section>`
})

window.onhashchange = function () {
  app.hashText = window.location.hash.slice(2)
}

window.onhashchange();
