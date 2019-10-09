import main from './main'
import allFooter from './allFooter'

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
        App: main,
        allFooter
    },
    template: `<div><App /><all-footer /></div>`
})
