let template = `
    <header class="header">
        <h1>Vue-todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" 
            @keyup.enter="addItem($event)"
            v-focus
        >
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
            if (e.target.value.trim()) {
                this.$emit('addItem', e.target.value)
                e.target.value = ''
            }
        }
    },
}

export default todoHeader
