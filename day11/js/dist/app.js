(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n    <footer class=\"info\">\n        <p>Double-click to edit a todo</p>\n        <p>Created by <a href=\"http://www.littlecontrol.top\">LittleControl</a></p>\n    </footer>\n";
var allFooter = {
    template: template
};

exports.default = allFooter;
},{}],2:[function(require,module,exports){
'use strict';

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _allFooter = require('./allFooter');

var _allFooter2 = _interopRequireDefault(_allFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var app = new Vue({
    el: '#app',
    components: {
        App: _main2.default,
        allFooter: _allFooter2.default
    },
    data: {
        hashText: ''
    },
    template: '<div><App :hashText="hashText" /><all-footer /></div>'
});

window.onhashchange = function () {
    app.hashText = window.location.hash.slice(2);
    console.log(app.hashText);
};

window.onhashchange();
},{"./allFooter":1,"./main":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _todoHeader = require('./todoHeader');

var _todoHeader2 = _interopRequireDefault(_todoHeader);

var _todoMain = require('./todoMain');

var _todoFooter = require('./todoFooter');

var _todoFooter2 = _interopRequireDefault(_todoFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = '\n    <section class="todoapp" id="app">\n\t\t<todo-header v-on:addItem="addItem($event)" \n\t\t/>\n\t\t<template v-if="todos.length">\n\t\t<todo-main \n\t\t\tv-bind:filterTodos="filterTodos" v-on:deleteItem="deleteItem($event)"\n\t\t\t:currentItem="currentItem" @toEditing="toEditing($event)" \n\t\t\t@doneEdit="doneEdit($event)" @cancelEdit="cancelEdit($event)"\n\t\t\t:isAllCompleted="isAllCompleted" @toggleAll="toggleAll($event)"\n\t\t/>\n\t\t<todo-footer \n\t\t\t:leftItems="leftItems"\n\t\t\t@clearCompleted="clearCompleted"\n\t\t\t:hashText="hashText"\n\t\t/>\n\t\t</template>\n\t</section>\n';
var todos = [];

var app = {
	components: {
		todoHeader: _todoHeader2.default,
		todoMain: _todoMain.todoMain,
		todoFooter: _todoFooter2.default
	},
	template: template,
	props: ['hashText'],
	data: function data() {
		return {
			todos: JSON.parse(window.localStorage.getItem('todos')) || todos,
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
		},
		clearCompleted: function clearCompleted() {
			this.todos = this.todos.filter(function (item) {
				return !item.isCompleted;
			});
		}
	},
	computed: {
		isAllCompleted: function isAllCompleted() {
			return this.todos.every(function (item) {
				return item.isCompleted;
			});
		},
		leftItems: function leftItems() {
			return this.todos.filter(function (item) {
				return !item.isCompleted;
			}).length;
		},
		filterTodos: function filterTodos() {
			if (this.hashText === 'completed') {
				return this.todos.filter(function (item) {
					return item.isCompleted;
				});
			} else if (this.hashText === 'active') {
				return this.todos.filter(function (item) {
					return !item.isCompleted;
				});
			} else {
				return this.todos;
			}
		}
	},
	watch: {
		todos: {
			handler: function handler() {
				window.localStorage.setItem('todos', JSON.stringify(this.todos));
			},
			deep: true
		}
	}

	/* 这里不知道该把这个hash方法放在哪里,所以目前只能用最笨的方法,就是在a标签绑定单击事件来改变hashText的值 */
	// window.onhashchange = function () {
	// 	app.hashText = window.location.hash.slice(2)
	// }

	// window.onhashchange()

};exports.default = app;
},{"./todoFooter":4,"./todoHeader":5,"./todoMain":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = '\n    <footer class="footer">\n        <span class="todo-count"><strong>{{ leftItems }}</strong> item left</span>\n        <ul class="filters">\n            <li>\n                <a :class="{selected: hashText===\'\'}" href="#/">All</a>\n            </li>\n            <li>\n                <a :class="{selected: hashText===\'active\'}" href="#/active">Active</a>\n            </li>\n            <li>\n                <a :class="{selected: hashText===\'completed\'}" href="#/completed">Completed</a>\n            </li>\n        </ul>\n        <button class="clear-completed" @click="clearCompleted">Clear completed</button>\n    </footer>\n';
var todoFooter = {
    template: template,
    props: ['hashText', 'leftItems'],
    methods: {
        clearCompleted: function clearCompleted() {
            this.$emit('clearCompleted');
        }
    }
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
var template = '\n    <section class="main">\n        <input id="toggle-all" class="toggle-all" type="checkbox"\n            @click="toggleAll($event)"\n            :checked="isAllCompleted">\n        <label for="toggle-all">Mark all as complete</label>\n        <ul class="todo-list">\n            <li \n                v-for="(item, index) in filterTodos"\n                :class="{completed: item.isCompleted, editing: currentItem === item}"\n            >\n                <div class="view">\n                    <input class="toggle" type="checkbox" v-model="item.isCompleted">\n                    <label @dblclick="toEditing(item)">{{ item.value }}</label>\n                    <button class="destroy" @click="deleteItem(index)"></button>\n                </div>\n                <input class="edit"\n                    :value="item.value" @keyup.enter="doneEdit(index, $event)"\n                    @keyup.esc="cancelEdit(index)" @blur="doneEdit(index, $event)"\n                    v-todo-focus="currentItem === item"\n                >\n            </li>\n        </ul>\n    </section>\n\n';
var todoMain = {
    props: ['filterTodos', 'currentItem', 'isAllCompleted'],
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
},{}]},{},[2]);
