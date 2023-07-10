const taskFieldEntry = document.getElementsByClassName('fieldEntry');

export default function createNewTask(button) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const para = document.createElement('p');
  para.appendChild(checkbox);
  para.innerText =
    button.parentElement.childNodes[0].value +
    ' By: ' +
    button.parentElement.childNodes[2].value;

  const parentDiv = button.parentNode;
  parentDiv.parentNode.insertBefore(para, parentDiv);

  button.parentElement.childNodes[0].value = '';
  button.parentElement.childNodes[2].value = '';
}
