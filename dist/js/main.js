// DOM Items
const menu          = document.querySelector('.menu');
const menuBtn       = document.querySelector('.menu-btn');
const menuBranding  = document.querySelector('.menu-branding');
const menuNav       = document.querySelector('.menu-nav');
const navItems      = document.querySelectorAll('.nav-item');
const desktopMailLink   = document.querySelector('.link-mail-desktop');
const mobileMailLink   = document.querySelector('.link-mail-mobile');
const desktopWaLink     = document.querySelector('.link-wa-desktop');
const mobileWaLink      = document.querySelector('.link-wa-mobile');

// Initial State of Menu
let showMenu        = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    if(!showMenu) {

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        // set menu state
        showMenu    = true;

    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        // set menu state
        showMenu    = false;

    }

}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
    desktopMailLink.style.display = "none";
    desktopWaLink.style.display = "none";
} else {
    mobileMailLink.style.display = "none";
    mobileWaLink.style.display = "none";    
}