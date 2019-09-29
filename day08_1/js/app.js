Vue.directive('focus', {
	inserted(el, binding) {
		el.focus()
	}
})
let todos = [
	// {
	// 	id: 0,
	// 	value: '感冒',
	// 	isCompleted: false,
	// 	isEditing: false
	// },
	// {
	// 	id: 1,
	// 	value: '发烧',
	// 	isCompleted: false,
	// 	isEditing: false
	// },
	// {
	// 	id: 2,
	// 	value: '上火',
	// 	isCompleted: false,
	// 	isEditing: false
	// }
]

const app = new Vue({
	el: '#app',
	data: {
		todos: JSON.parse(window.localStorage.getItem('todos')) || todos,
		allCompleted: false,
		hashText: ''
	},
	methods: {
		toEditing(index) {
			this.todos[index].isEditing = true
		},
		doneEdit(index, e) {
			this.todos[index].value = e.target.value
			this.todos[index].isEditing = false
		},
		cancelEdit(index) {
			this.todos[index].isEditing = false
		},
		deleteItem(index) {
			this.todos.splice(index, 1)
		},
		addItem(e) {
			let todoItem = {
				id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
				value: e.target.value,
				isCompleted: false,
				isEditing: false
			}
			if (todoItem.value.trim()) {
				this.todos.push(todoItem)
				window.localStorage.setItem(todoItem.id, todoItem.value)
			}
			e.target.value = ''
		},
		toggleAll() {
			let res = !this.allCompleted
			for (let item of this.todos) {
				item.isCompleted = res
			}
			this.allCompleted = res
		},
		clearCompleted() {
			this.todos = this.todos.filter(item => !item.isCompleted)
		},

	},
	watch: {
		todos: {
			handler: function () {
				window.localStorage.setItem('todos', JSON.stringify(this.todos))
			},
			deep: true
		}
	},
	computed: {
		leftItems: {
			get: function () {
				return this.leftItems = this.todos.filter(item => !item.isCompleted).length
			},
			set: function () {

			}
		},
		filterTodos() {
			if (this.hashText === 'completed') {
				return this.todos.filter(item => item.isCompleted)
			} else if (this.hashText === 'active') {
				return this.todos.filter(item => !item.isCompleted)
			} else {
				return this.todos
			}
		}
	}
})

window.onhashchange = function () {
	app.hashText = window.location.hash.slice(2)
}
window.onhashchange()

