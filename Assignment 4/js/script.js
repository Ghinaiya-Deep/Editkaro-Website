// --- 1. Portfolio Data Structure (Used in portfolio.html) ---
const portfolioItems = [
    // 🚨 IMPORTANT: Replace placeholder URLs with your client's actual assets
    { 
        id: 1, 
        title: "High-Conversion E-Commerce Ad", 
        category: "eCommerce Ads", 
        description: "Ad for a new product launch.", 
        thumbnail: "https://via.placeholder.com/350x200/FF5722/121212?text=eCommerce+Ad",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1" // Use YouTube EMBED link
    },
    { 
        id: 2, 
        title: "Twitch Stream Gaming Highlights", 
        category: "Gaming", 
        description: "Fast-paced, dynamic montage.", 
        thumbnail: "https://via.placeholder.com/350x200/00bcd4/121212?text=Gaming+Video",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 3, 
        title: "Documentary - Brand Story", 
        category: "Documentary", 
        description: "A compelling narrative of a startup.", 
        thumbnail: "https://via.placeholder.com/350x200/4CAF50/121212?text=Documentary+Style",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 4, 
        title: "Reel: Viral Short-form Content", 
        category: "Short-form", 
        description: "15-second high-energy content.", 
        thumbnail: "https://via.placeholder.com/350x200/FF9800/121212?text=Short-form+Video",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 5, 
        title: "Football Match Hype Edit", 
        category: "Football", 
        description: "Dramatic edit for a major game.", 
        thumbnail: "https://via.placeholder.com/350x200/2196F3/121212?text=Football+Edits",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 6, 
        title: "Cinematic Color Grading Reel", 
        category: "Color Grading", 
        description: "Showcasing professional color correction.", 
        thumbnail: "https://via.placeholder.com/350x200/9C27B0/121212?text=Color+Grading",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 7, 
        title: "YouTube Long-form Tutorial", 
        category: "Long-form", 
        description: "30-minute educational content piece.", 
        thumbnail: "https://via.placeholder.com/350x200/F44336/121212?text=Long-form+Video",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 8, 
        title: "Anime AMV: Action Sequence", 
        category: "Anime", 
        description: "Music video with perfectly synced edits.", 
        thumbnail: "https://via.placeholder.com/350x200/E91E63/121212?text=Anime+Videos",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
    { 
        id: 9, 
        title: "General Service Ad", 
        category: "Ads", 
        description: "Promotional spot for all services.", 
        thumbnail: "https://via.placeholder.com/350x200/673AB7/121212?text=General+Ads",
        videoUrl: "https://www.youtube.com/embed/5O0YDHiosD0?autoplay=1"
    },
];

const categories = [
    "All", "Short-form", "Long-form", "Gaming", "Football", 
    "eCommerce Ads", "Documentary", "Color Grading", "Anime", "Ads"
];


// --- 2. Portfolio Functionality (Only runs on portfolio.html) ---
if (document.getElementById('portfolio-grid')) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterBar = document.getElementById('filter-bar');
    const lightbox = document.getElementById('video-lightbox');
    const closeBtn = document.querySelector('.close-btn');
    const lightboxVideoPlayer = document.getElementById('lightbox-video-player');

    // Portfolio Initialization
    generateFilterButtons();
    renderPortfolio(portfolioItems);

    function generateFilterButtons() {
        categories.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.textContent = category;
            button.setAttribute('data-category', category);
            
            if (category === "All") {
                button.classList.add('active');
            }

            button.addEventListener('click', () => {
                filterPortfolio(category);
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
            filterBar.appendChild(button);
        });
    }

    function renderPortfolio(items) {
        portfolioGrid.innerHTML = '';
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('portfolio-item');
            const classCategory = item.category.toLowerCase().replace(/[^a-z0-9]/g, ''); 
            itemElement.setAttribute('data-category', classCategory);
            itemElement.innerHTML = `
                <img src="${item.thumbnail}" alt="${item.title} Preview" class="video-preview">
                <div class="video-overlay">
                    <i class="fas fa-play play-icon"></i>
                </div>
                <div class="item-info">
                    <h3>${item.title}</h3>
                    <p>Category: ${item.category}</p>
                </div>
            `;
            
            itemElement.addEventListener('click', () => openLightbox(item.videoUrl));
            portfolioGrid.appendChild(itemElement);
        });
    }

    function filterPortfolio(selectedCategory) {
        const items = document.querySelectorAll('.portfolio-item');
        
        items.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const targetCategory = selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, '');

            if (selectedCategory === "All" || itemCategory === targetCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Lightbox Logic
    function openLightbox(videoUrl) {
        lightboxVideoPlayer.src = videoUrl;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightboxVideoPlayer.src = ''; 
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}


// --- 3. Form Submission Logic (Runs on index.html and contact.html) ---

const forms = document.querySelectorAll('form');
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbztlJvsT5q6z8E38Mge5cq_03N7p57rVgP5vWwvczD33BI8HYhFgeeeDElHINsJNOBx0w/exec'; // 🚨 IMPORTANT: Replace this

forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formType = this.getAttribute('data-form-type');
        const messageElement = document.getElementById(formType + '-message');
        const submitButton = this.querySelector('button[type="submit"]');

        submitButton.disabled = true;
        messageElement.textContent = 'Sending...';
        messageElement.style.color = '#fff';

        const formData = new FormData(this);
        const data = { type: formType };
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }

        try {
            const response = await fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script Web App
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            // Since we use 'no-cors', we cannot read the response status, 
            // so we assume success and update the UI.
            
            if (formType === 'email') {
                messageElement.textContent = 'Subscribed successfully! Thank you.';
            } else {
                messageElement.textContent = 'Message sent! We will contact you shortly.';
            }
            messageElement.style.color = 'lightgreen';
            this.reset(); // Clear the form on success

        } catch (error) {
            messageElement.textContent = 'An error occurred. Please try again later.';
            messageElement.style.color = 'red';
            console.error('Submission error:', error);
        } finally {
            submitButton.disabled = false;
        }
    });
});