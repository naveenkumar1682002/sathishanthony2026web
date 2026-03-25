// Toggle menu icon
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    let icon = menuIcon.querySelector('i');
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Remove menu icon toggle when scrolling
    let icon = menuIcon.querySelector('i');
    if (icon && icon.classList.contains('bx-x')) {
        icon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

// Scroll Reveal Animation (using Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

const fadeElements = document.querySelectorAll('.home-content, .about-content, .exp-card, .portfolio-box, .service-box');
fadeElements.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Animate Skills Bar on scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-per');
            bars.forEach(bar => bar.classList.add('animated'));
        }
    });
});

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}
