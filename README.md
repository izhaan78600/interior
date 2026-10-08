# ATELIER — Luxury Interior Architecture & Design Studio

A production-grade, architectural editorial portfolio and client acquisition platform for a high-end interior architecture practice.

![Atelier Preview](assets/images/hero/studio-intro.jpg)

---

## Highlights & Features

- **Architectural Aesthetic**: Designed in the style of high-end architectural monographs and luxury design publications (*Architectural Digest*, *Kinfolk*, *Cereal*).
- **Universal Responsive Design**: 100% unified codebase reflowing seamlessly across mobile (320px+), tablet, laptop, and ultra-wide screens (2560px+) in both portrait and landscape orientation without content loss.
- **Cinematic Media**: Fullscreen hero video with intelligent poster fallback, project walkthrough films, and 70+ curated high-resolution interior photographs.
- **Interactive Portfolio**: Filterable project gallery (Residential, Commercial, Hospitality, Penthouse, Architecture) with immersive full-screen project drawer modal and touch-friendly lightbox gallery.
- **Before / After Transformation**: Touch-draggable comparison slider revealing structural interior transformations.
- **Materiality Showcase**: Tactile material explorer (Wood, Stone, Marble, Metal, Fabric, Glass, Light) with editorial grain textures and architectural descriptions.
- **Interactive Process**: 5-step client journey with connecting timeline indicators.
- **High-Conversion Inquiries**:
  - Direct WhatsApp button with prefilled project consultation message.
  - One-tap phone dialer.
  - Comprehensive project enquiry modal with budget, timeline, and scope selectors.
  - Sticky mobile contact dock with safe-area notch support (`env(safe-area-inset-bottom)`).
  - Editorial newsletter subscription.

---

## Tech Stack

- **HTML5**: Semantic tags, Schema.org `ProfessionalService` JSON-LD, Open Graph & Twitter Cards, PWA meta tags.
- **CSS3**: Custom property tokens, fluid `clamp()` typography, CSS Grid, Flexbox, hardware-accelerated animations (`transform`, `opacity`), safe-area insets.
- **JavaScript (ES6+)**: Zero framework dependencies, `IntersectionObserver` counters & scroll reveal, custom cursor lerp, touch swipe handlers.

---

## Getting Started

To run locally:

```bash
# Clone the repository
git clone https://github.com/izhaan78600/interior.git

# Navigate into the project
cd interior

# Start a local HTTP server
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

---

## Project Structure

```text
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── journal/
│   │   ├── materials/
│   │   ├── projects/
│   │   ├── services/
│   │   └── studio/
│   └── videos/
│       ├── hero.mp4
│       └── project-film.mp4
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   └── main.js
├── index.html
├── .gitignore
└── README.md
```

---

## License

Private repository for Atelier Studio. All rights reserved.
