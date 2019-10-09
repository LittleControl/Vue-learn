(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./main":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n    <footer class=\"info\">\n        <p>Double-click to edit a todo</p>\n        <p>Created by <a href=\"http://www.littlecontrol.top\">LittleControl</a></p>\n    </footer>\n";
var footer = {
    template: template
};

exports.default = footer;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _todoHeader = require('./todoHeader');

var _todoHeader2 = _interopRequireDefault(_todoHeader);

var _todoMain = require('./todoMain');

var _todoFooter = require('./todoFooter');

var _todoFooter2 = _interopRequireDefault(_todoFooter);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = '\n    <section class="todoapp" id="app">\n\t\t<todo-header v-on:addItem="addItem($event)" \n\t\t/>\n\t\t<todo-main \n\t\t\tv-bind:todos="todos" v-on:deleteItem="deleteItem($event)"\n\t\t\t:currentItem="currentItem" @toEditing="toEditing($event)" \n\t\t\t@doneEdit="doneEdit($event)" @cancelEdit="cancelEdit($event)"\n\t\t\t:isAllCompleted="isAllCompleted" @toggleAll="toggleAll($event)"\n\t\t/>\n\t</section>\n';
var todos = [{
	id: 0,
	value: '感冒',
	isCompleted: false
}, {
	id: 1,
	value: '发烧',
	isCompleted: false
}, {
	id: 2,
	value: '上火',
	isCompleted: false
}];

var app = {
	components: {
		todoHeader: _todoHeader2.default,
		todoMain: _todoMain.todoMain,
		todoFooter: _todoFooter2.default,
		footer: _footer2.default
	},
	template: template,
	data: function data() {
		return {
			todos: todos,
			currentItem: null
		};
	},

	methods: {
		addItem: function addItem(e) {
			if (e.trim()) {
				var obj = {
					value: e,
					id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
					isCompleted: false
				};
				this.todos.push(obj);
			}
		},
		deleteItem: function deleteItem(index) {
			this.todos.splice(index, 1);
		},
		toEditing: function toEditing(item) {
			this.currentItem = item;
		},
		doneEdit: function doneEdit(e) {
			this.todos[e.index].value = e.value;
			this.currentItem = null;
		},
		cancelEdit: function cancelEdit(e) {
			this.currentItem = null;
		},
		toggleAll: function toggleAll(res) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var item = _step.value;

					item.isCompleted = res;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	},
	computed: {
		isAllCompleted: function isAllCompleted() {
			return this.todos.every(function (item) {
				return item.isCompleted;
			});
		}
	}
};
exports.default = app;
},{"./footer":2,"./todoFooter":4,"./todoHeader":5,"./todoMain":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n    <footer class=\"footer\">\n        <span class=\"todo-count\"><strong>{{ leftItems }}</strong> item left</span>\n        <ul class=\"filters\">\n            <li>\n                <a :class=\"{selected: hashText===''}\" href=\"#/\">All</a>\n            </li>\n            <li>\n                <a :class=\"{selected: hashText==='active'}\" href=\"#/active\">Active</a>\n            </li>\n            <li>\n                <a :class=\"{selected: hashText==='completed'}\" href=\"#/completed\">Completed</a>\n            </li>\n        </ul>\n        <button class=\"clear-completed\" @click=\"clearCompleted\">Clear completed</button>\n    </footer>\n";
var todoFooter = {
    template: "<h2>TodFooter</h2>"
};

exports.default = todoFooter;
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = '\n    <header class="header">\n        <h1>Vue-todos</h1>\n        <input class="new-todo" placeholder="What needs to be done?" \n            @keyup.enter="addItem($event)"\n            v-focus\n        >\n    </header>\n';
var todoHeader = {
    template: template,
    data: function data() {
        return {};
    },

    methods: {
        addItem: function addItem(e) {
            if (e.target.value.trim()) {
                this.$emit('addItem', e.target.value);
                e.target.value = '';
            }
        }
    }
};

exports.default = todoHeader;
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* let template = `
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" @change="toggleAll($event)"
            :checked="isALlCompleted">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li v-for="(item, index) in filterTodos"
                :class="{completed: item.isCompleted, editing: currentItem === item}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.isCompleted">
                    <label @dblclick="toEditing(item)">{{ item.value }}</label>
                    <button class="destroy" @click="deleteItem(index)"></button>
                </div>
                <input class="edit" :value="item.value" @keyup.enter="doneEdit(index, $event)"
                    @keyup.esc="cancelEdit(index)" @blur="doneEdit(index, $event)"
                    v-todo-focus="currentItem === item">
            </li>
        </ul>
    </section>
` */
var template = '\n    <section class="main">\n        <input id="toggle-all" class="toggle-all" type="checkbox"\n            @click="toggleAll($event)"\n            :checked="isAllCompleted">\n        <label for="toggle-all">Mark all as complete</label>\n        <ul class="todo-list">\n            <li v-for="(item, index) in todos"\n            :class="{completed: item.isCompleted, editing: currentItem === item}">\n                <div class="view">\n                    <input class="toggle" type="checkbox" v-model="item.isCompleted">\n                    <label @dblclick="toEditing(item)">{{ item.value }}</label>\n                    <button class="destroy" @click="deleteItem(index)"></button>\n                </div>\n                <input class="edit"\n                :value="item.value" @keyup.enter="doneEdit(index, $event)"\n                @keyup.esc="cancelEdit(index)" @blur="doneEdit(index, $event)"\n                v-todo-focus="currentItem === item"\n                >\n            </li>\n        </ul>\n    </section>\n\n';
var todoMain = {
    props: ['todos', 'currentItem', 'isAllCompleted'],
    template: template,
    methods: {
        deleteItem: function deleteItem(index) {
            this.$emit('deleteItem', index);
        },
        toEditing: function toEditing(item) {
            this.$emit('toEditing', item);
        },
        doneEdit: function doneEdit(index, e) {
            var value = e.target.value;
            this.$emit('doneEdit', { index: index, value: value });
        },
        cancelEdit: function cancelEdit(index) {
            this.$emit('cancelEdit', index);
        },
        toggleAll: function toggleAll(e) {
            var res = e.target.checked;
            this.$emit('toggleAll', res);
        }
    }
};

exports.todoMain = todoMain;
},{}]},{},[1]);
