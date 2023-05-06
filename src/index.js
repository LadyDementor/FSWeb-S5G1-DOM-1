const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

const links = document.querySelectorAll("nav a");
for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  links[i].classList.add("italic");
}

const title = document.querySelector(".cta-text h1");
title.textContent = siteContent.cta["h1"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta["button"];

for (const key in siteContent.images) {
  let img = document.getElementById(key);
  if (img) {
    img.src = siteContent.images[key];
  }
}

const imgLast = document.getElementById("middle-img");
imgLast.src = siteContent.images["accent-img"];

const baslik4 = document.querySelectorAll(".main-content h4");
let counter = 0;
for (const key in siteContent["ana-içerik"]) {
  if (key.endsWith("-h4")) {
    baslik4[counter].textContent = siteContent["ana-içerik"][key];
    counter++;
  }
}

const icerik = document.querySelectorAll(".main-content p");
let counter2 = 0;
for (const key in siteContent["ana-içerik"]) {
  if (key.endsWith("-içerik")) {
    icerik[counter2].textContent = siteContent["ana-içerik"][key];
    counter2++;
  } else if (key.endsWith("-içeriği")) {
    icerik[counter2].textContent = siteContent["ana-içerik"][key];
    counter2++;
  }
}

const iletisimBasligi = document.querySelector(".contact h4");
iletisimBasligi.textContent = siteContent.iletisim["iletişim-h4"];

const iletisimDetaylari = document.querySelectorAll(".contact p");
iletisimDetaylari[0].textContent = siteContent.iletisim["adres"];
iletisimDetaylari[1].textContent = siteContent.iletisim["telefon"];
iletisimDetaylari[2].textContent = siteContent.iletisim["email"];

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent.footer["copyright"];
footerLink.classList.add("bold");
