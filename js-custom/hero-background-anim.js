// CTX is reffering to an Object CanvasRenderingContext2D, where every properties and methods are placed.

//Object params declares animation features 

export const canv1 = document.createElement('canvas');
export const canv2 = document.createElement('canvas');

const heroPage = document.querySelector('#home-page');
const dividerSection = document.querySelector('#anim-2');

heroPage.append(canv1);
dividerSection.append(canv2);

canv1.style.position = 'absolute';
canv1.style.top = '0';
canv1.style.zIndex = -1;
canv1.width = window.innerWidth;


  window.addEventListener('resize', function() {
    canv1.width = window.innerWidth;
  });
   
export const runAnimation = (canvas, params) => {
  const ctx = canvas.getContext('2d');
  var particlesArray = [];
  canvas.top = canvas.getBoundingClientRect().y;
  canvas.bottom = canvas.getBoundingClientRect().bottom;
  canvas.width = params.canvasWidth;
  canvas.height = params.canvasHeight;
  canvas.left = canvas.getBoundingClientRect().left;
  canvas.right = canvas.getBoundingClientRect().right;
  
  
  class Star {
    constructor(x = Math.random() * canvas.width + 1,y = Math.random() * canvas.height + 1 ) {
      this.y = y; 
      this.x = x; 
      //Control size
      if (params.multisize) {
        this.size = Math.random() * params.baseSize + 1;
      } else {
        this.size = params.baseSize;
      }
      this.speedX = Math.random() * params.speed / 10;
      this.speedY = Math.random() * params.speed / 10; // Vector of movement
      // Set base color
      this.color = params.baseColor;
      // Control multitransparency 
      if (params.multiopacity) {
        this.multiopacity = Math.random() * .7;
      } else {
        this.multiopacity = 1;
      }
    }
    //Update current star position
    update() {
      if((this.y >= canvas.top || this.y <= canvas.bottom)&& !(params.falling)){
      	this.speedY *= -1;
      }
      if((this.x >= canvas.right || this.x <= canvas.left)&& params.bouncing) {
      	this.speedX *= -1;
      }
  
      this.y+=this.speedY;
	  this.x += this.speedX;
      
    }
    //Draw star on canvas 
    draw() {

      ctx.globalAlpha = this.multiopacity;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleStars();
    requestAnimationFrame(animate);

  }
  animate();


  function init() {
  
    for (let i = 0; i < params.amountOfStars; i++) {
      particlesArray.push(new Star());
      if (i > params.amountOfStars/2) {
        particlesArray[i].speedX = Math.random() * -0.1;
        particlesArray[i].speedY = Math.random() * -0.1;
      }
      /* else if(particlesArray[i].x >= ) */
    }
  }
  init();
  // EXTRA EFFECTS 
  function handleStars() {
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
   	  

      if (params.linked) {
        linked(i);
      }
      if (particlesArray[i].size <= 0.3) {
        particlesArray.splice(i, 1);
        i--;
      }
      if (params.twinkle && i % 20 == 0) {
        twinkle(particlesArray[i]);
      }
   

    }
  }
  //Twinkling
  function twinkle(star) {
    let i = 0;
    let j = 255;
    requestAnimationFrame(() =>{
    	star.color = `rgb(${i},rgb${i},rgb${i}`;
        i++;
        if(i === 255){
        	star.color = params.baseColor;
            twinkle();
        }
        else{
        	requestAnimationFrame(twinkle);
        }
    })
  }
  const connectOnMouse = () => {
    canvas.addEventListener('mousemove', targetPoint => {
		console.log(targetPoint.x, targetPoint.y) // Link stars on movement 
    })
  }
  
  function linked(i) {
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[j].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx * dx + dy * dy * dy);
      if (distance < 1000) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = 1;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y); //Create line between points 
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }
  }
}

// Class? 

export const params1 = {
  canvasWidth: canv1.width,
  canvasHeight: window.innerHeight,
  amountOfStars: 150,
  baseColor: 'rgb(0,240,255)',
  multiopacity: true,
  baseSize: 2,
  multisize: true,
  speed: 2,
  twinkle: false, // Fix  
  twinkleSpeed: Number,
  linked: false,
  mouseConnect:false,
  falling:true,
  bouncing:false,
}
export const params2 = {
  canvasWidth: dividerSection.clientWidth,
  canvasHeight: 200,
  amountOfStars: 100,
  baseColor: 'rgb(0,240,255)',
  multiopacity: true,
  baseSize: 1,
  multisize: true,
  speed: 1,
  twinkle: false, // Fix  
  twinkleSpeed: Number,
  linked: true,
  mouseConnect:true, 
  falling:false,
  bouncing:true,
}

/* runAnimation(canv1, params1);  */
  // Fix bug with optimalization 
