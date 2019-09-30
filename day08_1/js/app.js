Vue.directive('focus', {
	inserted(el, binding) {
		el.focus()
	}
})

Vue.directive('todo-focus', {
	update(el, binding) {
		if (binding.value) {
			el.focus()
		}
	}
})

let todos = [
	// {
	// 	id: 0,
	// 	value: '感冒',
	// 	isCompleted: false,
	// 	// isEditing: false
	// },
	// {
	// 	id: 1,
	// 	value: '发烧',
	// 	isCompleted: false,
	// 	// isEditing: false
	// },
	// {
	// 	id: 2,
	// 	value: '上火',
	// 	isCompleted: false,
	// 	// isEditing: false
	// }
]

const app = new Vue({
	el: '#app',
	data: {
		todos: JSON.parse(window.localStorage.getItem('todos')) || todos,
		currentItem: null,
		hashText: ''
	},
	methods: {
		toEditing(item) {
			this.currentItem = item
		},
		doneEdit(index, e) {
			this.todos[index].value = e.target.value
			this.currentItem = null
			// console.log('doneEdit')
		},
		cancelEdit(index) {
			this.currentItem = null
			// console.log('cancleEdit')
		},
		deleteItem(index) {
			this.todos.splice(index, 1)
		},
		addItem(e) {
			let todoItem = {
				id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
				value: e.target.value,
				isCompleted: false
			}
			this.todos.push(todoItem)
			e.target.value = ''
		},
		toggleAll(e) {
			//注意这里e.target.checked是点击之后的值
			// console.log(e.target.checked)
			let res = e.target.checked
			for (let item of this.todos) {
				item.isCompleted = res
			}
		},
		clearCompleted() {
			this.todos = this.todos.filter(item => !item.isCompleted)
		}

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
		},
		isALlCompleted() {
			return this.todos.every(item => item.isCompleted)
		}
	}
})

window.onhashchange = function () {
	app.hashText = window.location.hash.slice(2)
}
window.onhashchange()
