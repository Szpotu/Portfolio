// Modules 
import * as stickyNav from './custom-navbar.js';
import * as starAnimation from './background-anim.js';
import anime from '../node_modules/animejs/lib/anime.es.js';
//Interactive components workflow
//Navbar



// -- Social Media Buttons 

// Animation - Stars
starAnimation.animate();
starAnimation.init();
let counterStars = 0;
setInterval(()=>{
    starAnimation.animate();
    starAnimation.init();
    counterStars++;
    if(counterStars > 4){
        starAnimation.starsArray=[];
        // Remove stars from array ?? 
    }
},50000);
