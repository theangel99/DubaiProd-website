/**
 * MAIN JAVASCRIPT FILE
 *
 * Handles:
 * - Mobile navigation toggle
 * - Smooth scrolling
 * - Scroll-based header styling
 * - Scroll-triggered animations (Intersection Observer)
 * - Dynamic content population from data.js
 * - Client logo carousel
 * - Form handling
 */

// =====================
// MOBILE NAVIGATION
// =====================
function initMobileNav() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');

  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
}

// =====================
// HEADER SCROLL EFFECT
// =====================
function initHeaderScroll() {
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// =====================
// SMOOTH SCROLLING
// =====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Only prevent default if it's not just "#"
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// =====================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =====================
function initScrollAnimations() {
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

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// =====================
// NUMBER ANIMATION (FOR METRICS)
// =====================
function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

function initMetricsAnimation() {
  const metrics = document.querySelectorAll('.metric-value');

  if (metrics.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          const targetText = entry.target.textContent;
          const targetNumber = parseInt(targetText.replace(/\D/g, ''));

          if (!isNaN(targetNumber)) {
            entry.target.textContent = '0';
            animateNumber(entry.target, targetNumber);

            // Add back any suffix (like + or %)
            setTimeout(() => {
              const suffix = targetText.replace(/[0-9]/g, '');
              entry.target.textContent += suffix;
            }, 2000);
          }
        }
      });
    }, { threshold: 0.5 });

    metrics.forEach(metric => observer.observe(metric));
  }
}

// =====================
// CLIENT LOGO CAROUSEL
// =====================
function initClientCarousel() {
  const carousel = document.querySelector('.clients-carousel');

  if (carousel && typeof siteData !== 'undefined') {
    // Duplicate logos for infinite scroll effect
    const logos = siteData.clients;
    const logosHTML = logos.map(client => `
      <div class="client-logo">
        <span style="color: var(--color-text-muted); font-weight: 600;">${client.name}</span>
      </div>
    `).join('');

    // Duplicate twice for seamless loop
    carousel.innerHTML = logosHTML + logosHTML;
  }
}

// =====================
// POPULATE SERVICES ON HOME PAGE
// =====================
function populateHomeServices() {
  const servicesContainer = document.getElementById('home-services-grid');

  if (servicesContainer && typeof siteData !== 'undefined') {
    const servicesHTML = siteData.services.map(service => `
      <div class="service-card fade-in">
        <span class="service-icon">${service.icon}</span>
        <h3 class="service-title">${service.name}</h3>
        <p class="service-description">${service.shortDescription}</p>
        <a href="services/${service.slug}.html" class="service-link">
          Learn more →
        </a>
      </div>
    `).join('');

    servicesContainer.innerHTML = servicesHTML;
    initScrollAnimations(); // Re-init animations for new elements
  }
}

