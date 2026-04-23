const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close mobile menu when clicking nav links
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/* =========================================================
   NLP WEBSITE - FULL JAVASCRIPT
   Note:
   1. Mobile menu toggle
   2. Contact form demo submit
   3. Hero load animation
   4. Scroll reveal animation
========================================================= */

/* ===============================
   1. DOM ELEMENTS
=============================== */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const contactForm = document.getElementById("contactForm");

/* ===============================
   2. MOBILE MENU
=============================== */
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}


/* ===============================
   4. ANIMATION HELPERS
=============================== */
function setInitialState(elements, translateY = 40) {
  elements.forEach((element) => {
    if (!element) return;
    element.style.opacity = "0";
    element.style.transform = `translateY(${translateY}px)`;
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });
}

function revealElement(element, delay = 0) {
  if (!element) return;

  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, delay);
}

/* ===============================
   5. RUN AFTER PAGE LOAD
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------
     HERO LOAD ANIMATION
  -------------------------------- */
  const heroItems = [
    document.querySelector(".hero-tag"),
    document.querySelector(".hero h1"),
    document.querySelector(".hero-subtitle"),
    document.querySelector(".mm-highlight"),
    document.querySelector(".hero-buttons"),
    document.querySelector(".hero-visual")
  ].filter(Boolean);

  setInitialState(heroItems, 35);

  heroItems.forEach((item, index) => {
    revealElement(item, index * 180);
  });

  /* --------------------------------
     SCROLL REVEAL TARGETS
  -------------------------------- */
  const revealItems = [
    ...document.querySelectorAll(".mission-center"),
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".product-card-horizontal"),
    ...document.querySelectorAll(".process-step"),
    ...document.querySelectorAll(".stat-card"),
    ...document.querySelectorAll(".contact-info"),
    ...document.querySelectorAll(".contact-form")
  ];

  setInitialState(revealItems, 40);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target, 100);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* ===============================
   1. MOBILE MENU
=============================== */
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

/* ===============================
   2. ANIMATION HELPERS
=============================== */
function setInitialState(elements, translateY = 40) {
  elements.forEach((element) => {
    if (!element) return;
    element.style.opacity = "0";
    element.style.transform = `translateY(${translateY}px)`;
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });
}

function revealElement(element, delay = 0) {
  if (!element) return;

  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, delay);
}

/* ===============================
   3. RUN AFTER PAGE LOAD
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  const heroItems = [
    document.querySelector(".hero-tag"),
    document.querySelector(".hero h1"),
    document.querySelector(".hero-subtitle"),
    document.querySelector(".mm-highlight"),
    document.querySelector(".hero-buttons"),
    document.querySelector(".hero-visual")
  ].filter(Boolean);

  setInitialState(heroItems, 35);

  heroItems.forEach((item, index) => {
    revealElement(item, index * 180);
  });

  const revealItems = [
    ...document.querySelectorAll(".mission-center"),
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".product-card-horizontal"),
    ...document.querySelectorAll(".process-step"),
    ...document.querySelectorAll(".stat-card"),
    ...document.querySelectorAll(".contact-info"),
    ...document.querySelectorAll(".contact-form")
  ];

  setInitialState(revealItems, 40);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target, 100);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
});
