let wordCounter = 0; // count for words correct
let totalWords = 6; // number of words to win

// from https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop2
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);

    // check for correct word id
    if ((ev.target.id === "canon" && draggedElement.classList.contains("canon")) ||
        (ev.target.id === "sony" && draggedElement.classList.contains("sony")) ||
        (ev.target.id === "lumix" && draggedElement.classList.contains("lumix"))) {

        ev.target.appendChild(draggedElement); // if the word is correct
        wordCounter++; // add one to the word counter

        if (wordCounter === totalWords) { // if the number of words is equal to the total
            alert("Congratulations, You Win!!!") // display winning message
        }

    } else {
        alert("Incorrect! Try again."); // alert the user the word is incorrect
    }
}