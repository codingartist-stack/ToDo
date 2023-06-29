import { mainContainer } from './mainContainer';

const displayContainer = document.createElement('div');
displayContainer.classList.add('displayContainer');
displayContainer.innerText = 'I am the display container';

mainContainer.appendChild(displayContainer);
