
//out of the following

var a = 5;
var b = 10;
var c = "5";
var x = a;


//1-  a == c --- (the "==" ignores the type)
let isEqual1 = (a == c);
console.log(isEqual1)

//2- a===c ---- ("===" compares the type of the variable too, its different now.)
let isEqual2 = (a === c);
console.log(isEqual2);


//3- a=x 
let isEqual3 = (a == x);
console.log(isEqual3);

//4- a != b
let isEqual4 = (a != b);
console.log(isEqual4);


//5- a > b
let isEqual5 = (a > b);
console.log(isEqual5);

//6- a < b
let isEqual6 = (a < b);
console.log(isEqual6);



//7- a >= b

let isEqual7 = (a >= b);
console.log(isEqual7);


//8- a <= b
let isEqual8 = (a <= b);
console.log(isEqual8);

// 9- a >= c
let isEqua9 = (a >= c);
console.log(isEqua9);

//10 - a <= c
let isEqual10 = (a <= c);
console.log(isEqual10);