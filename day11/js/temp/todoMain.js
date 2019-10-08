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
var template = '\n    <section class="main">\n        <input id="toggle-all" class="toggle-all" type="checkbox>\n        <label for="toggle-all">Mark all as complete</label>\n        <ul class="todo-list">\n            <li v-for="(item, index) in todos">\n                <div class="view">\n                    <input class="toggle" type="checkbox">\n                    <label>{{ item.value }}</label>\n                    <button class="destroy"></button>\n                </div>\n                <input class="edit">\n            </li>\n        </ul>\n    </section>\n\n';
var todoMain = {
    props: ['todos'],
    template: template
};

exports.todoMain = todoMain;