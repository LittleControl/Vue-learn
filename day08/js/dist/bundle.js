(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let todoHeader = require('./todoHeader')
let todoList = require('./todoList')
let todoFooter = require('./todoFooter')
let app = {
    template: `
        <section class="todoapp" id="app">
            <todo-header></todo-header>
            <todo-list></todo-list>
            <todo-footer></todo-footer>
        </section>
    `,
    components: {
        todoHeader,
        todoList,
        todoFooter
    }
}

module.exports = app

},{"./todoFooter":3,"./todoHeader":4,"./todoList":5}],2:[function(require,module,exports){
let app = require('./app')

new Vue({
    el: '#app',
    components: {
        App: app
    },
    template: `<App />`
})

},{"./app":1}],3:[function(require,module,exports){
let template = `
    <footer class="footer">
        <span class="todo-count"><strong>0</strong> of 0 are left</span>
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" >Clear completed</button>
    </footer>
`
let todoFooter = {
    template
}

module.exports = todoFooter

},{}],4:[function(require,module,exports){
const template = `
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus>
	</header>
`
let todoHeader = {
    template
}

module.exports = todoHeader

},{}],5:[function(require,module,exports){
let template = `
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" >
                    <label>{{ name }}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit">
            </li>
        </ul>
</section>
`
let todoList = {
    template,
    data() {
        return {
            name: 'LittleControl'
        }
    }
}
module.exports = todoList

},{}]},{},[2]);
