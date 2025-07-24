// Internationalization object
const i18n = {
    de: {
        'page-title': 'Byght.ai - Künstliche Intelligenz der nächsten Generation',
        'nav-features': 'Features',
        'nav-about': 'Über uns',
        'nav-contact': 'Kontakt',
        'nav-cta': 'Demo starten',
        'hero-title': 'Die Zukunft der KI ist hier',
        'hero-subtitle': 'Entdecken Sie mit byght.ai innovative Lösungen für künstliche Intelligenz, die Ihr Unternehmen revolutionieren werden.',
        'hero-cta-primary': 'Jetzt starten',
        'hero-cta-secondary': 'Demo ansehen',
        'features-title': 'Unsere Features',
        'feature-1-title': 'Intelligente Algorithmen',
        'feature-1-desc': 'Modernste Machine Learning Algorithmen für präzise Vorhersagen und Analysen.',
        'feature-2-title': 'Blitzschnell',
        'feature-2-desc': 'Optimierte Performance für Echtzeit-Verarbeitung großer Datenmengen.',
        'feature-3-title': 'Sicher & Zuverlässig',
        'feature-3-desc': 'Enterprise-grade Sicherheit mit 99.9% Verfügbarkeit garantiert.',
        'about-title': 'Über byght.ai',
        'about-desc': 'Wir sind ein innovatives Team von KI-Experten, das sich darauf spezialisiert hat, komplexe Probleme mit modernster künstlicher Intelligenz zu lösen.',
        'about-point-1': '10+ Jahre Erfahrung in KI',
        'about-point-2': '500+ erfolgreiche Projekte',
        'about-point-3': 'Fortune 500 Kunden',
        'stat-uptime': 'Verfügbarkeit',
        'stat-projects': 'Projekte',
        'stat-support': 'Support',
        'contact-title': 'Kontaktieren Sie uns',
        'contact-subtitle': 'Bereit, die Zukunft der KI zu erleben? Lassen Sie uns sprechen!',
        'form-name': 'Ihr Name',
        'form-email': 'Ihre E-Mail',
        'form-message': 'Ihre Nachricht',
        'form-submit': 'Nachricht senden',
        'form-sending': 'Wird gesendet...',
        'form-sent': 'Gesendet! ✓',
        'form-error': 'Bitte füllen Sie alle Felder aus.',
        'footer-tagline': 'Die Zukunft der künstlichen Intelligenz',
        'footer-product': 'Produkt',
        'footer-features': 'Features',
        'footer-pricing': 'Preise',
        'footer-api': 'API',
        'footer-company': 'Unternehmen',
        'footer-about': 'Über uns',
        'footer-careers': 'Karriere',
        'footer-blog': 'Blog',
        'footer-support-title': 'Support',
        'footer-help': 'Hilfe',
        'footer-contact': 'Kontakt',
        'footer-status': 'Status',
        'footer-copyright': '© 2024 byght.ai. Alle Rechte vorbehalten.'
    },
    en: {
        'page-title': 'Byght.ai - Next Generation Artificial Intelligence',
        'nav-features': 'Features',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        'nav-cta': 'Start Demo',
        'hero-title': 'The Future of AI is Here',
        'hero-subtitle': 'Discover innovative artificial intelligence solutions with byght.ai that will revolutionize your business.',
        'hero-cta-primary': 'Get Started',
        'hero-cta-secondary': 'Watch Demo',
        'features-title': 'Our Features',
        'feature-1-title': 'Intelligent Algorithms',
        'feature-1-desc': 'State-of-the-art machine learning algorithms for precise predictions and analysis.',
        'feature-2-title': 'Lightning Fast',
        'feature-2-desc': 'Optimized performance for real-time processing of large datasets.',
        'feature-3-title': 'Secure & Reliable',
        'feature-3-desc': 'Enterprise-grade security with guaranteed 99.9% uptime.',
        'about-title': 'About byght.ai',
        'about-desc': 'We are an innovative team of AI experts specialized in solving complex problems with cutting-edge artificial intelligence.',
        'about-point-1': '10+ years of AI experience',
        'about-point-2': '500+ successful projects',
        'about-point-3': 'Fortune 500 clients',
        'stat-uptime': 'Uptime',
        'stat-projects': 'Projects',
        'stat-support': 'Support',
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Ready to experience the future of AI? Let\'s talk!',
        'form-name': 'Your Name',
        'form-email': 'Your Email',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'form-sending': 'Sending...',
        'form-sent': 'Sent! ✓',
        'form-error': 'Please fill in all fields.',
        'footer-tagline': 'The future of artificial intelligence',
        'footer-product': 'Product',
        'footer-features': 'Features',
        'footer-pricing': 'Pricing',
        'footer-api': 'API',
        'footer-company': 'Company',
        'footer-about': 'About',
        'footer-careers': 'Careers',
        'footer-blog': 'Blog',
        'footer-support-title': 'Support',
        'footer-help': 'Help',
        'footer-contact': 'Contact',
        'footer-status': 'Status',
        'footer-copyright': '© 2024 byght.ai. All rights reserved.'
    }
};

// Language management
let currentLang = localStorage.getItem('preferred-language') || 'de';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferred-language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            element.textContent = i18n[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (i18n[lang] && i18n[lang][key]) {
            element.setAttribute('placeholder', i18n[lang][key]);
        }
    });
    
    // Update document title
    if (i18n[lang] && i18n[lang]['page-title']) {
        document.title = i18n[lang]['page-title'];
    }
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language on page load
function initializeLanguage() {
    setLanguage(currentLang);
}

// Smooth scrolling für Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initializeLanguage();
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
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
                
                submitBtn.textContent = i18n[currentLang]['form-sending'];
                submitBtn.disabled = true;
                
                // Simuliere API-Call
                setTimeout(() => {
                    submitBtn.textContent = i18n[currentLang]['form-sent'];
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    
                    // Reset form
                    this.reset();
                    
                    setTimeout(() => {
                        submitBtn.textContent = i18n[currentLang]['form-submit'];
                        submitBtn.disabled = false;
                        submitBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    }, 3000);
                }, 2000);
            } else {
                alert(i18n[currentLang]['form-error']);
            }
        });
    }

    // Mobile Menu Toggle
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
    console.log('🌍 Mehrsprachigkeit: Deutsch & Englisch verfügbar');
    console.log('🍪 Cookiebot Integration bereit');
}); 