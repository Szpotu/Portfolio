// Modules 
import {animate, init} from './hero-background-anim.js';

import {stickyNav} from '../js-custom/sticky-nav.js';
import * as floatingSkills from './floatingSkills.js';
//Interactive components workflow
//Navbar
 
stickyNav();

// -- Social Media Buttons 

// Animation - Stars
animate();
init();
let counterStars = 0;
let animInterval = setInterval(()=>{
    starAnimation.animate();
    starAnimation.init();
    counterStars++;
     if(counterStars > 4){
         clearInterval(animInterval);
     }
 },1000000);

