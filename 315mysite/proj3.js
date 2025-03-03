// Arrays for images
let peopleImages = ['https://profsmith.site/cscn315/lash/lights.jpg','https://profsmith.site/cscn315/lash/hall.jpg', 'https://profsmith.site/cscn315/lash/mountainperson.jpg'];
let landscapeImages = ['https://profsmith.site/cscn315/lash/hills.jpg','https://profsmith.site/cscn315/lash/keyhole.jpg', 'https://profsmith.site/cscn315/lash/leaves.jpg'];
let architectureImages = ['https://profsmith.site/cscn315/lash/commons.jpg','https://profsmith.site/cscn315/lash/liberty.jpg', 'https://profsmith.site/cscn315/lash/chicago.jpg'];

// Create counter variables
let peopleCount = 0;
let landCount = 0;
let archCount = 0;

function photoSelected(choice) { // Declare function

    const photoGalleryTemp = document.getElementById('photoGallery'); // Create temporary variable for storing and displaying photos

    photoGalleryTemp.innerHTML = '';

    switch (choice) { // Switch statement will display the right images based on the user's selection
        case "people": // If people is selected

            if (peopleCount == 1) { // If the people photos are already displayed
            alert('Currently viewing that selection'); // Alert the user
            peopleCount = 0;
            break; // Prevent displaying the same photos
            } else {
                // Continue 
            }

            for (let i = 0; i < peopleImages.length; i++) { // Display all images in the array https://www.geeksforgeeks.org/how-to-display-images-from-an-array-in-javascript/
                const img = document.createElement('img'); 
                img.src = peopleImages[i]; // Get image from array at position i
                photoGalleryTemp.appendChild(img);
            }
            peopleCount++; // Add 1 to peopleCount (true/false)
            landCount = 0; // Reset land + arch counts (Prevents the message from appearing if one choose a different option)
            archCount = 0;
            break;
        case "landscape": // If landscape is selected

            if (landCount == 1) { 
                alert('Currently viewing that selection'); // Alert the user
                landCount = 0;
                break;
            } else {
                // Continue 
            }

            for (let i = 0; i < landscapeImages.length; i++) {
                const img = document.createElement('img');
                img.src = landscapeImages[i]; // Get image from array at position i
                photoGalleryTemp.appendChild(img);
            }
            peopleCount = 0; // Reset peopleCount
            landCount++; // Add 1 to landCount
            archCount = 0; // Reset archCount
            break;
        case "architecture": // If architecture is selected

            if (archCount == 1) { 
                alert('Currently viewing that selection'); // Alert the user
                archCount = 0;
                break;
            } else {
            // Continue 
            }

            for (let i = 0; i < architectureImages.length; i++) {
                const img = document.createElement('img');
                img.src = architectureImages[i]; // Get image from array at position i
                photoGalleryTemp.appendChild(img);
            }
            peopleCount = 0; // reset peopleCount
            landCount = 0; // reset landCount
            archCount++; // Add 1 to archCount
            break;
    }

}

function confirmInfo() { // Function gets the entered value and inputs it to the screen when the button is pressed

    try { // Try and catch exception handling: if one or more fields are not entered
        let firstN = document.getElementById("firstName").value; 
        let lastN = document.getElementById("lastName").value; 
        let eMail = document.getElementById("email").value; 
        let phoneN = document.getElementById("phoneNumber").value; 
        let numberOfGuests = document.getElementById("people").value;
        let bDate = document.getElementById("bookingDate").value;
        if (firstN === "" || lastN === "" || eMail === "" || phoneN === "" || numberOfGuests === null || bDate === "") throw "Missing info";
    } catch(err) {
        window.alert("Missing one or more fields");
        return; // Break out of function (prevents displaying inputs early)
    }

    try { // Check if user entered too big of number
        let numberOfGuests = document.getElementById("people").value;
        if (numberOfGuests > 10 || numberOfGuests < 1) throw "Invalid number"
    } catch (err) {
        window.alert("Please enter a valid number")
        return; // Break out of function (prevents displaying inputs early)
    }

    // Get variable values
    let firstN = document.getElementById("firstName").value; 
    let lastN = document.getElementById("lastName").value; 
    let eMail = document.getElementById("email").value; 
    let phoneN = document.getElementById("phoneNumber").value; 
    let numberOfGuests = document.getElementById("people").value; 
    let bDate = document.getElementById("bookingDate").value; 
    console.log(firstN, lastN, eMail, phoneN, numberOfGuests, bDate); // Writes variables to console to view


    // Prints to every section
    document.getElementById("confirm").innerHTML = "Confirm Information";
    document.getElementById("name").innerHTML = "Name: " + firstN + " " + lastN;
    document.getElementById("phone").innerHTML = "Phone Number: " + phoneN;
    document.getElementById("eContact").innerHTML = "Email: " + eMail;
    document.getElementById("guests").innerHTML = "Number of People in Shoot: " + numberOfGuests;
    document.getElementById("booking").innerHTML = "Booking Date: " + bDate;


    document.getElementById("contactInfo").reset(); // Resets the form
}