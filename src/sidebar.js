const lists = document.getElementById('navLists');

const overView = document.createElement('ul');
overView.id = 'overView';
lists.appendChild(overView);

const myToday = document.createElement('li');
myToday.innerText = 'My Today';
lists.appendChild(myToday);

const next7Days = document.createElement('li');
next7Days.innerText = 'Next 7 Days';
lists.appendChild(next7Days);

const allTasks = document.createElement('li');
allTasks.innerText = 'All Tasks';
lists.appendChild(allTasks);

const myLists = document.createElement('ul');
//personal
//work
//Grocery list
//+ add list

const ToDoProjects = document.createElement('ul');
// + add new project
