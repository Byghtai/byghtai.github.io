// Smooth scrolling für Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling für alle Anchor-Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header Scroll-Effekt
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Kontakt-Formular Handling
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Einfache Form-Validierung
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                // Simuliere Form-Submission
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Wird gesendet...';
                submitBtn.disabled = true;
                
                // Simuliere API-Call
                setTimeout(() => {
                    submitBtn.textContent = 'Gesendet! ✓';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    
                    // Reset form
                    this.reset();
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }, 3000);
                }, 2000);
            } else {
                alert('Bitte füllen Sie alle Felder aus.');
            }
        });
    }

    // Mobile Menu Toggle (falls implementiert)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('mobile-active');
        });
    }

    // Intersection Observer für Animationen
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Beobachte alle Feature Cards und Stats
    const animatedElements = document.querySelectorAll('.feature-card, .stat, .about-text');
    animatedElements.forEach(el => {
        observer.observe(el);
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });

    // CSS für Animationen hinzufügen
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .mobile-active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .nav-links.mobile-active {
                display: flex;
            }
        }
    `;
    document.head.appendChild(style);

    // Button Hover-Effekte verstärken
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .cta-button, .submit-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Neural Network Animation Enhancement
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach((node, index) => {
        node.style.animationDelay = `${index * 0.5}s`;
        
        // Add click interaction
        node.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'pulse 2s ease-in-out infinite';
            }, 10);
        });
    });

    // Parallax-Effekt für Hero-Section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-visual');
        
        if (parallax) {
            const speed = scrolled * 0.5;
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Console-Nachricht für Entwickler
    console.log('🚀 byght.ai Website erfolgreich geladen!');
    console.log('💡 Diese Website wurde für GitHub Pages optimiert.');
}); 