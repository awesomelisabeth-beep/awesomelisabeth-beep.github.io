var button = document.querySelector('.btn');
var tri1 = document.querySelector('.triangle');
var tri2 = document.querySelector('.trianl');


button.onclick = function() {
 if (tri1.style.animationPlayState === 'paused') {
   tri1.style.animationPlayState = 'running';
 } else {
   tri1.style.animationPlayState = 'paused';
 }
 if (tri2.style.animationPlayState === 'paused') {
   tri2.style.animationPlayState = 'running';
 } else {
   tri2.style.animationPlayState = 'paused';
 }
};
