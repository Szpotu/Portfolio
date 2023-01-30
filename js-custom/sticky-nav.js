let prevScrollPosition = window.pageYOffset; // global var - previous scroll px
export function stickyNav(){
   window.onscroll = () => {

       let actualScrollPosition = window.pageYOffset;
       if (prevScrollPosition < actualScrollPosition || actualScrollPosition > 250 && window.innerWidth >= 768) {
           document.querySelector('.navbar').classList.add('shrinked-nav');
           
       } else {
           document.querySelector('.navbar').classList.remove('shrinked-nav');
       }
       prevScrollPosition = actualScrollPosition;
   }    
}
