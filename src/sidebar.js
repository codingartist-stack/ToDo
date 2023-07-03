const myLists = document.getElementById('myLists');
const toDoBoards = document.getElementById('ToDoBoards');

function addListLink(parentList) {
  const addListLine = document.createElement('li');

  const addList = document.createElement('a');
  addList.classList.add('addLink');
  addList.innerText = 'Add List';
  addList.href = ' ';

  addListLine.appendChild(addList);

  parentList.appendChild(addListLine);
}

addListLink(myLists);
addListLink(toDoBoards);

//click the add list
//be able to name the list
//click on the new list
//jump to blank list that I can add items to
