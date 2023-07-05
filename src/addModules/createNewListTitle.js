export default function newListTitle(event, section) {
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
  section.appendChild(sectionContainer);
}
