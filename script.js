// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to section elements
  const sections = document.querySelectorAll('.about, .skills, .projects, .experience, .contact');
  sections.forEach((section, index) => {
    section.classList.add('fade-in');
    observer.observe(section);
  });

  // Add slide animations to cards
  const cards = document.querySelectorAll('.skill-category, .project-card, .experience-item');
  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add('slide-in-left');
    } else {
      card.classList.add('slide-in-right');
    }
    observer.observe(card);
  });
});

// Scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }
  
  // Simulate form submission (replace with actual form handling)
  alert('Thank you for your message! I\'ll get back to you soon.');
  contactForm.reset();
});

// Add typing effect to hero quote
const heroQuote = document.querySelector('.hero-quote');
if (heroQuote) {
  const originalText = heroQuote.textContent;
  heroQuote.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < originalText.length) {
      heroQuote.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  };
  
  // Start typing effect after hero animation
  setTimeout(typeWriter, 1000);
}

// Add glow effect to skill tags on hover
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 20px rgba(139, 92, 246, 0.5)';
  });
  
  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = 'none';
  });
});

// Add glow effect to tech tags on hover
document.querySelectorAll('.tech-tag').forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.5)';
  });
  
  tag.addEventListener('mouseleave', () => {
    tag.style.boxShadow = 'none';
  });
});

// Add navigation highlighting based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Console welcome message
console.log(`
  🚀 Welcome to Harshitha's Portfolio!
  
  Built with:
  - Pure HTML/CSS/JS (no frameworks!)
  - Glassmorphism design
  - Smooth animations
 
  
  Feel free to explore the code!
`);
