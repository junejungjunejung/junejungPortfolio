// menu on mobile view
function menubar() {
  var x = document.getElementById("navLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// hamburger icon toggle
function toggleIcon(){
  var x = document.getElementById("hamburger").src;

  if (x.indexOf('times.svg')!=-1) {
    document.getElementById("hamburger").src = 'asset/hamburger.svg';
  } else {
    document.getElementById("hamburger").src = 'asset/times.svg';
  }
}

function submenuIcon(){
  var x = document.getElementById("submenu").src;

  if (x.indexOf('times.svg')!=-1) {
    document.getElementById("submenu").src = '../asset/hamburger.svg';
  } else {
    document.getElementById("submenu").src = '../asset/times.svg';
  }
}


// showing logo when hamburger active on landing page
function landingLogo() {
  var x = document.getElementById("landingLogo");
  if (x.classList.contains("show")) {
    x.classList.remove("show");
    x.classList.add("hide");
  } else {
    x.classList.remove("hide");
    x.classList.add("show");
  }
}

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// accordion icon toggle
function accordionIcon(){
  var x = document.getElementById("accordionIcon").src;

  if (x.indexOf('plus.svg')!=-1) {
    document.getElementById("accordionIcon").src = '../asset/minus.svg';
  } else {
    document.getElementById("accordionIcon").src = '../asset/plus.svg';
  }
}

// carousel 1
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("carousel-item1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// carousel 2
var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("carousel-item2");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 2000); // Change image every 2 seconds
}


// carousel 3
var slideIndex3 = 0;
showSlides3(slideIndex3);

function showSlides3() {
  var i;
  var slides = document.getElementsByClassName("carousel-item3");
  var dots = document.getElementsByClassName("dot3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides.length) {slideIndex3 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 2000); // Change image every 2 seconds
}

