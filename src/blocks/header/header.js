let lastScrollTop = 0;
const header = document.querySelector('#header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let screenHeight = window.screen.height;
    if (scrollTop > screenHeight) {
        if (scrollTop > lastScrollTop) {
            header.style.top = "-10vh";
        } else {
            header.style.top = "0";
        }
    } else {
        header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});