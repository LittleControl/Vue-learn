(function (window){
    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        Vue.myGlobalMethod = function () {
            console.log('My Global Method')
        }
        Vue.directive('nothing', function (el, binding) {
            console.log(el)
            console.log(binding)
        })
        //如果这里没有加载组件啥的,一定不要使用mixin方法,不然会导致插件的注册失败
        //Vue.mixin()
        Vue.prototype.$myMethod = function () {
            console.log('www.littlecontrol.top')
        }
    }
    window.MyPlugin = MyPlugin
})(window)

