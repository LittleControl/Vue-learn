const app = new Vue({
    el: '#app',
    data: {
        seen: false,
        inputText: '',
        isAllComplete: false,
        todos: [
            {
                value: 'Sleep',
                oriValue: 'Sleep',
                id: 0,
                isCompleted: false,
                isEdit: false
            },
            {
                value: 'Eat',
                oriValue: 'Eat',
                id: 1,
                isCompleted: false,
                isEdit: false
            },
            {
                value: 'Running',
                oriValue: 'Running',
                id: 2,
                isCompleted: false,
                isEdit: false
            }
        ]
    },
    methods: {
        addItems() {
            let obj = {
                value: this.inputText,
                oriValue: this.inputText,
                // id: this.todos[this.todos.length - 1].id + 1 || 0,
                isCompleted: false,
                isEdit: false
            }
            if (this.todos.length == 0) {
                obj.id = 0
            } else {
                obj.id = this.todos[this.todos.length - 1].id + 1
            }
            this.todos.push(obj)
            this.inputText = ''
        },
        changeisCompleted(index) {
            this.todos[index].isCompleted = !this.todos[index].isCompleted
        },
        deleteItem(index) {
            this.todos.splice(index, 1)
        },
        editClick(index) {
            this.todos[index].isEdit = true
        },
        doneEdit(index) {
            this.todos[index].oriValue = this.todos[index].value
            this.todos[index].isEdit = false
        },
        isEmpty() {
            console.log(this.todos.length)
            if (this.todos.length == 0) {
                return true
            } else {
                return false
            }
        },
        cancelEdit(index) {
            this.todos[index].value = this.todos[index].oriValue
            this.todos[index].isEdit = false
        },
        cancelItem() {
            this.inputText = ''
        },
        test() {
            console.log('LittleControl')
        },
        allComplete() {
            if (this.isAllComplete) {
                for (const item of this.todos) {
                    item.isCompleted = false
                }
                this.isAllComplete = false
            } else {
                for (const item of this.todos) {
                    item.isCompleted = true
                }
                this.isAllComplete = true
            }
        },
        clearCompleted() {
            this.todos = this.todos.filter(item => item.isCompleted = false)
        }
    }
})
