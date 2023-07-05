const myListsContainer = document.getElementById('myListsContainer');
const ToDoBoardContainer = document.getElementById('ToDoBoardContainer');

export default function createNewListTitle(event) {
  const newLine = document.createElement('li');
  const linkTag = document.createElement('a');
  linkTag.href = ' ';
  newLine.appendChild(linkTag);

  const lineTitle = prompt('List Title');
  linkTag.innerText = lineTitle;
  event.currentTarget.parentNode.insertBefore(newLine, event.currentTarget);

  const sectionContainer = document.createElement('div');
  const sectionTitle = document.createElement('h3');
  sectionTitle.innerText = lineTitle;

  sectionContainer.appendChild(sectionTitle);

  switch (event.currentTarget) {
    case 'li#myListButton':
      myListsContainer.appendChild(sectionContainer);
      break;

    case 'li#addBoardButton':
      ToDoBoardContainer.appendChild(sectionContainer);
      break;

    default:
      break;
  }
}
