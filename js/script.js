'use strict';
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');


// hearts.forEach(item => {
//     console.log(item);
// });

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: green; width: 800px';

btns[1].style.borderRadius = '50%';

hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
});

circles[0].style.backgroundColor = 'red';

const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
// wrapper.prepend(div);
// hearts[1].before(div);
// hearts[1].after(div);
// circles[0].remove();

hearts[0].replaceWith(circles[0]); // hearts[0] заменить на circles[0]

div.innerHTML = '<h3> Hello world </h3>';
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterEnd', '<h2>Hello</h2>');