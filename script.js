const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

async function setLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

  document.getElementById("hero-headline").textContent = data.hero.headline;
  document.getElementById("hero-subtext").textContent = data.hero.subtext;
  document.getElementById("about-title").textContent = data.about.title;
  document.getElementById("about-text").textContent = data.about.text;

  document.querySelector("a[href='#about']").textContent = data.nav.about;
  document.querySelector("a[href='#expertise']").textContent = data.nav.expertise;
  document.querySelector("a[href='#gallery']").textContent = data.nav.gallery;
  document.querySelector("a[href='#testimonials']").textContent = data.nav.testimonials;
  document.querySelector("a[href='#media']").textContent = data.nav.media;
  document.querySelector("a[href='#contact']").textContent = data.nav.contact;

  localStorage.setItem("siteLang", lang);
}

// Auto-load language preference
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("siteLang") || "en";
  setLanguage(savedLang);
});
document.getElementById("intro-headline").textContent = data.intro.headline;
document.getElementById("intro-subtext").textContent = data.intro.subtext;
