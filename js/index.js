 window.onload = function () {
  window.scrollTo(0, 0);
};
 const navbar = document.querySelector('.hero-navbar');
  const navbarCollapse = document.getElementById('navbarNav');

  if (navbarCollapse && navbar) {
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      navbar.classList.add('menu-open');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
      navbar.classList.remove('menu-open');
    });
  }

  function handleNavbarState() {
    if (!navbar) return;
    const isScrolled = window.scrollY > 30;
    navbar.classList.toggle('scrolled', isScrolled);
  }

  window.addEventListener('scroll', handleNavbarState);
  handleNavbarState();
   const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
  if (scrollToTopBtn) {
    if (document.body.scrollTop <= 100 && document.documentElement.scrollTop <= 100) {
      scrollToTopBtn.style.display = "none";
    }
    window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    scrollToTopBtn.onclick = function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }
  // AOS animation init
  AOS.init({
    offset: 120,
    duration: 1000,
    easing: 'ease-in-out',
  });

