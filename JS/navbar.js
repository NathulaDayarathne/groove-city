window.addEventListener('scroll', function() {  //Listen for the scroll event

    let navbar = document.querySelector('nav'); //Get the navbar

if (window.scrollY > 0) {
navbar.classList.add('nav-scrolled'); //Add the class
} else {
navbar.classList.remove('nav-scrolled'); //Remove the class
}

});