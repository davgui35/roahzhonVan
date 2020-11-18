
//scrolling
const btn1 = document.querySelector('.element1');
console.log(btn1);
const btn2 = document.querySelector('.element2');
const btn3 = document.querySelector('.element3');
const btn4 = document.querySelector('.element4');

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
    top: 3000,
    behavior: 'smooth',
}));
btn4.addEventListener('click', () => window.scrollTo({
    top: 2450,
    behavior: 'smooth',
}));



