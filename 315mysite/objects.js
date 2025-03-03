// Constructor function for images
function Slideshow(images, imageAlt) {
    this.images = images;
    this.imageAlt = imageAlt;
    this.curIndex = 0;
}

// Method for displaying image in the slideshow
Slideshow.prototype.displayImage = function(imageID) {
    let imageDisplayed = document.getElementById(imageID);
    if (imageDisplayed) { // only if an image is display (prevents NULL error)
        imageDisplayed.innerHTML = "";
    }
    const img = document.createElement('img'); 
    img.src = this.images[this.curIndex]; // Get image from array at position in the array
    img.alt = this.imageAlt[this.curIndex]; // Get image alt from array at position in the array
    img.onclick = this.overlay.bind(this); // for overlay
    imageDisplayed.appendChild(img);
}

// Method for moving to the next image
Slideshow.prototype.nextImage = function(imageID) {
    this.curIndex = (this.curIndex + 1) % this.images.length;
    this.displayImage(imageID);
}

// Method for going back to the prev image
Slideshow.prototype.prevImage = function(imageID) {
    this.curIndex = (this.curIndex - 1 + this.images.length) % this.images.length;
    this.displayImage(imageID);
}

// Method for an overlay after clicking on a photo
Slideshow.prototype.overlay = function() {
    let overlay = document.createElement("div"); // overlay 
    overlay.id = "overlayID";
    overlay.style.display = "block";

    let imageBox = document.createElement("figure"); // area for the image
    overlay.appendChild(imageBox);

    let overlayImg = document.createElement('img'); // copy of the image
    overlayImg.src = this.images[this.curIndex];
    overlayImg.alt = this.imageAlt[this.curIndex];
    imageBox.appendChild(overlayImg);

    let close = document.createElement("div"); // create the x for closing the overlay window
    close.id = "closeOverlay";
    close.innerHTML = "&times;";
    close.onclick = function() {
        document.body.removeChild(overlay);
    }

    overlay.appendChild(close); // display close
    document.body.appendChild(overlay); // display overlay
}