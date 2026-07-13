// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in animations on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission (replace with actual backend integration)
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear form
    this.reset();
});
/* ================= UNIVERSE STAR BACKGROUND ================= */

const canvas = document.getElementById("universe-bg");
const ctx = canvas.getContext("2d");

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const layers = [
    { count: 120, speed: 0.15, size: 1 },
    { count: 90,  speed: 0.35, size: 1.5 },
    { count: 60,  speed: 0.6,  size: 2 }
];

let stars = [];

layers.forEach(layer=>{
    for(let i=0;i<layer.count;i++){
        stars.push({
            x: Math.random()*canvas.width,
            y: Math.random()*canvas.height,
            r: layer.size,
            s: layer.speed,
            o: Math.random()*0.8 + 0.2
        });
    }
});

function animateUniverse(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${star.o})`;
        ctx.fill();

        star.y += star.s;
        if(star.y > canvas.height){
            star.y = 0;
            star.x = Math.random()*canvas.width;
        }
    });

    requestAnimationFrame(animateUniverse);
}

animateUniverse();
