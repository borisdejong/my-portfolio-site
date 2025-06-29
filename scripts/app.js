import { myCV } from './cv-data.js';
import * as render from './render.js'; // Imports renderPersonalInfo, renderExperience, etc.
import { performSearch } from './search.js'; // Imports performSearch


document.addEventListener('DOMContentLoaded', () => {
  render.renderPersonalInfo(myCV.personalInfo);
  render.renderExperience(myCV.experience);
  render.renderEducation(myCV.education);
  render.renderProjects(myCV.projects);
  render.renderSkills(myCV.skills);

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");

  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("input", performSearch);

  // Event listener for skills list
  const skillsList = document.getElementById("skillsList");
  skillsList.addEventListener("click", (event) => {
    const clickedSkillTag = event.target.closest('.skill-tag');
    if (clickedSkillTag) {
        const skillName = clickedSkillTag.dataset.skill;
        searchInput.value = skillName;
        performSearch(skillName, noResultsMessage, clearSearchButton, searchInput);
    }
  });

  const experienceList = document.getElementById("experienceList");
  experienceList.addEventListener("click", (event) => {
    const clickedItem = event.target.closest('.collapsible-item');
    if (clickedItem) {
        clickedItem.classList.toggle("visible");
    }
  });
  
  clearSearchButton.addEventListener("click", () => {
    searchInput.value = '';
    performSearch();
    clearSearchButton.style.display = 'none';
  });
});