function getRandomChar() {
    const chars = "*!{**??}"; // Массив случайных символов
    return chars[Math.floor(Math.random() * chars.length)];
}

function displayTextWithEffect(text, container, time) {
    const randomChars = text.split('').map(() => getRandomChar()).join('');
    container.textContent = randomChars;

    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            const currentText = container.textContent.split('');
            currentText[index] = text[index];
            container.textContent = currentText.join('');
            index++;
        } else {
            clearInterval(interval);
        }
    }, time);
}