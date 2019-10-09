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