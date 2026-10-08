/**
 * ATELIER ARCHITECTURE & INTERIOR DESIGN STUDIO
 * Master Application Script
 * Orchestrates preloader, cinematic media, portfolio filtering, project detail modals,
 * lightbox, before/after comparison, interactive sliders, custom cursor, and contact flows.
 */

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initHeaderScroll();
    initMobileMenu();
    initHeroMedia();
    renderStudioIntro();
    renderPortfolio();
    initPortfolioFiltering();
    renderServices();
    renderPhilosophy();
    renderWhyChooseUs();
    renderProcess();
    initBeforeAfterSlider();
    renderMaterials();
    renderStudioTeam();
    renderTestimonials();
    initStatsObserver();
    renderInstagram();
    renderJournal();
    initNewsletter();
    initContactForm();
    initScrollReveal();
    initBackToTop();
    initFallbackMedia();
});

/* --------------------------------------------------------------------------
   01. PRELOADER SEQUENCE
   -------------------------------------------------------------------------- */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const progressLine = document.getElementById('preloaderLine');
    const counter = document.getElementById('preloaderCounter');
    
    if (!preloader || !progressLine || !counter) return;

    let progress = 0;
    const duration = 1800; // 1.8s
    const intervalTime = 25;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
        progress += step;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            progressLine.style.width = '100%';
            counter.textContent = '100%';
            setTimeout(() => {
                preloader.classList.add('loaded');
                document.body.classList.remove('preloader-active');
                // Trigger hero entrance
                const heroVideo = document.getElementById('heroVideo');
                if (heroVideo && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    heroVideo.play().catch(() => {
                        console.log('Video autoplay prevented; showing fallback poster.');
                    });
                }
            }, 300);
        } else {
            const rounded = Math.floor(progress);
            progressLine.style.width = `${rounded}%`;
            counter.textContent = `${String(rounded).padStart(2, '0')}%`;
        }
    }, intervalTime);

    // Safety fallback: Never trap user behind preloader
    setTimeout(() => {
        if (!preloader.classList.contains('loaded')) {
            preloader.classList.add('loaded');
            document.body.classList.remove('preloader-active');
        }
    }, 3500);
}

/* --------------------------------------------------------------------------
   02. CUSTOM CURSOR
   -------------------------------------------------------------------------- */
function initCustomCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.querySelector('.custom-cursor-dot');
    const ring = document.querySelector('.custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    // Smooth lerp loop for the outer ring
    function renderCursor() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Dynamic cursor states
    document.addEventListener('mouseover', (e) => {
        const target = e.target;
        if (target.closest('.project-card') || target.closest('.modal-gallery-item')) {
            document.body.classList.add('cursor-view');
            ring.textContent = 'VIEW';
        } else if (target.closest('.before-after-wrap')) {
            document.body.classList.add('cursor-hover');
            ring.textContent = 'DRAG';
        } else if (target.closest('.floating-whatsapp') || target.closest('.header-whatsapp-icon')) {
            document.body.classList.add('cursor-hover');
            ring.textContent = 'CHAT';
        } else if (target.closest('button') || target.closest('a') || target.closest('.btn')) {
            document.body.classList.add('cursor-hover');
            ring.textContent = 'OPEN';
        } else {
            document.body.classList.remove('cursor-hover', 'cursor-view');
            ring.textContent = '';
        }
    });

    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
    });
}

/* --------------------------------------------------------------------------
   03. HEADER & STICKY NAVIGATION
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // Active navigation spy
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { passive: true });
}

/* --------------------------------------------------------------------------
   04. FULLSCREEN MOBILE MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.getElementById('mobileMenuClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!overlay) return;

    function openMenu() {
        overlay.classList.add('open');
        if (toggle) toggle.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        overlay.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isOpen = overlay.classList.contains('open');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            closeMenu();
        }
    });

    // Close when tapping outside links area if clicking overlay bottom
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeMenu();
        }
    });
}

/* --------------------------------------------------------------------------
   05. HERO SECTION & CINEMATIC MEDIA
   -------------------------------------------------------------------------- */
