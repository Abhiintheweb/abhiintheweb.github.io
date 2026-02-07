// Navbar functionality
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.navbar-menu');
  const navLinks = document.querySelectorAll('.navbar-menu .link');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('is-active');
      navMenu.classList.toggle('show');
    });
  }

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      navToggle.classList.remove('is-active');
      navMenu.classList.remove('show');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.custom-navbar') && navMenu.classList.contains('show')) {
      navToggle.classList.remove('is-active');
      navMenu.classList.remove('show');
    }
  });

  // Highlight active link on scroll
  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section, header').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // Update active link on scroll with debouncing
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateActiveLink, 100);
  });

  // Initial update
  updateActiveLink();
});
