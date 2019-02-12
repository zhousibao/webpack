//import 'babel-polyfill'  //污染全局变量 适合开发项目  //transform-runtime 局部变量 适合开发框架

let func = () => {}
const NUM = 99
let arr = [12, 5, 9]
let arr1 = arr.map(item => item*2)

arr.includes(8)

console.log('new Set(arr1)', new Set(arr1))

function* fun(){

}