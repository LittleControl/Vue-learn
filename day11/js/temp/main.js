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

var template = '\n    <section class="todoapp" id="app">\n\t\t<todo-header v-on:getValue="addItem($event)" />\n\t\t<todo-main v-bind:todos=\'todos\' />\n\t</section>\n';
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
			todos: todos
		};
	},

	methods: {
		addItem: function addItem(e) {
			console.log(e);
		}
	}
};
exports.default = app;