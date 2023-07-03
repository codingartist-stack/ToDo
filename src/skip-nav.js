import { mainContentContainer } from './displayContainer';

const skipNav = document.createElement('a');
skipNav.innerText = 'skip navigation';
skipNav.href = mainContentContainer;

document.body.appendChild(skipNav);
