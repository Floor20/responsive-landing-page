"use strict";

const navLinks = document.querySelectorAll(".nav-link");
const navLink = document.querySelector(".nav-link");
const featuresLink = document.querySelector(".features-link");
const companyLink = document.querySelector(".company-link");
const featuresDropdown = document.querySelector(".dropdown-features");
const companyDropdown = document.querySelector(".dropdown-company");
const featuresCaret = document.querySelector(".features-caret");
const companyCaret = document.querySelector(".company-caret");
const navRow = document.querySelector(".nav-row");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const overlay = document.querySelector(".overlay");

////////////////////////////////////////
// EVENT LISTENERS

featuresLink.addEventListener("mouseenter", function () {
  featuresDropdown.classList.remove("hidden");
  featuresCaret.classList.add("rotate");
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
  this.closest(".nav-link").style.paddingBottom = "0px";
});

featuresLink.addEventListener("click", function () {
  if (featuresDropdown.classList.contains("hidden")) {
    featuresDropdown.classList.remove("hidden");
    featuresCaret.classList.add("rotate");
    this.closest(".nav-link").style.paddingBottom = "0px";
  } else {
    featuresDropdown.classList.add("hidden");
    featuresCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  }
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
  this.closest(".nav-link").style.paddingBottom = "0px";
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
});

companyLink.addEventListener("click", function () {
  if (!companyDropdown.classList.contains("hidden")) {
    companyDropdown.classList.add("hidden");
    companyCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    companyDropdown.classList.remove("hidden");
    companyCaret.classList.add("rotate");
  }
});

companyDropdown.addEventListener("mouseleave", function () {
  companyDropdown.classList.add("hidden");
  companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

mobileMenuIcon.addEventListener("click", function () {
  if (navRow.classList.contains("hidden")) {
    navRow.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mobileMenuIcon.style.backgroundImage =
      "url(../../images/icon-close-menu.svg)";
  } else {
    navRow.classList.add("hidden");
    overlay.classList.add("hidden");
    mobileMenuIcon.style.backgroundImage = "url(../../images/icon-menu.svg)";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", function () {
    featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    featuresDropdown.classList.add("hidden");
    companyDropdown.classList.add("hidden");
    featuresCaret.classList.remove("rotate");
    companyCaret.classList.remove("rotate");
    this.style.paddingBottom = "12px";
  });
});

if (!featuresDropdown.classList.contains("hidden"))
  navLink.classList.add("even-padding");
