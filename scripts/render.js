import { highlightText } from './search.js';

export function renderPersonalInfo(persInfo) {
  document.getElementById('myName').textContent = persInfo.name;
  document.getElementById("subTitle").textContent = persInfo.title;
}

export function renderExperience(experienceArray, highlightTerm) {
    experienceArray.forEach((item) => {
      const experienceItem = document.createElement("li");
      experienceItem.className = "item";

      const experienceHeader = document.createElement("div");
      experienceHeader.className = "experience-header";

      const experienceDescription = document.createElement("div");
      experienceDescription.className = "experience-description";

      const role = document.createElement("h3");
      role.className = "role";
      role.innerHTML = highlightText(`${item.title} @ ${item.company}`, highlightTerm);

      const period = document.createElement("div");
      period.className = "period";
      period.innerHTML = highlightText(`${item.duration}`, highlightTerm);

      const description = document.createElement("p");
      description.className = "description";
      description.innerHTML = highlightText(`${item.description}`, highlightTerm);

      const keywords = document.createElement("ul");
      keywords.className = "description-list";

      const keywordItems = item.keywords.map(keywordItem => {
        return `<li>${highlightText(keywordItem, highlightTerm)}</li>`; 
      }).join("");

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

export function renderEducation(educationArray, highlightTerm) {
  const educationList = document.getElementById("educationList");

  educationArray.forEach((item) => {
    const educationItem = document.createElement("li");
    educationItem.className = "item";

    const educationHeader = document.createElement("div");
    educationHeader.className = "education-header";

    const degree = document.createElement("h3");
    degree.className = "degree";
    degree.innerHTML = highlightText(`${item.degree}`, highlightTerm);

    const institution = document.createElement("div");
    institution.className = "institution";
    institution.innerHTML = highlightText(`${item.institution} - ${item.year}`, highlightTerm);
    
    const keywords = document.createElement("ul");
    keywords.className = "description-list";

    const keywordItems = item.keywords.map(keyword => {
      return `<li>${highlightText(keyword, highlightTerm)}</li>`;
    }).join("");

    keywords.innerHTML = keywordItems;

    educationHeader.appendChild(degree);
    educationHeader.appendChild(institution);
    educationItem.appendChild(educationHeader);
    educationItem.appendChild(keywords);

    educationList.appendChild(educationItem);
  });
}

export function renderSkills(skillsArray, highlightTerm) {
  const skillsList = document.getElementById("skillsList");

  skillsArray.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.className = "description-item";
    skillItem.classList.add('skill-tag');
    skillItem.setAttribute('data-skill', skill.name);

    const skillName = document.createElement("span");
    skillName.className = "skill-name";
    skillName.innerHTML = highlightText(`${skill.name} (${skill.type})`, highlightTerm);

    const skillLevel = document.createElement("span");
    skillLevel.className = `skill-level ${skill.level.toLowerCase()}`;
    skillLevel.innerHTML = highlightText(skill.level, highlightTerm);

    skillItem.appendChild(skillName);
    skillItem.appendChild(skillLevel);
    skillsList.appendChild(skillItem);
  });
}

export function renderProjects(projectsArray, highlightTerm) {
  const projectList = document.getElementById("projectList");

  projectsArray.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.className = "item";

    const projectName = document.createElement("h3");
    projectName.className = "project-name";
    projectName.innerHTML = highlightText(project.name, highlightTerm);

    const projectDescription = document.createElement("p");
    projectDescription.className = "project-description";
    projectDescription.innerHTML = highlightText(project.description, highlightTerm);

    const technologies = document.createElement("ul");
    technologies.className = "description-list";

    const technologyItems = project.technologies.map(tech => {
      return `<li>${highlightText(tech, highlightTerm)}</li>`;
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
    githubLink.textContent = "View GitHub";
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