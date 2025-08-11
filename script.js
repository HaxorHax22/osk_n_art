// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    // Navigation scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.remove('transparent');
        } else {
            nav.classList.add('transparent');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Hero carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance carousel
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

// Artwork detail functionality
function openArtworkDetail(artworkId) {
    // For now, redirect to gallery page with artwork ID
    window.location.href = `gallery.html#${artworkId}`;
}

// Gallery filtering functionality
function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const artworkItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            artworkItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    const itemCategories = item.getAttribute('data-categories').split(' ');
                    if (itemCategories.includes(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Lightbox functionality
function openLightbox(imageSrc, title, description) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    if (lightbox) {
        lightboxImg.src = imageSrc;
        lightboxTitle.textContent = title;
        lightboxDescription.textContent = description;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Initialize lightbox event listeners
document.addEventListener('DOMContentLoaded', function() {
    const lightboxClose = document.getElementById('lightbox-close');
    const lightbox = document.getElementById('lightbox');
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function(e) {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        }
    });
    
    // Initialize gallery if on gallery page
    initializeGallery();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.artwork-card, .process-step, .instagram-post');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Form validation (if forms are added later)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Image lazy loading fallback (for older browsers)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScroll = debounce(() => {
    // Any scroll-based functionality can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Touch gesture support for mobile carousel
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            previousSlide();
        } else {
            nextSlide();
        }
    }
}

// Add touch event listeners to hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('touchstart', handleTouchStart, { passive: true });
        heroSection.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
});

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=1200&h=800&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&h=800&fit=crop&crop=center'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Call preload function
preloadCriticalImages();

// Service Worker registration for caching (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed');
        });
    });
}

// Analytics placeholder (replace with actual analytics code)
function initAnalytics() {
    // Google Analytics 4 or other analytics code would go here
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
    console.log('Analytics initialized (placeholder)');
}

// Initialize analytics
document.addEventListener('DOMContentLoaded', initAnalytics);

// Cookie consent (simple implementation)
function initCookieConsent() {
    if (!localStorage.getItem('cookieConsent')) {
        // In a real implementation, you'd show a cookie banner here
        // For now, we'll just note that cookies would be handled
        console.log('Cookie consent would be handled here');
    }
}

// Initialize cookie consent
document.addEventListener('DOMContentLoaded', initCookieConsent);

// Instagram Feed Integration
async function loadInstagramFeed() {
    const instagramGrid = document.getElementById('instagram-grid');
    const instagramFallback = document.getElementById('instagram-fallback');
    
    if (!instagramGrid) return;
    
    try {
        // Simulate Instagram API call (replace with actual API call when ready)
        // For now, we'll show the fallback content as "loaded" posts
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        
        // Hide loading and show fallback content
        instagramGrid.style.display = 'none';
        instagramFallback.style.display = 'block';
        
        console.log('Instagram feed loaded (fallback content shown)');
        
        // TODO: Implement actual Instagram Basic Display API
        // const response = await fetch('YOUR_INSTAGRAM_API_ENDPOINT');
        // const data = await response.json();
        // displayInstagramPosts(data);
        
    } catch (error) {
        console.log('Instagram feed failed to load, showing fallback');
        instagramGrid.style.display = 'none';
        instagramFallback.style.display = 'block';
    }
}

