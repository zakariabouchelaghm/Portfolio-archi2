document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation library
    AOS.init({
        once: true,
        offset: 50,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Handle scroll indicator click
    const scrollIndicator = document.querySelector('.hero-scroll');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('.projects-section');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollIndicator.style.cursor = 'pointer';
    }

    // Language Toggle
    const langEnBtn = document.getElementById('lang-en');
    const langArBtn = document.getElementById('lang-ar');

    function setLanguage(lang) {
        if (lang === 'ar') {
            document.body.classList.add('lang-arabic');
            document.body.dir = 'rtl';
            langArBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            document.documentElement.lang = 'ar';
        } else {
            document.body.classList.remove('lang-arabic');
            document.body.dir = 'ltr';
            langEnBtn.classList.add('active');
            langArBtn.classList.remove('active');
            document.documentElement.lang = 'en';
        }

        // Refresh AOS on language change to recalculate positions correctly
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }

    if (langEnBtn && langArBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
        langArBtn.addEventListener('click', () => setLanguage('ar'));
    }
});
