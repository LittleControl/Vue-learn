'use strict';

var _ref;

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Vue.directive('focus', {
    inserted: function inserted(el, binding) {
        el.focus();
    }
});

Vue.directive('todo-focus', {
    update: function update(el, binding) {
        if (binding.value) {
            el.focus();
        }
    }
});

// let todos = []


var app = new Vue((_ref = {
    el: '#app',
    components: {
        App: _main2.default
    },
    template: '<App />'
}, _defineProperty(_ref, 'el', '#app'), _defineProperty(_ref, 'data', {
    todos: JSON.parse(window.localStorage.getItem('todos')) || todos,
    currentItem: null,
    hashText: ''
}), _defineProperty(_ref, 'methods', {
    // toEditing(item) {
    //     this.currentItem = item
    // },
    // doneEdit(index, e) {
    //     this.todos[index].value = e.target.value
    //     this.currentItem = null
    //     // console.log('doneEdit')
    // },
    // cancelEdit(index) {
    //     this.currentItem = null
    //     // console.log('cancleEdit')
    // },
    // deleteItem(index) {
    //     this.todos.splice(index, 1)
    // },
    addItem: function addItem(e) {
        console.log(e);
        console.log(22222);
        // let todoItem = {
        //     id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
        //     value: e.target.value,
        //     isCompleted: false
        // }
        // this.todos.push(todoItem)
        // e.target.value = ''
    }
}), _defineProperty(_ref, 'watch', {
    // todos: {
    //     handler: function () {
    //         window.localStorage.setItem('todos', JSON.stringify(this.todos))
    //     },
    //     deep: true
    // }
}), _defineProperty(_ref, 'computed', {
    // leftItems: {
    //     get: function () {
    //         return this.leftItems = this.todos.filter(item => !item.isCompleted).length
    //     },
    //     set: function () {

    //     }
    // },
    // filterTodos() {
    //     if (this.hashText === 'completed') {
    //         return this.todos.filter(item => item.isCompleted)
    //     } else if (this.hashText === 'active') {
    //         return this.todos.filter(item => !item.isCompleted)
    //     } else {
    //         return this.todos
    //     }
    // },
    // isALlCompleted() {
    //     return this.todos.every(item => item.isCompleted)
    // }
}), _ref));

window.onhashchange = function () {
    app.hashText = window.location.hash.slice(2);
};
window.onhashchange();