const imgaesBgScDs = document.querySelectorAll('.gs-item-sc-ds-img');

// animation section-ds-pj
gsap.to(imgaesBgScDs, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    delay: 5.8
});
