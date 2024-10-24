const outerCircles = document.querySelectorAll('#outerCircles .moving-circle');
const innerCircles = document.querySelectorAll(
  '#innerCircles .moving-inside-circle'
);

// size circle
const radius = [280, 135];
const center = { x: 400, y: 400 };

// animation degree
let angle = [0, 0];

function animate() {
  angle[0] += 0.005;
  angle[1] += 0.01;

  // other circle
  outerCircles.forEach((circle, index) => {
    const x = center.x + radius[0] * Math.cos(angle[0] + index * (Math.PI / 3));
    const y = center.y + radius[0] * Math.sin(angle[0] + index * (Math.PI / 3));
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
  });

  // inner circle
  innerCircles.forEach((circle, index) => {
    const x =
      center.x + radius[1] * Math.cos(-angle[1] + index * (Math.PI / 2));
    const y =
      center.y + radius[1] * Math.sin(-angle[1] + index * (Math.PI / 2));
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
  });

  // new frame
  requestAnimationFrame(animate);
}

animate(); // start animation
