
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navigatonBar = document.querySelector('#nav');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById('text-box');

//Dark or Light Images
function imageMode(color) {
    image1.src = `img/innovative-${color}.svg`;
    image2.src = `img/user-friendly-${color}.svg`;
    image3.src = `img/innovative-${color}.svg`;
}


// Dark Mode Style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark')
}


// Light Mode Style
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50% ) ';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Lite Mode Style


// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme);


//Checke Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

// Create a new instance of Typed.js
var typed = new Typed('#typed', {
    strings: ['CODER.', 'DESIGNER.', 'Developer.'],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    onComplete: function (self, i) {
      console.log('String typed:', self.strings[i]);
    }
});





