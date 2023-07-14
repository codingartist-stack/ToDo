import createCard from './createNewCard';
import createNewTask from './createTask';

export default function newListTitle(event, section) {
  const newLine = document.createElement('li');
  const linkTag = document.createElement('a');
  newLine.appendChild(linkTag);

  const lineTitle = prompt('List Title');

  if (lineTitle === null) {
    return;
  }

  linkTag.innerText = lineTitle;
  event.currentTarget.parentNode.insertBefore(newLine, event.currentTarget);

  const sectionContainer = document.createElement('div');
  const sectionTitle = document.createElement('h3');
  sectionTitle.innerText = lineTitle;
  sectionTitle.id = lineTitle;

  linkTag.href = `#${lineTitle}`;

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardContainer');

  sectionContainer.appendChild(sectionTitle);
  sectionContainer.appendChild(cardContainer);
  section.appendChild(sectionContainer);

  const createListButton = document.createElement('button');
  createListButton.innerText = 'Add List';
  createListButton.classList.add('createListCard');

  sectionContainer.appendChild(createListButton);

  createCard(cardContainer);
  createCard(cardContainer);
  createCard(cardContainer);

  const itemButton = document.getElementsByClassName('addItemButton');

  [...itemButton].forEach((button) => {
    button.addEventListener('click', (event) => {
      createNewTask(button);
    });
  });

  const createCardButton = document.querySelectorAll('.createListCard');

  createCardButton.forEach((cardButton) => {
    cardButton.addEventListener('click', (event) => {
      const parentDiv = event.target.parentNode.children[1];
      console.log(parentDiv);
      createCard(parentDiv);
    });
  });

  const deleteButton = document.querySelectorAll('.deleteButton');

  deleteButton.forEach((delButton) => {
    delButton.addEventListener('click', (event) => {
      const card = event.target.parentNode;
      card.remove();
    });
  });
}
