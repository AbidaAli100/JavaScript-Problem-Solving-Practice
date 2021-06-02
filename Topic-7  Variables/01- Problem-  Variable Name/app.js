/*
    Declare a variable using let inside a function.
    Add that same variable in another function 
    and see what happens.
 */

    function one(){
        let a = "abida";
        console.log(a);
    }

    function two(){
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