function initHeroMedia() {
    const video = document.getElementById('heroVideo');
    const poster = document.getElementById('heroPoster');
    const locationEl = document.getElementById('heroLocation');

    if (locationEl && siteConfig.displayLocation) {
        locationEl.textContent = siteConfig.displayLocation;
    }

    if (!video || !poster) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        video.style.display = 'none';
        poster.style.opacity = '1';
        return;
    }

    video.src = media.heroVideo;
    video.poster = media.heroPoster;

    video.addEventListener('playing', () => {
        video.classList.add('is-playing');
    });

    video.addEventListener('error', () => {
        console.warn('Hero video failed to load, falling back to static poster.');
        video.style.display = 'none';
        poster.style.opacity = '1';
    });
}

/* --------------------------------------------------------------------------
   06. STUDIO INTRO SECTION
   -------------------------------------------------------------------------- */
function renderStudioIntro() {
    const introImg = document.getElementById('studioIntroImg');
    if (introImg && media.studioIntro) {
        introImg.src = media.studioIntro;
    }
}

/* --------------------------------------------------------------------------
   07. FEATURED PROJECTS & ASYMMETRICAL GRID
   -------------------------------------------------------------------------- */
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Asymmetric span pattern for editorial rhythm: hero, 7, 5, 5, 7, hero
    const spanPatterns = ['span-hero', 'span-7', 'span-5', 'span-5', 'span-7', 'span-6'];

    projectsData.forEach((project, index) => {
        const spanClass = spanPatterns[index % spanPatterns.length];
        const card = document.createElement('article');
        card.className = `project-card ${spanClass} reveal-fade-up`;
        card.dataset.id = project.id;
        card.dataset.categories = project.categories.join(' ');

        card.innerHTML = `
            <div class="project-media-wrap">
                <img src="${project.hero}" alt="${project.name}" loading="lazy">
                <div class="project-floating-label">0${index + 1} — ${project.category}</div>
            </div>
            <div class="project-info-bar">
                <div class="project-title-group">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-meta-desc">${project.subtitle} • ${project.location}</p>
                </div>
                <div class="project-year-badge">${project.year}</div>
            </div>
        `;

        card.addEventListener('click', () => openProjectModal(project.id));
        grid.appendChild(card);
    });
}

/* --------------------------------------------------------------------------
   08. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (!filterButtons.length) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter.toLowerCase();
            const cards = document.querySelectorAll('.project-card');

            cards.forEach(card => {
                const categories = card.dataset.categories.split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 350);
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   09. PROJECT DETAIL MODAL EXPERIENCE
   -------------------------------------------------------------------------- */
let activeProjectGallery = [];

