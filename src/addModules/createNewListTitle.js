export default function createNewListTitle(event) {
  const newLine = document.createElement('li');
  const linkTag = document.createElement('a');
  linkTag.href = ' ';
  newLine.appendChild(linkTag);

  const lineTitle = prompt('List Title');
  linkTag.innerText = lineTitle;
  event.currentTarget.parentNode.insertBefore(newLine, event.currentTarget);
}
