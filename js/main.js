// DOM Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Desktop / Mobile links
const desktopMailLink = document.querySelector(".link-mail-desktop");
const mobileMailLink = document.querySelector(".link-mail-mobile");
const desktopWaLink = document.querySelector(".link-wa-desktop");
const mobileWaLink = document.querySelector(".link-wa-mobile");

// Initial state of Menu
let showMenu = false;

// Listening for Menu Click
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    // Looping through all nav-links
    navItems.forEach((element) => element.classList.add("show"));

    // Menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");

    // Looping through all nav-links
    navItems.forEach((element) => element.classList.remove("show"));

    // Menu state
    showMenu = false;
  }
}

// Checking Mobile or Desktop
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  desktopMailLink.style.display = "none";
  desktopWaLink.style.display = "none";
} else {
  mobileMailLink.style.display = "none";
  mobileWaLink.style.display = "none";
}
