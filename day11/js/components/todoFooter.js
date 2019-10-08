let template = `
    <footer class="footer">
        <span class="todo-count"><strong>{{ leftItems }}</strong> item left</span>
        <ul class="filters">
            <li>
                <a :class="{selected: hashText===''}" href="#/">All</a>
            </li>
            <li>
                <a :class="{selected: hashText==='active'}" href="#/active">Active</a>
            </li>
            <li>
                <a :class="{selected: hashText==='completed'}" href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed" @click="clearCompleted">Clear completed</button>
    </footer>
`
let todoFooter = {
    template:`<h2>TodFooter</h2>`
}

export default todoFooter
