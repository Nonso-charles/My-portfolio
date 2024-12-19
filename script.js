let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
}


// Initialize particles.js
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false }
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

// Initialize AOS
AOS.init({
  duration: 1200,
  once: true, // Animation happens only once
});


// JavaScript to set the progress percentage dynamically
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
});


// JavaScript to trigger fade-in or scale-up effect when the section comes into view
const services = document.querySelectorAll('.service-card');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

services.forEach(service => {
    observer.observe(service);
});


 // Simple JavaScript for basic form validation (optional)
 const form = document.querySelector('.contact-form');
 form.addEventListener('submit', function(event) {
     event.preventDefault();
     const name = form.name.value.trim();
     const email = form.email.value.trim();
     const message = form.message.value.trim();

     if (name && email && message) {
         alert('Thank you for reaching out! Your message has been sent.');
         form.reset();
     } else {
         alert('Please fill out all required fields.');
     }
 });