history.scrollRestoration = "manual";
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

  const removeAnchorFormURL = () => {
    setTimeout(() => {
      window.history.replaceState({}, "", window.location.href.split("#")[0]);
    }, 100);
  };

//Hide and Show Desktop Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (!hamMenu.classList.contains("active") && !offScreenMenu.classList.contains("active")) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("hide-header").style.top = "0";
    } else {
      document.getElementById("hide-header").style.top = "-90px"; /* adjust this value to the height of your header */
    }
    prevScrollpos = currentScrollPos;
  }
}

//Image Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Hamburger Menu
function toggleMenu() {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
}

hamMenu.addEventListener("click", () => {
  toggleMenu();
});

offScreenMenu.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === 'a') {
    toggleMenu();
  }
  
})

window.onresize = () => {
  let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width >= 920) {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  }
}