document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", validateForm);
});

function validateForm(event) {

    event.preventDefault(); // so form does not submit right away

    const form = document.getElementById("contactInfo");

    // Referenced form elements
    const fName = form["firstName"].value.trim();
    const lName = form["lastName"].value.trim();
    const mobilePhone = form["phoneNumber"].value.trim();
    const emailAdd = form["email"].value.trim();
    const peopleCount = form["people"].value;
    const bookDate = form["bookingDate"].value;

    // If one or more fields are not entered
    if (!fName || !lName || !mobilePhone || !emailAdd || !peopleCount || !bookDate) {
        window.alert("Please enter all the fields.") // alert the user
        return;
    }

    // Phone number validation
    const phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/; // Got from https://www.w3schools.com/tags/att_input_type_tel.asp
    if (!phonePattern.test(mobilePhone)) {
        window.alert("Please enter a valid phone number (must be in form 123-456-7890)."); // alert the user
        return;
    }

    // Email validation
    const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/; // Got from https://www.w3schools.com/tags/att_input_pattern.asp
    if (!emailPattern.test(emailAdd)) {
        window.alert("Please enter a valid email address (e.g., @gmail.com, @yahoo.com, etc.)"); // alert the user
        return;
    }

    // Booking date validation
    if (isNaN(peopleCount) || peopleCount <= 0 || peopleCount > 10) {
        window.alert("Please choose a valid number of guests (1-10).") // alert the user
        return;
    }

    window.alert("Form Submitted Successfully!")

    form.reset(); // Reset the form on submission
}
