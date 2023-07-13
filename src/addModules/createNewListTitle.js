import createCard from './createNewCard';

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

  createCard(cardContainer);
}
