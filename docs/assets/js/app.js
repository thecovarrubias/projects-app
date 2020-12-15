const body = document.querySelector('body');
const mode = document.querySelector('#mode');
// const configTheme = window.matchMedia('(prefers-color-scheme: dark)');

ScrollReveal().reveal('.nav', { delay: 1000 });
ScrollReveal().reveal('.card', { delay: 2000 });

mode.addEventListener('click', () => {
    
    // if (configTheme.matches) {
    //     document.body.classList.toggle('light-mode');
    // }

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        mode.innerHTML = '<i class="far fa-sun"></i> Light Mode';
    } else {
        mode.innerHTML = '<i class="far fa-moon"></i> Dark Mode';
    }

});