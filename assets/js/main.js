// Global language dictionary
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "A confident, transparent software engineer",
    hero_sub: "Designing highly polished experiences with glassy UI, smooth interactions, and a modern project mindset.",
    hero_contact: "Contact me",
    about_title: "About Me",
    about_desc: "I am a software developer focused on delightful user interfaces, robust architecture, and collaborative workflows. I plan projects from vision to delivery with an interactive, open-source mindset.",
    about_skill1: "Experience",
    about_skill2: "Performance",
    about_skill3: "Collaboration",
    projects_title: "My Projects",
    projects_sub: "A curated set of live web and mobile examples with glassy interfaces.",
    projects_view: "View",
    services_title: "Services",
    service_web: "Web Development",
    service_ui: "UI/UX Design",
    service_api: "APIs & Integration",
    contact_title: "Let's Talk",
    contact_sub: "Tell me about your project and I’ll respond with a plan.",
    footer_terms: "Terms",
    footer_privacy: "Privacy"
  },
  ar: {
    nav_home: "الصفحة الرئيسية",
    nav_about: "عنّي",
    nav_projects: "المشاريع",
    nav_services: "الخدمات",
    nav_contact: "تواصل",
    hero_title: "مطور برمجيات واثق وشفاف",
    hero_sub: "تصميم تجارب عالية الإتقان بواجهة زجاجية وتفاعل سلس وتوجّه حديث للمشروعات.",
    hero_contact: "تواصل معي",
    about_title: "عنّي",
    about_desc: "أنا مطور برمجيات أركّز على واجهات مستخدم مميزة، بنية قوية وتعاون فعّال. أخطط للمشروعات من الرؤية حتى التفيذ بنهج تفاعلي ومفتوح المصدر.",
    about_skill1: "الخبرة",
    about_skill2: "الأداء",
    about_skill3: "التعاون",
    projects_title: "مشاريعي",
    projects_sub: "مجموعة مختارة من أمثلة الويب والهاتف مع واجهات زجاجية.",
    projects_view: "عرض",
    services_title: "الخدمات",
    service_web: "تطوير الويب",
    service_ui: "تصميم UI/UX",
    service_api: "واجهات API والتكامل",
    contact_title: "تواصل",
    contact_sub: "أخبرني عن مشروعك وسأرد بخطة عملية.",
    footer_terms: "الشروط",
    footer_privacy: "سياسة الخصوصية"
  }
};

// Initial language setup
let currentLang = 'ar';
const root = document.documentElement;
const langSwitchBtn = document.getElementById('langSwitch');
const yearEl = document.getElementById('year');

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (typeof dict[key] !== 'undefined') {
      el.textContent = dict[key];
    }
  });
  // Update dir and lang for accessibility
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
    root.style.setProperty('--text', '#e9eefc');
    langSwitchBtn.textContent = 'EN';
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
    root.style.setProperty('--text', '#e9eafc');
    langSwitchBtn.textContent = 'AR';
  }
  // update aria labels if needed
  document.querySelectorAll('[aria-label]')
    .forEach(node => {
      // no-op, kept for future extension
    });
}

function switchLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  applyTranslations(currentLang);
}

// Initialize
(function init() {
  // set year
  const d = new Date();
  yearEl.textContent = String(d.getFullYear());
  // default to Arabic RTL
  applyTranslations('ar');
  // event listeners
  if (langSwitchBtn) {
    langSwitchBtn.addEventListener('click', switchLanguage);
  }
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isVisible = mainNav.style.display === 'block';
      mainNav.style.display = isVisible ? 'none' : 'block';
    });
  }
  // Smooth scrolling for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
