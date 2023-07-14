import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import newListTitle from './addModules/createNewListTitle';
import createCard from './addModules/createNewCard';
import createNewTask from './addModules/createTask';
import './addModules/createListCardButton';

const myListsContainer = document.getElementById('myListsContainer');
const addMyListButton = document.getElementById('myListButton');
const personalCardContainer = document.getElementById('personalCardContainer');
const workCardContainer = document.getElementById('workCardContainer');
const shoppingCardContainer = document.getElementById('shoppingCardContainer');

addMyListButton.addEventListener('click', (currentTarget) => {
  newListTitle(currentTarget, myListsContainer);
});

createCard(personalCardContainer);
createCard(workCardContainer);
createCard(shoppingCardContainer);
createCard(shoppingCardContainer);
createCard(shoppingCardContainer);

const itemButton = document.getElementsByClassName('addItemButton');

[...itemButton].forEach((button) => {
  button.addEventListener('click', (event) => {
    createNewTask(button);
  });
});

const createCardButton = document.querySelectorAll('.createListCard');

createCardButton.forEach((cardButton) => {
  cardButton.addEventListener('click', (event) => {
    const parentDiv = event.target.parentNode.children[1];

    createCard(parentDiv);
  });
});

const deleteButton = document.querySelectorAll('.deleteButton');

deleteButton.forEach((delButton) => {
  delButton.addEventListener('click', (event) => {
    const card = event.target.parentNode;
    card.remove();
  });
});
