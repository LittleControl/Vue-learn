(function () {
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        Vue.myGlobalMethod = function () {
            console.log('My Global Method')
        }
        Vue.directive('nothing', {
            bind (el, binding) {
                console.log('bind is running')
            }
        })
        Vue.mixin()
        Vue.prototype.$myMethod = function () {
            console.log('www.littlecontrol.top')
        }
    }
    window.MyPlugin = MyPlugin
})()
