document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const typed = new Typed('#typed', {
        strings: ['Python開発', 'C#アプリ', 'AWSインフラ', 'IEC 61131-3 制御'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    const header = document.querySelector('header');
    const observer = new IntersectionObserver(([e]) => {
        header.classList.toggle('nav-scrolled', !e.isIntersecting);
    });
    observer.observe(document.querySelector('#hero'));
});
