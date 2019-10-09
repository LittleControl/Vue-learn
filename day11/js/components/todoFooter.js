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
    template,
    props: ['hashText','leftItems'],
    methods: {
        clearCompleted() {
            this.$emit('clearCompleted')
        }
    },
}

export default todoFooter