// =====================
// POPULATE CASE STUDIES CAROUSEL ON HOME PAGE
// =====================
function populateHomeCaseStudies() {
  const caseStudiesContainer = document.getElementById('home-case-studies-track');

  if (caseStudiesContainer && typeof siteData !== 'undefined') {
    // Show all case studies in carousel (not limited to 3)
    const featuredCaseStudies = siteData.caseStudies.filter(cs => cs.featured);

    const caseStudiesHTML = featuredCaseStudies.map(caseStudy => `
      <div class="case-study-card">
        <div class="case-study-image"></div>
        <div class="case-study-content">
          <div class="case-study-industry">${caseStudy.industry}</div>
          <h3 class="case-study-title">${caseStudy.title}</h3>
          <div class="case-study-services">
            ${caseStudy.services.slice(0, 2).map(service => `<span class="case-study-tag">${service}</span>`).join('')}
          </div>
          <div class="case-study-results">
            ${caseStudy.results.slice(0, 2).map(result => `
              <div class="case-study-metric">
                <span class="case-study-metric-value">${result.metric}</span>
                <span class="case-study-metric-label">${result.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    caseStudiesContainer.innerHTML = caseStudiesHTML;

    // Initialize carousel navigation
    initCaseStudiesCarousel();
  }
}

// =====================
// CASE STUDIES CAROUSEL NAVIGATION
// =====================
function initCaseStudiesCarousel() {
  const track = document.getElementById('home-case-studies-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = 300; // Scroll by ~1 card width + gap

  prevBtn.addEventListener('click', () => {
    track.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  // Update button states based on scroll position
  function updateButtonStates() {
    const isAtStart = track.scrollLeft <= 0;
    const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;

    prevBtn.disabled = isAtStart;
    nextBtn.disabled = isAtEnd;
  }

  track.addEventListener('scroll', updateButtonStates);
  updateButtonStates(); // Initial state
}

// =====================
// POPULATE TESTIMONIALS ON HOME PAGE
// =====================
function populateHomeTestimonials() {
  const testimonialsContainer = document.getElementById('home-testimonials-grid');

  if (testimonialsContainer && typeof siteData !== 'undefined') {
    const testimonials = siteData.testimonials.slice(0, 3);

    const testimonialsHTML = testimonials.map(testimonial => `
      <div class="testimonial-card fade-in">
        <p class="testimonial-quote">${testimonial.quote}</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar"></div>
          <div class="testimonial-info">
            <h4>${testimonial.author}</h4>
            <p class="testimonial-role">${testimonial.role}, ${testimonial.company}</p>
          </div>
        </div>
      </div>
    `).join('');

    testimonialsContainer.innerHTML = testimonialsHTML;
    initScrollAnimations();
  }
}

// =====================
// POPULATE BLOG POSTS ON HOME PAGE
// =====================
function populateHomeBlog() {
  const blogContainer = document.getElementById('home-blog-grid');

  if (blogContainer && typeof siteData !== 'undefined') {
    const recentPosts = siteData.blogPosts.filter(post => post.featured).slice(0, 3);

    const blogHTML = recentPosts.map(post => `
      <article class="blog-card fade-in">
        <div class="blog-image"></div>
        <div class="blog-content">
          <span class="blog-category">${post.category}</span>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <div class="blog-meta">
            <span>${post.date}</span>
            <span>${post.readTime} read</span>
          </div>
        </div>
      </article>
    `).join('');

    blogContainer.innerHTML = blogHTML;
    initScrollAnimations();
  }
}

// =====================
// POPULATE SERVICES OVERVIEW PAGE
// =====================
function populateServicesPage() {
  const servicesContainer = document.getElementById('services-grid');

  if (servicesContainer && typeof siteData !== 'undefined') {
    const servicesHTML = siteData.services.map(service => `
      <div class="service-card fade-in">
        <span class="service-icon">${service.icon}</span>
        <h3 class="service-title">${service.name}</h3>
        <p class="service-description">${service.shortDescription}</p>
        <a href="${service.slug}.html" class="btn btn-secondary btn-sm">
          Learn more →
        </a>
      </div>
    `).join('');

    servicesContainer.innerHTML = servicesHTML;
    initScrollAnimations();
  }
}

// =====================
// POPULATE TEAM PAGE
// =====================
function populateTeamSection() {
  const teamContainer = document.getElementById('team-grid');

  if (teamContainer && typeof siteData !== 'undefined') {
    const teamHTML = siteData.team.map(member => `
      <div class="team-card fade-in">
        <div class="team-image"></div>
        <div class="team-info">
          <h3 class="team-name">${member.name}</h3>
          <p class="team-role">${member.role}</p>
          <p class="team-bio">${member.bio}</p>
        </div>
      </div>
    `).join('');

    teamContainer.innerHTML = teamHTML;
    initScrollAnimations();
  }
}

// =====================
// POPULATE BLOG LISTING PAGE
// =====================
function populateBlogListing() {
  const blogContainer = document.getElementById('blog-posts-grid');
  const categoryFilter = document.getElementById('blog-category-filter');

  if (blogContainer && typeof siteData !== 'undefined') {
    let currentFilter = 'All';

    function renderPosts(filter = 'All') {
      const filteredPosts = filter === 'All'
        ? siteData.blogPosts
        : siteData.blogPosts.filter(post => post.category === filter);

      const blogHTML = filteredPosts.map(post => `
        <article class="blog-card fade-in">
          <div class="blog-image"></div>
          <div class="blog-content">
            <span class="blog-category">${post.category}</span>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-meta">
              <span>${post.date}</span>
              <span>${post.readTime} read</span>
            </div>
          </div>
        </article>
      `).join('');

      blogContainer.innerHTML = blogHTML;
      initScrollAnimations();
    }

    // Create category filters
    if (categoryFilter) {
      const categories = ['All', ...new Set(siteData.blogPosts.map(post => post.category))];

      const filtersHTML = categories.map(category => `
        <button class="btn btn-sm ${category === 'All' ? 'btn-primary' : 'btn-secondary'}" data-category="${category}">
          ${category}
        </button>
      `).join('');

      categoryFilter.innerHTML = filtersHTML;

      // Add event listeners to filter buttons
      categoryFilter.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
          const category = e.target.dataset.category;
          currentFilter = category;

          // Update active state
          categoryFilter.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-secondary');
          });
          e.target.classList.remove('btn-secondary');
          e.target.classList.add('btn-primary');

          renderPosts(category);
        });
      });
    }

    // Initial render
    renderPosts();
  }
}

// =====================
// CONTACT FORM HANDLING
// =====================
function initContactForm() {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      // Basic validation
      let isValid = true;
      const errors = {};

      if (!data.name || data.name.trim().length < 2) {
        errors.name = 'Please enter your name';
        isValid = false;
      }

      if (!data.email || !isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
      }

      if (!data.message || data.message.trim().length < 10) {
        errors.message = 'Please enter a message (at least 10 characters)';
        isValid = false;
      }

      // Clear previous errors
      document.querySelectorAll('.form-error').forEach(el => el.remove());

      if (!isValid) {
        // Display errors
        Object.keys(errors).forEach(field => {
          const input = contactForm.querySelector(`[name="${field}"]`);
          const error = document.createElement('div');
          error.className = 'form-error';
          error.textContent = errors[field];
          input.parentNode.appendChild(error);
        });
        return;
      }

      // Simulate form submission (replace with actual API call)
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      setTimeout(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
        contactForm.insertAdjacentElement('beforebegin', successMessage);

        // Reset form
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }, 1500);
    });
  }
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// =====================
// SET ACTIVE NAV LINK
// =====================
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    // Check if current path matches or starts with the link path
    if (currentPath === linkPath || (linkPath !== '/index.html' && currentPath.startsWith(linkPath.replace('.html', '')))) {
      link.classList.add('active');
    }
  });
}

// =====================
// INITIALIZE EVERYTHING
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // Core functionality (runs on all pages)
  initMobileNav();
  initHeaderScroll();
  initSmoothScroll();
  initScrollAnimations();
  initMetricsAnimation();
  setActiveNavLink();

  // Page-specific functionality
  initClientCarousel();
  populateHomeServices();
  populateHomeCaseStudies();
  populateHomeTestimonials();
  populateHomeBlog();
  populateServicesPage();
  populateTeamSection();
  populateBlogListing();
  initContactForm();
});

// =====================
// EXPORT FOR POTENTIAL MODULE USE
// =====================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initMobileNav,
    initHeaderScroll,
    initSmoothScroll,
    initScrollAnimations
  };
}
