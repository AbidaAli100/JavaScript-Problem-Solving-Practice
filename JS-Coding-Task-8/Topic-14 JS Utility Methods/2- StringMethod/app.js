/*
   1- Use .length property to print length of a string cityName = ‘Tokyo’
   2-Find the index of ‘o’ character in the given string using indexOf method
   3- Use search method to locate ‘o’ in the given string and notice the
difference between indexOf and search methods
*/

let cityName = "Tokyo";
console.log(cityName.length); //length is "5"

//indexOf
var a = cityName.indexOf("o");
console.log(a);  //indexOf "o" is 1

//search method to locate "o"
let b = cityName.search("o");
console.log(b);     // answer is "1"

