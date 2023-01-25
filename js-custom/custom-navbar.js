import anime from '../node_modules/animejs/lib/anime.es.js';

const sectionsPage = document.querySelectorAll('.page'); 
const navbarElmnt = document.querySelector('.navbar');
const navbarPos = navbarElmnt.getBoundingClientRect().bottom;
const logoElement = document.querySelector('#logo');


// Sticky navigation workflow
export let onScrollSwitch =() => {
    const currentScrollY = window.scrollY;
    const menuList = document.querySelector('.navbar-nav');
    if(currentScrollY > navbarPos){
        navbarElmnt.classList.add('sticky');
    }
    else{
        navbarElmnt.classList.remove('sticky');
    }
    /*
    menuList.children.forEach(link => {
        let section = document.querySelector(link.hash);
        if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });*/
    }
window.addEventListener('scroll',onScrollSwitch);
