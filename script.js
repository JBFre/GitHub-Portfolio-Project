document.addEventListener('DOMContentLoaded', function() {

  const sidebar = document.querySelector('.sidebar');
  const homeContentSection = document.querySelector('#homeContent');
  const projectsContentSection = document.querySelector('#projectsContent');

  const contentMap = {
    home: homeContentSection,
    projects: projectsContentSection,
  };

  let currentContentType = location.hash.substr(1) || 'home';

  if (contentMap.hasOwnProperty(currentContentType)) {
    contentMap[currentContentType].classList.add('active');
  }

  sidebar.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'A') {
      event.preventDefault();

      const contentType = clickedElement.getAttribute('data-content');

      Object.values(contentMap).forEach(content => {
        content.classList.remove('active');
        content.scrollTop = 0; 
      });

      contentMap[contentType].classList.add('active');
      location.hash = contentType;
    }
  });

  window.addEventListener('popstate', function(event) {
    const contentType = location.hash.substr(1) || 'home';

    Object.values(contentMap).forEach(content => {
      content.classList.remove('active');
      content.scrollTop = 0; 
    });

    if (contentMap.hasOwnProperty(contentType)) {
      contentMap[contentType].classList.add('active');
    }
  });
});
