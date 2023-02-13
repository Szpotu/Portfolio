//Carousel-Sizing in Screen 
const wrapperElement = document.querySelector('.carousel-container');
wrapperElement.style.height = `${
document.querySelector('#laptop-img-frame').getBoundingClientRect().height *.8}px`;
window.addEventListener('resize', e=>{
    let frameHeight = document.querySelector('#laptop-img-frame').getBoundingClientRect().height;
wrapperElement.style.height = `${(frameHeight*0.8)}px`;
})


const arrowsDOM = document.querySelectorAll('.carousel-arrow');
const swiper = document.querySelector('.carousel-wrapper');

arrowsDOM.forEach(arrow => {
    arrow.addEventListener('click', event => {
        const direction = event.target.classList.contains('arrow-left') ? 'left' : 'right';
        console.log('Elo');
    });
});
