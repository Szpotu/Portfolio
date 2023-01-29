import anime from '../node_modules/animejs/lib/anime.es.js';
const sectionElement = document.querySelector('#skill-set');
const sectionCenter = {
    x: sectionElement.getBoundingClientRect().width / 2,
    y: sectionElement.getBoundingClientRect().height / 2,
}
Array.from(sectionElement).forEach(img=>{
    img.classList.add('skill-img');
})

window.addEventListener('resize', e => {
    sectionCenter.x = sectionElement.getBoundingClientRect().width / 2;
    sectionCenter.y = sectionElement.getBoundingClientRect().height / 2;
});



// Run circle

    anime({
        targets:'',
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: 'linear'
      });