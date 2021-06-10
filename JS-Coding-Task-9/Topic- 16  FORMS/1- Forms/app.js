


// Now write a function that’d be called on that event
// Check that whether values of both email and password
//  fields are empty or not using the same function
//     If any of the fields is empty, ask use to fill up the fields
// If both are filled, show an alert saying ‘Logged In Successfully’.
// Also, check for format of email in the first input field and ensure
//  that password field’s length is not less than 8 character.

function addEventListener() {
    let emailValue = document.getElementById(email).value;

    let passwordValue = document.getElementById(password).value;

    if (emailValue == "" || passwordValue == "") {
        alert("Fill the requirments first")
    } else {
        alert("Logged In Successfully")
    } console.log(emailValue);
}