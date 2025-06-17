console.log("App.js is running!");

import { myCV } from './cv-data.js';


function renderPersonalInfo(persInfo) {
  document.getElementById('myName').textContent = persInfo.name;
  document.getElementById("subTitle").textContent = persInfo.title;
}

function renderExperience(experienceArray) {
    experienceArray.forEach((item) => {
      const experienceItem = document.createElement("div");
      experienceItem.className = "item";

      const experienceHeader = document.createElement("div");
      experienceHeader.className = "experience-header";

      const experienceDescription = document.createElement("div");
      experienceDescription.className = "experience-description";

      const role = document.createElement("h3");
      role.className = "role";
      role.textContent = `${item.title} @ ${item.company}`;

      const period = document.createElement("div");
      period.className = "period";
      period.textContent = `${item.duration}`;

      const description = document.createElement("ul");
      description.className = "description";

      const descriptionItems = item.description.map(test => {
        return `<li>${test}</li>`; 
      }).join("");

      const keywords = document.createElement("ul");
      description.className = "description";

      const keywordItems = item.keywords.map(keywordItem => {
        return `<li>${keywordItem}</li>`; 
      }).join("");


      description.innerHTML = descriptionItems;
      keywords.innerHTML = keywordItems;

      experienceHeader.appendChild(role);
      experienceHeader.appendChild(period);
      experienceDescription.appendChild(description);
      experienceDescription.appendChild(keywords);
      experienceItem.appendChild(experienceHeader);
      experienceItem.appendChild(experienceDescription);
      
      document.getElementById("experienceList").appendChild(experienceItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonalInfo(myCV.personalInfo);
  renderExperience(myCV.experience);
});