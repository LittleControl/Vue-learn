let template = `
    <footer class="footer">
        <span class="todo-count"><strong>0</strong> of 0 are left</span>
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" >Clear completed</button>
    </footer>
`
let todoFooter = {
    template
}

module.exports = todoFooter
