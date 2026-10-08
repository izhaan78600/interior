/**
 * ATELIER ARCHITECTURE & INTERIOR DESIGN STUDIO
 * Centralized Configuration, Content & Media Registry
 * All business information, media paths, project registries and editorial content
 * are maintained here for zero hardcoding and effortless client customization.
 */

const siteConfig = {
    name: "ATELIER ARCHITECTURE & INTERIORS",
    shortName: "ATELIER",
    tagline: "Designing spaces that feel like you.",
    subtitle: "Interior Architecture • Bespoke Living • Timeless Detail",
    location: "Coimbatore",
    displayLocation: "COIMBATORE",
    phone: "+91 99522 26988",
    whatsapp: "+919952226988",
    whatsappDisplay: "9952226988",
    email: "concierge@atelierdesign.in",
    address: "Coimbatore",
    instagram: "https://instagram.com/atelier.interior.studio",
    facebook: "https://facebook.com/atelier.interior.studio",
    linkedin: "https://linkedin.com/company/atelier-interior-studio",
    pinterest: "https://pinterest.com/atelierinteriors",
    googleMaps: "https://maps.google.com/?q=Coimbatore",
    hours: {
        weekdays: "MON — SAT: 9:30 AM — 6:30 PM",
        sunday: "SUNDAY: BY APPOINTMENT"
    },
    meta: {
        title: "ATELIER — Luxury Interior Architecture & Design Studio | Coimbatore",
        description: "Atelier creates refined residential and commercial interiors where architecture, material provenance, natural light and everyday life coalesce into timeless environments.",
        keywords: "interior design coimbatore, luxury architects, modern villa interiors, architectural digest india, bespoke furniture, penthouse interior design",
        siteUrl: "https://atelierinteriors.in",
        author: "Ar. Vikram Ramanathan"
    }
};

const media = {
    heroVideo: "assets/videos/hero.mp4",
    heroPoster: "assets/images/hero/hero-poster.jpg",
    studioIntro: "assets/images/hero/studio-intro.jpg",
    projectFilmDefault: "assets/videos/project-film.mp4",
    founder: "assets/images/studio/founder.jpg"
};

const statsData = [
    { value: 140, suffix: "+", label: "Completed Projects", description: "Bespoke residences, penthouses & boutique commercial spaces" },
    { value: 16, suffix: "+", label: "Years of Practice", description: "Rooted in Tamil Nadu, practicing across South India" },
    { value: 12, suffix: "", label: "Design Accolades", description: "National and international architectural recognition" },
    { value: 100, suffix: "%", label: "Artisanal Customization", description: "Every joinery detail forged uniquely for each home" }
];

