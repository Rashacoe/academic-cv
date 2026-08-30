// Interactive Client Logic for Prof. Dr. Rasha Abdulaziz Bin-Thalab Academic Website

let isInitialized = false;

export function initAcademicInteractions() {
  if (isInitialized) return;
  isInitialized = true;

  // 1. Language Toggle (Full English / Arabic System)
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const searchInput = document.getElementById('pub-search-input') as HTMLInputElement | null;

  let currentLang = localStorage.getItem('site_lang') || 'en';

  function updateLangUI(lang: string) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    const htmlEl = document.documentElement;

    if (lang === 'ar') {
      htmlEl.setAttribute('lang', 'ar');
      htmlEl.setAttribute('dir', 'rtl');
      if (searchInput) {
        const arPlaceholder = searchInput.getAttribute('data-placeholder-ar');
        if (arPlaceholder) searchInput.placeholder = arPlaceholder;
      }
    } else {
      htmlEl.setAttribute('lang', 'en');
      htmlEl.setAttribute('dir', 'ltr');
      if (searchInput) {
        const enPlaceholder = searchInput.getAttribute('data-placeholder-en');
        if (enPlaceholder) searchInput.placeholder = enPlaceholder;
      }
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      updateLangUI(nextLang);
    });
  }
  updateLangUI(currentLang);

  // 2. Theme Toggle (Dark / Light)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  function applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      if (sunIcon) sunIcon.classList.remove('hidden');
      if (moonIcon) moonIcon.classList.add('hidden');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        themeToggleBtn.setAttribute('title', 'Switch to light mode');
      }
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      if (sunIcon) sunIcon.classList.add('hidden');
      if (moonIcon) moonIcon.classList.remove('hidden');
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeToggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      applyTheme(!isCurrentlyDark);
    });
  }

  // Initial sync with DOM state
  const isInitialDark = document.documentElement.classList.contains('dark');
  applyTheme(isInitialDark);

  // 3. Mobile Navigation Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 4. Publications Category Filtering & Live Search
  const tabButtons = document.querySelectorAll<HTMLButtonElement>('.pub-tab-btn');
  const pubItems = document.querySelectorAll<HTMLElement>('.publication-item');
  const noResultsFeedback = document.getElementById('no-pub-results');

  let activeFilter = 'all';
  let searchQuery = '';

  function filterPublications() {
    let visibleCount = 0;

    pubItems.forEach((item) => {
      const type = item.getAttribute('data-type') || '';
      const title = item.getAttribute('data-title') || '';
      const authors = item.getAttribute('data-authors') || '';
      const venue = item.getAttribute('data-venue') || '';
      const year = item.getAttribute('data-year') || '';

      const matchesType = activeFilter === 'all' || type === activeFilter;
      const combinedText = `${title} ${authors} ${venue} ${year}`.toLowerCase();
      const matchesSearch = !searchQuery || combinedText.includes(searchQuery.toLowerCase());

      if (matchesType && matchesSearch) {
        item.style.display = 'block';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (noResultsFeedback) {
      if (visibleCount === 0) {
        noResultsFeedback.classList.remove('hidden');
      } else {
        noResultsFeedback.classList.add('hidden');
      }
    }
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => {
        b.classList.remove('active-tab', 'bg-academic-navy-900', 'text-white', 'dark:bg-slate-800');
        b.classList.add('text-slate-600', 'dark:text-slate-400');
      });
      btn.classList.add('active-tab', 'bg-academic-navy-900', 'text-white', 'dark:bg-slate-800');
      btn.classList.remove('text-slate-600', 'dark:text-slate-400');

      activeFilter = btn.getAttribute('data-pub-filter') || 'all';
      filterPublications();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = (e.target as HTMLInputElement).value.trim();
      filterPublications();
    });
  }
}

// Auto-initialize on DOM load
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAcademicInteractions());
  } else {
    initAcademicInteractions();
  }
}
