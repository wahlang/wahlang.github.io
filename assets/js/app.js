// Nav hamburgerburger selections
//const burger = document.querySelector("#burger-menu");
//const ul = document.querySelector("nav ul");
//const nav = document.querySelector("nav");

// Scroll to top selection
//var scrollToTopBtn = document.getElementById("scroll-up");

// Select nav links
//const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
//burger.addEventListener("click", () => {
//  ul.classList.toggle("show");
//});

// Close hamburger menu when a link is clicked
//navLink.forEach((link) =>
 // link.addEventListener("click", () => {
 //   ul.classList.remove("show");
 // })
//);

//Get the button
var mybutton = document.getElementById("scroll-up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Typewriter effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Don't get in the way of what other people want", "Sometimes you're the problem, take responsibility and accountability.", "Take care of each other. Help people to the left and right of you.", "Be the last to speak"];
const typingDelay = 50;
const erasingDelay = 20;
const newTextDelay = 1400; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



