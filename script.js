let bgModes = ['bubbles', 'none', 'lavender'];
let currentMode = 0;

function toggleTheme() {
document.body.classList.toggle('dark');
}

function changeBackground() {
const bg = document.getElementById('background-style');
bg.innerHTML = ''; // clear old
bg.className = ''; // reset class

currentMode = (currentMode + 1) % bgModes.length;

if (bgModes[currentMode] === 'bubbles') {
for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 40 + 10;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.animationDuration = (Math.random() * 8 + 5) + 's';
    bg.appendChild(bubble);
}
} else if (bgModes[currentMode] === 'lavender') {
document.body.style.background = 'linear-gradient(135deg, #f3e5f5, #e1bee7)';
} else {
document.body.style.background = '';
}
}

// Start with bubbles
window.onload = () => {
changeBackground();
};
