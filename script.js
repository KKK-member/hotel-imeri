/* =============================================
   TERASA IMERI — script.js
   Language switching, dark mode, lightbox,
   scroll reveal, mobile menu
   ============================================= */

// ==================== TRANSLATIONS ====================
const translations = {
  ka: {
    brand: "პარკ ჰოტელი იმერი ქუთაისი",
    nav_home: "სახლი",
    nav_rooms: "ოთახები",
    nav_gallery: "გალერეა",
    nav_location: "ადგილმდებარეობა",
    hero_badge: "🏔️ ნიკეა, იმერეთი",
    hero_tagline: "ადგილი, სადაც ბუნება და კომფორტი ერთ სივრცეში ერთიანდება",
    hero_cta: "დაჯავშნეთ ახლა",
    about_title: "ჩვენს შესახებ",
    about_p1: "პარკ ჰოტელი იმერი ადგილი, სადაც ბუნება, სიმშვიდე და კომფორტი ერთიანდება. ჩვენი სასტუმრო მდებარეობს ქუთაისის ერთ-ერთ ყველაზე მშვიდ და გამწვანებულ ადგილას, ულამაზესი პარკისა და ტყის გარემოცვაში. აქ ყოველი დილა იწყება ჩიტების ჭიკჭიკით, სუფთა ჰაერითა და ბუნების საოცარი ხედებით, რაც თქვენს დასვენებას განსაკუთრებულ გამოცდილებად აქცევს. პარკ ჰოტელი იმერი იდეალური არჩევანია როგორც ოჯახური დასვენებისთვის, ასევე საქმიანი მოგზაურობისთვის. სტუმრებს ვთავაზობთ კომფორტულ ნომრებს, გემრიელ საუზმეს, დაცულ პარკინგს და 24/7 მომსახურებას. ჩვენთვის მთავარი პრიორიტეტია, თითოეულმა სტუმარმა თავი იგრძნოს ბუნებასთან ახლოს, მშვიდ და მყუდრო გარემოში. პარკ ჰოტელი იმერი — ადგილი, სადაც ბუნება და კომფორტი ჰარმონიულად ერწყმის ერთმანეთს.",
    about_p2: "ჩვენ გთავაზობთ სუფთა, კომფორტულ ოთახებს, მეგობრულ სერვისს და ჩვენს სა[...]",
    stat_rooms: "ოთახის ტიპი",
    stat_service: "სერვისი",
    stat_view: "მთის ხედი",
    stat_food: "კვება",
    rooms_title: "ოთახები",
    room_single_badge: "ერთადგილიანი",
    room_single_name: "ერთადგილიანი",
    room_single_desc: "კომფორტული ოთახი ერთი ადამიანისთვის, ყველა საჭირო კეთილმოწყობი�[...]",
    room_double_badge: "ორადგილიანი",
    room_double_name: "ორადგილიანი",
    room_double_desc: "ფართო ოთახი ორი ადამიანისთვის, დასვენებისა და კომფორტის ყველა პ��[...]",
    room_triple_badge: "სამადგილიანი",
    room_triple_name: "სამადგილიანი",
    room_triple_desc: "შესაფერსია ოჯახებისა და მეგობრების ჯგუფებისთვის, ფართო და კომფ[...]",
    room_luxury_badge: "ლუქსი",
    room_luxury_name: "ლუქს ოთახი",
    room_luxury_desc: "პრემიუმ ოთახი საუკეთესო ხედებით, განსაკუთრებული სტუმრებისთვის.[...]",
    room_apartment_badge: "აპარტამენტი",
    room_apartment_name: "აპარტამენტი",
    room_apartment_desc: "1 დიდი საწოლი, 2 პატარა საწოლი, 2 სააბაზანო და მოსაწდელი ოთახი — იდე[...]",
    per_night: "/ ღამე",
    room_btn: "დაჯავშნა",
    gallery_title: "გალერეა",
    amenities_title: "სერვისები",
    amenity_wifi: "უფასო Wi-Fi",
    amenity_parking: "პარკინგი",
    amenity_breakfast: "საუზმე",
    amenity_terrace: "ტერასა",
    amenity_tv: "ტელევიზია",
    amenity_view: "მთის ხედი",
    amenity_ac: "კონდიციონერი",
    amenity_restaurant: "კაფე / რესტორანი",
    location_title: "ადგილმდებარეობა",
    location_find_us: "როგორ მოგვიძებნოთ",
    location_address_label: "მისამართი",
    location_address: "ნიკეა, იმერეთი, საქართველო",
    location_phone_label: "ტელეფონი",
    location_hours_label: "სამუშაო საათები",
    location_hours: "24 საათი / 7 დღე",
    location_directions: "მარშრუტის ნახვა",
    footer_desc: "კომფორტული სასტუმრო ნიკეაში — სადაც ყოველი სტუმარი თავს სახლში გრძნობს",
    footer_nav_title: "ნავიგაცია",
    footer_contact_title: "კონტაქტი",
    footer_rights: "© 2026 პარკ ჰოტელი იმერი ქუთაისი. ყველა უფლება დაცულია.",
    btn_more: "მეტი",
    
  },

  en: {
    brand: "Park Hotel Imeri Kutaisi",
    nav_home: "Home",
    nav_rooms: "Rooms",
    nav_gallery: "Gallery",
    nav_location: "Location",
    hero_badge: "🏔️ Nikea, Imereti",
    hero_tagline: "A place where nature and comfort unite in a single space.",
    hero_cta: "Book Now",
    about_title: "About Us",
    about_p1: "Park Hotel Imeri is a place where nature, tranquility and comfort come together. Our hotel is located in one of the quietest and greenest areas of Kutaisi, surrounded by a beautiful park and forest. Here every morning begins with the chirping of birds, fresh air and amazing views of nature, which make your stay a special experience. Park Hotel Imeri is an ideal choice both for family vacations and for business trips. We offer our guests comfortable rooms, a tasty breakfast, secure parking and 24/7 service. Our main priority is that every guest feels close to nature in a calm and cozy environment. Park Hotel Imeri — a place where nature and comfort harmoniously blend.",
    about_p2: "We offer clean, comfortable rooms, friendly service, and our lovely terrace with beautiful views of the surrounding landscape.",
    stat_rooms: "Room Types",
    stat_service: "Service",
    stat_view: "Mountain View",
    stat_food: "Dining",
    rooms_title: "Our Rooms",
    room_single_badge: "Single",
    room_single_name: "Single Room",
    room_single_desc: "Comfortable room for one person, with all the amenities you need.",
    room_double_badge: "Double",
    room_double_name: "Double Room",
    room_double_desc: "Spacious room for two people, with all the comforts for a great stay.",
    room_triple_badge: "Triple",
    room_triple_name: "Triple Room",
    room_triple_desc: "Perfect for families and groups of friends, spacious and comfortable.",
    room_luxury_badge: "Luxury",
    room_luxury_name: "Luxury Suite",
    room_luxury_desc: "Premium room with the best views, for our most special guests.",
    room_apartment_badge: "Apartment",
    room_apartment_name: "Apartment",
    room_apartment_desc: "1 king bed, 2 single beds, 2 bathrooms and a living room — ideal for families.",
    per_night: "/ night",
    room_btn: "Book Now",
    gallery_title: "Gallery",
    amenities_title: "Amenities",
    amenity_wifi: "Free Wi-Fi",
    amenity_parking: "Parking",
    amenity_breakfast: "Breakfast",
    amenity_terrace: "Terrace",
    amenity_tv: "Television",
    amenity_view: "Mountain View",
    amenity_ac: "Air Conditioning",
    amenity_restaurant: "Café / Restaurant",
    location_title: "Location",
    location_find_us: "How to Find Us",
    location_address_label: "Address",
    location_address: "Nikea, Imereti, Georgia",
    location_phone_label: "Phone",
    location_hours_label: "Working Hours",
    location_hours: "24 hours / 7 days",
    location_directions: "Get Directions",
    footer_desc: "Comfortable hotel in Nikea — where every guest feels right at home.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Contact",
    footer_rights: "© 2026 Park Hotel Imeri Kutaisi. All rights reserved.",
    btn_more: "More",
  },

  ru: {
    brand: "Парк Отель Имери Кутаиси",
    nav_home: "Главная",
    nav_rooms: "Номера",
    nav_gallery: "Галерея",
    nav_location: "Расположение",
    hero_badge: "🏔️ Никеа, Имерети",
    hero_tagline: "Место, где природа и комфорт сливаются воедино.",
    hero_cta: "Забронировать",
    about_title: "О нас",
    about_p1: "Парк Отель Имери — это место, где природа, спокойствие и комфорт объединяются. Наш отель расположен в одной из самых тихих и озеленённых районов Кутаиси, в окружении прекрасного парка и леса. Здесь каждое утро начинается с щебета птиц, свежего воздуха и удивительных видов природы, которые делают ваш отдых особенным. Парк Отель Имери — идеальный выбор как для семейного отдыха, так и для деловых поездок. Мы предлагаем гостям комфортные номера, вкусный завтрак, охраняемую парковку и обслуживание 24/7. Наш приоритет — чтобы каждый гость чувствовал себя близко к природе в спокойной и уютной обстановке. Парк Отель Имери — место, где природа и комфорт гармонично сочетаются.",
    about_p2: "Мы предлагаем чистые, уютные номера, дружелюбный сервис и нашу прекрасную террасу с красивым видом н�[...]",
    stat_rooms: "Типа номеров",
    stat_service: "Сервис",
    stat_view: "Вид на горы",
    stat_food: "Питание",
    rooms_title: "Номера",
    room_single_badge: "Одноместный",
    room_single_name: "Одноместный",
    room_single_desc: "Уютный номер для одного человека со всеми необходимыми удобствами.",
    room_double_badge: "Двухместный",
    room_double_name: "Двухместный",
    room_double_desc: "Просторный номер для двоих со всеми условиями для отличного отдыха.",
    room_triple_badge: "Трёхместный",
    room_triple_name: "Трёхместный",
    room_triple_desc: "Идеально для семей и групп друзей, просторный и комфортный.",
    room_luxury_badge: "Люкс",
    room_luxury_name: "Люкс",
    room_luxury_desc: "Премиум номер с лучшими видами, для самых особенных гостей.",
    room_apartment_badge: "Апартамент",
    room_apartment_name: "Апартамент",
    room_apartment_desc: "1 большая кровать, 2 односпальные кровати, 2 ванных комнаты и гостиная — идеально для семей.",
    per_night: "/ ночь",
    room_btn: "Забронировать",
    gallery_title: "Галерея",
    amenities_title: "Удобства",
    amenity_wifi: "Бесплатный Wi-Fi",
    amenity_parking: "Парковка",
    amenity_breakfast: "Завтрак",
    amenity_terrace: "Терраса",
    amenity_tv: "Телевизор",
    amenity_view: "Вид на горы",
    amenity_ac: "Кондиционер",
    amenity_restaurant: "Кафе / Ресторан",
    location_title: "Расположение",
    location_find_us: "Как нас найти",
    location_address_label: "Адрес",
    location_address: "Никеა, Имерети, Грузия",
    location_phone_label: "Телефон",
    location_hours_label: "Часы работы",
    location_hours: "24 часа / 7 дней",
    location_directions: "Проложить маршрут",
    footer_desc: "Уютный отель в Никеа — где каждый гость чувствует себя как дома.",
    footer_nav_title: "Навигация",
    footer_contact_title: "Контакт",
    footer_rights: "© 2026 Парк Отель Имери Кутаиси. Все права защищены.",
    btn_more: "Больше",
  },

  de: {
    brand: "Park Hotel Imeri Kutaissi",
    nav_home: "Startseite",
    nav_rooms: "Zimmer",
    nav_gallery: "Galerie",
    nav_location: "Lage",
    hero_badge: "🏔️ Nikea, Imereti",
    hero_tagline: "Ein Ort, an dem sich Natur und Komfort an einem einzigen Ort vereinen.",
    hero_cta: "Jetzt buchen",
    about_title: "Über uns",
    about_p1: "Das Park Hotel Imeri ist ein Ort, an dem Natur, Ruhe und Komfort zusammenkommen. Unser Hotel befindet sich in einer der ruhigsten und grünsten Gegenden von Kutaissi, umgeben von einem wunderschönen Park und Wald. Hier beginnt jeder Morgen mit dem Zwitschern der Vögel, frischer Luft und beeindruckenden Naturblicken, die Ihren Aufenthalt zu einem besonderen Erlebnis machen. Das Park Hotel Imeri ist sowohl für Familienurlaube als auch für Geschäftsreisen die ideale Wahl. Wir bieten unseren Gästen komfortable Zimmer, ein schmackhaftes Frühstück, gesicherten Parkplatz und Service rund um die Uhr. Unsere oberste Priorität ist, dass sich jeder Gast in einer naturnahen, ruhigen und gemütlichen Umgebung wohlfühlt. Park Hotel Imeri — ein Ort, an dem Natur und Komfort harmonisch verschmelzen.",
    about_p2: "Wir bieten saubere, komfortable Zimmer, freundlichen Service und unsere schöne Terrasse mit herrlichem Blick auf die umliegende Landschaft.",
    stat_rooms: "Zimmertypen",
    stat_service: "Service",
    stat_view: "Bergblick",
    stat_food: "Verpflegung",
    rooms_title: "Zimmer",
    room_single_badge: "Einzel",
    room_single_name: "Einzelzimmer",
    room_single_desc: "Komfortables Zimmer für eine Person mit allen nötigen Annehmlichkeiten.",
    room_double_badge: "Doppel",
    room_double_name: "Doppelzimmer",
    room_double_desc: "Geräumiges Zimmer für zwei Personen mit allem Komfort für einen großartigen Aufenthalt.",
    room_triple_badge: "Dreibett",
    room_triple_name: "Dreibettzimmer",
    room_triple_desc: "Ideal für Familien und Freundesgruppen, geräumig und komfortabel.",
    room_luxury_badge: "Luxus",
    room_luxury_name: "Luxus-Suite",
    room_luxury_desc: "Premium-Zimmer mit den besten Ausblicken, für unsere besonderen Gäste.",
    room_apartment_badge: "Apartment",
    room_apartment_name: "Apartment",
    room_apartment_desc: "1 großes Bett, 2 Einzelbetten, 2 Badezimmer und ein Wohnzimmer — ideal für Familien.",
    per_night: "/ Nacht",
    room_btn: "Buchen",
    gallery_title: "Galerie",
    amenities_title: "Ausstattung",
    amenity_wifi: "Kostenloses WLAN",
    amenity_parking: "Parkplatz",
    amenity_breakfast: "Frühstück",
    amenity_terrace: "Terrasse",
    amenity_tv: "Fernseher",
    amenity_view: "Bergblick",
    amenity_ac: "Klimaanlage",
    amenity_restaurant: "Café / Restaurant",
    location_title: "Lage",
    location_find_us: "Wie Sie uns finden",
    location_address_label: "Adresse",
    location_address: "Nikea, Imereti, Georgien",
    location_phone_label: "Telefon",
    location_hours_label: "Öffnungszeiten",
    location_hours: "24 Stunden / 7 Tage",
    location_directions: "Route berechnen",
    footer_desc: "Gemütliches Hotel in Nikea — wo sich jeder Gast wie zu Hause fühlt.",
    footer_nav_title: "Navigation",
    footer_contact_title: "Kontakt",
    footer_rights: "© 2026 Park Hotel Imeri Kutaissi. Alle Rechte vorbehalten.",
    btn_more: "Mehr",
  }
};