const projectsData = [
    {
        id: "courtyard-house",
        name: "THE COURTYARD HOUSE",
        subtitle: "Inward-Looking Tropical Living Pavilion",
        location: "Coimbatore",
        category: "Villas",
        categories: ["all", "residential", "villas"],
        year: "2026",
        area: "8,400 SQ.FT",
        scope: "Turnkey Architecture, Interior Architecture, Custom Furniture & Landscape Integration",
        hero: "assets/images/projects/courtyard-hero.jpg",
        gallery: [
            "assets/images/projects/courtyard-hero.jpg",
            "assets/images/projects/courtyard-1.jpg",
            "assets/images/projects/courtyard-2.jpg",
            "assets/images/projects/courtyard-3.jpg",
            "assets/images/projects/courtyard-4.jpg",
            "assets/images/projects/courtyard-5.jpg"
        ],
        story: "Conceived as an inward-looking sanctuary, The Courtyard House celebrates the intimate relationship between tropical climate and understated modern minimalism. Expansive floor-to-ceiling glass apertures, monolithic silver travertine piers, and continuous Burmese teak joinery frame a central open-sky courtyard that breathes life and micro-climatic cooling into every corner of the residence.",
        concept: "A study in diffused tropical sunlight and shadow interplay. Deep verandah overhangs shield the living spaces from the harsh midday sun while cross-ventilation breezes are naturally induced through subterranean courtyards.",
        materials: ["Burmese Teak", "Silver Travertine", "Hand-cast Terrazzo", "Aged Bronze", "Rough Lime Plaster"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/courtyard-after.jpg",
            beforeLabel: "RAW STRUCTURAL FRAME",
            afterLabel: "COMPLETED LIVING PAVILION"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/courtyard-hero.jpg"
    },
    {
        id: "skyline-penthouse",
        name: "THE SKYLINE PENTHOUSE",
        subtitle: "Panoramic Sky Sanctuary with Tactile Minimalism",
        location: "Coimbatore",
        category: "Apartments",
        categories: ["all", "residential", "apartments"],
        year: "2025",
        area: "4,600 SQ.FT",
        scope: "Interior Architecture, Spatial Reconfiguration, Custom Joinery & Curated Furnishings",
        hero: "assets/images/projects/penthouse-hero.jpg",
        gallery: [
            "assets/images/projects/penthouse-hero.jpg",
            "assets/images/projects/penthouse-1.jpg",
            "assets/images/projects/penthouse-2.jpg",
            "assets/images/projects/penthouse-3.jpg",
            "assets/images/projects/penthouse-4.jpg",
            "assets/images/projects/penthouse-5.jpg"
        ],
        story: "Perched high above the canopy of Coimbatore's heritage trees, this double-level penthouse was stripped down to its bare concrete structural spine and reimagined as an ethereal, gallery-like haven. Seamless micro-cement floors unite with fluted American oak walls and sculptural Arabescato marble islands to yield an atmosphere of pure serenity.",
        concept: "The elimination of visual noise. Structural columns were enveloped in fluted timber panels containing concealed flush doors, magnetic acoustic seals, and hidden temperature management systems.",
        materials: ["Arabescato Orobico Marble", "Quartered White Oak", "Warm Micro-cement", "Belgian Linen", "Smoked Bronze"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/penthouse-hero.jpg",
            beforeLabel: "ORIGINAL CONCRETE ENCLOSURE",
            afterLabel: "SCULPTURAL SKY VILLA"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/penthouse-hero.jpg"
    },
    {
        id: "monolith-foothills-villa",
        name: "THE MONOLITH VILLA",
        subtitle: "Earthy Brutalism in the Nilgiris Foothills",
        location: "Coimbatore",
        category: "Villas",
        categories: ["all", "residential", "villas"],
        year: "2025",
        area: "11,200 SQ.FT",
        scope: "Architecture, Turnkey Interiors, Bespoke Hearth Design & Landscape Ecology",
        hero: "assets/images/projects/monolith-hero.jpg",
        gallery: [
            "assets/images/projects/monolith-hero.jpg",
            "assets/images/projects/monolith-1.jpg",
            "assets/images/projects/monolith-2.jpg",
            "assets/images/projects/monolith-3.jpg",
            "assets/images/projects/monolith-4.jpg",
            "assets/images/projects/monolith-5.jpg"
        ],
        story: "Nestled against the undulating mist of the Western Ghats, The Monolith Villa emerges organically from its granite hillside. Raw board-formed concrete and locally quarried Sadahalli stone form monumental interior volumes that are softened by rich smoked walnut millwork, cashmere drapery, and sunken conversation pits.",
        concept: "Honoring tectonic permanence. The residence does not impose on the terrain; rather, it frames panoramic mountain vistas while creating cocooned inner courts warmed by hand-chiseled granite fireplaces.",
        materials: ["Sadahalli Granite", "Board-formed Concrete", "Smoked Walnut", "Brushed Champagne Brass", "Heavy Cashmere Wool"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/monolith-hero.jpg",
            beforeLabel: "EXCAVATED GRANITE CLIFF",
            afterLabel: "FINISHED MONOLITHIC PAVILION"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/monolith-hero.jpg"
    },
    {
        id: "solaris-executive-hq",
        name: "SOLARIS EXECUTIVE HQ",
        subtitle: "Architectural Work Environment & Private Club",
        location: "Coimbatore",
        category: "Office",
        categories: ["all", "commercial", "office"],
        year: "2025",
        area: "6,200 SQ.FT",
        scope: "Commercial Architecture, Executive Suites, Acoustic Design & Curated Art Program",
        hero: "assets/images/projects/solaris-hero.jpg",
        gallery: [
            "assets/images/projects/solaris-hero.jpg",
            "assets/images/projects/solaris-1.jpg",
            "assets/images/projects/solaris-2.jpg",
            "assets/images/projects/solaris-3.jpg",
            "assets/images/projects/solaris-4.jpg",
            "assets/images/projects/solaris-5.jpg"
        ],
        story: "Designed for a visionary industrial group, Solaris Executive HQ discards sterile corporate clichés in favor of the warmth and dignity of an exclusive private club. Fluted dark walnut partitions, bespoke leather-wrapped conference tables, acoustic wool baffles, and warm ambient light create a focused yet hospitable arena for strategic leadership.",
        concept: "The intersection of acoustic sanctity and visual transparency. Double-glazed fluted acoustic partitions allow daylight to filter deep into boardroom suites while preserving absolute confidentiality.",
        materials: ["Canaletto Walnut", "Saddle Leather", "Acoustic Wool Felt", "Dark Patinated Steel", "Nero Marquina Marble"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/solaris-hero.jpg",
            beforeLabel: "RAW COMMERCIAL SHELL",
            afterLabel: "COMPLETED EXECUTIVE SUITE"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/solaris-hero.jpg"
    },
    {
        id: "travertine-sculpted-kitchen",
        name: "THE TRAVERTINE KITCHEN",
        subtitle: "Monolithic Culinary Architecture & Living Suite",
        location: "Coimbatore",
        category: "Kitchens",
        categories: ["all", "residential", "kitchens"],
        year: "2026",
        area: "980 SQ.FT",
        scope: "Culinary Spatial Planning, Custom Stone Island Fabrication & Integrated Joinery",
        hero: "assets/images/projects/kitchen-hero.jpg",
        gallery: [
            "assets/images/projects/kitchen-hero.jpg",
            "assets/images/projects/kitchen-1.jpg",
            "assets/images/projects/kitchen-2.jpg",
            "assets/images/projects/kitchen-3.jpg",
            "assets/images/projects/kitchen-4.jpg",
            "assets/images/projects/kitchen-5.jpg"
        ],
        story: "A masterclass in culinary elegance where utility vanishes into sculptural form. At the heart of the space rests a five-meter-long monolith carved from Navona Travertine, housing induction cooktops flush with the stone surface. Pocket doors crafted from hand-waxed bog oak conceal prep zones and refrigeration, transforming the kitchen into a seamless gathering pavilion.",
        concept: "The culinary theater as domestic altar. Every touchpoint, from the bronze-fluted handles to the warm grazing illumination beneath the stone cantilever, elevates everyday preparation into a tactile ritual.",
        materials: ["Navona Travertine", "Bog Oak Veneer", "Brushed Bronze", "Stainless Steel Sub-tops", "Smoked Fluted Glass"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/kitchen-hero.jpg",
            beforeLabel: "UNFINISHED SERVICE CORE",
            afterLabel: "MONOLITHIC CULINARY SUITE"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/kitchen-hero.jpg"
    },
    {
        id: "serena-master-sanctuary",
        name: "SERENA MASTER SANCTUARY",
        subtitle: "Quiet Bedroom Suite, Dressing Room & Spa Bath",
        location: "Coimbatore",
        category: "Bedrooms",
        categories: ["all", "residential", "bedrooms"],
        year: "2025",
        area: "1,450 SQ.FT",
        scope: "Private Suite Design, Acoustic Insulation, Dressing Salon & Master Spa",
        hero: "assets/images/projects/bedroom-hero.jpg",
        gallery: [
            "assets/images/projects/bedroom-hero.jpg",
            "assets/images/projects/bedroom-1.jpg",
            "assets/images/projects/bedroom-2.jpg",
            "assets/images/projects/bedroom-3.jpg",
            "assets/images/projects/bedroom-4.jpg",
            "assets/images/projects/bedroom-5.jpg"
        ],
        story: "Designed as an antidote to modern sensory overload, the Serena Master Sanctuary relies on soft curvilinear plaster finishes, tactile bouclé upholstery, and integrated circadian lighting. The adjoining walk-in dressing pavilion is lined with cedarwood joinery, illuminated leather shelves, and full-length bronze-tinted glass portals.",
        concept: "Sensory decompression. Elimination of hard corners, implementation of 42dB acoustic isolation walls, and subtle foot-level grazing fixtures that ease transition from evening to restful slumber.",
        materials: ["Natural Lime Plaster", "Textured Bouclé", "White Oiled Ash", "Cedarwood Joinery", "Brushed Champagne Metal"],
        beforeAfter: {
            before: "assets/images/projects/courtyard-before.jpg",
            after: "assets/images/projects/bedroom-hero.jpg",
            beforeLabel: "RAW BEDROOM CHAMBER",
            afterLabel: "COMPLETED REST SANCTUARY"
        },
        video: "assets/videos/project-film.mp4",
        videoPoster: "assets/images/projects/bedroom-hero.jpg"
    }
];

const servicesData = [
    {
        number: "01",
        title: "INTERIOR ARCHITECTURE",
        summary: "Comprehensive spatial modeling, structural alterations, and holistic interior planning from the core.",
        description: "We sculpt space with architectural discipline. Rather than applying surface decoration, we study light angles, sightlines, ceiling volumes, and structural flow to produce spaces of enduring proportion.",
        image: "assets/images/services/service-1.jpg"
    },
    {
        number: "02",
        title: "BESPOKE RESIDENTIAL DESIGN",
        summary: "Turnkey luxury homes tailored intimately to the daily rituals and legacy of your family.",
        description: "From sprawling ancestral estates to contemporary residences, our designs are profoundly personal narratives crafted with noble materials and exquisite craftsmanship.",
        image: "assets/images/services/service-2.jpg"
    },
    {
        number: "03",
        title: "LUXURY VILLA ARCHITECTURE",
        summary: "Expansive private villas with seamless indoor-outdoor courtyards, verandahs, and water pavilions.",
        description: "Harmonizing tropical climate responsiveness with modern minimalism. We orchestrate breezes, shaded porticos, and panoramic landscape vistas into a coherent architectural whole.",
        image: "assets/images/services/service-3.jpg"
    },
    {
        number: "04",
        title: "PENTHOUSE & APARTMENT DESIGN",
        summary: "High-altitude residences where panoramic views meet acoustic intimacy and spatial efficiency.",
        description: "Transforming builder floorplates into singular works of art through bespoke wall paneling, concealed doors, and tailored millwork that maximizes volume and light.",
        image: "assets/images/services/service-4.jpg"
    },
    {
        number: "05",
        title: "COMMERCIAL & BOUTIQUE SPACES",
        summary: "Corporate headquarters, boutique hotels, and retail galleries that articulate distinctive brand stature.",
        description: "Environments crafted to stimulate creative productivity and evoke refined hospitality, built with durable commercial-grade detailing that ages with grace.",
        image: "assets/images/services/service-5.jpg"
    },
    {
        number: "06",
        title: "ARCHITECTURAL SPACE PLANNING",
        summary: "Micro-climatic circulation analysis, zoning optimization, and ergonomic spatial choreographies.",
        description: "Rigorous planning that eliminates wasted corridors, choreographs natural daylight trajectories, and establishes harmonious transitions between private and celebratory quarters.",
        image: "assets/images/services/service-6.jpg"
    },
    {
        number: "07",
        title: "CHEF'S KITCHEN & LIVING SUITES",
        summary: "Sculptural kitchen architecture uniting state-of-the-art culinary ergonomics with stone elegance.",
        description: "Monolithic islands in imported travertine and granite, concealed pocket-door pantries, and precision ventilation engineered for gourmet cooking and effortless entertaining.",
        image: "assets/images/services/service-7.jpg"
    },
    {
        number: "08",
        title: "CUSTOM FURNITURE & JOINERY",
        summary: "One-of-a-kind timber millwork, tailored upholstery, and artisan-forged brass appointments.",
        description: "Crafted exclusively for your home by master woodworkers using seasoned teak, white oak, natural stone, and saddle leathers. Never sourced from mass catalogs.",
        image: "assets/images/services/service-8.jpg"
    },
    {
        number: "09",
        title: "ARCHITECTURAL LIGHTING DESIGN",
        summary: "Layered illumination choreographies that dramatize material textures and support circadian rhythms.",
        description: "We hide the light sources while revealing the architecture. Through warm grazing, soft uplighting, and tailored dimming scenes, we infuse spaces with poetic night-time warmth.",
        image: "assets/images/services/service-9.jpg"
    },
    {
        number: "10",
        title: "TURNKEY PROJECT EXECUTION",
        summary: "Full end-to-end management with strict timeline accountability and white-glove handover.",
        description: "Single-point responsibility from bare concrete foundation to the final art placement. We handle vendors, BOQ auditing, site engineering, and artisan quality control.",
        image: "assets/images/services/service-10.jpg"
    }
];

const philosophyData = [
    {
        keyword: "LIGHT",
        label: "THE SCULPTOR",
        statement: "Daylight is our primary building material. We sculpt openings and louvers so the sun paints ever-evolving textures across stone and lime plaster throughout the day."
    },
    {
        keyword: "SPACE",
        label: "THE BREATHE",
        statement: "True luxury is the absence of clutter. We calibrate proportions, sightlines, and ceiling transitions so that every square foot imparts a profound sense of inner calm."
    },
    {
        keyword: "MATERIAL",
        label: "THE TACTILE",
        statement: "We reject synthetic imitations. We celebrate honest materials—quarried stone with geological veining, solid seasoned teak, hand-loomed linens—that age gracefully over generations."
    },
    {
        keyword: "PROPORTION",
        label: "THE HARMONY",
        statement: "Rooted in timeless architectural geometry and golden ratios, our spaces possess an intuitive rightness that requires no explanation to be deeply felt."
    },
    {
        keyword: "DETAIL",
        label: "THE CRAFT",
        statement: "Good design is felt in the details. The shadow gap where wall meets floor, the tactile coolness of a solid bronze handle, the whisper-soft glide of a concealed pocket door."
    }
];

const whyChooseUsData = [
    {
        number: "01",
        title: "PERSONALISED DESIGN",
        text: "No template schemes. Every residence begins with an exhaustive inquiry into your family rituals, storage behavior, entertaining preferences, and aesthetic sensibilities."
    },
    {
        number: "02",
        title: "ATTENTION TO DETAIL",
        text: "We obsess over millimeter-precise joinery, book-matched marble veining, flush threshold alignments, and concealed service access that preserves architectural sanctity."
    },
    {
        number: "03",
        title: "TIMELESS AESTHETICS",
        text: "We intentionally avoid fleeting social media design trends in favor of an architectural language that will remain relevant, elegant, and cherished fifty years from now."
    },
    {
        number: "04",
        title: "TRANSPARENT PROCESS",
        text: "Every fastener and finish is itemized in transparent BOQ schedules. You maintain complete budgetary clarity, fixed stage payments, and live photographic progress dashboards."
    },
    {
        number: "05",
        title: "QUALITY CRAFTSMANSHIP",
        text: "Direct partnerships with verified master stone masons, heritage timber artisans, metal fabricators, and specialized lighting engineers who share our devotion to excellence."
    },
    {
        number: "06",
        title: "END-TO-END EXECUTION",
        text: "We act as your dedicated guardian on site. From municipal coordination and structural auditing to custom upholstery and art curation, we deliver turnkey peace of mind."
    }
];

const processData = [
    {
        number: "01",
        stage: "DISCOVER",
        title: "Spatial Immersion & Brief",
        duration: "Weeks 1–2",
        deliverables: "Site survey, climatic path analysis, lifestyle audit, preliminary spatial budget.",
        description: "We walk your site, study ambient breezes and sun angles, and sit with you to map out your daily domestic choreographies."
    },
    {
        number: "02",
        stage: "CONCEPT",
        title: "Volumetric Vision & Material Trays",
        duration: "Weeks 3–5",
        deliverables: "Spatial zoning plans, physical material boards (stone, timber, metal samples), 3D spatial massing.",
        description: "We formulate the design soul of the project, assembling tactile sample trays so you can feel the exact textures and stones before commitments are made."
    },
    {
        number: "03",
        stage: "DESIGN",
        title: "Architectural Detailing & BOQ",
        duration: "Weeks 6–9",
        deliverables: "Millimeter-accurate working drawings, lighting & MEP schemas, custom joinery specs, itemized BOQ.",
        description: "Translating poetry into technical precision. Every shadow line, electrical conduit, and bespoke cabinet is drawn to microscopic engineering fidelity."
    },
    {
        number: "04",
        stage: "EXECUTE",
        title: "Artisanal Construction & Supervision",
        duration: "Weeks 10–24+",
        deliverables: "Daily site logs, structural joinery installation, stone cladding, MEP testing, milestone audits.",
        description: "Our site architects oversee fabrication with unrelenting rigor. We coordinate every trade on site to ensure drawing fidelity without compromise."
    },
    {
        number: "05",
        stage: "REVEAL",
        title: "White-Glove Styling & Handover",
        duration: "Final Week",
        deliverables: "Deep cleaning, art curation, lighting scene programming, maintenance dossier, ceremonial handover.",
        description: "The culmination of the journey. Every surface polished, beds made with custom linens, circadian lighting calibrated, and keys handed over."
    }
];

const materialsData = [
    {
        id: "wood",
        title: "BURMESE TEAK & AMERICAN OAK",
        category: "TIMBER",
        origin: "Sustainable responsibly forested plantations",
        description: "Slow-grown solid hardwoods with dense annual rings and natural oils. Finished with organic hardwax oils to celebrate natural grain rather than plastic varnishes.",
        image: "assets/images/materials/material-wood.jpg",
        finish: "Zero-VOC Matte Hardwax"
    },
    {
        id: "stone",
        title: "SILVER & NAVONA TRAVERTINE",
        category: "NATURAL STONE",
        origin: "Tivoli quarries, Italy & indigenous Tamil quarries",
        description: "Porous sedimentary limestone with linear cellular strata. Honed and open-pore finishes that feel cool under bare feet during humid summers.",
        image: "assets/images/materials/material-stone.jpg",
        finish: "Cross-cut Open-Pore Honed"
    },
    {
        id: "marble",
        title: "CARRARA & ARABESCATI MARBLE",
        category: "MONOLITHIC MARBLE",
        origin: "Apuan Alps, Italy",
        description: "Dramatic metamorphic stone celebrated for delicate charcoal and gold veining. Precision book-matched across dramatic foyer walls and kitchen islands.",
        image: "assets/images/materials/material-marble.jpg",
        finish: "Silky Velvet Leathered"
    },
    {
        id: "metal",
        title: "AGED BRONZE & CHAMPAGNE BRASS",
        category: "ARCHITECTURAL METALS",
        origin: "Hand-cast in Coimbatore metal workshops",
        description: "Unlacquered living metals that develop an enchanting patina over time with the touch of your hands. Custom-machined for shadow gaps, hinges, and portals.",
        image: "assets/images/materials/material-metal.jpg",
        finish: "Hand-patinated Satin"
    },
    {
        id: "fabric",
        title: "RAW BELGIAN LINEN & BOUCLÉ",
        category: "NATURAL TEXTILES",
        origin: "Flanders flax weavers & South Indian looms",
        description: "Heavyweight tactile natural fibers that soften acoustic resonance and impart relaxed tactile warmth to bespoke seating and drapery.",
        image: "assets/images/materials/material-fabric.jpg",
        finish: "Undyed Organic Weave"
    },
    {
        id: "glass",
        title: "FLUTED & SMOKED GLASS",
        category: "ARCHITECTURAL GLAZING",
        origin: "Precision European flat glass manufacturers",
        description: "Reeded and low-iron architectural glass providing rhythmic light refraction, visual privacy, and graphic vertical geometry.",
        image: "assets/images/materials/material-glass.jpg",
        finish: "Architectural Reeded"
    },
    {
        id: "light",
        title: "CIRCADIAN ARCHITECTURAL LIGHT",
        category: "ILLUMINATION",
        origin: "High-CRI 98+ Architectural Grade Emitters",
        description: "Deep-recessed optics with zero glare. Warm dimming capabilities (1800K to 3000K) that mimic the natural solar rhythm from sunrise to night.",
        image: "assets/images/materials/material-light.jpg",
        finish: "Zero-Glare Anti-glare Baffles"
    }
];

const studioTeamData = {
    founderName: "Ar. Vikram Ramanathan",
    founderRole: "Principal Architect & Creative Director",
    founderCredentials: "B.Arch (SPA), M.Des (Domus Academy, Milan), IIA Member",
    statement: "“A house must not shout for validation. It should hold you quietly at dusk, catch the breeze at noon, and offer timeless dignity to every moment of domestic life.”",
    bio: "With over sixteen years of architectural and interior practice in Coimbatore, Vikram founded Atelier in 2010 to champion a refined architectural vernacular that pairs South Indian craftsmanship with international spatial restraint. Under his art direction, the studio has delivered over 140 bespoke residences, private villas, and boutique commercial landmarks.",
    image: "assets/images/studio/founder.jpg",
    practiceImages: [
        { title: "Architectural Site Inspection", image: "assets/images/studio/site-visit.jpg" },
        { title: "Physical Material Sample Trays", image: "assets/images/studio/material-board.jpg" },
        { title: "The Coimbatore Studio Gallery", image: "assets/images/studio/studio-space.jpg" }
    ]
};

const testimonialsData = [
    {
        quote: "Atelier transformed our 8,400 sq.ft villa in Coimbatore into a tranquil, sculptural home. Their understanding of natural light, tropical ventilation, and raw materials is unmatched in the country.",
        client: "Rajesh & Priya Sundaram",
        project: "The Courtyard House",
        location: "Coimbatore",
        rating: 5,
        year: "2026"
    },
    {
        quote: "The level of precision in their custom millwork and architectural lighting is world-class. You feel like you are walking inside an Architectural Digest spread every single day of your life.",
        client: "Dr. Ashwin Chandran",
        project: "Sky Penthouse",
        location: "Coimbatore",
        rating: 5,
        year: "2025"
    },
    {
        quote: "Working with Vikram and the Atelier team was effortless. They managed the entire turnkey execution with absolute transparency, zero budget overrun, and handed over two weeks ahead of schedule.",
        client: "Meera & Siddharth Varma",
        project: "The Monolith Villa",
        location: "Coimbatore",
        rating: 5,
        year: "2025"
    },
    {
        quote: "Our corporate headquarters required a balance between executive gravity and welcoming warmth. Atelier balanced raw stone and walnut timber with absolute mastery.",
        client: "K. Narayanan",
        project: "Solaris Executive HQ",
        location: "Coimbatore",
        rating: 5,
        year: "2025"
    },
    {
        quote: "The kitchen island and master bedroom designed by Atelier are easily the most praised spaces whenever guests visit. Tactile, functional, and breathtakingly serene.",
        client: "Divya Krishnakumar",
        project: "Serena Sanctuary",
        location: "Coimbatore",
        rating: 5,
        year: "2025"
    }
];

const journalPostsData = [
    {
        id: "how-to-design-a-timeless-living-room",
        title: "How to Design a Timeless Living Room That Never Ages",
        category: "ARCHITECTURE & LIVING",
        date: "October 2026",
        readTime: "6 min read",
        image: "assets/images/journal/post-1.jpg",
        excerpt: "Why avoiding trend-driven furniture silhouettes and centering on architectural volume and honest materials guarantees decade-long relevance.",
        content: `
            <p>In an era dominated by hyper-accelerated digital design cycles, the greatest hazard facing modern homeowners is obsolescence. What looks fashionable on Instagram today will often look painfully dated five years from now.</p>
            <h3>1. The Geometry of Restraint</h3>
            <p>A timeless living room is not defined by its ornaments, but by its spatial proportion. Ensure that ceiling transitions are intentional, window fenestrations allow generous natural daylight, and circulation routes allow two people to walk side-by-side without dodging tables.</p>
            <h3>2. Honest Tactile Materials</h3>
            <p>Synthetic veneers and printed stone porcelain quickly reveal their artificiality under close inspection. Genuine solid timber, honed travertine, raw Belgian linen, and patinated bronze develop character as they age. A scratch on solid oak is a mark of lived experience; a chip on laminate is garbage.</p>
            <h3>3. Hidden Illumination</h3>
            <p>Avoid harsh central chandeliers that cast unflattering downward shadows. Instead, layer your lighting with soft floor-grazing fixtures, picture lights, and concealed perimeter coves that create intimacy as the sun goes down.</p>
        `
    },
    {
        id: "5-materials-that-transform-a-space",
        title: "5 Tactile Materials That Elevate Interior Proportion",
        category: "MATERIAL PROVENANCE",
        date: "September 2026",
        readTime: "5 min read",
        image: "assets/images/journal/post-2.jpg",
        excerpt: "From open-pore Italian travertine to hand-loomed flax linen: how material truth creates subconscious emotional comfort in high-end homes.",
        content: `
            <p>When you walk into a truly exceptional residence, your body registers tranquility long before your brain processes the individual items in the room. This phenomenon is driven by material authenticity.</p>
            <h3>1. Open-Pore Travertine</h3>
            <p>Travertine is cellular, warm, and tactile. Leaving the microscopic pores un-grouted and honing the surface gives it a soft velvet sheen that reflects light in gentle gradients rather than harsh reflections.</p>
            <h3>2. Solid Burmese Teak</h3>
            <p>High silica and natural teak oil content protect this legendary hardwood in humid tropical microclimates. Its golden-amber warmth balances cold architectural concrete and steel.</p>
            <h3>3. Unlacquered Brass</h3>
            <p>Hardware that changes color where your fingers touch it is alive. It communicates history and authentic metallurgy, rejecting plasticized clear coats that peel over time.</p>
        `
    },
    {
        id: "the-art-of-warm-minimalism",
        title: "The Art of Warm Minimalism: Comfort Without Visual Noise",
        category: "PHILOSOPHY",
        date: "August 2026",
        readTime: "7 min read",
        image: "assets/images/journal/post-3.jpg",
        excerpt: "Dispelling the myth that minimalism must feel cold and clinical. How to achieve monastic quietude infused with warmth and hospitality.",
        content: `
            <p>Early modernist minimalism earned a reputation for being austere—white clinical walls, hard chrome frames, and cold fluorescent tubes. Warm minimalism is the humanized evolution of that movement.</p>
            <h3>Curvature and Texture</h3>
            <p>To keep a minimalist room from feeling like a laboratory, soften the rigid orthogonal lines. Gentle curved lime plaster corners, deeply textured bouclé sofas, and warm hand-knotted wool rugs absorb sound and invite touch.</p>
            <h3>Concealed Utility</h3>
            <p>The secret to keeping a home pristine is generous, invisible storage. When every object—from remote controls to kitchen appliances—has a purpose-built concealed joinery compartment, maintaining tranquility requires zero effort.</p>
        `
    },
    {
        id: "how-to-plan-your-dream-kitchen",
        title: "How to Plan Your Dream Kitchen: Flow, Stone & Concealed Function",
        category: "CULINARY DESIGN",
        date: "July 2026",
        readTime: "8 min read",
        image: "assets/images/journal/post-4.jpg",
        excerpt: "The architectural anatomy of high-performance culinary architecture where heavy cooking vanishes behind sculptural stone monoliths.",
        content: `
            <p>The contemporary luxury kitchen is no longer a hidden service room; it is the social epicentre of the modern home. Designing it requires harmonizing heavy culinary execution with immaculate social elegance.</p>
            <h3>The Double Kitchen Concept</h3>
            <p>For discerning Indian households, the wet-and-dry kitchen division remains paramount. The Show Kitchen serves as an elegant social island for morning coffee, light breakfasts, and evening aperitifs with guests, while the adjoining Heavy Prep Kitchen accommodates intense cooking, wet cleaning, and high-heat spices without disrupting the public living room.</p>
            <h3>Monolithic Islands</h3>
            <p>A central stone island functions as a sculpture. Continuous waterfall edges, integrated flush induction, and hidden bronze pop-up outlets preserve its monolithic purity.</p>
        `
    }
];

const instagramPostsData = [
    { id: 1, image: "assets/images/projects/insta-1.jpg", caption: "Burmese teak louver detailing at The Courtyard House. Light filtering through raw materials.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 2, image: "assets/images/projects/insta-2.jpg", caption: "Curated material tray for the Nilgiris Foothills project. Travertine, raw linen, and patinated bronze.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 3, image: "assets/images/projects/insta-3.jpg", caption: "Double-height living pavilion at twilight. Lighting designed to graze stone textures.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 4, image: "assets/images/projects/insta-4.jpg", caption: "Master suite sanctuary featuring lime plaster walls and bespoke white oak headboard.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 5, image: "assets/images/projects/insta-5.jpg", caption: "Hand-forged brass handles being calibrated in our workshop prior to site assembly.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 6, image: "assets/images/projects/insta-6.jpg", caption: "Custom dining chairs in solid American oak and Belgian linen upholstery.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 7, image: "assets/images/projects/insta-7.jpg", caption: "Morning light in the breakfast nook. Fluted glass and morning shadow play.", link: "https://instagram.com/atelier.interior.studio" },
    { id: 8, image: "assets/images/projects/insta-8.jpg", caption: "Architectural site inspection. Verifying millimeter shadow gap alignments.", link: "https://instagram.com/atelier.interior.studio" }
];
