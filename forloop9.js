//program to add first n natural numbers
let n = 4;
let sum = 0;
for(let i=0;i<=n;i++){
    sum+=i;
}
console.log(sum);

//for in loop
let obj={
    harsh : 90,
    ashish : 83,
    sr : 34,
    aman : 67
}
for(let a in obj){
    console.log(a); //harsh ashish sr aman
}
//for of loop
for(let a of "Harsh"){
    console.log(a);//h a r s h
}