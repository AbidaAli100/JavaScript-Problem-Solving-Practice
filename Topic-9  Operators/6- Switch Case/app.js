
//  Grades of the candidates
/*
   I applied if else condition first to define the case easly 
   in the switch case
*/


let percentage = parseInt(prompt("Your Percentage?"));
// let ObtPer = parseFloat(percentage);

if (percentage > 85) {
    pass = "A";

}

else if (percentage <= 85 && percentage > 80) {
    pass = "A-";
}

else if (percentage <= 80 && percentage > 70) {
    pass = "B";
}

else if (percentage <= 70 && percentage > 60) {
    pass = "C";

}

else if (percentage <= 60 && percentage > 40) {
    pass = "D";

}

else if (percentage <= 40) {
    pass = "fail";

}

switch (pass) {
    case "A":
        alert(" You got A ");
        break;

    case "A-":
        alert(" You have got A- ");
        break;

    case "B":
        alert("You have got B");
        break;

    case "C":
        alert("You have got C");
        break;

    case "D":
        alert("You have got D")
        break;

    case "fail":
        alert("You failed the Exam")
        break;
    default:
        alert("default condition");
}