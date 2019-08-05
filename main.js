'use strict';

const container = document.querySelector('.container ');

function sayHi () {
  console.log(sayHi)
}

const newTitle = document.createElement('h1');
const newTitleContent = document.createTextNode('texto');
newTitle.appendChild(newTitleContent);
newTitle.addEventListener('click', sayHi)

const newImg = document.createElement('img');
new.Img.src = 'https://placehold.it/200x200';
newImg.classList.add('container__list');


for (let i=0; i<3; i++) {
  const newLi = document.createElement('li');
  const newLiContent = document.createTextNode(`elemento n1 ${i+1}`);
  newLi.appendChild(newLiContent);
  newLi.setAttribute('data-index', i);
  newList.appendChild(newLi);
}

container.appendChild('newList');
container.appendChild();
container.appendChild()
