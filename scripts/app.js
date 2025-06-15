import { myCV } from './cv-data.js';

function renderPersonalInfo() {
  document.getElementById('myName').textContent = myCV.personalInfo.name;
  document.getElementById("subTitle").textContent = myCV.personalInfo.title;
}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonalInfo();
  document.getElementById('current-year').textContent = new Date().getFullYear();
});