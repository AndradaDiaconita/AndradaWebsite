/* Scroll reveal animation using IntersectionObserver */
(function () {
  const targets = document.querySelectorAll('section, .section, .card, .panel');

  // Add the base reveal class
  targets.forEach(el => el.classList.add('reveal'));

  // If browser doesn't support IntersectionObserver, just show everything
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => io.observe(el));
})();
