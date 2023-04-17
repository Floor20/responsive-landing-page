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
const banner = document.querySelector(".banner");

////////////////////////////////////////
// EVENT LISTENERS

const showOverlay = function () {
  if (overlay.classList.contains("hidden")) {
    navRow.style.display = "flex";
    overlay.classList.remove("hidden");
    mobileMenuIcon.style.backgroundImage =
      "url(../../images/icon-close-menu.svg)";
  } else {
    navRow.style.display = "none";
    overlay.classList.add("hidden");
    mobileMenuIcon.style.backgroundImage = "url(../../images/icon-menu.svg)";
  }
};

featuresLink.addEventListener("mouseover", function (e) {
  featuresDropdown.classList.remove("hidden");
  featuresCaret.classList.add("rotate");
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
  this.closest(".nav-link").style.paddingBottom = "0px";

  if (featuresDropdown.style.display !== "none") {
  } else {
    this.closest(".nav-link").style.paddingBottom = "12px";
  }
  console.log(e.currentTarget, e.target);
});

featuresLink.addEventListener("click", function () {
  if (featuresDropdown.style.display !== "none") {
    featuresDropdown.style.display = "none";
    featuresCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    featuresDropdown.style.display = "flex";
    featuresCaret.classList.add("rotate");
  }
});

//touch events
featuresLink.addEventListener("touchstart", function (e) {
  e.preventDefault();
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";

  if (featuresDropdown.style.display !== "none") {
    featuresDropdown.style.display = "none";
    featuresCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    featuresDropdown.style.display = "flex";
    featuresCaret.classList.add("rotate");
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
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";

  if (companyDropdown.style.display !== "none") {
    companyDropdown.style.display = "flex";
    this.closest(".nav-link").style.paddingBottom = "0px";
  } else {
    companyDropdown.style.display = "flex";
  }
});

companyLink.addEventListener("click", function () {
  if (companyDropdown.style.display !== "none") {
    companyDropdown.style.display = "none";
    companyCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    companyDropdown.style.display = "flex";
    companyCaret.classList.add("rotate");
  }
});

companyLink.addEventListener("touchstart", function (e) {
  e.preventDefault();
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";

  if (companyDropdown.style.display !== "none") {
    companyDropdown.style.display = "none";
    companyCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    companyDropdown.style.display = "flex";
    companyCaret.classList.add("rotate");
  }
});

companyDropdown.addEventListener("mouseleave", function () {
  companyDropdown.classList.add("hidden");
  companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

mobileMenuIcon.addEventListener("click", function () {
  showOverlay();
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", function () {
    featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    companyDropdown.style.display = "none";
    featuresDropdown.classList.add("hidden");
    companyDropdown.classList.add("hidden");
    featuresCaret.classList.remove("rotate");
    companyCaret.classList.remove("rotate");
    this.style.paddingBottom = "12px";
  });
});

overlay.addEventListener("click", function () {
  showOverlay();
});

if (!featuresDropdown.classList.contains("hidden"))
  navLink.classList.add("even-padding");
