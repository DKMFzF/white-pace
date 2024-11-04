window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.page__container-element-page');
    const pagePreloader = document.querySelector('.page__preloader-viewport');
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
        pagePreloader.style.display = 'none';
    }, 4500);
});