/*
    A --- Write a for loop to traverse the array and find if ‘Cricket’ exists in the array.
         Print ‘Cricket exists’ if it is in the array. Otherwise print ‘Does not exist’
*/


let games = ["Football", "Tennis", "MMA", "Cricket", "Volleyball"]
for (let i = 0; i < games.length; i++) {
    console.log(games[i] + ":")
}
let x = games.includes("Cricket");
if (x == true) {
    console.log("Cricket Exists")
} else {
    console.log("Cricket Doesnot Include")
}


//B - Write a forEach loop and attempt the same problem as above.

games.forEach(myFunction);

function myFunction(findingElement) {
    if ("Cricket" == findingElement) {
        console.log("Cricket Exists")
    } else {
        console.log("Cricket DoesNot Exist")
    }
}

// C ---Write   a for..of loop and attempt the same problem as above

for (i of games) {
    if ("Cricket" == i) {
        console.log("Cricket Exists")
    } else {
        console.log("Cricket DoesNot Exist")
    }
}
