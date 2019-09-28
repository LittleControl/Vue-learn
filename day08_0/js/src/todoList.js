let template = `
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" >
                    <label>{{ name }}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit">
            </li>
        </ul>
</section>
`
let todoList = {
    template,
    data() {
        return {
            name: 'LittleControl'
        }
    }
}
module.exports = todoList
