
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
setInterval(nextSlide, 3000);
showSlide(currentSlide);

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function toggleLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (el.textContent === el.getAttribute('data-en')) {
            el.textContent = el.getAttribute('data-es');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });
}

// Auto-detect language
window.onload = function() {
    let lang = navigator.language || navigator.userLanguage;
    if(lang.startsWith('es')) {
        toggleLanguage();
    }
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    const counterElement = document.getElementById('visitor-counter');
    if(counterElement) {
        counterElement.textContent = 'Visitor Count: ' + count;
    }
}

// Lightbox functionality
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Blog search functionality
function searchPosts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        const text = post.textContent.toLowerCase();
        post.style.display = text.includes(query) ? 'block' : 'none';
    });
}
