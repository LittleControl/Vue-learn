import todoHeader from './todoHeader'
import { todoMain } from './todoMain'
import todoFooter from './todoFooter'
import footer from './footer'

let template = `
    <section class="todoapp" id="app">
		<todo-header v-on:addItem="addItem($event)" 
		/>
		<todo-main 
			v-bind:todos="todos" v-on:deleteItem="deleteItem($event)"
			:currentItem="currentItem" @toEditing="toEditing($event)" 
			@doneEdit="doneEdit($event)" @cancelEdit="cancelEdit($event)"
			:isAllCompleted="isAllCompleted" @toggleAll="toggleAll($event)"
		/>
	</section>
`
let todos = [
	{
		id: 0,
		value: '感冒',
		isCompleted: false,
	},
	{
		id: 1,
		value: '发烧',
		isCompleted: false,
	},
	{
		id: 2,
		value: '上火',
		isCompleted: false,
	}
]

let app = {
	components: {
		todoHeader,
		todoMain,
		todoFooter,
		footer
	},
	template,
	data() {
		return {
			todos,
			currentItem: null,
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
		}
	},
	computed: {
		isAllCompleted() {
			return this.todos.every(item => item.isCompleted)
		}
	},
}
export default app
