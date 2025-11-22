// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Navigation Menu Items
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // For demo purposes, show which link was clicked
        // Get the text content and clean it
        let linkText = '';
        
        // Try multiple methods to get the text
        if (this.innerText) {
            linkText = this.innerText.trim();
        } else if (this.textContent) {
            linkText = this.textContent.trim();
        }
        
        // If we still don't have text, try to get it from the HTML content
        if (!linkText && this.innerHTML) {
            linkText = this.innerHTML.replace(/<[^>]*>/g, '').trim();
        }
        
        // Validate that we have a proper link text
        if (linkText && linkText !== 'Home') {
            alert(`Navigating to ${linkText} section`);
        } else if (linkText === 'Home') {
            // For home link, we don't show an alert but still set it as active
            console.log('Navigating to Home section');
        } else {
            // Fallback in case we can't determine the link text
            const href = this.getAttribute('href');
            alert(`Navigating to section: ${href || 'unknown'}`);
        }
        
        // Log to console for debugging
        console.log(`Clicked on navigation item: ${linkText || 'unknown'}`);
    });
});

// Search Functionality
const searchForm = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-bar button');

if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchInput = this.querySelector('input');
        if (searchInput.value.trim()) {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
}

if (searchButton) {
    searchButton.addEventListener('click', function() {
        const searchInput = this.previousElementSibling;
        if (searchInput.value.trim()) {
            alert(`Searching for: ${searchInput.value}`);
            searchInput.value = '';
        }
    });
}

// Hero Buttons
const heroPrimaryBtn = document.querySelector('.hero .btn.primary');
const heroSecondaryBtn = document.querySelector('.hero .btn.secondary');

if (heroPrimaryBtn) {
    heroPrimaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Viewing our services...');
        // Scroll to services section
        document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
    });
}

if (heroSecondaryBtn) {
    heroSecondaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Viewing case studies...');
        // Scroll to case studies section
        document.querySelector('.case-studies').scrollIntoView({ behavior: 'smooth' });
    });
}

// Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    const readMoreLink = card.querySelector('.read-more');
    if (readMoreLink) {
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = card.querySelector('h3').textContent;
            alert(`Learning more about ${serviceName}...`);
        });
    }
});

// Case Study Cards
const caseStudyCards = document.querySelectorAll('.case-study-card');
caseStudyCards.forEach(card => {
    const readMoreLink = card.querySelector('.read-more');
    if (readMoreLink) {
        readMoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            const caseStudyName = card.querySelector('h3').textContent;
            alert(`Viewing case study: ${caseStudyName}...`);
        });
    }
});

// CTA Buttons
const ctaPrimaryBtn = document.querySelector('.cta .btn.primary');
const ctaSecondaryBtn = document.querySelector('.cta .btn.secondary');

if (ctaPrimaryBtn) {
    ctaPrimaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Getting started with our services...');
    });
}

if (ctaSecondaryBtn) {
    ctaSecondaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Requesting a demo...');
    });
}

// Contact Button
const contactBtn = document.querySelector('.contact-btn .btn');
if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Contacting us...');
    });
}

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Show confirmation message
        alert(`Thank you, ${name}! Your message has been sent. We'll contact you at ${email} shortly.`);
        
        // Reset form
        this.reset();
    });
}

// Header Links
const headerLinks = document.querySelectorAll('.header-links a');
headerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent.trim();
        alert(`Accessing ${linkText}...`);
    });
});

// Footer Links
const footerLinks = document.querySelectorAll('.footer-column ul li a');
footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.textContent.trim();
        alert(`Navigating to ${linkText}...`);
    });
});

// Testimonial Slider (simple version)
let currentTestimonial = 0;
const testimonials = [
    {
        text: "GlobalTech's expertise in digital transformation helped us modernize our operations and increase efficiency by 50%. Their team was professional and delivered beyond our expectations.",
        author: "Sarah Johnson",
        role: "CTO, FinServe Corp"
    },
    {
        text: "Working with GlobalTech was a game-changer for our business. Their cloud solutions reduced our IT costs by 40% while improving performance.",
        author: "Michael Chen",
        role: "IT Director, HealthPlus"
    },
    {
        text: "The cybersecurity implementation by GlobalTech protected our sensitive data and gave our clients confidence in our platform security.",
        author: "Jennifer Williams",
        role: "CEO, FinTech Innovations"
    }
];

function updateTestimonial() {
    const testimonialContent = document.querySelector('.testimonial-content p');
    const testimonialAuthor = document.querySelector('.testimonial-author h4');
    const testimonialRole = document.querySelector('.testimonial-author span');
    
    if (testimonialContent && testimonialAuthor && testimonialRole) {
        testimonialContent.textContent = testimonials[currentTestimonial].text;
        testimonialAuthor.textContent = testimonials[currentTestimonial].author;
        testimonialRole.textContent = testimonials[currentTestimonial].role;
    }
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Change testimonial every 5 seconds
setInterval(updateTestimonial, 5000);

// Simple modal styling for any future modals
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        display: none;
    }
    
    .modal-content {
        background: #fff;
        padding: 30px;
        border-radius: 8px;
        max-width: 500px;
        width: 90%;
        position: relative;
    }
    
    .close {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 28px;
        cursor: pointer;
    }
`;

document.head.appendChild(style);