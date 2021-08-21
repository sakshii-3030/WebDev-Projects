function display_time(){
    var dt = new Date();
    document.getElementById("date-time").innerHTML = dt.toLocaleTimeString();
    display_c();
    }
    function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_time()',refresh)
    }
function myFunction(x) {
    x.classList.toggle("change");
}
function dropdown_menu(){
    var dropdowns = getElementById(hamburger);
    if(x.style.display == "block"){
        x.style.display == "none";
    }
    else{
        x.style.display == "block";
    }
}


/*SLIDESHOW*/
/*var slideIndex= 1;
slideShow(slideIndex);
function plusSlides(n){
    slideShow(slideIndex += n);
}
function currentSlide(n){
    slideShow(slideIndex = n);
}
function slideShow(n){
    var i;
    var slide = document.getElementsByClassName("slides");
    if(n > slide.length){slideIndex=1}
    if(n<1){slideIndex = slide.length}
    for(i=0; i< slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
    setTimeout(slideShow, 5000);
}*/
var slideIndex=0;
showSlides();

function showSlides() {
  var i;
  var slide = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slide[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/*
function hamburger(){
    var dropdown = getElementByClass(dropdown-content);
    if()
}*/