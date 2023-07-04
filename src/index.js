import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import createNewListTitle from './addModules/createNewListTitle';

const addMyListButton = document.getElementById('myListButton');
const addBoard = document.getElementById('addBoardButton');

addMyListButton.addEventListener('click', (currentTarget) => {
  createNewListTitle(currentTarget);
});

addBoard.addEventListener('click', (currentTarget) => {
  createNewListTitle(currentTarget);
});
