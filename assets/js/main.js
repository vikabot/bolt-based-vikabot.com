// Mobile menu toggle
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handler with Web3Forms
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const submitBtn = document.getElementById('submit-btn');
            const formMessage = document.getElementById('form-message');
            const originalBtnText = submitBtn.textContent;

            // Update button state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formMessage.classList.add('hidden');

            try {
                const formData = new FormData(contactForm);

                // Update subject line with inquiry type
                const inquiryType = formData.get('inquiry_type');
                const company = formData.get('company');
                const subject = `VikaBot Inquiry: ${inquiryType}${company ? ' - ' + company : ''}`;
                document.getElementById('email-subject').value = subject;

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Success message
                    formMessage.textContent = '✅ Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
                    formMessage.classList.remove('hidden', 'bg-red-100', 'text-red-700');
                    formMessage.classList.add('bg-green-100', 'text-green-700');
                    contactForm.reset();
                } else {
                    throw new Error(data.message || 'Form submission failed');
                }
            } catch (error) {
                // Error message
                formMessage.textContent = '❌ Sorry, there was an error sending your message. Please try again or email us directly at support@vikabot.com';
                formMessage.classList.remove('hidden', 'bg-green-100', 'text-green-700');
                formMessage.classList.add('bg-red-100', 'text-red-700');
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // Add smooth scrolling to all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
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
    
    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});