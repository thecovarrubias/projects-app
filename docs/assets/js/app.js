const body = document.querySelector('body'),
      mode = document.querySelector('#mode'),
      config = localStorage.getItem('theme'),
      year = document.querySelector('#year'),
      topBottom = document.querySelector('.top-bottom'),
      loader = document.querySelector('.loader'),
      typed = new Typed('.typed', {
        strings: [
            'Ingeniero en TIC´S 👨🏻‍💻', 
            'Desarrollador Frontend 💻'
        ],
        typeSpeed: 85,
        loop: true,
        backDelay: 2500
      });

window.addEventListener('DOMContentLoaded', () => {
    
    loader.classList.add('fade-out');
    year.innerHTML =  new Date().getFullYear();
    
    if (config === 'dark-mode') {
        body.classList.toggle('dark-mode');
        mode.innerHTML = '<i class="far fa-sun"></i>';
    } else {
        mode.innerHTML = '<i class="far fa-moon"></i>';
    }

});

mode.addEventListener('click', () => {
    
    let themeSelected;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        mode.innerHTML = '<i class="far fa-sun"></i>';
        themeSelected = body.classList.contains('') ? null : 'dark-mode';
    } else {
        mode.innerHTML = '<i class="far fa-moon"></i>';
    }

    localStorage.setItem('theme', themeSelected);

});

window.onscroll = () => {
    if(document.documentElement.scrollTop > 50) {
        topBottom.style.display = 'block';
    } else {
        topBottom.style.display = 'none';
    }
};

topBottom.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    })
});