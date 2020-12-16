const body = document.querySelector('body');
const mode = document.querySelector('#mode');
const config = localStorage.getItem('theme');

window.addEventListener('DOMContentLoaded', () => {
    
    ScrollReveal().reveal('.nav', { delay: 1000 });
    ScrollReveal().reveal('.card', { delay: 2000 });
    
    if (config === 'dark-mode') {
        body.classList.toggle('dark-mode');
        mode.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
    } else {
        mode.innerHTML = 'Dark Mode <i class="far fa-moon"></i>';
    }

});

mode.addEventListener('click', () => {
    
    let themeSelected;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        mode.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
        themeSelected = body.classList.contains('') ? null : 'dark-mode';
    } else {
        mode.innerHTML = 'Dark Mode <i class="far fa-moon"></i>';
    }

    localStorage.setItem('theme', themeSelected);

});