let template = `
    <header class="header">
        <h1>Vue-todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" @keyup.enter="addItem($event)">
    </header>
`
let todoHeader = {
    template,
    data() {
        return {

        }
    },
    methods: {
        addItem(e) {
            console.log(e.target.value)
            this.$emit('getValue', e.target.value)
        }
    },
    // props:['addItem']
}

export default todoHeader
