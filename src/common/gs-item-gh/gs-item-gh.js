const gsGitHub = document.querySelector('.gs-item-gh');

// animation github
setInterval(() => {
    gsap.to(gsGitHub, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        delay: 5.8
    });
}, 1000);
