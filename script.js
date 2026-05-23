
const glow = document.querySelector('.mouse-glow');

window.addEventListener('mousemove', e => {
glow.style.left = e.clientX + 'px';
glow.style.top = e.clientY + 'px';
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
},{threshold:0.15});

reveals.forEach(r => observer.observe(r));

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5)*0.4,
dy:(Math.random()-0.5)*0.4
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x += p.dx;
p.y += p.dy;

if(p.x<0 || p.x>canvas.width) p.dx *= -1;
if(p.y<0 || p.y>canvas.height) p.dy *= -1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle='rgba(201,168,76,0.4)';
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();
