import { mainContainer } from './mainContainer';

const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
mainContainer.appendChild(sidebar);

sidebar.innerText = 'i am a sidebar';
