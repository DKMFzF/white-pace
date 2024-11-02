const gsScrollPrg = document.querySelector('.gs-item-scrl-prg');

// animation scrollProgress
setInterval(() => {
    gsap.to(gsScrollPrg, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
        delay: 5.8
    });
}, 1000);
