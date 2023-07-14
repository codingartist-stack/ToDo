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
  console.log('there is a button');
  cardButton.addEventListener('click', (e) => {
    console.log('clicked');
  });
});
