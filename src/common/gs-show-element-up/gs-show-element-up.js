gsap.registerPlugin(ScrollTrigger);

// Анимация появления элементов
setTimeout(() => {
    gsap.utils.toArray(".gs-show-element-up").forEach((box) => {
        gsap.fromTo(box, 
          { opacity: 0, y: 100 },
          { 
            opacity: 1, y: 0,
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
}, 5000);
