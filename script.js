const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const mainContentSection = document.querySelector('#homeContent');
const bioContentSection = document.querySelector('#bioContent');
const linkedinContentSection = document.querySelector('#linkedinContent');
const projectsContentSection = document.querySelector('#projectsContent');
const resumeContentSection = document.querySelector('#resumeContent');

sidebar.addEventListener('click', handleSidebarClick);

function handleSidebarClick(event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === 'A') {
    event.preventDefault();

    const contentType = clickedElement.getAttribute('data-content');
    showContent(contentType);
  }
}

function showContent(contentType) {
  const contentMap = {
    home: mainContentSection,
    bio: bioContentSection,
    linkedin: linkedinContentSection,
    projects: projectsContentSection,
    resume: resumeContentSection,
  };

  Object.values(contentMap).forEach((section) => {
    section.style.display = 'none';
  });

  if (contentMap.hasOwnProperty(contentType)) {
    contentMap[contentType].style.display = 'block';
  }
}
