export default function createSection(section) {
  const sectionContainer = document.createElement('div');
  const sectionTitle = document.createElement('h3');
  sectionTitle.innerText = lineTitle;

  sectionContainer.appendChild(sectionTitle);
  section.appendChild(sectionContainer);
}
