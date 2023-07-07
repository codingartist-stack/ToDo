export default function createNewTask(button) {
  const para = document.createElement('p');
  const parentDiv = button.parentNode;
  parentDiv.parentNode.insertBefore(para, parentDiv);
}
