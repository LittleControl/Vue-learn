import todoHeader from './todoHeader'
import {todoMain} from './todoMain'
import todoFooter from './todoFooter'
import footer from './footer'

let template = `
    <section class="todoapp" id="app">
		<todo-header v-on:getValue="addItem($event)" />
		<todo-main v-bind:todos='todos' />
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
			todos
		}
	},
	methods: {
		addItem(e) {
			console.log(e)
		}
	},
}
export default app
