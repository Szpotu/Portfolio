// Modules 
import * as starAnimation from './hero-background-anim.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
import * as navigation from '../js-custom/sticky-nav.js';
//Interactive components workflow
//Navbar
 
navigation.stickyNav();

// -- Social Media Buttons 

// Animation - Stars
starAnimation.animate();
starAnimation.init();
let counterStars = 0;
let animInterval = setInterval(()=>{
    starAnimation.animate();
    starAnimation.init();
    counterStars++;
     if(counterStars > 4){
         clearInterval(animInterval);
     }
 },1000000);
