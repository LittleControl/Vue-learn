/*
    Array.prototype.slice()方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
    slice 方法可以用来将一个类数组（Array-like）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上
*/
// let arr1 = [1, 2, 'a', 'b']
// let arr2 = arr1.slice()
// arr1[0] = 'c'
// console.log(arr1)
// console.log(arr2)
// function test() {
//     console.log(arguments)
//     let args = Array.prototype.slice.call(arguments)
//     console.log(args)
// }
// test(1, 2, 3)
/* Object.keys() */
// let obj1 = {
//     name: 'LittleControl',
//     age: 19,
//     saying: 'Noting to do!'
// }
// console.log(Object.keys(obj1))//输出元素的索引值
/* Objetc.defineProperty() */
//数据描述符
/* 
    数据描述符的默认值
        configurable: false,    //是否可以重新定义
        enumerable: false,      //是否可以枚举
        value: undefined,       //该属性对应的值
        writable: false,        //属性值是否可以可以改变        
 */
// 如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。
// 如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。
let obj2 = {
    name: 'Rain',
    age: 19,
    saying: 'Find what you love and let it kill you'
}
let value = 'I Love Her'
Object.defineProperty(obj2, 'news', {
    // 存取描述符
    get() {
        return value
    },
    set(newValue) {
        value = newValue
    },
    // enumerable: true
})
console.log(obj2.news)
obj2.news = 'I desire love'
console.log(obj2.news)




