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
        'dashboard-title': 'ISO 27001 Compliance Status',
        'dashboard-subtitle': 'Übersicht Ihrer aktuellen Sicherheitskontrollen',
        'kpi-controls': 'Controls',
        'kpi-total': 'Total implementiert',
        'kpi-implementation': 'Implementation',
        'kpi-coverage': 'Coverage Rate',
        'kpi-evidence': 'Evidence',
        'kpi-documented': 'Dokumentiert',
        'kpi-pending': 'Pending',
        'kpi-reviews': 'Reviews',
        'metric-automated': 'Automatisierte Controls',
        'metric-realtime': 'Echtzeit-Monitoring',
        'metric-uptime': 'Verfügbarkeit',
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
        'dashboard-title': 'ISO 27001 Compliance Status',
        'dashboard-subtitle': 'Overview of your current security controls',
        'kpi-controls': 'Controls',
        'kpi-total': 'Total implemented',
        'kpi-implementation': 'Implementation',
        'kpi-coverage': 'Coverage Rate',
        'kpi-evidence': 'Evidence',
        'kpi-documented': 'Documented',
        'kpi-pending': 'Pending',
        'kpi-reviews': 'Reviews',
        'metric-automated': 'Automated Controls',
        'metric-realtime': 'Real-time Monitoring',
        'metric-uptime': 'Uptime',
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

// Typewriter Effect
class TypewriterEffect {
    constructor(element, texts, speed = 50) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isWaiting = false;
    }

    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (!this.isDeleting && this.currentCharIndex <= currentText.length) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex);
            this.currentCharIndex++;
            
            if (this.currentCharIndex > currentText.length) {
                this.element.classList.add('typing-complete');
                this.isWaiting = true;
                setTimeout(() => {
                    this.isWaiting = false;
                    this.isDeleting = true;
                    this.element.classList.remove('typing-complete');
                }, 2000);
            }
        } else if (this.isDeleting && this.currentCharIndex >= 0) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex);
            this.currentCharIndex--;
            
            if (this.currentCharIndex < 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                this.currentCharIndex = 0;
            }
        }

        if (!this.isWaiting) {
            setTimeout(() => this.type(), this.isDeleting ? this.speed / 2 : this.speed);
        }
    }

    start() {
        this.type();
    }
}

// Particle System
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.animationId = null;
        
        this.resize();
        this.createParticles();
        this.setupEventListeners();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        // Reduce particles on mobile devices
        const isMobile = window.innerWidth < 768;
        const baseDensity = isMobile ? 25000 : 15000;
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / baseDensity);
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                originalX: 0,
                originalY: 0
            });
        }
        
        this.particles.forEach(particle => {
            particle.originalX = particle.x;
            particle.originalY = particle.y;
        });
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.mouse.x = -100;
            this.mouse.y = -100;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;
            
            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                particle.vx -= (dx / distance) * force * 0.1;
                particle.vy -= (dy / distance) * force * 0.1;
            }
            
            // Return to original position
            const returnForce = 0.02;
            particle.vx += (particle.originalX - particle.x) * returnForce;
            particle.vy += (particle.originalY - particle.y) * returnForce;
            
            // Apply friction
            particle.vx *= 0.95;
            particle.vy *= 0.95;
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
            
            // Draw connections
            this.particles.forEach(otherParticle => {
                if (particle !== otherParticle) {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(otherParticle.x, otherParticle.y);
                        this.ctx.strokeStyle = `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
                        this.ctx.stroke();
                    }
                }
            });
        });
        
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

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
    
    // Update typewriter texts if function exists
    if (typeof window.updateTypewriterTexts === 'function') {
        window.updateTypewriterTexts();
    }
}

// Initialize language on page load
function initializeLanguage() {
    setLanguage(currentLang);
}

// Smooth scrolling für Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    initializeLanguage();
    
    // Initialize Typewriter Effect
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        const typewriter = new TypewriterEffect(
            typewriterElement,
            [
                i18n[currentLang]['hero-title'],
                'AI-Powered Security',
                'ISO 27001 Ready',
                'Enterprise Solutions'
            ],
            100
        );
        
        // Update typewriter texts when language changes
        window.updateTypewriterTexts = function() {
            typewriter.texts = [
                i18n[currentLang]['hero-title'],
                currentLang === 'de' ? 'KI-gestützte Sicherheit' : 'AI-Powered Security',
                'ISO 27001 Ready',
                currentLang === 'de' ? 'Enterprise Lösungen' : 'Enterprise Solutions'
            ];
        };
        
        setTimeout(() => typewriter.start(), 500);
    }
    
    // Initialize Particle System
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        const particleSystem = new ParticleSystem(canvas);
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            particleSystem.destroy();
        });
    }
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
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

    // Dashboard Animation Enhancement
    const kpiCards = document.querySelectorAll('.kpi-card');
    
    kpiCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });



}); 