
const canvas = document.createElement('canvas');

const sectionWidth = document.querySelector('#home-page').clientWidth;
canvas.setAttribute('class','anim-stars');
document.body.append(canvas);

canvas.width = sectionWidth;
canvas.height = window.screen.height;
var params = {
   canvasWidth:canvas.width,
   canvasHeight:canvas.height,
   amountOfStars:150,
   baseColor:'rgb(0,240,255)',
   multiopacity:true,
   baseSize:4,
   multisize:true,
   speed:1,
   twinkle:false,   
   twinkleSpeed: Number,
   linked:false, 
}
//Placement 
canvas.style.position = 'absolute';
canvas.style.top = '30vh';
canvas.style.zIndex = -1;
const ctx = canvas.getContext('2d');
var starsArray = [];
// CTX is reffering to an Object CanvasRenderingContext2D, where every properties and methods are placed.
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
    canvas.height = window.screen.height; 
})

class Star {
	constructor(){
    	this.x = Math.random() * canvas.width + 1; 
        this.y = Math.random() * canvas.height +1;
        if(params.multisize){
            this.size = Math.random() * params.baseSize + 1;
        }
        else{
            this.size = params.baseSize;
        }
        
        this.speedX = Math.random()* params.speed/10;
        this.speedY = Math.random()* params.speed/10; // Vector of movement
        this.color = params.baseColor;
        if(params.multiopacity){
        	this.multiopacity=Math.random()*.7;
        }
        else{
        	this.multiopacity = 1; 
        }
    }
    update(){
    	this.x += this.speedX; 
        this.y += this.speedY; 
        
    }
    draw(){ 
        ctx.globalAlpha = this.multiopacity;
    	ctx.fillStyle = this.color;
    	ctx.beginPath();
    	ctx.arc(this.x,this.y,this.size,0,Math.PI *2);
    	ctx.fill();
    }
}
export function animate(){
	ctx.clearRect(0, 0,canvas.width, canvas.height)
    handleStars();
    requestAnimationFrame(animate); 
}

export function init(){
	for(let i=0;i<params.amountOfStars;i++){ 
    	starsArray.push(new Star());
        if(i > params.amountOfStars/2){
        	starsArray[i].speedX = Math.random() * -0.1;
            starsArray[i].color = '#00ADB5';
        }
    } 
}

function handleStars(){
	for(let i = 0; i < starsArray.length;i++){
    	starsArray[i].update();
        starsArray[i].draw();
         //Draws lines between stars 
         if(params.linked){
         for(let j = i; j < starsArray.length;j++){
        	const dx = starsArray[i].x - starsArray[j].x;
            const dy = starsArray[j].y - starsArray[j].y;
            const distance = Math.sqrt(dx*dx*dx +  dy*dy*dy);
            if(distance < 1000){
            	ctx.beginPath();
                ctx.strokeStyle = starsArray[i].color; 
                ctx.lineWidth = .3;
                ctx.moveTo(starsArray[i].x, starsArray[i].y );//Create line between points 
                ctx.lineTo(starsArray[j].x , starsArray[j].y );
                ctx.stroke();
            }
        }
    }
        if(starsArray[i].size <= 0.3){
        	starsArray.splice(i, 1);
            i--;
        }
        if(params.twinkle && i % 20 ==0){
        	twinkle(starsArray[i]);
        }
    }
}
function twinkle(star){
	let i = 0;
    let j = 255; 
	setInterval(()=>{
    	star.color = `rgb(${i},${i},${i})`;
        i++;
        if(i == 255){
        	star.color = params.baseColor;
        }
	},1000)
}