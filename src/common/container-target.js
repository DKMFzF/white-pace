const sectionFirst = document.querySelector('#sectionDescriptionProject');
const footer = document.querySelector('#footerContainer');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 2000) {
        sectionFirst.style.display = 'none';
        footer.style.display = 'block';
    } else {
        sectionFirst.style.display = 'block';
        footer.style.display = 'none';
    }
});
