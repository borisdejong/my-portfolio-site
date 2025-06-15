import { myCV } from './cv-data.js';

function renderPersonalInfo() {
  document.getElementById('myName').textContent = myCV.personalInfo.name;
  document.getElementById("subTitle").textContent = myCV.personalInfo.title;
}document.getElementById('mySummary').textContent = myCV.summary;


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('current-year').textContent = new Date().getFullYear();
});