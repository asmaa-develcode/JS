// const sum = function (a, b) {
//     return a + b;
//   }
  
//   const subtract = function (a, b) {
//     return a - b;
//   }
  
//   const multiply = function (a, b) {
//     return a * b;
//   }
  
//   const divide = function (a, b) {
//     return a / b;
//   }
  
//   const log = function (value) {
//     console.log(value);
//   }
// el objetivo es que se de el resultado de la siguiente operación:((2 + 4) * (5 + 2) - 2) / 5

let sum = (a,b)=>a+b;
let substract = (a,b)=> a-b;
let multiply= (a,b)=> a*b;
let divide= (a,b)=> a/b;

let value= divide(substract(multiply(sum(2,4), sum(5,2)),2),5);
console.log(value);

