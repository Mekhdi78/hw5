// task 1

// let std = ['alex', 'adam', 'john']
// let name = prompt(`${std} выбери кого хочешь удалить`).toLocaleLowerCase().trim()
// let idx = std.indexOf(name)
// if (idx !== -1) {
//     std.splice(idx, 1)
// }else{
//     alert('user not found')
// }
// console.log(
//     std
// );                                                                    


//task 2

let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]]
let total = arr[0][0].a.price + arr[0][1].a.price + arr[0][2].a.price

console.log(
    total
);