/*
    Create a variable my_num and assign it a number. 
     my_num into a string using a toString() method.

*/

let my_num = 42;
let my_num1 = my_num.toString();
console.log(my_num1);   //typeof my_num1 is "string"


//second problem


/*
    Create a variable myString and assign it a value of "2.3".
    Now create 2 more new variables. One integer and assign it a 
    value of parsInt(myString) and another float and assign it a
    value of parseFloat(myString). Check the value and type of integer and
    float in the console.
*/

let myString = "2.3";
console.log(myString);   //the type of variable is "string"

let integerValue = parseInt(myString);
console.log(integerValue); //typeof integerValue is number and the value is "2"

let floatValue = parseFloat(myString);
console.log(floatValue);  //typeof floatValue is "number" and the value is "2.3"