// Function to display Instagram posts (for future API integration)
function displayInstagramPosts(posts) {
    const instagramGrid = document.getElementById('instagram-grid');
    if (!instagramGrid || !posts || !posts.data) return;
    
    instagramGrid.innerHTML = '';
    
    // Take first 4 posts
    const postsToShow = posts.data.slice(0, 4);
    
    postsToShow.forEach(post => {
        const postElement = document.createElement('a');
        postElement.href = post.permalink;
        postElement.className = 'instagram-post';
        postElement.target = '_blank';
        postElement.rel = 'noopener';
        
        const img = document.createElement('img');
        img.src = post.media_url;
        img.alt = post.caption ? post.caption.substring(0, 50) + '...' : 'Instagram post';
        img.loading = 'lazy';
        
        const overlay = document.createElement('div');
        overlay.className = 'instagram-overlay';
        overlay.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
        `;
        
        postElement.appendChild(img);
        postElement.appendChild(overlay);
        instagramGrid.appendChild(postElement);
    });
    
    instagramGrid.style.display = 'grid';
}

// Initialize Instagram feed
document.addEventListener('DOMContentLoaded', function() {
    // Only load Instagram feed on homepage
    if (document.getElementById('instagram-grid')) {
        loadInstagramFeed();
    }
});

// Enhanced Artwork Gallery
window.artworkData = {
    'aurora-whispers': {
        title: 'Aurora Whispers',
        yearSize: '2024 • 90×70 cm',
        medium: 'Acrylic on canvas',
        description: 'A symphony of gold, white, and soft pink tones that captures the ethereal dance of northern lights across Iceland\'s winter sky. The delicate interplay of warm and cool hues creates a sense of movement and tranquility, perfect for bringing warmth and sophistication to any space.',
        tags: ['Gold/Earthy', 'Landscape', 'Large'],
        images: [
            {
                src: 'img/nr1/aurora-whispers-living-room.jpg',
                alt: 'Aurora Whispers displayed in a modern living room setting',
                title: 'Living Room Setting'
            },
            {
                src: 'img/nr1/aurora-whispers-bedroom.jpg',
                alt: 'Aurora Whispers displayed in a serene bedroom setting',
                title: 'Bedroom Setting'
            },
            {
                src: 'img/nr1/aurora-whispers-office.jpg',
                alt: 'Aurora Whispers displayed in a contemporary office space',
                title: 'Office Setting'
            },
            {
                src: 'img/nr1/aurora-whispers-detail.jpg',
                alt: 'Close-up detail of Aurora Whispers showing texture and brushwork',
                title: 'Detail View'
            }
        ]
    }
};

let currentArtwork = null;
let currentImageIndex = 0;

window.openArtworkGallery = function(artworkId) {
    console.log('Attempting to open artwork gallery for:', artworkId);
    const artwork = window.artworkData[artworkId];
    if (!artwork) {
        console.log('Artwork not found in data:', artworkId);
        console.log('Available artworks:', Object.keys(window.artworkData));
        return;
    }
    console.log('Artwork found:', artwork.title);
    
    currentArtwork = artwork;
    currentImageIndex = 0;
    
    const gallery = document.getElementById('artwork-gallery');
    const title = document.getElementById('artwork-gallery-title');
    const yearSize = document.getElementById('artwork-gallery-year-size');
    const description = document.getElementById('artwork-gallery-description');
    const medium = document.getElementById('artwork-gallery-medium');
    const tagsContainer = document.getElementById('artwork-gallery-tags');
    const imagesGrid = document.getElementById('artwork-images-grid');
    
    if (!gallery || !title || !yearSize || !description || !medium || !tagsContainer || !imagesGrid) {
        return;
    }
    
    // Set content
    title.textContent = artwork.title;
    yearSize.textContent = artwork.yearSize;
    description.textContent = artwork.description;
    medium.textContent = artwork.medium;
    
    // Set tags
    tagsContainer.innerHTML = '';
    artwork.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = `tag ${tag.toLowerCase().replace('/', '-').replace(' ', '-')}`;
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });
    
    // Create image grid
    imagesGrid.innerHTML = '';
    artwork.images.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'artwork-image-item';
        imageItem.onclick = () => openFullscreen(index);
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.title = image.title;
        
        imageItem.appendChild(img);
        imagesGrid.appendChild(imageItem);
    });
    
    // Show gallery
    gallery.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeArtworkGallery = function() {
    const gallery = document.getElementById('artwork-gallery');
    gallery.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentArtwork = null;
    currentImageIndex = 0;
};

// Fullscreen functionality
function openFullscreen(imageIndex) {
    if (!currentArtwork) return;
    
    currentImageIndex = imageIndex;
    const modal = document.getElementById('fullscreen-modal');
    const img = document.getElementById('fullscreen-img');
    const caption = document.getElementById('fullscreen-caption');
    
    if (!modal || !img || !caption) return;
    
    const currentImage = currentArtwork.images[currentImageIndex];
    img.src = currentImage.src;
    img.alt = currentImage.alt;
    caption.textContent = currentImage.title;
    
    modal.classList.add('active');
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreen-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function previousFullscreenImage() {
    if (!currentArtwork) return;
    const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentArtwork.images.length - 1;
    openFullscreen(newIndex);
}

function nextFullscreenImage() {
    if (!currentArtwork) return;
    const newIndex = currentImageIndex < currentArtwork.images.length - 1 ? currentImageIndex + 1 : 0;
    openFullscreen(newIndex);
}



// Check for artwork hash in URL
function checkArtworkHash() {
    const hash = window.location.hash.substring(1);
    if (hash && window.artworkData && window.artworkData[hash]) {
        // Add a small delay to ensure DOM is ready
        setTimeout(() => window.openArtworkGallery(hash), 100);
    }
}

// Initialize artwork gallery event listeners
document.addEventListener('DOMContentLoaded', function() {
    const artworkGalleryClose = document.getElementById('artwork-gallery-close');
    const artworkGallery = document.getElementById('artwork-gallery');
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenClose = document.getElementById('fullscreen-close');
    const fullscreenPrev = document.getElementById('fullscreen-prev');
    const fullscreenNext = document.getElementById('fullscreen-next');
    
    // Only set up event listeners if we're on the gallery page
    if (artworkGallery) {
        if (artworkGalleryClose) {
            artworkGalleryClose.addEventListener('click', window.closeArtworkGallery);
        }
        
        artworkGallery.addEventListener('click', function(e) {
            if (e.target === artworkGallery) {
                window.closeArtworkGallery();
            }
        });
        
        // Fullscreen modal event listeners
        if (fullscreenModal) {
            if (fullscreenClose) {
                fullscreenClose.addEventListener('click', closeFullscreen);
            }
            
            fullscreenModal.addEventListener('click', function(e) {
                if (e.target === fullscreenModal) {
                    closeFullscreen();
                }
            });
            
            if (fullscreenPrev) {
                fullscreenPrev.addEventListener('click', previousFullscreenImage);
            }
            
            if (fullscreenNext) {
                fullscreenNext.addEventListener('click', nextFullscreenImage);
            }
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (fullscreenModal && fullscreenModal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeFullscreen();
                } else if (e.key === 'ArrowLeft') {
                    previousFullscreenImage();
                } else if (e.key === 'ArrowRight') {
                    nextFullscreenImage();
                }
            } else if (artworkGallery.classList.contains('active')) {
                if (e.key === 'Escape') {
                    window.closeArtworkGallery();
                }
            }
        });
        
        // Set up gallery item click listeners
        const galleryItems = document.querySelectorAll('.gallery-item[data-artwork-id]');
        console.log('Found gallery items:', galleryItems.length);
        galleryItems.forEach(item => {
            const artworkId = item.getAttribute('data-artwork-id');
            console.log('Setting up click listener for:', artworkId);
            item.addEventListener('click', function() {
                console.log('Gallery item clicked:', artworkId);
                if (artworkId) {
                    window.openArtworkGallery(artworkId);
                }
            });
        });
        
        // Check hash on page load (only if on gallery page)
        checkArtworkHash();
        
        // Check hash on hash change
        window.addEventListener('hashchange', checkArtworkHash);
    }
});
