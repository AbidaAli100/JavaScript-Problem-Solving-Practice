/*
    Declare a variable using let inside a function.
    Add that same variable in another function 
    and see what happens.
 */

function one() {
    let a = "abida";
    console.log(a);
}


function two() {
    let a = "abida";
    console.log(a);
}

/*
Answer:
    The console.log prints two different 
    functions and does not through an error.
    Although the variables are same but 
    they are inside two different functions
*/

// second problem

/*
    Now declare a variable using var in a block and try reassigning the
     value to that variable in another block and see if it throws an error or not.
*/

function first() {
    let d = 50;

}

function second() {
    d = 40;
}

/*
    It does not through any error in the console.log.
    when i print the functions while reassigning the value of "d"
    in the second one, it worked fine

*/


// Third problem

/*
    Create a global variable and try using that variable in
     another function and see if you're able to access that variable.
*/

let numb = 44;

function third() {

    console.log(numb);
}

/*
    Answer..
    yes we can access global variable in the functions
*/


