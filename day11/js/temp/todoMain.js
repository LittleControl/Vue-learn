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