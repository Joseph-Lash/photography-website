document.addEventListener("DOMContentLoaded", function() {
    // check if on contact page
    if (document.getElementById("contactInfo")) {
        document.getElementById("submitButton").addEventListener("click", validateForm);
    }

    // check if on confirmation page
    if (document.getElementById("confirmationText")) {
        displayConfirmation();
    }
});

let services = []; // declare array

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
    const phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/; // Got from https://www.w3schools.com/tags/att_input_type_tel.asp (regular expression for checking phone number)
    if (!phonePattern.test(mobilePhone)) {
        window.alert("Please enter a valid phone number (must be in form 123-456-7890)."); // alert the user
        return;
    }

    // Email validation
    const emailPattern = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/; // Got from https://www.w3schools.com/tags/att_input_pattern.asp (regular expression for checking email)
    if (!emailPattern.test(emailAdd)) {
        window.alert("Please enter a valid email address (e.g., @gmail.com, @yahoo.com, etc.)"); // alert the user
        return;
    }

    // Booking date validation
    if (isNaN(peopleCount) || peopleCount <= 0 || peopleCount > 10) {
        window.alert("Please choose a valid number of guests (1-10).") // alert the user
        return;
    }

    // Check if at least one service is selected
    if (services.length === 0) {
        window.alert("Please select at least one photography service.");
        return;
    }

    // storing the values in cookies https://www.geeksforgeeks.org/how-to-set-retrieve-cookies-using-javascript/
    document.cookie = `firstName=${fName}; path=/`;
    document.cookie = `lastName=${lName}; path=/`;
    document.cookie = `phoneNumber=${mobilePhone}; path=/`;
    document.cookie = `email=${emailAdd}; path=/`;
    document.cookie = `people=${peopleCount}; path=/`;
    document.cookie = `bookingDate=${bookDate}; path=/`;
    document.cookie = `services=${services.join(",")}; path=/`;

    window.location.href = "https://profsmith.site/cscn315/lash/confirmation"; // on submit go to confirmation page
}

// when a box is checked
function displayServices(checkbox) {
    const service = checkbox.value;

    // if the array is checked
    if (checkbox.checked) {
        services.push(service); // add
    } else {
        services = services.filter(item => item !== service); // remove
    }

    // convert the array to string
        document.getElementById('selectedServices').textContent = services.join(', ');
}

function displayConfirmation() {
    const confirmationText = document.getElementById("confirmationText");
    const cookieList = document.cookie.split("; ");
    let output = "Confirm your submission:<br><br>"; // confirmation message
    const fields = {};

    // parse cookies
    for (let item of cookieList) {
        const [name, value] = item.split("=");
        fields[name] = decodeURIComponent(value || "");
    }

    // build the output message
    if (fields.firstName) output += `First Name:  ${fields.firstName}<br><br>`;
    if (fields.lastName) output += `Last Name:  ${fields.lastName}<br><br>`;
    if (fields.phoneNumber) output += `Phone Number:  ${fields.phoneNumber}<br><br>`;
    if (fields.email) output += `Email:  ${fields.email}<br><br>`;
    if (fields.people) output += `People in Party:  ${fields.people}<br><br>`;
    if (fields.bookingDate) output += `Booking Date:  ${fields.bookingDate}<br><br>`;
    if (fields.services) output += `Selected Services:  ${fields.services.split(",").join(", ")}<br><br>`;

    confirmationText.innerHTML = output;
}

/* Paragraph on code security
    Code security is important as a JavaScript program is not protected by firewalls or SSL as
    it is executed in a browser. First thing to do to protect from malicious activity, such as code 
    injection attacks, is to validate user input. Another thing which could be a security
    vulnerablity is having cookies that do not expire. By default cookies expire when you close the
    page, but it still is a danger to security. A way to address this vulnerability is to add an
    expiration date to the cookies when setting them.*/