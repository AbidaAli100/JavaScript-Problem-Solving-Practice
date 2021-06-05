function ShowAlert() {
    //get html input
    let InputElement = document.querySelector(".myname");

    //get html input value
    let InputValue = InputElement.value;

    //Access h1 element
    let Heading1 = document.querySelector("h1 > span").innerHTML;
    Heading1 = InputValue;

    //show alert
    alert('The message has been sent on the given number.')

}