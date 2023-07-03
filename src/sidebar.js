const lists = document.getElementById('navLists');

const overView = document.createElement('ul');
overView.id = 'overView';
lists.appendChild(overView);

const myToday = document.createElement('li');
myToday.innerText = 'My Today';
overView.appendChild(myToday);

const next7Days = document.createElement('li');
next7Days.innerText = 'Next 7 Days';
overView.appendChild(next7Days);

const allTasks = document.createElement('li');
allTasks.innerText = 'All Tasks';
overView.appendChild(allTasks);

const myLists = document.createElement('ul');
myLists.id = 'myLists';
myLists.innerText = 'My Lists';
lists.appendChild(myLists);

const personalList = document.createElement('li');
personalList.innerText = 'Personal';
myLists.appendChild(personalList);

const workList = document.createElement('li');
workList.innerText = 'Work';
myLists.appendChild(workList);

const groceryList = document.createElement('li');
groceryList.innerText = 'Grocery List';
myLists.appendChild(groceryList);

const addList = document.createElement('li');
addList.innerText = 'Add List';
myLists.appendChild(addList);

const ToDoBoards = document.createElement('ul');
ToDoBoards.innerText = 'To Do Boards';
lists.appendChild(ToDoBoards);

const addToDoBoard = document.createElement('li');
addToDoBoard.innerText = 'Add New Board';
ToDoBoards.appendChild(addToDoBoard);
