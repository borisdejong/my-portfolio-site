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

function renderEducation(educationArray) {
  const educationList = document.getElementById("educationList");

  educationArray.forEach((item) => {
    const educationItem = document.createElement("div");
    educationItem.className = "item";

    const educationHeader = document.createElement("div");
    educationHeader.className = "education-header";

    const degree = document.createElement("h3");
    degree.className = "degree";
    degree.textContent = `${item.degree}`;

    const institution = document.createElement("div");
    institution.className = "institution";
    institution.textContent = `${item.institution} - ${item.year}`;
    
    const keywords = document.createElement("ul");
    keywords.className = "keywords";

    const keywordItems = item.keywords.map(keyword => {
      return `<li>${keyword}</li>`;
    }).join("");

    keywords.innerHTML = keywordItems;

    educationHeader.appendChild(degree);
    educationHeader.appendChild(institution);
    educationItem.appendChild(educationHeader);
    educationItem.appendChild(keywords);

    educationList.appendChild(educationItem);
  });
}

function renderSkills(skillsArray) {
  const skillsList = document.getElementById("skillsList");

  skillsArray.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.className = "skill-item";

    const skillName = document.createElement("span");
    skillName.className = "skill-name";
    skillName.textContent = `${skill.name} (${skill.type})`;

    const skillLevel = document.createElement("span");
    skillLevel.className = `skill-level ${skill.level.toLowerCase()}`;
    skillLevel.textContent = skill.level;

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);
    skillsList.appendChild(skillItem);
  });
}

function renderProjects(projectsArray) {
  const projectList = document.getElementById("projectList");

  projectsArray.forEach((project) => {
    const projectItem = document.createElement("div");
    projectItem.className = "item";

    const projectName = document.createElement("h3");
    projectName.className = "project-name";
    projectName.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.className = "project-description";
    projectDescription.textContent = project.description;

    const technologies = document.createElement("ul");
    technologies.className = "technologies";

    const technologyItems = project.technologies.map(tech => {
      return `<li>${tech}</li>`;
    }).join("");

    technologies.innerHTML = technologyItems;

    const projectLinks = document.createElement("div");
    projectLinks.className = "project-links";
    
    const liveLink = document.createElement("a");
    liveLink.href = project.link;
    liveLink.textContent = "View Project";
    liveLink.target = "_blank"; // Open in new tab

    const githubLink = document.createElement("a");
    githubLink.href = project.githubLink;
    githubLink.textContent = "GitHub";
    githubLink.target = "_blank"; // Open in new tab

    projectLinks.appendChild(liveLink);
    projectLinks.appendChild(githubLink);

    projectItem.appendChild(projectName);
    projectItem.appendChild(projectDescription);
    projectItem.appendChild(technologies);
    projectItem.appendChild(projectLinks);
    
    projectList.appendChild(projectItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonalInfo(myCV.personalInfo);
  renderExperience(myCV.experience);
  renderEducation(myCV.education);
  renderProjects(myCV.projects);
  renderSkills(myCV.skills);
});