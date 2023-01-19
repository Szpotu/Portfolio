import anime from '../node_modules/animejs/lib/anime.es.js';

const navbarElmnt = document.querySelector('.navbar');
const navbarPos = navbarElmnt.getBoundingClientRect().bottom;
const navbarMenuList = document.querySelector('.navbar-nav');
const logoElement = document.querySelector('#logo');
// Stick navigation - animate + highlight current active webpage 
export let onScrollSwitch =() => {
    const currentScrollY = window.scrollY;
    if(currentScrollY > navbarPos){
        navbarElmnt.classList.add('sticky');
    }
    else{
        navbarElmnt.classList.remove('sticky');
    }
}
window.addEventListener('scroll',onScrollSwitch);
