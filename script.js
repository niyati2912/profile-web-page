let isDark = false;
let bgModes = ['bubbles', 'wallpaper', 'lavender'];
let currentMode = 0;

function toggleTheme() {
document.body.classList.toggle('dark');
isDark = !isDark;
}

function changeBackground() {
const bgDiv = document.getElementById('background-style');
bgDiv.className = '';

currentMode = (currentMode + 1) % bgModes.length;

if (bgModes[currentMode] === 'wallpaper') {
bgDiv.classList.add('bg-wallpaper');
} else if (bgModes[currentMode] === 'lavender') {
document.body.style.background = 'linear-gradient(135deg, #f4e1ff, #e9d8ff)';
} else {
document.body.style.background = '';
}
}
window.onload = function() {
const typewriter = document.getElementById("typewriter");
typewriter.innerText = "Hi, I’m Niyati — C++ Developer & Designer";
}
