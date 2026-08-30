/**
 * Liberty Hi-Tech - Main Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroVideoControls();
  initThemeToggle();
  initVisionMissionTabs();
  renderServices();
  initServiceFilters();
  initFaqAccordion();
  initContactForm();
  initBackToTop();
  initModals();
});

/* ==========================================================================
   1. NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileBtn) mobileBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   2. HERO STARTING VIDEO (welcome-02.mp4) AUTOPLAY
   ========================================================================== */
function initHeroVideoControls() {
  const heroVideo = document.getElementById('heroBgVideo');
  if (!heroVideo) return;

  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.play().catch(e => {
    console.log('Autoplay muted triggered', e);
  });
}

/* ==========================================================================
   3. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('lht_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('lht_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!toggleBtn) return;
    if (theme === 'dark') {
      toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
      toggleBtn.title = "Switch to Light Mode";
    } else {
      toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
      toggleBtn.title = "Switch to Dark Mode";
    }
  }
}

/* ==========================================================================
   4. VISION & MISSION TABS
   ========================================================================== */
function initVisionMissionTabs() {
  const tabBtns = document.querySelectorAll('.tab-nav-btn');
  const panes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = 'pane-' + btn.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

/* ==========================================================================
   5. 8 CORE SERVICES RENDERING & FILTERING
   ========================================================================== */
function renderServices(filter = 'all') {
  const grid = document.getElementById('servicesGrid');
  if (!grid || !COMPANY_DATA || !COMPANY_DATA.services) return;

  grid.innerHTML = '';

  const techIds = ['software-dev', 'web-services'];
  const secIds = ['security-surveillance', 'smart-campus'];
  const infraIds = ['aviation-services', 'construction-solutions'];
  const commIds = ['product-trading', 'manpower-dev'];

  const filtered = COMPANY_DATA.services.filter(s => {
    if (filter === 'all') return true;
    if (filter === 'tech') return techIds.includes(s.id);
    if (filter === 'security') return secIds.includes(s.id);
    if (filter === 'infrastructure') return infraIds.includes(s.id);
    if (filter === 'commerce') return commIds.includes(s.id);
    return true;
  });

  filtered.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-id', service.id);

    const featureItems = service.features.slice(0, 3).map(f => `
      <li class="service-feature-item">
        <i data-lucide="check-circle" style="width: 16px; height: 16px; color: var(--primary);"></i>
        <span>${f}</span>
      </li>
    `).join('');

    card.innerHTML = `
      <div class="service-card-media" onclick="openServiceModal('${service.id}')" style="cursor: pointer;">
        <img src="${service.image}" alt="${service.title}" class="service-card-img" loading="lazy">
        <span class="service-badge-pill">${service.badge}</span>
        <span class="service-index-number">${service.index}</span>
        <div class="service-play-hint">
          <div class="play-hint-circle">
            <i data-lucide="play" style="fill: #ffffff;"></i>
          </div>
        </div>
      </div>
      <div class="service-card-body">
        <h3 class="service-title">
          <span>${service.title}</span>
          <i data-lucide="${service.icon}" style="color: var(--primary-light); width: 22px; height: 22px;"></i>
        </h3>
        <p class="service-short-desc">${service.shortDesc}</p>
        <ul class="service-features-list">
          ${featureItems}
        </ul>
        <div class="service-card-footer">
          <span class="explore-link" onclick="openServiceModal('${service.id}')">
            Explore Capabilities <i data-lucide="arrow-right"></i>
          </span>
          <button class="btn btn-outline btn-sm" onclick="prefillContactForSector('${service.title}')">
            Inquire
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

function initServiceFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderServices(filter);
    });
  });
}

/* ==========================================================================
   8. SERVICE MODAL & DEEP DIVE
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('serviceModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const closeBtn2 = document.getElementById('modalCloseBtnSecondary');
  const inquireBtn = document.getElementById('modalInquireBtn');

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      const video = document.getElementById('modalVideo');
      if (video) video.pause();
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeBtn2) closeBtn2.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (inquireBtn) {
    inquireBtn.addEventListener('click', () => {
      const currentTitle = document.getElementById('modalTitle').textContent;
      closeModal();
      prefillContactForSector(currentTitle);
    });
  }
}

window.openServiceModal = function(serviceId) {
  const service = COMPANY_DATA.services.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('serviceModal');
  const video = document.getElementById('modalVideo');
  const badge = document.getElementById('modalBadge');
  const indexEl = document.getElementById('modalIndex');
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');
  const featuresList = document.getElementById('modalFeaturesList');
  const highlightsGrid = document.getElementById('modalHighlightsGrid');

  if (video) {
    video.src = service.video;
    video.load();
    video.play().catch(() => {});
  }

  if (badge) badge.textContent = service.badge;
  if (indexEl) indexEl.textContent = 'Sector ' + service.index;
  if (title) title.textContent = service.title;
  if (desc) desc.textContent = service.fullDesc;

  if (featuresList) {
    featuresList.innerHTML = service.features.map(f => `
      <li class="mission-item">
        <span class="mission-check-icon"><i data-lucide="check"></i></span>
        <span>${f}</span>
      </li>
    `).join('');
  }

  if (highlightsGrid) {
    highlightsGrid.innerHTML = service.highlights.map(h => `
      <div class="modal-spec-card">
        <div class="modal-spec-lbl">${h.label}</div>
        <div class="modal-spec-val">${h.val}</div>
      </div>
    `).join('');
  }

  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (window.lucide) lucide.createIcons();
};

window.prefillContactForSector = function(sectorTitle) {
  const contactSection = document.getElementById('contact');
  const sectorSelect = document.getElementById('contactSector');
  const msgArea = document.getElementById('contactMessage');

  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (sectorSelect) {
    for (let i = 0; i < sectorSelect.options.length; i++) {
      if (sectorSelect.options[i].text.toLowerCase().includes(sectorTitle.toLowerCase())) {
        sectorSelect.selectedIndex = i;
        break;
      }
    }
  }

  if (msgArea) {
    msgArea.value = `Hello Liberty Hi-Tech,\n\nI would like to inquire regarding ${sectorTitle} and discuss deployment specifications for our organization.`;
  }

  
};

/* ==========================================================================
   9. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById('faqAccordion');
  if (!container || !COMPANY_DATA || !COMPANY_DATA.faqs) return;

  container.innerHTML = '';

  COMPANY_DATA.faqs.forEach((faq, index) => {
    const item = document.createElement('div');
    item.className = 'faq-item' + (index === 0 ? ' active' : '');

    item.innerHTML = `
      <button class="faq-question">
        <span>${faq.q}</span>
        <i data-lucide="chevron-down" class="faq-icon"></i>
      </button>
      <div class="faq-answer">
        <p>${faq.a}</p>
      </div>
    `;

    item.querySelector('.faq-question').addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });

    container.appendChild(item);
  });

  if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   10. CONTACT FORM & NEWSLETTER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      const sector = document.getElementById('contactSector').value;

      showToast(`✅ Thank you, ${name}! Your inquiry for ${sector} has been received. Our team will contact you within 24 hours.`);
      form.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('📬 Thank you for subscribing to the Liberty Hi-Tech Bulletin!');
      newsletterForm.reset();
    });
  }
}

/* ==========================================================================
   11. BACK TO TOP & TOAST NOTIFICATIONS
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  // Clear any existing toasts so they never stack
  container.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = '<span>' + message + '</span>';

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
