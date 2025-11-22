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
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        // For demo purposes, show which link was clicked
        const linkText = this.textContent;
        if (linkText !== 'Home') {
            alert(`Navigating to ${linkText} section`);
        }
    });
});

// Product Wishlist Toggle
const wishlistButtons = document.querySelectorAll('.wishlist-btn');

wishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            this.style.color = '#ff6b6b';
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            this.style.color = '';
        }
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
let cartCount = 3; // Initial cart count

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get product name
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Increase cart count
        cartCount++;
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cartCount;
        }
        
        // Show confirmation message
        alert(`${productName} has been added to your cart!`);
    });
});

// Quick View Functionality
const quickViewButtons = document.querySelectorAll('.quick-view-btn');

quickViewButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        // Create modal for quick view
        const modal = document.createElement('div');
        modal.className = 'quick-view-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${productName}</h2>
                <p>Price: ${productPrice}</p>
                <p>This is a demo e-commerce website. In a real implementation, this would show detailed product information, multiple images, specifications, and customer reviews.</p>
                <button class="btn">Add to Cart</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});

// Countdown Timer for Offers
function updateCountdown() {
    const countdownItems = document.querySelectorAll('.countdown-number');
    if (countdownItems.length === 4) {
        // This is just a demo - in a real implementation, you would calculate time until a specific date
        countdownItems[0].textContent = '02'; // Days
        countdownItems[1].textContent = '18'; // Hours
        countdownItems[2].textContent = '45'; // Minutes
        countdownItems[3].textContent = '30'; // Seconds
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        }
    });
}

// Shop Now Button
const shopNowBtn = document.querySelector('.hero .btn');
if (shopNowBtn) {
    shopNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to featured products section...');
        // Scroll to products section
        document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
    });
}

// Category Cards
const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach((card, index) => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryName = this.querySelector('h3').textContent;
        alert(`Viewing products in ${categoryName} category`);
    });
});

// Offer Deals Button
const offerDealsBtn = document.querySelector('.offers .btn');
if (offerDealsBtn) {
    offerDealsBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to special deals section...');
    });
}

// Testimonial Slider (simple version)
let currentTestimonial = 0;
const testimonials = [
    {
        text: "The quality of products and fast shipping exceeded my expectations. Will definitely shop here again!",
        author: "John Doe",
        role: "Verified Customer"
    },
    {
        text: "Amazing customer service and great selection of products. Highly recommend this store!",
        author: "Jane Smith",
        role: "Regular Customer"
    },
    {
        text: "Best online shopping experience I've had. The website is easy to navigate and checkout was seamless.",
        author: "Mike Johnson",
        role: "First-time Buyer"
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

// Header Action Buttons
const cartButton = document.querySelector('.cart a');
const userButton = document.querySelector('.user a');

if (cartButton) {
    cartButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Viewing shopping cart...');
    });
}

if (userButton) {
    userButton.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Accessing user account...');
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

// Simple modal styling for quick view
const style = document.createElement('style');
style.textContent = `
    .quick-view-modal {
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