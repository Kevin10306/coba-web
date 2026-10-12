const translations = {
  id: {
    navAbout:"Tentang",navServices:"Layanan",navApproach:"Pendekatan",navContact:"Kontak",
    eyebrow:"STUDIO PENGEMBANGAN GAME",heroTitle:"Ide kreatif.<br><em>Pengalaman bermain</em><br>yang bermakna.",
    heroLead:"PT Indo Kreasi bergerak di bidang pengembangan game dan pengalaman interaktif. Kami berfokus pada proses kreatif, teknologi, dan pengalaman pemain.",
    discover:"Kenali Indo Kreasi",talk:"Diskusikan proyek",heroNote:"Profil perusahaan · Game development · Kolaborasi kreatif",
    visualCardOne:"Kreativitas<br>bertemu teknologi",visualCardTwo:"Dari konsep<br>menuju pengalaman",
    introKicker:"TENTANG KAMI",introStatement:"Kami ingin mengubah ide menjadi pengalaman digital yang <span>menarik, interaktif, dan berkesan.</span>",
    aboutKicker:"01 / PROFIL",aboutTitle:"Membangun pengalaman<br>melalui dunia game.",aboutText:"PT Indo Kreasi adalah perusahaan yang berfokus pada bidang game development. Profil ini menjadi pengantar mengenai fokus kerja, nilai, dan peluang kolaborasi kami.",
    valueOneTitle:"Berangkat dari ide",valueOneText:"Memahami tujuan dan konsep sebagai dasar dalam merancang pengalaman bermain.",
    valueTwoTitle:"Dirancang dengan tujuan",valueTwoText:"Mempertimbangkan alur permainan, interaksi, dan kebutuhan pengguna sejak awal.",
    valueThreeTitle:"Terbuka untuk kolaborasi",valueThreeText:"Membangun komunikasi yang jelas agar ide dan proses pengembangan berjalan searah.",
    servicesKicker:"02 / LAYANAN",servicesTitle:"Dari konsep hingga<br>interaksi digital.",servicesText:"Area berikut menggambarkan bidang layanan yang dapat dibahas dan disesuaikan dengan kebutuhan proyek.",
    serviceOneTitle:"Game Development",serviceOneText:"Perancangan dan pengembangan permainan digital dari konsep hingga implementasi.",serviceTagOne:"GAMEPLAY · PROTOTYPE",
    serviceTwoTitle:"Game Design",serviceTwoText:"Eksplorasi ide, mekanik permainan, struktur level, dan pengalaman pemain.",serviceTagTwo:"CONCEPT · DESIGN",
    serviceThreeTitle:"Interactive Experience",serviceThreeText:"Pengalaman interaktif yang memanfaatkan prinsip dan teknologi pengembangan game.",serviceTagThree:"INTERACTION · DIGITAL",
    serviceDisclaimer:"Catatan: cakupan layanan final perlu dikonfirmasi sesuai kapabilitas dan kebutuhan perusahaan.",
    approachKicker:"03 / PENDEKATAN",approachTitle:"Proses yang jelas.<br>Ruang untuk bereksplorasi.",approachText:"Setiap proyek memiliki kebutuhan berbeda. Alur berikut adalah kerangka kerja awal yang dapat disesuaikan bersama mitra.",
    processOneTitle:"Pahami",processOneText:"Tujuan, pengguna, ruang lingkup, dan konteks proyek.",processTwoTitle:"Rancang",processTwoText:"Konsep, mekanik, alur, dan arah visual awal.",processThreeTitle:"Kembangkan",processThreeText:"Bangun prototipe dan implementasikan fitur yang disepakati.",processFourTitle:"Evaluasi",processFourText:"Tinjau hasil dan tentukan langkah penyempurnaan berikutnya.",
    contactKicker:"04 / HUBUNGI KAMI",contactTitle:"Punya ide untuk<br>dikembangkan bersama?",contactText:"Kami terbuka untuk percakapan awal mengenai ide, kebutuhan, dan peluang kolaborasi di bidang game development.",
    contactCardLabel:"MULAI PERCAKAPAN",contactCardText:"Hubungi kami untuk mendiskusikan kebutuhan proyek atau kerja sama.",replaceEmail:"Ganti alamat email contoh ini dengan kontak resmi perusahaan sebelum publikasi.",
    footerLine:"Mengembangkan ide. Merancang pengalaman.",footerNote:"Company profile · Informasi dapat diperbarui sesuai data resmi."
  },
  en: {
    navAbout:"About",navServices:"Services",navApproach:"Approach",navContact:"Contact",
    eyebrow:"GAME DEVELOPMENT STUDIO",heroTitle:"Creative ideas.<br><em>Meaningful play</em><br>experiences.",
    heroLead:"PT Indo Kreasi focuses on game development and interactive experiences, with an emphasis on creative process, technology, and player experience.",
    discover:"Discover Indo Kreasi",talk:"Discuss a project",heroNote:"Company profile · Game development · Creative collaboration",
    visualCardOne:"Creativity meets<br>technology",visualCardTwo:"From concept<br>to experience",
    introKicker:"ABOUT US",introStatement:"We aim to turn ideas into digital experiences that are <span>engaging, interactive, and memorable.</span>",
    aboutKicker:"01 / PROFILE",aboutTitle:"Building experiences<br>through game worlds.",aboutText:"PT Indo Kreasi is a company focused on game development. This profile introduces our areas of focus, values, and potential opportunities for collaboration.",
    valueOneTitle:"Start with an idea",valueOneText:"Understand the goals and concept as the foundation for designing a play experience.",
    valueTwoTitle:"Designed with purpose",valueTwoText:"Consider gameplay flow, interaction, and user needs from the beginning.",
    valueThreeTitle:"Open to collaboration",valueThreeText:"Build clear communication so ideas and development move in the same direction.",
    servicesKicker:"02 / SERVICES",servicesTitle:"From concepts to<br>digital interaction.",servicesText:"The areas below outline services that can be discussed and adapted to project requirements.",
    serviceOneTitle:"Game Development",serviceOneText:"Design and development of digital games, from concept through implementation.",serviceTagOne:"GAMEPLAY · PROTOTYPE",
    serviceTwoTitle:"Game Design",serviceTwoText:"Exploring ideas, game mechanics, level structure, and player experience.",serviceTagTwo:"CONCEPT · DESIGN",
    serviceThreeTitle:"Interactive Experience",serviceThreeText:"Interactive experiences informed by game development principles and technology.",serviceTagThree:"INTERACTION · DIGITAL",
    serviceDisclaimer:"Note: final service scope should be confirmed against the company's capabilities and project needs.",
    approachKicker:"03 / APPROACH",approachTitle:"A clear process.<br>Room to explore.",approachText:"Every project has different needs. The following is an initial framework that can be adapted with project partners.",
    processOneTitle:"Discover",processOneText:"Clarify goals, users, scope, and project context.",processTwoTitle:"Design",processTwoText:"Explore concepts, mechanics, flow, and visual direction.",processThreeTitle:"Develop",processThreeText:"Build a prototype and implement agreed features.",processFourTitle:"Evaluate",processFourText:"Review outcomes and define the next improvements.",
    contactKicker:"04 / CONTACT",contactTitle:"Have an idea to<br>build together?",contactText:"We welcome an initial conversation about ideas, project needs, and collaboration opportunities in game development.",
    contactCardLabel:"START A CONVERSATION",contactCardText:"Get in touch to discuss project requirements or a potential collaboration.",replaceEmail:"Replace this sample email address with the company's official contact before publishing.",
    footerLine:"Developing ideas. Designing experiences.",footerNote:"Company profile · Information can be updated with verified company details."
  }
};
let currentLang = "id";
const langToggle = document.getElementById("langToggle");
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  langToggle.innerHTML = lang === "id" ? 'EN <span>↗</span>' : 'ID <span>↗</span>';
  langToggle.setAttribute("aria-label", lang === "id" ? "Switch to English" : "Beralih ke Bahasa Indonesia");
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "id" ? "en" : "id"));
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();
