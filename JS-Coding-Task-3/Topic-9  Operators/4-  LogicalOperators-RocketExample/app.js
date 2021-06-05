
/*
Take 3 variables. IsSnow, IsRain, IsSpeed.
 Give values to them true  or false as per your choice. 
To launch the rocket there are conditions that there should be no rain, 
no snow and the speed of wind should be less than 20km/hr. 
Use logical operators to match the conditions and observe the result.
*/

let IsRain = false;
let IsSnow = false;
let windSpeed = 19;

canLaunch = (IsRain === false) && (IsSnow === false) && (windSpeed < 20);

alert(canLaunch + " We can Launch the rocket");
