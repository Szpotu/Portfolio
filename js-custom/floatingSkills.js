import anime from '..//node_modules/animejs/lib/anime.es.js'
const skillSetOffSetY = document.querySelector('#skillset').getBoundingClientRect().y;
const skillCol = document.querySelectorAll('.skill-column');
const skillMatrix = [];

// Fill skillMatrix with elements from NodeList
Array.from(skillCol).forEach(col => {
  skillMatrix.push(Array.from(col.children));
});
//
const matrixObject = {};
[].concat(...skillMatrix).forEach((el, i) => {
  el.setAttribute('data-index', i);
  matrixObject[i] = el;
});

const fadeIn = () => {
    anime({
        targets: '#skillPage',
        opacity: 1
      });
}
const slideIn = () =>{
    anime({
        targets: '#skill-header',
        translateX:10,
    })
}


window.addEventListener('scroll', e => {
  let currentScrollY = window.scrollY+500;
  if (currentScrollY >= skillSetOffSetY) {
    console.log('Now');
    slideIn();
    fadeIn();
    
  }
});




