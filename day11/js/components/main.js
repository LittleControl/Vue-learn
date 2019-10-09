import todoHeader from './todoHeader'
import { todoMain } from './todoMain'
import todoFooter from './todoFooter'


let template = `
    <section class="todoapp" id="app">
		<todo-header v-on:addItem="addItem($event)" 
		/>
		<template v-if="todos.length">
		<todo-main 
			v-bind:filterTodos="filterTodos" v-on:deleteItem="deleteItem($event)"
			:currentItem="currentItem" @toEditing="toEditing($event)" 
			@doneEdit="doneEdit($event)" @cancelEdit="cancelEdit($event)"
			:isAllCompleted="isAllCompleted" @toggleAll="toggleAll($event)"
		/>
		<todo-footer 
			:leftItems="leftItems"
			@clearCompleted="clearCompleted"
		/>
		</template>
	</section>
`
let todos = []

let app = {
	components: {
		todoHeader,
		todoMain,
		todoFooter,
	},
	template,
	data() {
		return {
			todos: JSON.parse(window.localStorage.getItem('todos')) || todos,
			currentItem: null,
			hashText: ''
		}
	},
	methods: {
		addItem(e) {
			if (e.trim()) {
				let obj = {
					value: e,
					id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
					isCompleted: false
				}
				this.todos.push(obj)
			}
		},
		deleteItem(index) {
			this.todos.splice(index, 1)
		},
		toEditing(item) {
			this.currentItem = item
		},
		doneEdit(e) {
			this.todos[e.index].value = e.value
			this.currentItem = null
		},
		cancelEdit(e) {
			this.currentItem = null
		},
		toggleAll(res) {
			for (let item of this.todos) {
				item.isCompleted = res
			}
		},
		clearCompleted() {
			this.todos = this.todos.filter(item => !item.isCompleted)
		}
	},
	computed: {
		isAllCompleted() {
			return this.todos.every(item => item.isCompleted)
		},
		leftItems() {
			return this.todos.filter(item => !item.isCompleted).length
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
	},
	watch: {
		todos: {
			handler: function () {
				window.localStorage.setItem('todos', JSON.stringify(this.todos))
			},
			deep: true
		}
	},
}

window.onhashchange = function () {
	app.hashText = window.location.hash.slice(2)
}

window.onhashchange()

export default app
