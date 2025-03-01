'use strict'

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function() {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        navbarToggler.classList.toggle("active");
    });
}

/**
 * scrollender Header und Back to Top button
 */

const hui = new Audio("assets/hui.m4a");

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

backTopBtn.addEventListener("click", function() {
    hui.play();
})

window.addEventListener("scroll", function() {
    if(this.window.scrollY >= 200) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});