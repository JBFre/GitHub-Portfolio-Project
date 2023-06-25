document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.sidebar');
  const homeContentSection = document.querySelector('#homeContent');
  const projectsContentSection = document.querySelector('#projectsContent');
  const contentSections = [homeContentSection, projectsContentSection];

  projectsContentSection.style.display = 'none';

  sidebar.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'A') {
      event.preventDefault();

      const contentType = clickedElement.getAttribute('data-content');
      showContent(contentType);

      const url = clickedElement.href;
      const pageTitle = document.title;
      history.pushState({ contentType: contentType }, pageTitle, url);
    }
  });

  function showContent(contentType) {
    const contentMap = {
      home: homeContentSection,
      projects: projectsContentSection,
    };

    contentSections.forEach((section) => {
      section.style.display = 'none';
    });

    if (contentMap.hasOwnProperty(contentType)) {
      contentMap[contentType].style.display = 'block';
      if (contentType === 'home') {
        window.scrollTo(0, 0);
      }
    }
  }

  window.addEventListener('popstate', function(event) {
    const contentType = event.state ? event.state.contentType : 'home';
    showContent(contentType);
  });

  window.addEventListener('mousemove', function(event) {
    if (event.clientX <= 50) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  });

  // Scroll to the top of the page on page load
  window.addEventListener('load', function() {
    window.scrollTo(0, 0);
  });
});
