function animateLogo(logoId, centerX, centerY, margin, speed) {
    const animatedGroup = document.querySelector(logoId);
    const radius = 144.5;
    let angle = 0;
    function animation() {
        angle += speed;
        const x = centerX + radius * Math.cos(angle + margin);
        const y = centerY + radius * Math.sin(angle + margin);
        animatedGroup.setAttribute('transform', `translate(${x - 36.8823}, ${y - 36.5078})`);
        requestAnimationFrame(animation);
    }
    animation();
}

// Массив объектов с параметрами для каждого логотипа
const logos = [
    { id: '#animated-logo', margin: Math.PI, speed: 0.01 },
    { id: '#animated-logo-2', margin: Math.PI, speed: 0.01 },
    { id: '#animated-logo-3', margin: Math.PI / 2, speed: 0.01 },
    { id: '#animated-logo-4', margin: (Math.PI / 2) * 4, speed: 0.01 },
    { id: '#animated-logo-5', margin: Math.PI, speed: -0.01 },
    { id: '#animated-logo-6', margin: Math.PI * 2, speed: -0.01 },
];

// Цикл для анимации всех логотипов
logos.forEach(logo => {
    animateLogo(logo.id, 180, 180, logo.margin, logo.speed);
});