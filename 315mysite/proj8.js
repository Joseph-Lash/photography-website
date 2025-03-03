
let images = ['https://profsmith.site/cscn315/lash/mountain.jpg','https://profsmith.site/cscn315/lash/hall.jpg', 
                    'https://profsmith.site/cscn315/lash/sunrise.jpg', 'https://profsmith.site/cscn315/lash/northernlights.jpg']; // Image array

let imageAlt = ["mountain", "hall hike", "sunrise", "northern lights"]; // Array for alt names

let gallerySlideshow = new Slideshow(images, imageAlt); // Use the object (create new)

window.addEventListener("load", function() {
    gallerySlideshow.displayImage("photoGallery") // Call function
    document.getElementById("next").onclick = function() { gallerySlideshow.nextImage("photoGallery"); }; // Call function
    document.getElementById("prev").onclick = function() { gallerySlideshow.prevImage("photoGallery"); }; // Call function
});

