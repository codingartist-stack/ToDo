const myLists = document.getElementById('myLists');
const toDoBoards = document.getElementById('ToDoBoards');

const addListLine = document.createElement('ul');
myLists.appendChild(addListLine);

const addListLink = document.createElement('a');
addListLink.innerText = 'Add List';
addListLink.href = ' ';
addListLine.appendChild(addListLink);

const addToDoBoardLine = document.createElement('ul');
toDoBoards.appendChild(addToDoBoardLine);

const addToDoBoardLink = document.createElement('a');
addToDoBoardLink.innerText = 'Add Board';
addToDoBoardLink.href = ' ';
addToDoBoardLine.appendChild(addToDoBoardLink);
