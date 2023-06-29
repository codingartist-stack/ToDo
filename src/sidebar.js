import { mainContainer } from './mainContainer';

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
mainContainer.appendChild(sidebar);

sidebar.innerText = 'i am a sidebar';

const overView = document.createElement('div');
//My Today
//next 7days
//all my tasks

const myLists = document.createElement('div');
//personal
//work
//Grocery list
//+ add list

const ToDoProjects = document.createElement('div');
// + add new project
