// function addNumbers(a, b) {
//     return a + b;
// }

// let a=addNumbers(5, 10); // 15
// console.log('a: ', a);

// let fun=function(a, b) {
//     return a*b;
// }

// let a=fun(5, 10); // 15
// console.log('a: ', a); // 15


// let a= x => x*x;


// console.log(a(3)); // 15

// (function addNumbers(a, b) {
//     console.log(a+b);
// })(3,4);

// function addNumbers(a) {
   
//    this.a=a;
//    console.log(a);
//    this.a++;
//    console.log(this.a);
// }

// addNumbers(5); // 15
let a = 10;

let obj={
    a: 10,
    b: 20000
};
let obj1=JSON.parse(JSON.stringify(obj))

obj.a = 20;
// console.log(obj);

console.log('obj1: ', obj1);

console.log(obj); // {"a":10,"b":20000}
