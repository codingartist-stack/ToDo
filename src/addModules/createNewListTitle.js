function createNewListTitle(target) {
  const newLine = document.createElement('li');
  const linkTag = document.createElement('a');
  linkTag.href = ' ';
  newLine.appendChild(linkTag);

  const lineTitle = prompt('List Title');
  linkTag.innerText = lineTitle;
  target.parentNode.insertBefore(newLine, target);
}
