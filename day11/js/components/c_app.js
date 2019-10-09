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
    data: {
        hashText: ''
    },
    template: `<div><App :hashText="hashText" /><all-footer /></div>`,
})

window.onhashchange = function () {
    app.hashText = window.location.hash.slice(2)
    console.log(app.hashText)
}

window.onhashchange()
