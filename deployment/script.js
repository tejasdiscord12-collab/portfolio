// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '15px 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .portfolio-item, .about-text, .about-visual, .hero-content, .hero-visual').forEach(el => {
    observer.observe(el);
});

// Add animation classes to CSS
const style = document.createElement('style');
style.innerHTML = `
    .service-card, .portfolio-item, .about-text, .about-visual, .hero-content, .hero-visual {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .tech-item {
        opacity: 0;
        transform: translateY(20px);
    }
    
    .about-text.animated ~ .about-visual .tech-item {
        animation: fadeInUp 0.5s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .tech-item:nth-child(1) { animation-delay: 0.1s; }
    .tech-item:nth-child(2) { animation-delay: 0.2s; }
    .tech-item:nth-child(3) { animation-delay: 0.3s; }
    .tech-item:nth-child(4) { animation-delay: 0.4s; }
    .tech-item:nth-child(5) { animation-delay: 0.5s; }
    .tech-item:nth-child(6) { animation-delay: 0.6s; }
`;
document.head.appendChild(style);

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Code screen typing effect
document.addEventListener('DOMContentLoaded', function() {
    const codeLines = document.querySelectorAll('.code-content code');
    if (codeLines.length > 0) {
        // Add typing effect to code
        codeLines.forEach(code => {
            const originalText = code.innerHTML;
            code.innerHTML = '';
            
            let i = 0;
            const speed = 50;
            
            function typeWriter() {
                if (i < originalText.length) {
                    code.innerHTML += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            
            // Delay the typing effect for visual appeal
            setTimeout(typeWriter, 1000);
        });
    }
});