import anime from "../node_modules/animejs/lib/anime.es.js";
const skillSetOffSetY = document.querySelector('#skillset').getBoundingClientRect().y;
const skillColumns = document.querySelectorAll('.skill-column');
const skillMatrix = [];
Array.from(skillColumns).forEach(column=>{
    skillMatrix.push(Array.from(column.children));
})
console.log(skillMatrix);
function slideIn(){
    console.log('Do smth when slided');
}
// Rotate  
const rotateBy90 = (matrix) => {
    let n = matrix.length;
    const newMatrix = [];
    for (let i = 0; i < n; i++) {
      newMatrix.push([]);
      for (let j = 0; j < n; j++) {
        newMatrix[i].push(matrix[i][j]);
      }
    }
    for (let i = 0; i < n; i++) {
        
      for (let j = 0; j < n; j++) {
        matrix[i][j] = newMatrix[n - j - 1][i];
      }
    }
    return newMatrix;
  }
let matrix = rotateBy90(skillMatrix);
console.log(matrix);
window.addEventListener('scroll',e=>{
    let currentScrollY = window.scrollY;
    if(currentScrollY >= skillSetOffSetY){
        slideIn();
    }
})