function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const container = document.getElementById('projectModalContainer');
    if (!modal || !container) return;

    activeProjectGallery = project.gallery || [];

    const materialsMarkup = project.materials.map(m => `<span class="material-chip">${m}</span>`).join('');
    
    const galleryMarkup = project.gallery.map((img, i) => `
        <div class="modal-gallery-item ${i === 0 ? 'span-full' : ''}" data-index="${i}">
            <img src="${img}" alt="${project.name} View ${i + 1}" loading="lazy">
        </div>
    `).join('');

    const whatsappPrefill = encodeURIComponent(`Hi ${siteConfig.name}, I am fascinated by your project "${project.name}" and would love to consult on a similar space.`);
    const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${whatsappPrefill}`;

    container.innerHTML = `
        <div class="modal-header-meta">
            <span class="mono-tag">${project.category} • ${project.year}</span>
            <h2 class="editorial-title" style="font-size: clamp(2.4rem, 5.5vw, 4.8rem);">${project.name}</h2>
            <p class="editorial-subhead" style="font-size: 1.5rem; color: var(--c-accent-bronze);">${project.subtitle}</p>
        </div>

        <div class="modal-spec-grid">
            <div class="modal-spec-item">
                <span class="modal-spec-label">LOCATION</span>
                <span class="modal-spec-value">${project.location}</span>
            </div>
            <div class="modal-spec-item">
                <span class="modal-spec-label">PROJECT AREA</span>
                <span class="modal-spec-value">${project.area}</span>
            </div>
            <div class="modal-spec-item">
                <span class="modal-spec-label">YEAR COMPLETED</span>
                <span class="modal-spec-value">${project.year}</span>
            </div>
            <div class="modal-spec-item">
                <span class="modal-spec-label">DESIGN SCOPE</span>
                <span class="modal-spec-value">${project.scope}</span>
            </div>
        </div>

        <div class="modal-hero-image-wrap">
            <img src="${project.hero}" alt="${project.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>

        <div class="modal-story-grid">
            <div>
                <span class="mono-tag">THE ARCHITECTURAL STORY</span>
                <h3 class="editorial-subhead" style="margin-top: 1rem;">Space, Proportion & Tropical Light.</h3>
                <div class="modal-materials-chips">
                    ${materialsMarkup}
                </div>
            </div>
            <div>
                <p class="editorial-lead" style="margin-bottom: 1.5rem;">${project.story}</p>
                <p style="color: var(--c-text-secondary-dark); line-height: 1.8;">${project.concept}</p>
            </div>
        </div>

        <div class="modal-gallery-section">
            <span class="mono-tag" style="margin-bottom: 1.5rem;">PROJECT PHOTOGRAPHY</span>
            <div class="modal-gallery-grid">
                ${galleryMarkup}
            </div>
        </div>

        <div class="modal-film-section">
            <span class="mono-tag">CINEMATIC PROJECT FILM</span>
            <div class="modal-video-wrap">
                <video src="${project.video}" poster="${project.videoPoster}" controls playsinline preload="none"></video>
            </div>
        </div>

        <div class="modal-cta-box">
            <span class="mono-tag">COLLABORATE WITH ATELIER</span>
            <h3 class="editorial-subhead">Ready to bring your space to life?</h3>
            <p style="max-width: 50ch; color: var(--c-text-secondary-dark);">
                Every design begins with an intimate dialogue about your lifestyle and spatial aspirations.
            </p>
            <div style="display:flex; gap:1rem; flex-wrap:wrap; justify-content:center; margin-top:1rem;">
                <a href="#contact" class="btn btn-primary modal-action-contact">
                    <span>START A PROJECT</span>
                    <span class="btn-arrow">→</span>
                </a>
                <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn btn-bronze">
                    <span>WHATSAPP THE STUDIO</span>
                    <span class="btn-arrow">↗</span>
                </a>
            </div>
        </div>
    `;

    // Bind gallery click events to open Lightbox
    container.querySelectorAll('.modal-gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index, 10);
            openLightbox(activeProjectGallery, index);
        });
    });

    // Close modal & scroll to contact
    const contactBtn = container.querySelector('.modal-action-contact');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            closeProjectModal();
        });
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    // Pause any active modal video
    const video = modal.querySelector('video');
    if (video) video.pause();

    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// Bind modal close button & Esc key
document.addEventListener('click', (e) => {
    if (e.target.closest('#projectModalClose')) {
        closeProjectModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
        closeLightbox();
        closeJournalModal();
    }
});

/* --------------------------------------------------------------------------
   10. LIGHTBOX SYSTEM
   -------------------------------------------------------------------------- */
let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(images, startIndex = 0) {
    if (!images || !images.length) return;

    currentLightboxImages = images;
    currentLightboxIndex = startIndex;

    const modal = document.getElementById('lightboxModal');
    if (!modal) return;

    updateLightboxView();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function updateLightboxView() {
    const imgEl = document.getElementById('lightboxImg');
    const counterEl = document.getElementById('lightboxCounter');
    if (!imgEl || !counterEl) return;

    imgEl.src = currentLightboxImages[currentLightboxIndex];
    counterEl.textContent = `${String(currentLightboxIndex + 1).padStart(2, '0')} / ${String(currentLightboxImages.length).padStart(2, '0')}`;
}

function lightboxNext() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    updateLightboxView();
}

function lightboxPrev() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    updateLightboxView();
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    if (!modal) return;
    modal.classList.remove('open');
    // If project modal is still open, keep overflow hidden
    const projectModal = document.getElementById('projectModal');
    if (!projectModal || !projectModal.classList.contains('open')) {
        document.body.style.overflow = '';
    }
}

// Lightbox event controls
document.addEventListener('click', (e) => {
    if (e.target.closest('#lightboxClose') || (e.target.id === 'lightboxModal')) {
        closeLightbox();
    } else if (e.target.closest('#lightboxNext')) {
        lightboxNext();
    } else if (e.target.closest('#lightboxPrev')) {
        lightboxPrev();
    }
});

document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (!modal || !modal.classList.contains('open')) return;

    if (e.key === 'ArrowRight') {
        lightboxNext();
    } else if (e.key === 'ArrowLeft') {
        lightboxPrev();
    }
});

// Lightbox Touch Swipe
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('open')) {
        touchStartX = e.changedTouches[0].screenX;
    }
}, { passive: true });

document.addEventListener('touchend', (e) => {
    const modal = document.getElementById('lightboxModal');
    if (modal && modal.classList.contains('open')) {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
            lightboxNext();
        } else if (touchEndX - touchStartX > 50) {
            lightboxPrev();
        }
    }
}, { passive: true });

/* --------------------------------------------------------------------------
   11. SERVICES LIST & HOVER PREVIEW
   -------------------------------------------------------------------------- */
function renderServices() {
    const list = document.getElementById('servicesList');
    if (!list) return;

    list.innerHTML = '';

    servicesData.forEach((s) => {
        const item = document.createElement('div');
        item.className = 'service-item reveal-fade-up';
        item.dataset.image = s.image;

        item.innerHTML = `
            <div class="service-item-row">
                <span class="service-num">${s.number}</span>
                <h3 class="service-title">${s.title}</h3>
                <p class="service-desc">${s.description}</p>
                <span class="service-arrow">→</span>
            </div>
            <div class="service-mobile-thumb" aria-hidden="true">
                <img src="${s.image}" alt="${s.title}" loading="lazy">
            </div>
        `;

        item.addEventListener('click', () => {
            // Scroll down to contact and pre-select service
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                const typeSelect = document.getElementById('contactProjectType');
                if (typeSelect) {
                    typeSelect.value = 'Residential';
                }
            }
        });

        list.appendChild(item);
    });

    initServiceHoverPreview();
}

function initServiceHoverPreview() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const preview = document.querySelector('.service-hover-preview');
    const previewImg = preview ? preview.querySelector('img') : null;
    const items = document.querySelectorAll('.service-item');

    if (!preview || !previewImg) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updatePreview() {
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        preview.style.left = `${currentX}px`;
        preview.style.top = `${currentY}px`;
        requestAnimationFrame(updatePreview);
    }
    requestAnimationFrame(updatePreview);

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const imgUrl = item.dataset.image;
            if (imgUrl) {
                previewImg.src = imgUrl;
                preview.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', () => {
            preview.classList.remove('active');
        });
    });
}

/* --------------------------------------------------------------------------
   12. PHILOSOPHY & WHY CHOOSE US
   -------------------------------------------------------------------------- */
function renderPhilosophy() {
    const grid = document.getElementById('philosophyGrid');
    if (!grid) return;

    grid.innerHTML = '';
    philosophyData.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'philosophy-card reveal-fade-up';
        card.innerHTML = `
            <span class="card-number">0${i + 1}</span>
            <span class="mono-tag">${p.label}</span>
            <h3>${p.keyword}</h3>
            <p>${p.statement}</p>
        `;
        grid.appendChild(card);
    });
}

function renderWhyChooseUs() {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;

    grid.innerHTML = '';
    whyChooseUsData.forEach((w) => {
        const item = document.createElement('div');
        item.className = 'why-item reveal-fade-up';
        item.innerHTML = `
            <span class="why-num">${w.number}</span>
            <h3 class="why-title">${w.title}</h3>
            <p class="why-desc">${w.text}</p>
        `;
        grid.appendChild(item);
    });
}

/* --------------------------------------------------------------------------
   13. DESIGN PROCESS TIMELINE
   -------------------------------------------------------------------------- */
function renderProcess() {
    const timeline = document.getElementById('processTimeline');
    if (!timeline) return;

    timeline.innerHTML = '';
    processData.forEach((st) => {
        const step = document.createElement('div');
        step.className = 'process-step reveal-fade-up';
        step.innerHTML = `
            <div class="step-num-wrap">
                <span class="step-num">${st.number}</span>
                <span class="step-stage-name">${st.stage}</span>
            </div>
            <div class="step-title-col">
                <h3 class="step-title">${st.title}</h3>
                <span class="step-duration">${st.duration}</span>
            </div>
            <div class="step-desc-col">
                <p class="step-desc">${st.description}</p>
                <div class="step-deliverables"><strong>Deliverables:</strong> ${st.deliverables}</div>
            </div>
        `;
        timeline.appendChild(step);
    });
}

/* --------------------------------------------------------------------------
   14. BEFORE / AFTER COMPARISON SLIDER
   -------------------------------------------------------------------------- */
function initBeforeAfterSlider() {
    const container = document.getElementById('beforeAfterSlider');
    const beforeLayer = document.getElementById('baBeforeLayer');
    const handle = document.getElementById('baHandle');

    if (!container || !beforeLayer || !handle) return;

    let isDragging = false;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let position = (x - rect.left) / rect.width;
        if (position < 0) position = 0;
        if (position > 1) position = 1;

        const percentage = position * 100;
        beforeLayer.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    }

    // Mouse events
    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSlider(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSlider(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch events
    container.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSlider(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.cancelable) e.preventDefault();
        updateSlider(e.touches[0].clientX);
    }, { passive: false });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}

/* --------------------------------------------------------------------------
   15. MATERIALS SAMPLER
   -------------------------------------------------------------------------- */
function renderMaterials() {
    const grid = document.getElementById('materialsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    materialsData.forEach((m) => {
        const card = document.createElement('div');
        card.className = 'material-card reveal-fade-up';
        card.innerHTML = `
            <img src="${m.image}" alt="${m.title}" loading="lazy">
            <div class="material-card-overlay">
                <span class="material-cat">${m.category} • ${m.finish}</span>
                <h4 class="material-title">${m.title}</h4>
                <p class="material-origin">${m.origin}</p>
            </div>
        `;
        card.addEventListener('click', () => {
            openLightbox([m.image], 0);
        });
        grid.appendChild(card);
    });
}

/* --------------------------------------------------------------------------
   16. STUDIO TEAM & FOUNDER
   -------------------------------------------------------------------------- */
function renderStudioTeam() {
    const founderImg = document.getElementById('founderImg');
    const founderName = document.getElementById('founderName');
    const founderRole = document.getElementById('founderRole');
    const founderBio = document.getElementById('founderBio');
    const momentsRow = document.getElementById('studioMomentsRow');

    if (founderImg && studioTeamData.image) founderImg.src = studioTeamData.image;
    if (founderName) founderName.textContent = studioTeamData.founderName;
    if (founderRole) founderRole.textContent = `${studioTeamData.founderRole} • ${studioTeamData.founderCredentials}`;
    if (founderBio) founderBio.textContent = studioTeamData.bio;

    if (momentsRow && studioTeamData.practiceImages) {
        momentsRow.innerHTML = '';
        studioTeamData.practiceImages.forEach(moment => {
            const card = document.createElement('div');
            card.className = 'studio-moment-card reveal-fade-up';
            card.innerHTML = `
                <img src="${moment.image}" alt="${moment.title}" loading="lazy">
                <div class="studio-moment-caption">${moment.title}</div>
            `;
            card.addEventListener('click', () => openLightbox([moment.image], 0));
            momentsRow.appendChild(card);
        });
    }
}

/* --------------------------------------------------------------------------
   17. TESTIMONIALS SLIDER
   -------------------------------------------------------------------------- */
let currentTestimonialIndex = 0;

function renderTestimonials() {
    const sliderWrap = document.getElementById('testimonialsSliderWrap');
    if (!sliderWrap) return;

    sliderWrap.innerHTML = '';
    testimonialsData.forEach((t, i) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${i === 0 ? 'active' : ''}`;
        slide.dataset.index = i;

        slide.innerHTML = `
            <div class="testimonial-stars">★★★★★</div>
            <blockquote class="testimonial-quote">“${t.quote}”</blockquote>
            <div class="testimonial-author-group">
                <span class="testimonial-author">${t.client}</span>
                <span class="testimonial-project">${t.project} • ${t.location}</span>
            </div>
        `;
        sliderWrap.appendChild(slide);
    });

    const prevBtn = document.getElementById('tPrev');
    const nextBtn = document.getElementById('tNext');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
            updateTestimonialSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
            updateTestimonialSlide();
        });
    }

    // Mobile Touch Swipe support
    let tTouchStartX = 0;
    let tTouchEndX = 0;

    sliderWrap.addEventListener('touchstart', (e) => {
        tTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderWrap.addEventListener('touchend', (e) => {
        tTouchEndX = e.changedTouches[0].screenX;
        const diff = tTouchStartX - tTouchEndX;
        if (diff > 45) {
            // Swipe Left -> Next
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
            updateTestimonialSlide();
        } else if (diff < -45) {
            // Swipe Right -> Prev
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
            updateTestimonialSlide();
        }
    }, { passive: true });

    // Auto rotate every 8 seconds
    setInterval(() => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
        updateTestimonialSlide();
    }, 8000);
}

