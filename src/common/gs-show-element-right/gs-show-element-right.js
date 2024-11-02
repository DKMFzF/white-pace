gsap.registerPlugin(ScrollTrigger);

setTimeout(() => {
    gsap.utils.toArray(".gs-show-element-right").forEach((box) => {
        gsap.fromTo(box, 
          { opacity: 0, x: 100 },
          { 
            opacity: 1, x: 0,
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
}, 5000);
