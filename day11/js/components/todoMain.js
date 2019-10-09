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
        <input id="toggle-all" class="toggle-all" type="checkbox"
            @click="toggleAll($event)"
            :checked="isAllCompleted">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li v-for="(item, index) in todos"
            :class="{completed: item.isCompleted, editing: currentItem === item}">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.isCompleted">
                    <label @dblclick="toEditing(item)">{{ item.value }}</label>
                    <button class="destroy" @click="deleteItem(index)"></button>
                </div>
                <input class="edit"
                :value="item.value" @keyup.enter="doneEdit(index, $event)"
                @keyup.esc="cancelEdit(index)" @blur="doneEdit(index, $event)"
                v-todo-focus="currentItem === item"
                >
            </li>
        </ul>
    </section>

`
let todoMain = {
    props: ['todos', 'currentItem','isAllCompleted'],
    template,
    methods: {
        deleteItem(index) {
            this.$emit('deleteItem', index)
        },
        toEditing(item) {
            this.$emit('toEditing', item)
        },
        doneEdit(index, e) {
            let value = e.target.value
            this.$emit('doneEdit', {index, value})
        },
        cancelEdit(index) {
            this.$emit('cancelEdit', index)
        },
        toggleAll(e) {
            let res = e.target.checked
            this.$emit('toggleAll', res)
        }
    },
}

export { todoMain }
