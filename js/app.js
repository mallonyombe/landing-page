const translations = {
  en: {
    skip:'Skip to content', welcome:'Welcome to EL-ROI’S SPA', navServices:'Services', navVisit:'Visit', navContact:'Contact', book:'Book',
    eyebrow:'Beauty & Wellness', heroTitle:'Take a moment.<br><em>Make it yours.</em>',
    heroIntro:'Beauty, wellness and self-care treatments, thoughtfully brought together in one place.',
    explore:'Explore the menu', scroll:'Scroll to explore', introTitle:'Beauty should feel <em>personal.</em>',
    introLead:'Explore the treatments, find the moment that feels right, then contact us directly to arrange your appointment.',
    facials:'Facials', pedicure:'Pedicure', massage:'Massage', makeup:'Makeup', eyelashes:'Eyelashes', hair:'Hair / Wig', waxing:'Waxing',
    facialsTitle:'Skin, <em>reset.</em>', smoothFacial:'Smooth Facial Cleansing', deepFacial:'Deep Cleansing Facial',
    pedicureTitle:'A little <em>care.</em>', pedicureService:'Pedicure', beforeAppointment:'Before your appointment:', pedicureNote:'please tell us if you have diabetes, wounds, slow-healing feet or a recent foot problem.',
    massageTitle:'Slow down.<br><em>Breathe.</em>', massageService:'Relaxation / Body Massage',
    makeupTitle:'Your look,<br><em>your moment.</em>', makeupService:'Makeup', glamService:'Glam Makeup / Full Glam',
    lashesTitle:'Eyes that<br><em>stay noticed.</em>', lashesService:'Cluster Eyelash Extensions',
    hairTitle:'Wig care,<br><em>refined.</em>', wigWash:'Wig Washing', wigRevamp:'Wig Revamping', wigInstall:'Wig Installation', hairNote:'Wigs are washed and revamped before installation. Natural hair is not currently washed.',
    waxingTitle:'Clean.<br><em>Confident.</em>', waxingService:'Hair Waxing',
    careTitle:'Your comfort comes <em>first.</em>', careLead:'Please let us know before your appointment if you are pregnant or have a condition that may affect a beauty or body treatment. We can advise you on the most appropriate service.',
    hoursTitle:'When to visit', everyDay:'Monday — Sunday', hoursNote:'Daily break · 11:00 AM — 12:30 PM<br>Appointment required.', locationTitle:'Find us', directions:'Get directions ↗',
    contactTitle:'Ready when you are.', contactLead:'WhatsApp is the quickest way to ask a question or arrange your appointment.', whatsapp:'WhatsApp us', finalTitle:'Make time for <em>you.</em>', finalLead:'Choose your treatment, then message EL-ROI’S SPA to arrange your appointment.', bookWhatsapp:'Book / Contact on WhatsApp'
  },
  pt: {
    skip:'Ir para o conteúdo', welcome:'Bem-vindo à EL-ROI’S SPA', navServices:'Serviços', navVisit:'Visitar', navContact:'Contacto', book:'Marcar',
    eyebrow:'Beleza & Bem-estar', heroTitle:'Faça uma pausa.<br><em>Faça dela sua.</em>',
    heroIntro:'Tratamentos de beleza, bem-estar e autocuidado, reunidos num só lugar.',
    explore:'Explorar o menu', scroll:'Deslize para explorar', introTitle:'A beleza deve ser <em>pessoal.</em>',
    introLead:'Explore os tratamentos, encontre o momento certo para si e fale connosco diretamente para marcar o seu atendimento.',
    facials:'Faciais', pedicure:'Pedicure', massage:'Massagem', makeup:'Maquilhagem', eyelashes:'Pestanas', hair:'Cabelo / Peruca', waxing:'Depilação',
    facialsTitle:'Pele, <em>renovada.</em>', smoothFacial:'Limpeza Facial Suave', deepFacial:'Limpeza Facial Profunda',
    pedicureTitle:'Um pouco de <em>cuidado.</em>', pedicureService:'Pedicure', beforeAppointment:'Antes do atendimento:', pedicureNote:'informe-nos se tem diabetes, feridas, pés de cicatrização lenta ou algum problema recente nos pés.',
    massageTitle:'Abrande.<br><em>Respire.</em>', massageService:'Massagem de Relaxamento / Corporal',
    makeupTitle:'O seu look,<br><em>o seu momento.</em>', makeupService:'Maquilhagem', glamService:'Maquilhagem Glam / Full Glam',
    lashesTitle:'Olhos que<br><em>se destacam.</em>', lashesService:'Extensões de Pestanas em Cluster',
    hairTitle:'Cuidado da peruca,<br><em>com detalhe.</em>', wigWash:'Lavagem de Peruca', wigRevamp:'Revitalização de Peruca', wigInstall:'Instalação de Peruca', hairNote:'As perucas são lavadas e revitalizadas antes da instalação. O cabelo natural não é lavado atualmente.',
    waxingTitle:'Limpa.<br><em>Confiante.</em>', waxingService:'Depilação com Cera',
    careTitle:'O seu conforto vem <em>primeiro.</em>', careLead:'Informe-nos antes do atendimento se estiver grávida ou tiver alguma condição que possa afetar um tratamento de beleza ou corporal. Podemos orientar sobre o serviço mais adequado.',
    hoursTitle:'Quando visitar', everyDay:'Segunda — Domingo', hoursNote:'Pausa diária · 11:00 — 12:30<br>Atendimento mediante marcação.', locationTitle:'Encontre-nos', directions:'Obter direções ↗',
    contactTitle:'Pronta quando estiver.', contactLead:'O WhatsApp é a forma mais rápida de fazer uma pergunta ou marcar o seu atendimento.', whatsapp:'Falar no WhatsApp', finalTitle:'Reserve tempo para <em>si.</em>', finalLead:'Escolha o seu tratamento e fale com a EL-ROI’S SPA para marcar o atendimento.', bookWhatsapp:'Marcar / Contactar no WhatsApp'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('[data-header]');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const navLinks = [...document.querySelectorAll('[data-service-link]')];
  const reveals = [...document.querySelectorAll('.reveal')];
  const langButton = document.querySelector('[data-language]');

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 40);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  const chapterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.dataset.chapter;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.serviceLink === id));
    });
  }, { rootMargin: '-35% 0px -45% 0px', threshold: 0 });
  chapters.forEach(chapter => chapterObserver.observe(chapter));

  navLinks.forEach(link => link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  }));

  let language = localStorage.getItem('el-rois-language') || 'en';
  const applyLanguage = () => {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      if (translations[language][key]) element.innerHTML = translations[language][key];
    });
    langButton.textContent = language === 'en' ? 'PT' : 'EN';
    langButton.setAttribute('aria-label', language === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês');
  };
  langButton?.addEventListener('click', () => {
    language = language === 'en' ? 'pt' : 'en';
    localStorage.setItem('el-rois-language', language);
    applyLanguage();
  });
  applyLanguage();
});
