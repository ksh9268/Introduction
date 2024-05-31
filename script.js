// Get references to the navigation buttons and content sections
const navButtons = document.querySelectorAll('nav button');
const contentSections = document.querySelectorAll('main section');

// Function to show a specific content section
function showContent(sectionId) {
  contentSections.forEach(section => {
    section.style.display = 'none';
  });
  const targetSection = document.getElementById(sectionId);
  targetSection.style.display = 'block';
}

// Add event listeners to navigation buttons
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetSectionId = button.dataset.target;
    showContent(targetSectionId);
  });
});

// Show the initial content section (e.g., "about") on page load
showContent('about');