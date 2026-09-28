// Form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous messages
    formStatus.textContent = '';
    formStatus.className = 'form-status';
    
    // Validate form
    let isValid = true;
    const formGroups = document.querySelectorAll('.form-group');
    
    formGroups.forEach(group => {
        group.classList.remove('error');
        const input = group.querySelector('input, select, textarea');
        const errorSpan = group.querySelector('.error-message');
        
        if (!input.value.trim()) {
            isValid = false;
            group.classList.add('error');
            errorSpan.textContent = 'This field is required';
        }
    });
    
    if (isValid) {
        // Simulate form submission
        formStatus.textContent = 'Thank you! We received your message. We\'ll get back to you within 24 hours.';
        formStatus.classList.add('success');
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    }
});

// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all
        document.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // Open clicked
        if (!isActive) {
            item.classList.add('active');
        }
    });
});