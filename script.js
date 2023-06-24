document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.querySelector('.content');
  const homeContentSection = document.querySelector('#homeContent');
  const projectsContentSection = document.querySelector('#projectsContent');

  // Hide projectsContentSection by default
  projectsContentSection.style.display = 'none';

  sidebar.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'A') {
      event.preventDefault();

      const contentType = clickedElement.getAttribute('data-content');
      showContent(contentType);
    }
  });

  function showContent(contentType) {
    const contentMap = {
      home: homeContentSection,
      projects: projectsContentSection,
    };

    Object.values(contentMap).forEach((section) => {
      section.style.display = 'none';
    });

    if (contentMap.hasOwnProperty(contentType)) {
      contentMap[contentType].style.display = 'block';
    }
  }
});
