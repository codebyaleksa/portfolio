// Svetli/tamni režim
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const langSelect = document.getElementById('langSelect');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

// Provera i postavljanje teme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode' || savedTheme === 'light-mode') {
  body.classList.add(savedTheme);
} else {
  body.classList.add('dark-mode'); // podrazumevano dark mode
}
updateThemeToggle();
updateLangSelectStyle();

// Funkcija za update ikonice na dugmetu teme
function updateThemeToggle() {
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️'; // simbol za svetli mod
  } else {
    themeToggle.textContent = '🌙'; // simbol za tamni mod
  }
}

// Funkcija za podešavanje boje select polja jezika u zavisnosti od teme
function updateLangSelectStyle() {
  if (body.classList.contains('dark-mode')) {
    langSelect.style.backgroundColor = '#333';
    langSelect.style.color = '#fff';
  } else {
    langSelect.style.backgroundColor = '#fff';
    langSelect.style.color = '#000';
  }
}

// Toggle teme na klik dugmeta
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
  updateThemeToggle();
  updateLangSelectStyle();
});

// Prevod jezika
const translations = {
  sr: {
    'nav-home': 'Početna',
    'nav-about': 'O meni',
    'nav-services': 'Usluge',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Kontakt',
    'hero-title': 'Zdravo, ja sam Aleksa 👋',
    'hero-sub': 'Pravim moderne i funkcionalne web sajtove',
    'hero-btn': 'Zatraži ponudu',
    'about-title': 'O meni',
    'about-text': 'Ja sam Aleksa i bavim se razvojem web sajtova, dolazim iz Srbije. Izradjujem moderne, responzivne i brze web stranice koje su prilagođene kako desktop tako i mobilnim uređajima. Moj glavni fokus je na estetski privlačnom dizajnu koji ostavlja jak prvi utisak, ali i na tehničkoj funkcionalnosti koja korisnicima olakšava navigaciju i klijentima donosi konkretne rezultate. Radim prvenstveno sa malim i srednjim biznisima, pomažući im da se istaknu na internetu i izgrade snažno online prisustvo.',
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
    'service-7-desc': 'Dodajem specifične funkcionalnosti kao što su galerije, forme, login sistem, tamni i svetli režim itd.',
    'service-8-title': 'Višejezična podrška',
    'service-8-desc': 'Sajt može imati podršku za više jezika, kao što je tvoj sajt sada.',
    'portfolio-title': 'Portfolio',

    'view': 'Pogledaj',
    'contact-title': 'Kontakt',
    'send': 'Pošalji',
    'label-language': 'Izaberite jezik'
  },
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'hero-title': 'Hi, I\'m Aleksa 👋',
    'hero-sub': 'I build modern and functional websites',
    'hero-btn': 'Request a Quote',
    'about-title': 'About Me',
    'about-text': 'My name is Aleksa and I develop websites, i come from Serbia. I create modern, responsive and fast websites that are adapted to both desktop and mobile devices. My main focus is on aesthetically appealing design that leaves a strong first impression, but also on technical functionality that makes navigation easier for users and brings concrete results to clients. I work primarily with small and medium-sized businesses, helping them stand out on the Internet and build a strong online presence',
    'services-title': 'Services',
    'service-1-title': 'Website Development',
    'service-1-desc': 'Modern and custom website tailored to your business.',
    'service-2-title': 'Online Stores',
    'service-2-desc': 'eCommerce websites with shopping cart and payment.',
    'service-3-title': 'SEO Optimization',
    'service-3-desc': 'Improved visibility on Google search results.',
    'service-4-title': 'Maintenance',
    'service-4-desc': 'Ongoing updates and technical support.',
    'service-5-title': 'UI/UX Design',
    'service-5-desc': 'I create designs that are intuitive and user-friendly.',
    'service-6-title': 'Mobile Optimization',
    'service-6-desc': 'Your website will look perfect on all devices.',
    'service-7-title': 'Feature Integration',
    'service-7-desc': 'I add specific functionalities like galleries, forms, login systems, dark and white mode etc.',
    'service-8-title': 'Multilingual Support',
    'service-8-desc': 'Your site can support multiple languages, just like your site now.',
    'portfolio-title': 'Portfolio',

    'view': 'View',
    'contact-title': 'Contact',
    'send': 'Send',
    'label-language': 'Choose language'
  },
  de: {
    'nav-home': 'Startseite',
    'nav-about': 'Über mich',
    'nav-services': 'Dienstleistungen',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Kontakt',
    'hero-title': 'Hallo, ich bin Aleksa 👋',
    'hero-sub': 'Ich erstelle moderne und funktionale Webseiten',
    'hero-btn': 'Angebot anfordern',
    'about-title': 'Über mich',
    'about-text': 'Mein Name ist Aleksa und ich entwickle Websites, ich komme aus Serbien. Ich erstelle moderne, responsive und schnelle Websites, die sowohl für Desktop- als auch für Mobilgeräte geeignet sind. Mein Hauptaugenmerk liegt auf ästhetisch ansprechendem Design, das einen starken ersten Eindruck hinterlässt, aber auch auf technischer Funktionalität, die den Nutzern die Navigation erleichtert und den Kunden konkrete Ergebnisse liefert. Ich arbeite hauptsächlich mit kleinen und mittleren Unternehmen zusammen und helfe ihnen, sich im Internet hervorzuheben und eine starke Online-Präsenz aufzubauen.',
    'services-title': 'Dienstleistungen',
    'service-1-title': 'Webentwicklung',
    'service-1-desc': 'Moderne, maßgeschneiderte Website für dein Geschäft.',
    'service-2-title': 'Online-Shops',
    'service-2-desc': 'Shops mit Warenkorb und Zahlungssystem.',
    'service-3-title': 'SEO-Optimierung',
    'service-3-desc': 'Verbesserte Sichtbarkeit bei Google.',
    'service-4-title': 'Wartung',
    'service-4-desc': 'Regelmäßige Updates und technischer Support.',
    'service-5-title': 'UI/UX Design',
    'service-5-desc': 'Benutzerfreundliche und ansprechende Designs.',
    'service-6-title': 'Mobile Optimierung',
    'service-6-desc': 'Optimiert für alle Geräte.',
    'service-7-title': 'Funktionsintegration',
    'service-7-desc': 'Integration von Galerien, Formularen, Logins, dunkel- und hellmodus usw.',
    'service-8-title': 'Mehrsprachige Unterstützung',
    'service-8-desc': 'Ihre Website kann mehrere Sprachen unterstützen.',
    'portfolio-title': 'Portfolio',

    'view': 'Ansehen',
    'contact-title': 'Kontakt',
    'send': 'Senden',
    'label-language': 'Sprache auswählen'
  },
  fr: {
    'nav-home': 'Accueil',
    'nav-about': 'À propos',
    'nav-services': 'Services',
    'nav-portfolio': 'Portfolio',
    'nav-contact': 'Contact',
    'hero-title': 'Salut, je suis Aleksa 👋',
    'hero-sub': 'Je crée des sites web modernes et fonctionnels',
    'hero-btn': 'Demander un devis',
    'about-title': 'À propos de moi',
    'about-text': "Je m'appelle Aleksa et je développe des site, je viens de Serbie. Je crée des sites web modernes, réactifs et rapides, adaptés aux ordinateurs et aux appareils mobiles. Je me concentre principalement sur un design esthétique qui laisse une bonne première impression, mais aussi sur des fonctionnalités techniques qui simplifient la navigation et apportent des résultats concrets aux clients. Je travaille principalement avec des PME, que je soutiens pour se démarquer sur Internet et bâtir une présence en ligne forte.",
    'services-title': 'Services',
    'service-1-title': 'Création de site web',
    'service-1-desc': 'Un site web moderne et personnalisé pour votre entreprise.',
    'service-2-title': 'Boutiques en ligne',
    'service-2-desc': 'Sites de commerce avec panier et paiement.',
    'service-3-title': 'Optimisation SEO',
    'service-3-desc': 'Améliore la visibilité sur Google.',
    'service-4-title': 'Maintenance',
    'service-4-desc': 'Mises à jour régulières et support technique.',
    'service-5-title': 'Design UI/UX',
    'service-5-desc': 'Conception intuitive et facile à utiliser.',
    'service-6-title': 'Optimisation mobile',
    'service-6-desc': 'Votre site sera parfait sur tous les appareils.',
    'service-7-title': 'Intégration de fonctionnalités',
    'service-7-desc': 'Ajout de galeries, formulaires, systèmes de connexion, mode sombre et clair etc.',
    'service-8-title': 'Support multilingue',
    'service-8-desc': 'Votre site peut prendre en charge plusieurs langues.',
    'portfolio-title': 'Portfolio',
 
    'view': 'Voir',
    'contact-title': 'Contact',
    'send': 'Envoyer',
    'label-language': 'Choisir la langue'
  },
  es: {
    'nav-home': 'Inicio',
    'nav-about': 'Sobre mí',
    'nav-services': 'Servicios',
    'nav-portfolio': 'Portafolio',
    'nav-contact': 'Contacto',
    'hero-title': 'Hola, soy Aleksa 👋',
    'hero-sub': 'Creo sitios web modernos y funcionales',
    'hero-btn': 'Solicitar cotización',
    'about-title': 'Sobre mí',
    'about-text': 'Me llamo Aleksa y desarrollo sitios, yo vengo de Serbia. Creo sitios web modernos, responsivos y rápidos, adaptados tanto a computadoras de escritorio como a dispositivos móviles. Me enfoco principalmente en un diseño atractivo que cause una buena primera impresión, pero también en la funcionalidad técnica que facilita la navegación a los usuarios y ofrece resultados concretos a los clientes. Trabajo principalmente con pequeñas y medianas empresas, ayudándolas a destacar en internet y a construir una sólida presencia en línea.',
    'services-title': 'Servicios',
    'service-1-title': 'Desarrollo web',
    'service-1-desc': 'Sitio web moderno y personalizado para tu negocio.',
    'service-2-title': 'Tiendas online',
    'service-2-desc': 'E-commerce con carrito y pago.',
    'service-3-title': 'Optimización SEO',
    'service-3-desc': 'Mejora la visibilidad en Google.',
    'service-4-title': 'Mantenimiento',
    'service-4-desc': 'Actualizaciones regulares y soporte técnico.',
    'service-5-title': 'Diseño UI/UX',
    'service-5-desc': 'Diseño fácil e intuitivo.',
    'service-6-title': 'Optimización móvil',
    'service-6-desc': 'Tu sitio se verá perfecto en todos los dispositivos.',
    'service-7-title': 'Integración de funciones',
    'service-7-desc': 'Agrego galerías, formularios, login, modo oscuro y claro etc.',
    'service-8-title': 'Soporte multilingüe',
    'service-8-desc': 'Tu sitio puede tener varios idiomas como ahora.',
    'portfolio-title': 'Portafolio',
   
    'view': 'Ver',
    'contact-title': 'Contacto',
    'send': 'Enviar',
    'label-language': 'Elige el idioma'
  }
};


// Postavi jezik na osnovu lokalnog skladišta ili podrazumevano na srpski
const savedLang = localStorage.getItem('lang') || 'sr';
langSelect.value = savedLang;
applyLanguage(savedLang);

// Menjanje jezika
langSelect.addEventListener('change', () => {
  const selectedLang = langSelect.value;
  localStorage.setItem('lang', selectedLang);
  applyLanguage(selectedLang);
});

// Funkcija za primenu prevoda
function applyLanguage(lang) {
  const dict = translations[lang] || translations['sr'];
  elementsToTranslate.forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) el.textContent = dict[key];
  });
}

// Klik na logo reloaduje stranicu normalno
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
  // Da bi reload radio bez problema, samo refresh stranice
  location.reload();
});

// Inicijalizacija AOS animacija (ako koristiš AOS)
if (window.AOS) {
  AOS.init({
    duration: 800,
    once: true
  });
}

const form = document.querySelector('form');

form.addEventListener('submit', () => {
  // Dozvoljavamo normalan submit i samo odložimo reset forme
  setTimeout(() => {
    form.reset();
  }, 100); // mala pauza da submit stigne pre reseta
});

const menuToggle = document.getElementById("menuToggle"); // ispravljen selektor
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});





