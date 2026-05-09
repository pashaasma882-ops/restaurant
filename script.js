/* ═══════════════════════════════════════════════
   THE ALCHEMIST'S TABLE — script.js
═══════════════════════════════════════════════ */

// ─── DATA ───────────────────────────────────────

const dishes = {
    appetizers: [
        {
            name: "Pan-Seared Scallops",
            desc: "With cauliflower purée, crispy capers and a lemon beurre blanc.",
            price: "$22",
            img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=400&q=75"
        },
        {
            name: "Burrata & Heritage Tomatoes",
            desc: "Fresh burrata, heirloom tomatoes, basil oil and Aleppo pepper.",
            price: "$18",
            img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&q=75"
        },
        {
            name: "Duck Liver Parfait",
            desc: "Silky parfait with brioche toast, pickled cornichons and truffle honey.",
            price: "$20",
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75"
        },
        {
            name: "Garden Herb Soup",
            desc: "Chilled cucumber & dill velouté with crème fraîche and caviar.",
            price: "$16",
            img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&q=75"
        }
    ],
    mains: [
        {
            name: "Alchemist Sea Bass",
            desc: "Pan-seared, crispy skin sea bass on saffron risotto with samphire.",
            price: "$38",
            img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&q=75"
        },
        {
            name: "Prime Côte de Boeuf",
            desc: "32-day dry-aged, served with bone marrow jus and truffle pommes purée.",
            price: "$55",
            img: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&q=75"
        },
        {
            name: "Artisanal Grain Bowl",
            desc: "Roasted heritage vegetables, quinoa, tahini and pomegranate molasses.",
            price: "$26",
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75"
        },
        {
            name: "Duck Confit",
            desc: "48-hour slow-cooked leg, cherry gastrique, celeriac rémoulade.",
            price: "$42",
            img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=400&q=75"
        }
    ],
    desserts: [
        {
            name: "Valrhona Chocolate Fondant",
            desc: "Warm dark chocolate heart, Madagascan vanilla bean ice cream.",
            price: "$14",
            img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=75"
        },
        {
            name: "Tarte Tatin",
            desc: "Caramelised Granny Smith apple, salted caramel, crème Normande.",
            price: "$12",
            img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=75"
        },
        {
            name: "Matcha Panna Cotta",
            desc: "Set cream with ceremonial matcha, yuzu curd and sesame tuile.",
            price: "$11",
            img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75"
        },
        {
            name: "Cheese Selection",
            desc: "Five artisan cheeses, house chutney, honeycomb and toasted crackers.",
            price: "$16",
            img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=75"
        }
    ]
};

