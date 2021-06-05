


//using Comparsion and logical operators 

function Operator() {
    let passingMarks = 55;

    let urdumark = parseInt(document.querySelector(".urdu").value);
    let englishmark = parseInt(document.querySelector(".english").value);

    let isurduPass = (urdumark >= passingMarks); //comparsion operator
    console.log(isurduPass);
    let isEngPass = (englishmark >= passingMarks);

    isExamPass = (isurduPass && isEngPass); //logical operator
    alert(isExamPass);

}