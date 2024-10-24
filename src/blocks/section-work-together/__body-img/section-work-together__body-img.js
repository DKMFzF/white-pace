// Outer circles
const movingCircle = document.querySelector('#movingCircle');
const movingCircle2 = document.querySelector('#movingCircle2');
const movingCircle3 = document.querySelector('#movingCircle3');
const movingCircle4 = document.querySelector('#movingCircle4');
const movingCircle5 = document.querySelector('#movingCircle5');

// inner circles
const movingInsideCircle = document.querySelector('#movingInsideCircle');
const movingInsideCircle2 = document.querySelector('#movingInsideCircle2');
const movingInsideCircle3 = document.querySelector('#movingInsideCircle3');
const movingInsideCircle4 = document.querySelector('#movingInsideCircle4');

// const size circle external
const radius = 280;
const centerX = 400;
const centerY = 400;


// const size circle inset
const radiusInsetCrcle = 135;
const centerInsetCrcleX = 400;
const centerInsetCrcleY = 400;

// counting degrees
let angle = 0;
let angleInsetCircle = 0;

function animate() {
    // speed animation
    angle += 0.005;
    angleInsetCircle += 0.01;

    // Outer circles
    const x1 = centerX + radius * Math.cos(angle); 
    const y1 = centerY + radius * Math.sin(angle); 
    movingCircle.setAttribute('cx', x1);
    movingCircle.setAttribute('cy', y1);

    const x2 = centerX + radius * Math.cos(angle + Math.PI / 3); 
    const y2 = centerY + radius * Math.sin(angle + Math.PI / 3); 
    movingCircle2.setAttribute('cx', x2);
    movingCircle2.setAttribute('cy', y2);

    const x3 = centerX + radius * Math.cos(angle + Math.PI / 1.5); 
    const y3 = centerY + radius * Math.sin(angle + Math.PI / 1.5); 
    movingCircle3.setAttribute('cx', x3);
    movingCircle3.setAttribute('cy', y3);

    const x4 = centerX + radius * Math.cos(angle + (Math.PI / 1.5) + Math.PI / 1.02); 
    const y4 = centerY + radius * Math.sin(angle + (Math.PI / 1.5) + Math.PI / 1.02); 
    movingCircle4.setAttribute('cx', x4);
    movingCircle4.setAttribute('cy', y4);

    const x5 = centerX + radius * Math.cos(angle + (Math.PI / 1.5) + Math.PI / 2); 
    const y5 = centerY + radius * Math.sin(angle + (Math.PI / 1.5) + Math.PI / 2); 
    movingCircle5.setAttribute('cx', x5);
    movingCircle5.setAttribute('cy', y5);

    // inner circles
    const x6 = centerInsetCrcleX + radiusInsetCrcle * Math.cos(-angleInsetCircle); 
    const y6 = centerInsetCrcleY + radiusInsetCrcle * Math.sin(-angleInsetCircle); 
    movingInsideCircle.setAttribute('cx', x6);
    movingInsideCircle.setAttribute('cy', y6);

    const x7 = centerInsetCrcleX + radiusInsetCrcle * Math.cos(-angleInsetCircle - Math.PI / 2); 
    const y7 = centerInsetCrcleY + radiusInsetCrcle * Math.sin(-angleInsetCircle - Math.PI / 2); 
    movingInsideCircle2.setAttribute('cx', x7);
    movingInsideCircle2.setAttribute('cy', y7);

    const x8 = centerInsetCrcleX + radiusInsetCrcle * Math.cos(-angleInsetCircle - Math.PI);
    const y8 = centerInsetCrcleY + radiusInsetCrcle * Math.sin(-angleInsetCircle - Math.PI);
    movingInsideCircle3.setAttribute('cx', x8);
    movingInsideCircle3.setAttribute('cy', y8);

    const x9 = centerInsetCrcleX + radiusInsetCrcle * Math.cos(-angleInsetCircle + -Math.PI - (Math.PI / 2));
    const y9 = centerInsetCrcleY + radiusInsetCrcle * Math.sin(-angleInsetCircle + -Math.PI - (Math.PI / 2));
    movingInsideCircle4.setAttribute('cx', x9);
    movingInsideCircle4.setAttribute('cy', y9);

    requestAnimationFrame(animate);
}

animate(); // start animation