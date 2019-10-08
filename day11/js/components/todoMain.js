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
let template = `
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li v-for="(item, index) in todos">
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>{{ item.value }}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit">
            </li>
        </ul>
    </section>

`
let todoMain = {
    props: ['todos'],
    template
}

export {todoMain}
