const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        menu.classList.toggle('nav-active');
    });

    menu.addEventListener('click', () => {
        menu.classList.toggle('nav-active');
    });
};

navSlide();

//Navegation with whiter menu
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 100;
    nav.classList.toggle('scrolling-active', windowPosition);
});

//Hello message
// var hello = document.querySelector('.hello');
// var show = document.querySelector('.presentation');

// show.addEventListener("mouseover", function () {

//     hello.classList.add('visible');
// });

// show.addEventListener("mouseout", function () {

//     hello.classList.remove('visible');
// });