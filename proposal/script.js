// script.js
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const message = document.getElementById('message');

yesButton.addEventListener('click', () => {
    message.classList.remove('hidden');
    document.querySelector('.buttons').style.display = 'none';
    document.querySelector('.question').style.display = 'none';
});

noButton.addEventListener('mouseover', () => {
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});