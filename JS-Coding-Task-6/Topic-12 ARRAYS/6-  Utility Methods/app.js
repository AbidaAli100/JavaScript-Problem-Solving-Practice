
/*
  1- Add ‘Polo’ as a member of the same array at the end using one of the utility methods
  2- Add ‘Polo’ as a member of the same array at the beginning of the array using one of the utility methods
  3- Remove a member of the same array from the end
  4- Remove a member of the same array from the beginning
*/

let games = ["football", "volleyball", "cricket", "MMA", "basketball"]
 games.push("Polo");
 console.log(games); //added new game "polo" at the end of the array using "push"


 games.unshift("polo");
 console.log(games); //added polo in the start of the array using "unshift"


 games.pop();
 console.log(games); //removed a member from the end of the array using "pop"

 games.shift();
 console.log(games); //removed a member from the start of the array using "shift"