let app = require('./app')

new Vue({
    el: '#app',
    components: {
        App: app
    },
    template: `<App />`,
    // props:[{'Name': 'Name'}],
})
