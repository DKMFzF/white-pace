window.addEventListener('scroll', function() {
    const scrollProgress = document.querySelector('#scrollProgress');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = (scrollPosition / totalHeight) * 96; // не 100% потому что footer - fixed
    scrollProgress.textContent = Math.round(scrollPercent) + '%';
});