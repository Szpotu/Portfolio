// Modules 
import {runAnimation, canv1, canv2,  params1, params2} from './hero-background-anim.js';

import {stickyNav} from '../js-custom/sticky-nav.js';
import * as floatingSkills from './floatingSkills.js';
//Interactive components workflow
//Navbar
 
stickyNav();

// -- Social Media Buttons 

// Animation - Stars
runAnimation(canv1, params1);
runAnimation(canv2, params2);
// let counterStars = 0;
// let animInterval = setInterval(()=>{
//     starAnimation.animate();
//     starAnimation.init();
//     counterStars++;
//      if(counterStars > 4){
//          clearInterval(animInterval);
//      }
//  },1000000);

