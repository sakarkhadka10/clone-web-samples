/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
navSocial = document.getElementById('nav-socials')

/* ++++++++++ Menu Show +++++++++*/
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* ++++++++++ Menu Hide +++++++++*/
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')


const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link, we remove the show_menu class
    navMenu.classList.remove('show-menu')
    
}
navLink.forEach(n => n.addEventListener('click', linkAction))
//navSocial.forEach(n => n.addEventListener('click', linkAction))