// Small interactive behavior for the single-page site
document.addEventListener('DOMContentLoaded', () => {
  // DOM refs
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const filters = Array.from(document.querySelectorAll('.filter'));
  const servicesGrid = document.getElementById('servicesGrid');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const counters = document.querySelectorAll('.counter');
  const yearEl = document.getElementById('year');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const demoFill = document.getElementById('demoFill');

  // set year
  yearEl.textContent = new Date().getFullYear();

  // mobile nav toggle
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? 'none' : 'block';
  });

  // service filters
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterServices(filter);
    });
  });

  function filterServices(filter) {
    const cards = servicesGrid.querySelectorAll('.service-card');
    cards.forEach(c => {
      const cat = c.dataset.category || '';
      if (filter === 'all' || cat.includes(filter)) {
        c.style.display = '';
      } else {
        c.style.display = 'none';
      }
    });
  }

  // portfolio modal
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter') openModal(item); });
  });

  function openModal(item) {
    const title = item.dataset.title || '';
    const desc = item.dataset.desc || '';
    const img = item.querySelector('img')?.src || '';
    modalContent.innerHTML = `
      <h3 style="color:var(--txt); margin-top:0">${escapeHtml(title)}</h3>
      <p style="color:var(--muted)">${escapeHtml(desc)}</p>
      <img style="width:100%; border-radius:8px; margin-top:.6rem" src="${img}" alt="${escapeHtml(title)}" />
      <p style="color:var(--muted); margin-top:.6rem">Interested in something like this? <a href="#contact" style="color:var(--accent)">Get in touch</a>.</p>
    `;
    modal.setAttribute('aria-hidden', 'false');
    modal.querySelector('.modal-close')?.focus();
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    modalContent.innerHTML = '';
  }

  // counters (animate once on view)
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.disconnect();
      }
    });
  }, {threshold: .35});
  if (counters.length) counterObserver.observe(counters[0]);

  function animateCounters() {
    counters.forEach(el => {
      const target = Number(el.dataset.target) || 0;
      let start = 0;
      const duration = 1200;
      const step = (timestamp) => {
        start += Math.ceil(target / (duration / 16));
        if (start >= target) {
          el.textContent = target;
        } else {
          el.textContent = start;
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  }

  // contact form (mock submission)
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = '';
    // simple validation
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const services = contactForm.services.value;
    if (!name || !email || !services) {
      formStatus.textContent = 'Please fill name, email and pick a service.';
      formStatus.style.color = '#ffb4b4';
      return;
    }
    // fake submit (no backend) — show success UI
    formStatus.style.color = 'var(--accent-2)';
    formStatus.textContent = 'Sending brief…';
    // small UX delay
    setTimeout(() => {
      formStatus.textContent = `Thanks ${name.split(' ')[0]} — I received your brief. I will email you at ${email}.`;
      contactForm.reset();
    }, 900);
  });

  // demo fill button
  demoFill.addEventListener('click', () => {
    contactForm.name.value = 'Aminah Mustafa';
    contactForm.email.value = 'aminah@example.com';
    contactForm.company.value = 'Sukari Foods';
    contactForm.services.value = 'Branding';
    contactForm.message.value = 'We need a full brand and 1-page site. Budget ~500 USD. Launch in 6 weeks.';
    formStatus.textContent = '';
  });

  // helper: escape html (very small)
  function escapeHtml(s){ return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

});