// ==================== LANGUAGE ====================
let currentLang = 'ka';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update html lang attribute
  document.documentElement.lang = lang;
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById('btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');
}

// ==================== DARK / LIGHT MODE ====================
let isDark = false;

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeToggle').textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('terasa-theme', isDark ? 'dark' : 'light');
}

// Restore saved theme
(function () {
  const saved = localStorage.getItem('terasa-theme');
  if (saved === 'dark') {
    isDark = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = '🌙';
  }
})();

// ==================== MOBILE MENU ====================
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// Close menu on outside click
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburgerBtn');
  if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});

// ==================== LIGHTBOX ====================
function openLightbox(item) {
  const img = item.querySelector('img');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Close lightbox with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==================== NAVBAR SHADOW ON SCROLL ====================
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(60,40,10,0.12)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ==================== SCROLL TO CONTACT ====================
function scrollToContact() {
  const contactEl = document.getElementById('contact');
  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
}

// ROOM LIGHTBOX
function openRoomLightbox(el, img1, img2, img3, img4) {
  const mainSrc = el.querySelector('img').src;
  document.getElementById('roomLightMain').src = mainSrc;
  
  const left1 = document.getElementById('roomLightLeft1');
  const left2 = document.getElementById('roomLightLeft2');
  const right1 = document.getElementById('roomLightRight1');
  const right2 = document.getElementById('roomLightRight2');

  if (img3 && img4) {
    // 4 photos layout (2 left, 2 right)
    left1.src = img1; left1.style.display = 'block';
    left2.src = img2; left2.style.display = 'block';
    right1.src = img3; right1.style.display = 'block';
    right2.src = img4; right2.style.display = 'block';
  } else {
    // 2 photos layout (1 left, 1 right)
    left1.src = img1; left1.style.display = 'block';
    left2.style.display = 'none';
    right1.src = img2; right1.style.display = 'block';
    right2.style.display = 'none';
  }
  
  document.getElementById('roomLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRoomLightbox(e) {
  if (e && e.target !== document.getElementById('roomLightbox') && !e.target.classList.contains('lightbox-close')) {
    if (e.target.classList.contains('room-lightbox-side')) {
      const mainImg = document.getElementById('roomLightMain');
      const temp = mainImg.src;
      mainImg.src = e.target.src;
      e.target.src = temp;
      return;
    }
  }
  const lightbox = document.getElementById('roomLightbox');
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeLightbox();
    closeRoomLightbox(null);
  }
});

// შექმნა დავით ენდელაძემ 
