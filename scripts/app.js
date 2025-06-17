console.log("App.js is running!");

import { myCV } from './cv-data.js';


function renderPersonalInfo(persInfo) {
  document.getElementById('myName').textContent = persInfo.name;
  document.getElementById("subTitle").textContent = persInfo.title;
}

function renderExperience(experienceArray) {
    experienceArray.forEach((item) => {
      let experienceItem = document.createElement("div");
      experienceItem.className = "item";

      let experienceHeader = document.createElement("div");
      experienceHeader.className = "experience-header";

      let experienceDescription = document.createElement("div");
      experienceDescription.className = "experience-description";



      let role = document.createElement("h3");
      role.className = "role";
      role.textContent = `${item.title} @ ${item.company}`;

      let period = document.createElement("div");
      period.className = "period";
      period.textContent = `${item.duration}`;

      let keywords = document.createElement("div");
      keywords.className = "keywords";
      keywords.textContent = `${item.keywords}`;

      let description = document.createElement("ul");
      description.className = "description";

      const descriptionItems = item.description.map(test => {
        return `<li>${test}</li>`; 
      });

      console.log(descriptionItems);

      description.innerHTML = descriptionItems;

      experienceHeader.appendChild(role);
      experienceHeader.appendChild(period);
      experienceDescription.appendChild(description);
      experienceItem.appendChild(experienceHeader);
      experienceItem.appendChild(experienceDescription);
      document.getElementById("experienceList").appendChild(experienceItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonalInfo(myCV.personalInfo);
  renderExperience(myCV.experience);
});