"use strict";

const navLinks = document.querySelectorAll(".nav-link");
const featuresLink = document.querySelector(".features-link");
const companyLink = document.querySelector(".company-link");
const featuresDropdown = document.querySelector(".dropdown-features");
const companyDropdown = document.querySelector(".dropdown-company");
const featuresCaret = document.querySelector(".features-caret");
const companyCaret = document.querySelector(".company-caret");
const navRow = document.querySelector(".nav-row");

////////////////////////////////////////
// EVENT LISTENERS

featuresLink.addEventListener("mouseenter", function () {
  featuresDropdown.classList.remove("hidden");
  featuresCaret.classList.add("rotate");
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
});

featuresDropdown.addEventListener("mouseenter", function () {
  featuresLink.querySelector("a").style.color = "hsl(0, 0%, 8%)";
});

featuresDropdown.addEventListener("mouseleave", function () {
  featuresDropdown.classList.add("hidden");
  featuresCaret.classList.remove("rotate");
  featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

companyLink.addEventListener("mouseenter", function () {
  companyDropdown.classList.remove("hidden");
  companyCaret.classList.add("rotate");
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
});

companyDropdown.addEventListener("mouseleave", function () {
  companyDropdown.classList.add("hidden");
  companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", function () {
    featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    featuresDropdown.classList.add("hidden");
    companyDropdown.classList.add("hidden");
    featuresCaret.classList.remove("rotate");
    companyCaret.classList.remove("rotate");
  });
});
