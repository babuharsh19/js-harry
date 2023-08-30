// //primitive data types : 7 types(dynamically assigned)
// //null
// //number
// //string
// //bool
// //symbol
// //undefined
// //bigint

// // let a = null
// // let b =  345
// // let c = true;
// // let d = BigInt("567")
// // let e = 'harsh'
// // let f = Symbol(" I am a symbol")
// // let g = undefined
// // let h //undefined

// // console.log(a,b,c,d,e,f,g)
// // console.log(typeof d)

// //non primitive data type : object
// const item = {
//     "harry":true,
//     "Subh":23,
//     "aman":false
// }
// // console.log(item.aman)
// // console.log(item["abc"])

// //pratice set 1
// //Q1 .create a variable of type string and add a number to it
// let a = "harsh"
// let b = 6
// console.log(a+b)
// console.log(typeof (a+b)) //string
// //Q. create a object to hold a number later
// // let c = {
// //     name : "harsh",
// //     section : 1,
// //     isstudent : false
// // }
// // c=8
// // console.log(c) //8
// //

// //Q4. change name in c.
// // const c = {
// //     name : "harsh",
// //     section : 1,
// //     isstudent : false
// // }
// // c=8
// // console.log(c) //8
// const c = {
//     name : "harsh",
//     section : 1,
//     isstudent : false
// }
// c.name = "aman" 
// console.log(c) //{ name: 'aman', section: 1, isstudent: false }

// //Q. add new key in const c
// c.age = 34
// console.log(c) //{ name: 'aman', section: 1, isstudent: false, age: 34 }

//Operators in js
let a= 5;
let b=6;
console.log(a+b);//11
console.log(a/b)//0.8333333334
console.log(a*b);//30
console.log(a**b);//15625
console.log(b%a);//1
console.log(++a);//6
console.log(a);//6
console.log(a++);//6
console.log(a);//7

//comparison operators
let comp1=6;
let comp2 ="6";
console.log(comp1==comp2)//true
console.log(comp1!=comp2)//false
console.log(comp1===comp2)//false
console.log(comp1!==comp2)//true

//logical operators
let x =5;
let y =6;
console.log(x>y && x==5)//false
console.log(x>y || x==5)//true

/* multiline
comment */

