const taskFieldEntry = document.getElementsByClassName('fieldEntry');

export default function createNewTask(button) {
  const para = document.createElement('p');
  //   para.innerText = textEntry;
  const parentDiv = button.parentNode;
  parentDiv.parentNode.insertBefore(para, parentDiv);
}
