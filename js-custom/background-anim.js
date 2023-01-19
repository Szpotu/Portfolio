
const canvas = document.createElement('canvas');
const canvas2 = document.createElement('canvas');

canvas.setAttribute('class','anim-stars');
canvas2.setAttribute('class','anim-stars');
document.body.append(canvas);


//Placement 
canvas.style.position = 'absolute';
canvas.style.top = '30vh';
canvas.style.zIndex = -1;
const ctx = canvas.getContext('2d');
const starsArray = [];
const starsAmountControl = 100;
// CTX is reffering to an Object CanvasRenderingContext2D, where every properties and methods are placed.
 
canvas.width = window.innerWidth;
canvas.height = 1000;


window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    ctx.fillStyle = 'black';
	ctx.fillRect(10,10,50,50);
})


class Star {
	constructor(){
    	this.x = Math.random() * canvas.width + 1; 
        this.y = Math.random() * canvas.height +1;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random()*.1;
        this.speedY = Math.random()*.1 ; // Vector of movement
        this.color = `rgba(0,240,255,${Math.random()*.3})`;
    }
    update(){
    	this.x += this.speedX; 
        this.y += this.speedY; 
        
    }
    draw(){
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
	for(let i=0;i<starsAmountControl;i++){ 
    	starsArray.push(new Star());
        if(i > starsAmountControl/2){
        	starsArray[i].speedX = Math.random() * -0.1;
            starsArray[i].color = '#00ADB5';
        }
    } 
}

function handleStars(){
	for(let i = 0; i < starsArray.length;i++){
    	starsArray[i].update();
        starsArray[i].draw();
        /* Draws lines between stars 
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
        */
        if(starsArray[i].size <= 0.3){
        	starsArray.splice(i, 1);
            i--;
        }
    }
}
// Twinklinkg ? Ongoing 

