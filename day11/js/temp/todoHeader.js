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