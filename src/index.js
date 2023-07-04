import _ from 'lodash';
import './style.css';
import './sidebar';
import './displayContainer';
import './addModules/createNewListTitle';
import createNewListTitle from './addModules/createNewListTitle';

const ADDButton = document.getElementById('myListButton');

ADDButton.addEventListener('click', (target) => {
  createNewListTitle(target);
});
