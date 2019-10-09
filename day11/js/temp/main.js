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