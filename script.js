/* ═══════════════════════════════════════════════════════════════
   Gost Studio — Scripts
   ═══════════════════════════════════════════════════════════════ */

/* ─── Scroll reveal (IntersectionObserver) ───────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px 40px 0px' }
  );

  els.forEach((el) => observer.observe(el));
})();

/* ─── FAQ accordion ──────────────────────────────────────────── */
(function () {
  const items = document.querySelectorAll('.faq__item');

  items.forEach((item) => {
    const btn = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open');

      // Close all
      items.forEach((other) => {
        other.classList.remove('faq__item--open');
        other.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq__answer').style.maxHeight = null;
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* ─── Mobile nav toggle ──────────────────────────────────────── */
(function () {
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.nav__mobile');
  if (!burger || !mobile) return;

  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
  });

  // Close on link click
  mobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobile.classList.remove('open');
    });
  });
})();

/* ─── Smooth scroll for anchor links ─────────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href.includes('CALENDLY') || href.includes('LINKEDIN') || href.includes('FARHOON')) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
