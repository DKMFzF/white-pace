// // Находим элементы курсора
// const cursor = document.querySelector('.main-cursor__cursor');
// const follower = document.querySelector('.main-cursor__cursor-follower');

// // Координаты для основного курсора и фолловера
// let mouseX = 0;
// let mouseY = 0;
// let followerX = 0;
// let followerY = 0;

// // Функция обновления позиции курсора
// function updateCursorPosition(event) {
//     // Получаем координаты курсора относительно окна
//     mouseX = event.clientX;
//     mouseY = event.clientY;

//     // Обновляем позицию основного курсора с анимацией
//     gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
// }

// // Функция для анимации фолловера с задержкой
// function animateFollower() {
//     // Обновляем координаты фолловера с небольшим отставанием
//     followerX += (mouseX - followerX) * 0.15;
//     followerY += (mouseY - followerY) * 0.15;

//     // Используем GSAP для плавного перемещения
//     gsap.to(follower, { x: followerX, y: followerY, duration: 0.1 });

//     // Продолжаем анимацию на следующем кадре
//     requestAnimationFrame(animateFollower);
// }

// // Добавляем обработчик для движения мыши
// document.addEventListener('mousemove', updateCursorPosition);

// // Добавляем обработчик для скролла, чтобы курсор не "прыгал"
// window.addEventListener('scroll', () => {
//     gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0 });
//     gsap.to(follower, { x: followerX, y: followerY, duration: 0 });
// });

// // Запускаем анимацию фолловера
// animateFollower();