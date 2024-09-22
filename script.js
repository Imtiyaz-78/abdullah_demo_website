  // Navigation toggle
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// Scroll-based header
const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = '-80px';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector('.navbar');

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";  // Show navbar
    } else {
        navbar.style.top = "-80px";  // Hide navbar (adjust this value if needed)
    }
    prevScrollpos = currentScrollPos;
}


document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = '919871478635';

    const formattedMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(formattedMessage);

    const whatsappAppUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;

    const whatsappWebUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

     window.location.href = whatsappAppUrl;

     setTimeout(() => {
        window.open(whatsappWebUrl, '_blank');
    }, 1000);
}