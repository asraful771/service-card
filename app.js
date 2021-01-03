const hambuger = document.querySelector('.header .nav .nav-list .hamburger');
const menu = document.querySelector('.header .nav .nav-list');

hambuger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hambuger.classList.toggle('active');
});
