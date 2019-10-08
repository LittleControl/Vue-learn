let todoHeader = require('./todoHeader')
let todoList = require('./todoList')
let todoFooter = require('./todoFooter')
let app = {
    template: `
        <section class="todoapp" id="app">
            <todo-header v-bind:name='name'></todo-header>
            <todo-list></todo-list>
            <todo-footer></todo-footer>
        </section>
    `,
    components: {
        todoHeader,
        todoList,
        todoFooter
    },
    data() {
        return {
            name: 'LittleControl'
        }
    },
}

module.exports = app
