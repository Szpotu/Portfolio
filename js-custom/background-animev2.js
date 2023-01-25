
const canvas = document.createElement('canvas');

canvas.setAttribute('class','anim-stars')
const ctx = canvas.getContext('2d');
document.body.append(canvas);
var starsArray = [];
// CTX is reffering to an Object CanvasRenderingContext2D, where every properties and methods are placed.

//Object params declares animation features 
 var params = {
 	canvasWidth:window.innerWidth,
    canvasHeight:window.innerHeight,
	amountOfStars:'',
    baseColor:'rgb(0,240,255)',
    multiopacity:true,
    baseSize:2,
    multisize:true,
    speed:1,
    twinkle:false,   
    twinkleSpeed: Number,
    linked:false, 
}
 
canvas.width = params.canvasWidth;
canvas.height = params.canvasHeight; 
window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    ctx.fillStyle = 'white';
	ctx.fillRect(10,10,50,50);
})


class Star {
	constructor(){
    	this.x = Math.random() * canvas.width + 1; 
        this.y = Math.random() * canvas.height +1;
        //Control size
        if(params.multisize){
        	this.size = Math.random() * params.baseSize + 1;
        }
        else{
        	this.size = params.baseSize; 
        }
        this.speedX = Math.random()* params.speed/10;
        this.speedY = Math.random()* params.speed/10;  // Vector of movement
        // Set base color
        this.color = params.baseColor;
        // Control multitransparency 
        if(params.multiopacity){
        	this.multiopacity=Math.random()*.7;
        }
        else{
        	this.multiopacity = 1; 
        }
    }
    //Update current star position
    update(){
    	this.x += this.speedX; 
        this.y += this.speedY; 
        
    }
    //Draw star on canvas 
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
	for(let i=0;i<200;i++){ 
    	starsArray.push(new Star());
        if(i > 100){
        	starsArray[i].speedX = Math.random() * -0.1;
        }
    }
}
// EXTRA EFFECTS 
function handleStars(){
	for(let i = 0; i < starsArray.length;i++){
    	starsArray[i].update();
        starsArray[i].draw();
        
        if(params.linked){
         for(let j = i; j < starsArray.length;j++){
        	const dx = starsArray[i].x - starsArray[j].x;
            const dy = starsArray[j].y - starsArray[j].y;
            const distance = Math.sqrt(dx*dx*dx +  dy*dy*dy);
            if(distance < 1000){
            	ctx.beginPath();
                ctx.strokeStyle = starsArray[i].color; 
                ctx.lineWidth = 1;
                ctx.moveTo(starsArray[i].x, starsArray[i].y );//Create line between points 
                ctx.lineTo(starsArray[j].x , starsArray[j].y );
                ctx.stroke();
            }
        }}
        if(starsArray[i].size <= 0.3){
        	starsArray.splice(i, 1);
            i--;
        }
        if(params.twinkle && i % 20 ==0){
        	twinkle(starsArray[i]);
        }
        
    }
}
//Twinkling
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




