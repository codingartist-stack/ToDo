import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import newListTitle from './addModules/createNewListTitle';
import createCard from './addModules/createNewCard';
import createNewTask from './addModules/createTask';

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
  createCard(ToDoBoardContainer);
  createCard(ToDoBoardContainer);
});

createCard(personalContainer);
createCard(workContainer);
createCard(shoppingListContainer);

const itemButton = document.getElementsByClassName('addItemButton');
const itemForm = document.getElementsByClassName('taskForm');

[...itemButton].forEach((button) => {
  button.addEventListener('click', (event) => {
    createNewTask(button);
  });
});