const menuData = {
    appetizers: [
        { name: "Pan-Seared Scallops", desc: "Cauliflower purée, crispy capers, lemon beurre blanc", price: "$22", img: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=120&q=70" },
        { name: "Burrata & Heritage Tomatoes", desc: "Heirloom tomatoes, basil oil, Aleppo pepper", price: "$18", img: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=120&q=70" },
        { name: "Duck Liver Parfait", desc: "Brioche toast, pickled cornichons, truffle honey", price: "$20", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&q=70" },
        { name: "Garden Herb Soup", desc: "Cucumber & dill velouté, crème fraîche, caviar", price: "$16", img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=120&q=70" },
        { name: "Yellowfin Tuna Tartare", desc: "Avocado, ponzu dressing, sesame crisps", price: "$24", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=120&q=70" }
    ],
    mains: [
        { name: "Alchemist Sea Bass", desc: "Saffron risotto, crispy skin, samphire, sea herbs", price: "$38", img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=120&q=70" },
        { name: "Prime Côte de Boeuf", desc: "32-day dry-aged, bone marrow jus, truffle pommes purée", price: "$55", img: "https://images.unsplash.com/photo-1558030006-450675393462?w=120&q=70" },
        { name: "Duck Confit", desc: "48-hour slow-cooked, cherry gastrique, celeriac rémoulade", price: "$42", img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=120&q=70" },
        { name: "Artisanal Grain Bowl", desc: "Heritage vegetables, quinoa, tahini, pomegranate", price: "$26", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&q=70" },
        { name: "Lamb Rack", desc: "Herb-crusted, Provençal jus, creamed spinach, fondant potato", price: "$48", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=120&q=70" }
    ],
    desserts: [
        { name: "Valrhona Chocolate Fondant", desc: "Dark chocolate heart, Madagascan vanilla ice cream", price: "$14", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=120&q=70" },
        { name: "Tarte Tatin", desc: "Caramelised apple, salted caramel, crème Normande", price: "$12", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=120&q=70" },
        { name: "Matcha Panna Cotta", desc: "Ceremonial matcha, yuzu curd, sesame tuile", price: "$11", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=120&q=70" },
        { name: "Cheese Selection", desc: "Five artisan cheeses, chutney, honeycomb, crackers", price: "$16", img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=120&q=70" }
    ]
};

const galleryImages = [
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75", cat: "food",     tall: true,  label: "Chef's Plating" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=75", cat: "interior", tall: false, label: "Main Dining Room" },
    { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=75", cat: "food",     tall: false, label: "Signature Dish" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75", cat: "team",     tall: false, label: "Our Kitchen" },
    { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=75", cat: "interior", tall: true,  label: "Bar Lounge" },
    { src: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=75", cat: "food",     tall: false, label: "Pan-Seared Creation" },
    { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=75", cat: "food",     tall: false, label: "Tartare" },
    { src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=75", cat: "team",     tall: false, label: "Head Chef" },
    { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=75", cat: "interior", tall: false, label: "Private Dining" }
];

// ─── NAVIGATION ─────────────────────────────────

function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    // Show target
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.page === pageId);
    });
    // Close mobile menu
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
}

// Attach nav links
document.querySelectorAll('.nav-link, .js-nav, .mob-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page || this.getAttribute('href')?.replace('#', '');
        if (page) navigateTo(page);
    });
});

// Logo → home
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => navigateTo('home'));
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

// ─── NAVBAR SCROLL ──────────────────────────────

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
    revealOnScroll();
});

// ─── FEATURED DISH TABS ─────────────────────────

function renderDishes(category) {
    const grid = document.getElementById('dishes-grid');
    grid.innerHTML = '';
    dishes[category].forEach((d, i) => {
        const card = document.createElement('div');
        card.className = 'dish-card reveal';
        card.style.transitionDelay = `${i * 80}ms`;
        card.innerHTML = `
            <img src="${d.img}" alt="${d.name}" loading="lazy">
            <div class="dish-card-body">
                <h3>${d.name}</h3>
                <p>${d.desc}</p>
                <span class="dish-price">${d.price}</span>
            </div>`;
        grid.appendChild(card);
    });
    setTimeout(revealOnScroll, 50);
}

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        renderDishes(this.dataset.tab);
    });
});

renderDishes('appetizers');

// ─── MENU PAGE ──────────────────────────────────

function renderMenu() {
    ['appetizers', 'mains', 'desserts'].forEach(cat => {
        const container = document.getElementById('menu-' + cat);
        if (!container) return;
        menuData[cat].forEach(item => {
            const el = document.createElement('div');
            el.className = 'menu-item reveal';
            el.innerHTML = `
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="menu-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.desc}</p>
                </div>
                <span class="menu-item-price">${item.price}</span>`;
            container.appendChild(el);
        });
    });
}
renderMenu();

// ─── GALLERY ────────────────────────────────────

function renderGallery(filter = 'all') {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? galleryImages : galleryImages.filter(i => i.cat === filter);
    filtered.forEach((img, idx) => {
        const item = document.createElement('div');
        item.className = 'gal-item reveal' + (img.tall ? ' tall' : '');
        item.style.transitionDelay = `${idx * 60}ms`;
        item.innerHTML = `
            <img src="${img.src}" alt="${img.label}" loading="lazy">
            <div class="gal-overlay"><span>${img.label}</span></div>`;
        grid.appendChild(item);
    });
    setTimeout(revealOnScroll, 50);
}

document.querySelectorAll('.gf').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.gf').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        renderGallery(this.dataset.cat);
    });
});

renderGallery();

// ─── RESERVATION FORM ───────────────────────────

document.getElementById('resForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('resSuccess').style.display = 'block';
});

document.getElementById('newResBtn').addEventListener('click', function() {
    const form = document.getElementById('resForm');
    form.reset();
    form.style.display = 'block';
    document.getElementById('resSuccess').style.display = 'none';
});

// ─── CONTACT FORM ───────────────────────────────

document.getElementById('msgForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2d5a45';
    btn.disabled = true;
    setTimeout(() => {
        this.reset();
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
    }, 3500);
});

// ─── SCROLL REVEAL ──────────────────────────────

function revealOnScroll() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('load', () => {
    revealOnScroll();
    console.log("🍽️ The Alchemist's Table — Loaded Successfully");
});