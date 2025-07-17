document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('overlay');
  const themeToggle = document.getElementById('themeToggle');
  const langSelects = document.querySelectorAll('#langSelect');

  // Otvori/zatvori mobilni meni
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.style.display = navLinks.classList.contains('active') ? 'none' : 'block';
  });

  // Zatvori meni klikom van menija (overlay)
  overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.style.display = 'block';
  });

  // Zatvori meni kada klikneš na neki link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      overlay.classList.remove('active');
      menuToggle.style.display = 'block';
    });
  });

  // Tema: tamna/svetla
  function setTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Učitaj temu iz localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  }

  // Prevod jezika
  const translations = {
    sr: {
      'hero-title': 'Zdravo, ja sam Aleksa 👋',
      'hero-sub': 'Pravim moderne i funkcionalne web sajtove',
      'hero-btn': 'Zatraži ponudu',
      'about-title': 'O meni',
      'about-text': 'Ja sam Aleksa i bavim se razvojem web sajtova, sa sedištem u Srbiji...',
      'services-title': 'Usluge',
      'service-1-title': 'Izrada sajta',
      'service-1-desc': 'Pravim moderni i prilagođeni web sajt za tvoj biznis.',
      'service-2-title': 'Online prodavnice',
      'service-2-desc': 'Postavljanje i dizajn web prodavnica sa korpom i plaćanjem.',
      'service-3-title': 'SEO optimizacija',
      'service-3-desc': 'Optimizujem sajt da bude vidljiv na Google pretragama.',
      'service-4-title': 'Održavanje',
      'service-4-desc': 'Redovno ažuriranje i tehnička podrška za sajt.',
      'service-5-title': 'UI/UX dizajn',
      'service-5-desc': 'Kreiram dizajn koji korisnicima olakšava korišćenje sajta.',
      'service-6-title': 'Mobilna optimizacija',
      'service-6-desc': 'Vaš sajt će izgledati savršeno na svim uređajima.',
      'service-7-title': 'Integracija funkcionalnosti',
      'service-7-desc': 'Dodajem specifične funkcionalnosti kao što su galerije, forme...',
      'service-8-title': 'Višejezična podrška',
      'service-8-desc': 'Sajt može imati podršku za više jezika...',
      'portfolio-title': 'Portfolio',
      'view': 'Pogledaj',
      'contact-title': 'Kontakt',
      'send': 'Pošalji',
    },
    en: {
      'hero-title': 'Hi, I\'m Aleksa 👋',
      'hero-sub': 'I build modern and functional websites',
      'hero-btn': 'Get a quote',
      'about-title': 'About me',
      'about-text': 'I\'m Aleksa, a web developer based in Serbia...',
      'services-title': 'Services',
      'service-1-title': 'Website Development',
      'service-1-desc': 'I build a modern and custom site for your business.',
      'service-2-title': 'Online Stores',
      'service-2-desc': 'Designing and setting up e-commerce websites.',
      'service-3-title': 'SEO Optimization',
      'service-3-desc': 'Optimizing your site to rank well on Google.',
      'service-4-title': 'Maintenance',
      'service-4-desc': 'Regular updates and technical support.',
      'service-5-title': 'UI/UX Design',
      'service-5-desc': 'Design focused on user experience.',
      'service-6-title': 'Mobile Optimization',
      'service-6-desc': 'Responsive design for all devices.',
      'service-7-title': 'Feature Integration',
      'service-7-desc': 'Adding custom features like galleries, forms...',
      'service-8-title': 'Multilingual Support',
      'service-8-desc': 'Your site can support multiple languages...',
      'portfolio-title': 'Portfolio',
      'view': 'View',
      'contact-title': 'Contact',
      'send': 'Send',
    },
  };

  langSelects.forEach(select => {
    select.addEventListener('change', e => {
      const lang = e.target.value;
      const data = translations[lang];
      document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (data[key]) el.textContent = data[key];
      });
    });
  });
});
