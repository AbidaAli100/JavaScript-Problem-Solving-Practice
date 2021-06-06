
/*
  Use the splice method to add two game names ‘Polo’ and ‘Kabaddi’
   to the same array at the third index using the splice method 
*/

let games = ["football", "volleyball", "cricket", "MMA", "basketball"]
games.splice(1, 3, "Polo", "Kabaddi");
console.log(games);