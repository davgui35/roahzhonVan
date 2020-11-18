const data = document.querySelector('.data');
// console.log(data);
let minutes = document.querySelector('.minutes');
// console.log(minutes);
let seconds = document.querySelector('.seconds');
// console.log(seconds);
let compteurMinutes = 0;
let compteurSeconds = 0;
minutes.innerHTML = compteurMinutes;
seconds.innerHTML = compteurSeconds;

setInterval("augmenterSecondes()", 50);
setInterval("augmenterMinutes()", 500);

function augmenterMinutes() {
    if (compteurMinutes < 2) {
        compteurMinutes++;
        minutes.innerHTML = compteurMinutes;
    }
}
function augmenterSecondes() {
    if (compteurSeconds < 30) {
        compteurSeconds++;
        seconds.innerHTML = compteurSeconds;
    }
}

//scrolling
const btn1 = document.querySelector('.element1');
console.log(btn1);
const btn2 = document.querySelector('.element2');
const btn3 = document.querySelector('.element3');
const btn4 = document.querySelector('.element4');
const btn5 = document.querySelector('.element5');

console.log(window);

btn1.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));

btn2.addEventListener('click', () => window.scrollTo({
    top: 800,
    behavior: 'smooth',
}));

btn3.addEventListener('click', () => window.scrollTo({
    top: 1680,
    behavior: 'smooth',
}));
btn4.addEventListener('click', () => window.scrollTo({
    top: 2500,
    behavior: 'smooth',
}));
btn5.addEventListener('click', () => window.scrollTo({
    top: 3380,
    behavior: 'smooth',
}));


