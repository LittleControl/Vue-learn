'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = '\n    <header class="header">\n        <h1>Vue-todos</h1>\n        <input class="new-todo" placeholder="What needs to be done?" @keyup.enter="addItem($event)">\n    </header>\n';
var todoHeader = {
    template: template,
    data: function data() {
        return {};
    },

    methods: {
        addItem: function addItem(e) {
            console.log(e.target.value);
            this.$emit('getValue', e.target.value);
        }
    }
    // props:['addItem']
};

exports.default = todoHeader;