// let a = prompt("hey what's your age")//ask input in alert, string
// alert("hello")//alert, string
let a = "25"
console.log(typeof a)//string
a = Number.parseInt(a)
console.log(typeof a)//number

// if(a>0){
//     alert("a is greater than 0");
// }
// else{
//     alert("a is not greater than 0");
// }
let age = a;
// if(age>30){
//     console.log("age is greater than 30");
// }
// else if(age<30 && age>20){
//     console.log("age is less than 30 but greater than 20");
// }
// else{
//     console.log("age is less than 20");
// }

console.log("age",age>30?"greater than 30":"less than 30")//ternary operator

let age2 = 20;//prompt("what's your age");
if(age2<40 && age2>30){
    console.log("age2 is between 30 and 40");
}
//switch case
let age3=20
 switch(age3){
    case 20:
        console.log("age3 is 20");
        break;
    case 20:
        console.log("age3 is 20");
        break;
    case 30:
        console.log("age3 is 30");
        break;
    default:
        console.log("age3 is greater than30");
 }

 