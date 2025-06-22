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

document.getElementById("about-title").textContent = data.about.title;
document.getElementById("about-text1").textContent = data.about.text1;
document.getElementById("about-text2").textContent = data.about.text2;
document.getElementById("about-text3").textContent = data.about.text3;

document.getElementById("about-highlight1").textContent = data.about.highlight1;
document.getElementById("about-highlight2").textContent = data.about.highlight2;
document.getElementById("about-highlight3").textContent = data.about.highlight3;
document.getElementById("expertise-title").textContent = data.expertise.title;
document.getElementById("expertise-subtext").textContent = data.expertise.subtext;

document.getElementById("expertise-box1-title").textContent = data.expertise.box1_title;
document.getElementById("exp1-item1").textContent = data.expertise.box1[0];
document.getElementById("exp1-item2").textContent = data.expertise.box1[1];
document.getElementById("exp1-item3").textContent = data.expertise.box1[2];
document.getElementById("exp1-item4").textContent = data.expertise.box1[3];

document.getElementById("expertise-box2-title").textContent = data.expertise.box2_title;
document.getElementById("exp2-item1").textContent = data.expertise.box2[0];
document.getElementById("exp2-item2").textContent = data.expertise.box2[1];
document.getElementById("exp2-item3").textContent = data.expertise.box2[2];
document.getElementById("exp2-item4").textContent = data.expertise.box2[3];

document.getElementById("expertise-box3-title").textContent = data.expertise.box3_title;
document.getElementById("exp3-item1").textContent = data.expertise.box3[0];
document.getElementById("exp3-item2").textContent = data.expertise.box3[1];
document.getElementById("exp3-item3").textContent = data.expertise.box3[2];
document.getElementById("exp3-item4").textContent = data.expertise.box3[3];

document.getElementById("gallery-title").textContent = data.gallery.title;
document.getElementById("gallery-subtext").textContent = data.gallery.subtext;
document.getElementById("gallery-caption1").textContent = data.gallery.caption1;
document.getElementById("gallery-caption2").textContent = data.gallery.caption2;
document.getElementById("gallery-caption3").textContent = data.gallery.caption3;
document.getElementById("gallery-caption4").textContent = data.gallery.caption4;

document.getElementById("testimonials-title").textContent = data.testimonials.title;
document.getElementById("testimonials-subtext").textContent = data.testimonials.subtext;

document.getElementById("testimonial-quote1").textContent = data.testimonials.quote1;
document.getElementById("testimonial-name1").textContent = data.testimonials.name1;

document.getElementById("testimonial-quote2").textContent = data.testimonials.quote2;
document.getElementById("testimonial-name2").textContent = data.testimonials.name2;

document.getElementById("testimonial-quote3").textContent = data.testimonials.quote3;
document.getElementById("testimonial-name3").textContent = data.testimonials.name3;

document.getElementById("media-title").textContent = data.media.title;
document.getElementById("media-subtext").textContent = data.media.subtext;
document.getElementById("media-caption1").textContent = data.media.caption1;
document.getElementById("media-caption2").textContent = data.media.caption2;
document.getElementById("media-caption3").textContent = data.media.caption3;
document.getElementById("media-caption4").textContent = data.media.caption4;
