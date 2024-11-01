const headerGs = document.querySelector('.gs-item-sc-hd');

// animation header
gsap.to(headerGs, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    delay: 5.8
});
