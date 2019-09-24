let arr = [
    {
        id: 1,
        name: 'Little'
    },
    {
        id: 1,
        name: 'Control'
    },
    {
        id: 1,
        name: 'Rain'
    }
]

//改变了数组的内容
/* for (const item of arr) {
    item.name = 'Little'
} */

//item为数组下标,可通过下标修改内容
/* for (const item in arr) {
    console.log(item)
    arr[item].name = 'Little'
} */

// for (const item in arr) {
//     if (arr[item].id == 1) {
//         arr.splice(item,1)
//     }
// }
arr = arr.filter(item => item.id == 1)

console.log(arr);

let obj = {}
console.log(obj.id);
