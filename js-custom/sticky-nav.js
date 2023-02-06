let menuElement = document.querySelector('.menu');
let menuScrollPosition = document.querySelector('.menu').getBoundingClientRect().y;
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