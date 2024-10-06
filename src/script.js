'use strict'

const socialMediaBtn = document.getElementById("social-media-btn");
const socialMediaToolbar = document.getElementById("social-media-toolbar");


socialMediaBtn.addEventListener("click", showToolbar, false);

// Function to Show the Social Media Toolbar
function showToolbar() {

    socialMediaBtn.classList.toggle("active-social-btn");
    
    if (socialMediaToolbar.style.filter === "opacity(0)" || socialMediaToolbar.style.filter === "") {
        socialMediaToolbar.style.filter = "opacity(1)";
        socialMediaToolbar.style.transition = "1s all"; // Ensure the transition is applied when becoming visible
    } else {
        socialMediaToolbar.style.filter = "opacity(0)";
    }
}

// Select the SVG path element
const path = document.querySelector('.background path');

// Get the total length of the path
const length = path.getTotalLength();

// Set up the dash array and dash offset for the animation
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

// Trigger the CSS animation
path.style.animation = 'draw 15s linear forwards';
path.style.animationDelay = "500ms";