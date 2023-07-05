import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import createNewListTitle from './addModules/createNewListTitle';
import createCard from './addModules/createNewCard';

const addMyListButton = document.getElementById('myListButton');
const addBoard = document.getElementById('addBoardButton');
const personalContainer = document.getElementById('personalContainer');
const workContainer = document.getElementById('workContainer');
const shoppingListContainer = document.getElementById('shoppingListContainer');

addMyListButton.addEventListener('click', (currentTarget) => {
  createNewListTitle(currentTarget);
});

addBoard.addEventListener('click', (currentTarget) => {
  createNewListTitle(currentTarget);
});

createCard(personalContainer);
createCard(workContainer);
createCard(shoppingListContainer);
