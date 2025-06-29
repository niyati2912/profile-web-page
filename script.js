let bgModes = ['extra-bubbles', 'none', 'lavender'];
let currentMode = 0;

function toggleTheme() {
document.body.classList.toggle('dark');
}

function changeBackground() {
const bg = document.getElementById('background-style');

const dynamicElements = bg.querySelectorAll('.extra-bubble');
dynamicElements.forEach(el => el.remove());

currentMode = (currentMode + 1) % bgModes.length;

if (bgModes[currentMode] === 'extra-bubbles') {
for (let i = 0; i < 20; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble', 'extra-bubble');
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.top = Math.random() * window.innerHeight + 'px';
    bg.appendChild(bubble);


    gsap.to(bubble, {
    x: () => Math.random() * 100 - 50,
    y: () => Math.random() * 200 - 100,
    scale: () => 0.8 + Math.random() * 0.4,
    opacity: 0.6,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: i * 0.2,
    });
}
} else if (bgModes[currentMode] === 'lavender') {
document.body.style.background = 'linear-gradient(135deg, #f3e5f5, #e1bee7)';
} else {
document.body.style.background = '';
}
}


document.addEventListener('DOMContentLoaded', () => {

const bubbles = document.querySelectorAll('.bubble:not(.extra-bubble)');
bubbles.forEach((bubble, index) => {
gsap.to(bubble, {
    x: () => Math.random() * 100 - 50,
    y: () => Math.random() * 200 - 100,
    scale: () => 0.8 + Math.random() * 0.4,
    opacity: 0.6,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: index * 0.2,
});
});


const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
gsap.to(star, {
    x: () => Math.random() * 50 - 25,
    y: () => Math.random() * 50 - 25,
    scale: () => 0.8 + Math.random() * 0.4,
    opacity: () => 0.4 + Math.random() * 0.6,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
    delay: index * 0.3,
});
});


changeBackground();
});