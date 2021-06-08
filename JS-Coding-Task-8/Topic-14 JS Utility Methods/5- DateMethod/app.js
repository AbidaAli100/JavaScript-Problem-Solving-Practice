/*
   A-- Suppose you’re given this array: let agesArray = [12,45,56,4].
    Use map method to print all of the values and their indices.
    After that use map method to make a new array from the same array
     by multiplying each age value by 10.
   B -- Suppose you’re given an array of objects
*/

let agesArray = [12, 45, 56, 4]
var a = agesArray.map(mapFunction);
function mapFunction(numb) {
   return numb * 10;
}
console.log(a);
