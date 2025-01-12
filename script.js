// Change header background on scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#004d40';
  } else {
    header.style.backgroundColor = '#00796b';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.style.opacity = '0';
  setTimeout(() => {
    main.style.transition = 'opacity 2s ease';
    main.style.opacity = '1';
  }, 100);

  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('nav ul');
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show-menu');
  });

  // Load common footer
  fetch("footer.html")
    .then(response => response.text())
    .then(html => {
        const footerPlaceholder = document.getElementById("footer-placeholder");
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = html;
        }
    });
});