function updateTestimonialSlide() {
    const slides = document.querySelectorAll('.testimonial-slide');
    slides.forEach((slide, i) => {
        if (i === currentTestimonialIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

/* --------------------------------------------------------------------------
   18. STATS COUNTER ON VIEW
   -------------------------------------------------------------------------- */
function initStatsObserver() {
    const statsContainer = document.getElementById('statsGrid');
    if (!statsContainer) return;

    statsContainer.innerHTML = '';
    statsData.forEach(stat => {
        const item = document.createElement('div');
        item.className = 'stat-item reveal-fade-up';
        item.innerHTML = `
            <div class="stat-number" data-target="${stat.value}">${stat.value}${stat.suffix}</div>
            <div class="stat-label">${stat.label}</div>
            <div class="stat-desc">${stat.description}</div>
        `;
        statsContainer.appendChild(item);
    });

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                const numbers = statsContainer.querySelectorAll('.stat-number');
                numbers.forEach((el, index) => {
                    const target = statsData[index].value;
                    const suffix = statsData[index].suffix;
                    let count = 0;
                    const step = Math.ceil(target / 45);
                    const timer = setInterval(() => {
                        count += step;
                        if (count >= target) {
                            count = target;
                            clearInterval(timer);
                        }
                        el.textContent = `${count}${suffix}`;
                    }, 35);
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsContainer);
}

/* --------------------------------------------------------------------------
   19. INSTAGRAM GALLERY
   -------------------------------------------------------------------------- */
function renderInstagram() {
    const grid = document.getElementById('instaGrid');
    if (!grid) return;

    grid.innerHTML = '';
    instagramPostsData.forEach((post) => {
        const card = document.createElement('a');
        card.className = 'insta-card reveal-fade-up';
        card.href = siteConfig.instagram;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';

        card.innerHTML = `
            <img src="${post.image}" alt="${post.caption}" loading="lazy">
            <div class="insta-hover-overlay">
                <span class="insta-hover-icon">↗</span>
                <span class="insta-hover-text">VIEW ON INSTAGRAM</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* --------------------------------------------------------------------------
   20. JOURNAL / BLOG EDITORIAL & READER
   -------------------------------------------------------------------------- */
function renderJournal() {
    const grid = document.getElementById('journalGrid');
    if (!grid) return;

    grid.innerHTML = '';
    journalPostsData.forEach(post => {
        const card = document.createElement('article');
        card.className = 'journal-card reveal-fade-up';
        card.innerHTML = `
            <div class="journal-img-wrap">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="journal-meta-row">
                <span class="mono-tag">${post.category}</span>
                <span class="mono-tag" style="color:var(--c-text-muted-dark);">${post.readTime}</span>
            </div>
            <h3 class="journal-title">${post.title}</h3>
            <p class="journal-excerpt">${post.excerpt}</p>
            <div>
                <span class="btn-link">READ ARTICLE →</span>
            </div>
        `;

        card.addEventListener('click', () => openJournalModal(post));
        grid.appendChild(card);
    });
}

function openJournalModal(post) {
    const modal = document.getElementById('journalModal');
    const body = document.getElementById('journalModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <span class="mono-tag">${post.category} • ${post.date}</span>
        <h2 class="editorial-title" style="font-size: clamp(2.2rem, 5vw, 4rem);">${post.title}</h2>
        <div style="aspect-ratio: 16/9; width: 100%; overflow: hidden; margin: 1rem 0;">
            <img src="${post.image}" alt="${post.title}" style="width:100%; height:100%; object-fit:cover;">
        </div>
        <div class="journal-article-copy">
            ${post.content}
        </div>
        <div style="padding-top: 3rem; border-top: 1px solid var(--c-charcoal-border);">
            <a href="#contact" class="btn btn-primary" onclick="closeJournalModal()">
                <span>DISCUSS A PROJECT WITH US</span>
                <span class="btn-arrow">→</span>
            </a>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeJournalModal() {
    const modal = document.getElementById('journalModal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
    if (e.target.closest('#journalModalClose')) {
        closeJournalModal();
    }
});

/* --------------------------------------------------------------------------
   21. NEWSLETTER SUBSCRIPTION
   -------------------------------------------------------------------------- */
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    const input = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');

    if (!form || !input || !feedback) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            feedback.className = 'newsletter-feedback error';
            feedback.textContent = 'Please enter your email address.';
            return;
        }

        if (!emailRegex.test(email)) {
            feedback.className = 'newsletter-feedback error';
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        // Simulating immediate client feedback and storing for future CRM sync
        feedback.className = 'newsletter-feedback success';
        feedback.textContent = "THANK YOU — YOU'RE ON THE LIST.";
        input.value = '';
        showToast('Subscribed to Atelier Design Notes.');
    });
}

/* --------------------------------------------------------------------------
   22. CONTACT / START A PROJECT FLOW
   -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('projectEnquiryForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const phoneInput = document.getElementById('contactPhone');
        const typeSelect = document.getElementById('contactProjectType');
        const budgetSelect = document.getElementById('contactBudget');
        const timelineSelect = document.getElementById('contactTimeline');
        const messageInput = document.getElementById('contactMessage');

        // Reset previous errors
        form.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('has-error'));

        if (!nameInput.value.trim()) {
            nameInput.closest('.form-group').classList.add('has-error');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
            emailInput.closest('.form-group').classList.add('has-error');
            isValid = false;
        }

        if (!phoneInput.value.trim()) {
            phoneInput.closest('.form-group').classList.add('has-error');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            messageInput.closest('.form-group').classList.add('has-error');
            isValid = false;
        }

        if (!isValid) return;

        // Build WhatsApp quick-dispatch message for instant client gratification
        const enquirySummary = `*NEW PROJECT ENQUIRY — ATELIER STUDIO*\n\n` +
            `• *Name:* ${nameInput.value.trim()}\n` +
            `• *Email:* ${emailInput.value.trim()}\n` +
            `• *Phone:* ${phoneInput.value.trim()}\n` +
            `• *Project Type:* ${typeSelect.value}\n` +
            `• *Budget:* ${budgetSelect.value}\n` +
            `• *Timeline:* ${timelineSelect.value}\n` +
            `• *Brief:* ${messageInput.value.trim()}`;

        const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(enquirySummary)}`;

        // Show success state
        form.innerHTML = `
            <div style="padding: 3rem 1rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 1.5rem;">
                <span class="mono-tag" style="color:var(--c-accent-bronze);">ENQUIRY RECEIVED</span>
                <h3 class="editorial-title" style="font-size: 2.5rem;">THANK YOU.<br>WE'LL BE IN TOUCH SHORTLY.</h3>
                <p style="color: var(--c-text-secondary-dark); max-width: 48ch;">
                    Our architectural team reviews each enquiry thoroughly. You will hear from Ar. Vikram Ramanathan's studio within 24 business hours.
                </p>
                <div style="margin-top: 1rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-bronze">
                        <span>OPEN ON WHATSAPP NOW</span>
                        <span class="btn-arrow">↗</span>
                    </a>
                </div>
            </div>
        `;

        showToast('Enquiry received. Thank you.');
    });
}

/* --------------------------------------------------------------------------
   23. SCROLL REVEAL OBSERVER
   -------------------------------------------------------------------------- */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal-fade-up, .reveal-img-scale');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   24. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 800) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* --------------------------------------------------------------------------
   25. TOAST NOTIFICATIONS
   -------------------------------------------------------------------------- */
function showToast(message) {
    const toast = document.getElementById('toastNotice');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

/* --------------------------------------------------------------------------
   26. ROBUST MEDIA FALLBACK SYSTEM
   -------------------------------------------------------------------------- */
function initFallbackMedia() {
    const placeholderSvg = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3e%3crect width='800' height='600' fill='%231B1A18'/%3e%3ctext x='50%25' y='50%25' fill='%23C5A880' font-family='sans-serif' font-size='18' letter-spacing='4' text-anchor='middle' dominant-baseline='middle'%3eATELIER ARCHITECTURE%3c/text%3e%3c/svg%3e";

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => {
            if (img.src !== placeholderSvg) {
                img.src = placeholderSvg;
            }
        });
    });
}

/* --------------------------------------------------------------------------
   27. DYNAMIC ORIENTATION & RESIZE ADAPTATION
   -------------------------------------------------------------------------- */
window.addEventListener('resize', handleViewportAdaptation, { passive: true });
window.addEventListener('orientationchange', handleViewportAdaptation, { passive: true });

function handleViewportAdaptation() {
    const isLandscapePhone = window.matchMedia('(orientation: landscape) and (max-height: 550px)').matches;
    if (isLandscapePhone) {
        document.body.classList.add('is-mobile-landscape');
    } else {
        document.body.classList.remove('is-mobile-landscape');
    }
}
handleViewportAdaptation();
