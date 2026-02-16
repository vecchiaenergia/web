document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('animate-fade-in-down');
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
            header.classList.remove('bg-white/90', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-white', 'shadow-md');
            header.classList.add('bg-white/90', 'backdrop-blur-sm');
        }
    });
});

function togglePortfolio() {
    const extra = document.getElementById('portfolio-extra');
    const btnText = document.getElementById('btn-text');
    const btnArrow = document.getElementById('btn-arrow');
    const cards = extra.querySelectorAll(':scope > div');
    const isHidden = extra.style.display === 'none';
    
    if (isHidden) {
        extra.style.display = 'grid';
        extra.classList.remove('collapsing');
        btnText.textContent = 'Ver Menos';
        btnArrow.style.transform = 'rotate(180deg)';

        cards.forEach((card, i) => {
            card.style.transitionDelay = (i * 80) + 'ms';
        });

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                extra.classList.add('revealing');
            });
        });
    } else {
        extra.classList.remove('revealing');
        extra.classList.add('collapsing');

        cards.forEach((card, i) => {
            card.style.transitionDelay = (i * 30) + 'ms';
        });

        const totalTime = (cards.length * 30) + 300;
        setTimeout(() => {
            extra.style.display = 'none';
            extra.classList.remove('collapsing');
            cards.forEach(card => { card.style.transitionDelay = '0ms'; });
            document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
        }, totalTime);

        btnText.textContent = 'Ver Todos os Projetos (32)';
        btnArrow.style.transform = 'rotate(0deg)';
    }
}

