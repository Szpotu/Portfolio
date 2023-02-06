// Modules 
import {runAnimation, canv1, canv2,  params1, params2} from './hero-background-anim.js';
import * as floatingSkills from './floatingSkills.js';
import { stickyNav } from './sticky-nav.js';
//Interactive components workflow
stickyNav();
// -- Social Media Buttons 

// Animation - Stars

runAnimation(canv2, params2);
runAnimation(canv1, params1);
let countPerformance = 0;
let animInterval = setInterval(()=>{
    runAnimation(canv1, params1);
    countPerformance++;
     if(countPerformance > 4){
         clearInterval(animInterval);
     }
 },100000);

