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
  // featuresDropdown.classList.remove("hidden");
  featuresCaret.classList.add("rotate");
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";
  this.closest(".nav-link").style.paddingBottom = "0px";

  if (featuresDropdown.style.display !== "none") {
    // this.closest(".nav-link").style.paddingBottom = "0px";
  } else {
    featuresDropdown.style.display = "flex";
    this.closest(".nav-link").style.paddingBottom = "12px";
  }
  console.log(e.currentTarget, e.target);
});

featuresLink.addEventListener("click", function () {
  // if (featuresDropdown.classList.contains("hidden")) {
  //   featuresDropdown.classList.remove("hidden");
  //   featuresCaret.classList.add("rotate");
  //   this.closest(".nav-link").style.paddingBottom = "0px";
  // } else if (!featuresDropdown.classList.contains("hidden")) {
  //   featuresDropdown.classList.add("hidden");
  //   featuresCaret.classList.remove("rotate");
  //   this.closest(".nav-link").style.paddingBottom = "12px";
  // }
  // if (featuresCaret.classList.contains("rotate"))
  //   featuresCaret.classList.remove("rotate");
  // else featuresCaret.classList.add("rotate");
  // if (featuresDropdown.style.display !== "none") {
  //   featuresDropdown.style.display = "none";
  //   this.closest(".nav-link").style.paddingBottom = "12px";
  // } else {
  //   featuresDropdown.style.display = "flex";
  //   featuresCaret.classList.add("rotate");
  //   this.closest(".nav-link").style.paddingBottom = "0px";
  // }
});

featuresDropdown.addEventListener("mouseenter", function () {
  featuresLink.querySelector("a").style.color = "hsl(0, 0%, 8%)";
});

featuresDropdown.addEventListener("mouseleave", function () {
  featuresDropdown.classList.add("hidden");
  // featuresDropdown.style.display = "none";
  featuresCaret.classList.remove("rotate");
  featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

companyLink.addEventListener("mouseenter", function () {
  // companyDropdown.classList.remove("hidden");
  companyCaret.classList.add("rotate");
  this.closest(".nav-link").style.paddingBottom = "0px";
  this.querySelector("a").style.color = "hsl(0, 0%, 8%)";

  if (companyDropdown.style.display !== "none") {
    this.closest(".nav-link").style.paddingBottom = "0px";
  } else {
    companyDropdown.style.display = "flex";
  }
});

companyLink.addEventListener("click", function () {
  // if (companyDropdown.classList.contains("hidden")) {
  //   companyDropdown.classList.remove("hidden");
  //   companyCaret.classList.add("rotate");
  //   this.closest(".nav-link").style.paddingBottom = "0px";
  // } else {
  //   companyDropdown.classList.add("hidden");
  //   companyCaret.classList.remove("rotate");
  //   this.closest(".nav-link").style.paddingBottom = "12px";
  // }
  if (companyCaret.classList.contains("rotate"))
    companyCaret.classList.remove("rotate");
  else companyCaret.classList.add("rotate");

  if (companyDropdown.style.display !== "none") {
    companyDropdown.style.display = "none";
    companyCaret.classList.remove("rotate");
    this.closest(".nav-link").style.paddingBottom = "12px";
  } else {
    companyDropdown.style.display = "flex";
    // featuresCaret.classList.remove("rotate");
  }
});

companyDropdown.addEventListener("mouseleave", function () {
  companyDropdown.classList.add("hidden");
  companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
});

mobileMenuIcon.addEventListener("click", function () {
  // if (navRow.classList.contains("hidden")) {
  //   navRow.classList.remove("hidden");
  //   overlay.classList.remove("hidden");
  //   mobileMenuIcon.style.backgroundImage =
  //     "url(../../images/icon-close-menu.svg)";
  // } else {
  //   navRow.classList.add("hidden");
  //   overlay.classList.add("hidden");
  //   mobileMenuIcon.style.backgroundImage = "url(../../images/icon-menu.svg)";
  // }

  // if (overlay.classList.contains("hidden")) {
  //   navRow.style.display = "flex";
  //   overlay.classList.remove("hidden");
  //   mobileMenuIcon.style.backgroundImage =
  //     "url(../../images/icon-close-menu.svg)";
  // } else {
  //   navRow.style.display = "none";
  //   overlay.classList.add("hidden");
  //   mobileMenuIcon.style.backgroundImage = "url(../../images/icon-menu.svg)";
  // }
  showOverlay();
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", function () {
    featuresLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    companyLink.querySelector("a").style.color = "hsl(0, 0%, 41%)";
    featuresDropdown.style.display = "none";
    companyDropdown.style.display = "none";
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

// if (window.matchMedia("(min-width: 600px)").matches) {
//   mobileMenuIcon.classList.add("hidden");
//   navRow.classList.remove("hidden");
// }

// if ((navLink.style.fontSize = "14px")) {
//   navRow.classList.add("hidden");
//   mobileMenuIcon.classList.remove("hidden");
// }
