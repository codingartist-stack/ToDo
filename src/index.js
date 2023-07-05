import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import newListTitle from './addModules/createNewListTitle';
import createCard from './addModules/createNewCard';

const myListsContainer = document.getElementById('myListsContainer');
const addMyListButton = document.getElementById('myListButton');
const addBoard = document.getElementById('addBoardButton');
const personalContainer = document.getElementById('personalContainer');
const workContainer = document.getElementById('workContainer');
const shoppingListContainer = document.getElementById('shoppingListContainer');
const ToDoBoardContainer = document.getElementById('ToDoBoardContainer');

addMyListButton.addEventListener('click', (currentTarget) => {
  newListTitle(currentTarget, myListsContainer);
});

addBoard.addEventListener('click', (currentTarget) => {
  newListTitle(currentTarget, ToDoBoardContainer);
});

createCard(personalContainer);
createCard(workContainer);
createCard(shoppingListContainer);
