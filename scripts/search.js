import { myCV } from './cv-data.js';
import * as render from './render.js'; // Imports renderPersonalInfo, render.renderExperience, etc.

export function highlightText(text, term) { // Takes as input two strings and checks whether text contains terms. If so, add highlight span to term within text and return updated text
    if (!term || typeof text !== 'string') {
      return text;
    }
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span class="highlight">$&</span>'); // $& inserts the matched text itself
}

export async function performSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  document.getElementById('experienceList').innerHTML = '';
  document.getElementById('educationList').innerHTML = '';
  document.getElementById('projectList').innerHTML = '';
  document.getElementById('skillsList').innerHTML = '';
  noResultsMessage.style.display = 'none';

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
  if (filteredExperience.length > 0) {
      totalMatches += filteredExperience.length;
      // Call your rendering function for experience, passing filtered data and searchTerm for highlighting
      render.renderExperience(filteredExperience, searchTerm);
      document.getElementById('experience').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('experience').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      render.renderExperience(myCV.experience, '');
      document.getElementById('experience').style.display = 'block';
  }


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
  if (filteredEducation.length > 0) {
      totalMatches += filteredEducation.length;
      // Call your rendering function for experience, passing filtered data and searchTerm for highlighting
      render.renderEducation(filteredEducation, searchTerm);
      document.getElementById('study').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('study').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      render.renderEducation(myCV.education, '');
      document.getElementById('study').style.display = 'block';
  }


  const filteredProjects = myCV.projects.filter(projectItem => {
      // Combine all relevant searchable text from the job object into one lowercase string
      const searchableTextProjects = [
          projectItem.name,
          projectItem.description,
          ...(projectItem.technologies || []),
          projectItem.link,
          projectItem.githubLink,
          ...(projectItem.keywords || [])
      ].join(' ').toLowerCase(); // Join all parts with a space

      return searchableTextProjects.includes(searchTerm);
  });
  if (filteredProjects.length > 0) {
      totalMatches += filteredProjects.length;
      // Call your rendering function for experience, passing filtered data and searchTerm for highlighting
      render.renderProjects(filteredProjects, searchTerm);
      document.getElementById('projects').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('projects').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      render.renderProjects(myCV.projects, '');
      document.getElementById('projects').style.display = 'block';
  }


  const filteredSkills = myCV.skills.filter(skillItem => {
    // Combine all relevant searchable text from the job object into one lowercase string
    const searchableTextSkills = [
        skillItem.name,
        skillItem.level
    ].join(' ').toLowerCase(); // Join all parts with a space

    return searchableTextSkills.includes(searchTerm);
  });
  if (filteredSkills.length > 0) {
      totalMatches += filteredSkills.length;
      render.renderSkills(filteredSkills, searchTerm);
      document.getElementById('skills').style.display = 'block'; // Ensure section is visible
  } else if (searchTerm) {
      document.getElementById('skills').style.display = 'none'; // Hide if no matches and there's a search term
  } else {
      // If no search term, always render the full list
      render.renderSkills(myCV.skills, '');
      document.getElementById('skills').style.display = 'block';
  }

  if (searchTerm && totalMatches === 0) {
    noResultsMessage.style.display = 'block';
  }

}