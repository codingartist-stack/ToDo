export default function createCard(section) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');

  const cardTitle = document.createElement('input');
  cardTitle.type = 'text';
  cardTitle.name = 'cardTitle';
  cardTitle.classList.add('cardTitle');

  const itemFormContainer = document.createElement('div');
  itemFormContainer.classList.add('taskForm');

  const newItemField = document.createElement('input');
  newItemField.type = 'text';
  newItemField.name = 'newItem';
  newItemField.classList.add('fieldEntry');
  newItemField.placeholder = 'New Item/Task';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.innerText = 'Complete By: ';

  const newItemDueDate = document.createElement('input');
  newItemDueDate.type = 'date';
  newItemDueDate.name = 'dueDate';

  const newItemButton = document.createElement('button');
  newItemButton.innerText = 'Add';
  newItemButton.classList.add('addItemButton');

  itemFormContainer.appendChild(newItemField);
  itemFormContainer.appendChild(dueDateLabel);
  itemFormContainer.appendChild(newItemDueDate);
  itemFormContainer.appendChild(newItemButton);

  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(itemFormContainer);

  section.appendChild(cardContainer);
}
