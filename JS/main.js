let slideIndex = 1; //Set the slide index to 1
showSlides(slideIndex); //Display the first slide

function plusSlides(n) { //Next/previous controls
  showSlides(slideIndex += n); //Add the slide index by n
}

function currentSlide(n) { //Thumbnail image controls 
  showSlides(slideIndex = n); 
}

function showSlides(n) { //Display the slides
    let i; 
    let slides = document.getElementsByClassName("slides"); //Get the slides
    let dots = document.getElementsByClassName("pinpoint"); //Get the pinpoint
    if (n > slides.length) {slideIndex = 1} //If the slide index is greater than the number of slides, set the slide index to 1
    if (n < 1) {slideIndex = slides.length} //If the slide index is less than 1, set the slide index to the number of slides
    for(let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; //Set the display of the slides to none
    }
    for(let i = 0; i < dots.length; i++) { //Set the pinpoint to active
        dots[i].className = dots[i].className.replace("active_b", ""); 
    }
    slides[slideIndex-1].style.display = "block"; //Set the display of the slide to block
    dots[slideIndex-1].className += " active_b"; //indicate the square pinpoint to active

}

setInterval(function() { //Set the interval 
    plusSlides(1);  
},5000); //Change the slide every 5 seconds