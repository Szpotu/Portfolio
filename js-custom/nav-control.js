import anime from '..//node_modules/animejs/lib/anime.es.js'
//Sticky Nav Vars
let menuElement = document.querySelector('.menu');
let menuScrollPosition = document.querySelector('.menu').
getBoundingClientRect().y;
let menuButton = document.querySelector('.mobile-nav');
//Mobile Nav Vars 
const innerLine = document.getElementById('inner-mobile-nav');
const menuListWrapper = document.querySelector('.menu-list-wrapper');

export function stickyNav(){
   window.onscroll = () => {
       let actualScrollPosition = window.pageYOffset;
      
       if (actualScrollPosition > menuScrollPosition && window.innerWidth >= 768) {
           menuElement.classList.add('sticky-nav');
           
           
       } else {
           menuElement.classList.remove('sticky-nav');
       }
       menuScrollPosition = actualScrollPosition;
   }
}
menuButton.addEventListener('click', menuControl =>{
    if(menuButton.classList.contains('mobile-nav--active')){
        menuButton.classList.remove('mobile-nav--active');
        menuListWrapper.classList.remove('menu-list-wrapper--active');
        anime({
            targets: '.nav-link-container',
            translateX: -10,
            translateY: -15,
            scale: 1,
            rotate: '-1turn'
          });
    }
    else{
        menuListWrapper.classList.add('menu-list-wrapper--active');
       
        menuButton.classList.add('mobile-nav--active');
        anime({
            targets: '.nav-link-container',
            translateX: 45,
            translateY: 20,
            scale: 1,
            rotate: '1turn'
          });
          

    }
    
})    