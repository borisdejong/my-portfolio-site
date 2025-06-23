console.log("App.js is running!");

import { myCV } from './cv-data.js';


function renderPersonalInfo(persInfo) {
  document.getElementById('myName').textContent = persInfo.name;
  document.getElementById("subTitle").textContent = persInfo.title;
}

function renderExperience(experienceArray) {
    experienceArray.forEach((item) => {
      const experienceItem = document.createElement("li");
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
      role.textContent = `${item.title} @ ${item.company}`;

      const description = document.createElement("p");
      description.className = "description";
      description.textContent = item.description;

      const keywords = document.createElement("ul");
      keywords.className = "description-list";

      const keywordItems = item.keywords.map(keywordItem => {
        return `<li>${keywordItem}</li>`; 
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

function renderEducation(educationArray) {
  const educationList = document.getElementById("educationList");

  educationArray.forEach((item) => {
    const educationItem = document.createElement("li");
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
    keywords.className = "description-list";

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
    skillItem.className = "description-item";
    skillItem.setAttribute('data-skill', skill.name);

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
    const projectItem = document.createElement("li");
    projectItem.className = "item";

    const projectName = document.createElement("h3");
    projectName.className = "project-name";
    projectName.textContent = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.className = "project-description";
    projectDescription.textContent = project.description;

    const technologies = document.createElement("ul");
    technologies.className = "description-list";

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

function highlightText(text, term) {
    if (!term || typeof text !== 'string') return text;

    const regex = new RegExp(`(${term})`, 'gi');

    return text.replace(regex, '<span class="highlight">$&</span>'); // $& inserts the matched text itself
}

async function performSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  document.getElementById('experienceList').innerHTML = '';
  document.getElementById('educationList').innerHTML = '';
  document.getElementById('skillsList').innerHTML = '';

  // Display clearSearchButton only if something is entered in the search input field
  if (searchTerm.length > 0) {
    clearSearchButton.style.display = 'inline-block';
  } else {
    clearSearchButton.style.display = 'none';
  }

  let totalMatches = 0;

  const filteredExperience = myCV.experience.filter(job => {
      // Combine all relevant searchable text from the job object into one lowercase string
      const searchableText = [
          job.title,
          job.company,
          job.duration,
          job.description, // Use spread to flatten description array
          ...(job.keywords || [])     // Use spread for keywords, handle if missing
      ].join(' ').toLowerCase(); // Join all parts with a space

      return searchableText.includes(searchTerm);
  });

  const filteredEducation = myCV.education.filter(educationItem => {
      // Combine all relevant searchable text from the job object into one lowercase string
      const searchableTextEducation = [
          educationItem.degree,
          educationItem.institution,
          educationItem.year,
          ...(educationItem.keywords || [])     // Use spread for keywords, handle if missing
      ].join(' ').toLowerCase(); // Join all parts with a space

      return searchableTextEducation.includes(searchTerm);
  });

  if (filteredExperience.length > 0) {
      totalMatches += filteredExperience.length;
      // Call your rendering function for experience, passing filtered data and searchTerm for highlighting
      renderExperience(filteredExperience, searchTerm);
      document.getElementById('experience').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('experience').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      renderExperience(myCV.experience, '');
      document.getElementById('experience').style.display = 'block';
  }

  if (filteredEducation.length > 0) {
      totalMatches += filteredEducation.length;
      // Call your rendering function for experience, passing filtered data and searchTerm for highlighting
      renderEducation(filteredEducation, searchTerm);
      document.getElementById('study').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('study').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      renderEducation(myCV.education, '');
      document.getElementById('study').style.display = 'block';
  }

}

document.addEventListener('DOMContentLoaded', () => {
  renderPersonalInfo(myCV.personalInfo);
  renderExperience(myCV.experience);
  renderEducation(myCV.education);
  renderProjects(myCV.projects);
  renderSkills(myCV.skills);

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");
  const noResultsMessage = document.getElementById("noResultsMessage");

  searchButton.addEventListener("click", performSearch);
  searchInput.addEventListener("input", performSearch);
  
  clearSearchButton.addEventListener("click", () => {
      searchInput.value = '';
      // Pass the necessary arguments to performSearch if it expects them
      // As per our structured guide:
      performSearch(searchInput.value, noResultsMessage, clearSearchButton, searchInput);
      clearSearchButton.style.display = 'none'; // Also remember to hide the button
  });

});