/* 
    重点是利用defineProperty来进行数据代理
    然后就是在原型上添加代理方法
*/

function MVVM(options) {
    this.$options = options
    this._data = this.$options.data
    Object.keys(this._data).forEach(key => {
        this._proxy(key)
    })
}
MVVM.prototype = {
    _proxy(key) {
        Object.defineProperty(this, key, {
            configurable: false,
            enumerable: true,
            get: function proxyGetter() {
                return this._data[key]
            },
            set: function proxySetter(value) {
                return this._data[key] = value
            }
        })
    }
}

let app = new MVVM({
    data: {
        name: 'LittleControl',
        age: 18
    }
})
console.log(app.name)
console.log(app.age)
app.name = 'Nothing'
app.age = 22
console.log(app.name)
console.log(app.age)
