let menuElement = document.querySelector('.menu');
let menuScrollPosition = document.querySelector('.menu').
getBoundingClientRect().y;
let menuButton = document.querySelector('.mobile-nav');
const innerLine = document.getElementById('inner-mobile-nav');


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
    menuButton.classList.contains('mobile-nav--active')?
    menuButton.classList.remove('mobile-nav--active'):
    menuButton.classList.add('mobile-nav--active');
    
})    