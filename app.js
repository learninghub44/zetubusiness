/* ================= SCROLL TOP ================= */

const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {

  if(window.scrollY > 300){

    scrollTop.classList.add('show');

  } else {

    scrollTop.classList.remove('show');

  }

});

/* ================= SMOOTH SCROLL ================= */

scrollTop.addEventListener('click', () => {

  window.scrollTo({

    top:0,
    behavior:'smooth'

  });

});

/* ================= CONTACT FORM ================= */

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  alert(
    'Thank you for contacting Zetu Business Solutions! We will get back to you shortly.'
  );

  form.reset();

});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll('section');

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute('id');

    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active');

    if(link.getAttribute('href') === `#${current}`){

      link.classList.add('active');

    }

  });

});

/* ================= HERO ANIMATION ================= */

const heroContent = document.querySelector('.hero-content');

window.addEventListener('load', () => {

  heroContent.style.opacity = '1';

  heroContent.style.transform = 'translateY(0px)';

});

/* ================= ENHANCED STATISTICS COUNTER ================= */

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if(current < target) {
          counter.innerText = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };
      
      updateCounter();
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  observer.observe(counter);
});

/* ================= PAGE LOAD ANIMATIONS ================= */

window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

/* ================= CONSOLE MESSAGE ================= */

console.log(
  '%cZetu Business Solutions', 
  'font-size: 20px; font-weight: bold; color: #00d4ff;'
);
console.log(
  '%cBuilding Africa\'s next generation digital infrastructure',
  'font-size: 14px; color: #00d4ff;'
);