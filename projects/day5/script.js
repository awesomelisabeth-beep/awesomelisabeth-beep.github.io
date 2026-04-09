const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
btn.addEventListener('click', () => {
    box.classList.toggle('rot');
    box2.classList.toggle('rot');
    box3.classList.toggle('rot');
    box4.classList.toggle('bot');
});





