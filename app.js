// ================= FUNCIÓN DE CAMBIO DE IDIOMA =================
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    const translations = {
        es: {
            navHome: "Inicio",
            navCeramics: "Cerámica ▾",
            navMetal: "Metal ▾",
            navWood: "Madera ▾",
            navEthnic: "Artesanía Étnica ▾",
            navContact: "Contacto",
            heroTitle: "Arte y Tradición en Tus Manos",
            heroText: "Difundiendo nuestra artesanía única a nivel nacional e internacional.",
            heroBtn: "Ver Catálogo",
            catalogTitle: "Nuestros Productos",
            catalogSubtitle: "Explora nuestro catálogo de artesanía hecha a mano.",
            filterAll: "Todos",
            filterCeramics: "Cerámica",
            filterMetal: "Metal",
            filterWood: "Madera",
            filterEthnic: "Artesanía Étnica",
            contactTitle: "Contacto y Ubicación",
            contactVisitTitle: "Visítanos o Escríbenos",
            contactAddress: "Dirección:",
            contactPhone: "Teléfono:",
            contactEmail: "Correo:",
            contactHours: "Horario:",
            mapTitle: "Ubicación / Croquis",
            footerText: "&copy; 2026 Artesanía Artesana. Todos los derechos reservados."
        },
        en: {
            navHome: "Home",
            navCeramics: "Ceramics ▾",
            navMetal: "Metal ▾",
            navWood: "Wood ▾",
            navEthnic: "Ethnic Craft ▾",
            navContact: "Contact",
            heroTitle: "Art and Tradition in Your Hands",
            heroText: "Spreading our unique craft nationally and internationally.",
            heroBtn: "View Catalog",
            catalogTitle: "Our Products",
            catalogSubtitle: "Explore our handmade craft catalog.",
            filterAll: "All",
            filterCeramics: "Ceramics",
            filterMetal: "Metal",
            filterWood: "Wood",
            filterEthnic: "Ethnic Craft",
            contactTitle: "Contact and Location",
            contactVisitTitle: "Visit or Write Us",
            contactAddress: "Address:",
            contactPhone: "Phone:",
            contactEmail: "Email:",
            contactHours: "Hours:",
            mapTitle: "Location / Map",
            footerText: "&copy; 2026 Artesanía Artesana. All rights reserved."
        },
        fr: {
            navHome: "Accueil",
            navCeramics: "Céramique ▾",
            navMetal: "Métal ▾",
            navWood: "Bois ▾",
            navEthnic: "Artisanat Ethnique ▾",
            navContact: "Contact",
            heroTitle: "Art et Tradition dans Vos Mains",
            heroText: "Diffusant notre artisanat unique à l'échelle nationale et internationale.",
            heroBtn: "Voir le Catalogue",
            catalogTitle: "Nos Produits",
            catalogSubtitle: "Explorez notre catalogue d'artisanat fait main.",
            filterAll: "Tous",
            filterCeramics: "Céramique",
            filterMetal: "Métal",
            filterWood: "Bois",
            filterEthnic: "Artisanat Ethnique",
            contactTitle: "Contact et Emplacement",
            contactVisitTitle: "Visitez-nous ou Écrivez-nous",
            contactAddress: "Adresse:",
            contactPhone: "Téléphone:",
            contactEmail: "E-mail:",
            contactHours: "Horaires:",
            mapTitle: "Emplacement / Carte",
            footerText: "&copy; 2026 Artesanía Artesana. Tous droits réservés."
        },
        it: {
            navHome: "Inizio",
            navCeramics: "Ceramica ▾",
            navMetal: "Metallo ▾",
            navWood: "Legno ▾",
            navEthnic: "Artigianato Etnico ▾",
            navContact: "Contatto",
            heroTitle: "Arte e Tradizione nelle Tue Mani",
            heroText: "Diffondendo la nostra artigianalità unica a livello nazionale e internazionale.",
            heroBtn: "Vedi Catalogo",
            catalogTitle: "I Nostri Prodotti",
            catalogSubtitle: "Esplora il nostro catalogo di artigianato fatto a mano.",
            filterAll: "Tutti",
            filterCeramics: "Ceramica",
            filterMetal: "Metallo",
            filterWood: "Legno",
            filterEthnic: "Artigianato Etnico",
            contactTitle: "Contatto e Posizione",
            contactVisitTitle: "Visitaci o Scrivici",
            contactAddress: "Indirizzo:",
            contactPhone: "Telefono:",
            contactEmail: "E-mail:",
            contactHours: "Orario:",
            mapTitle: "Posizione / Mappa",
            footerText: "&copy; 2026 Artesanía Artesana. Tutti i diritti riservati."
        }
    };

    const currentDict = translations[lang];

    // Actualizar textos principales si existen en el DOM
    const safeSetText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    safeSetText('navHome', currentDict.navHome);
    safeSetText('navContact', currentDict.navContact);
    safeSetText('heroTitle', currentDict.heroTitle);
    safeSetText('heroText', currentDict.heroText);
    safeSetText('heroBtn', currentDict.heroBtn);
    safeSetText('catalogTitle', currentDict.catalogTitle);
    safeSetText('catalogSubtitle', currentDict.catalogSubtitle);
    safeSetText('contactTitle', currentDict.contactTitle);
    safeSetText('mapTitle', currentDict.mapTitle);

    const footerEl = document.getElementById('footerText');
    if (footerEl) footerEl.innerHTML = currentDict.footerText;

    // Traducir dinámicamente todos los elementos que tengan atributos data-es, data-en, data-fr, data-it
    document.querySelectorAll(`[data-${lang}]`).forEach(element => {
        element.innerText = element.getAttribute(`data-${lang}`);
    });
}

// ================= FUNCIÓN DE FILTRADO DE PRODUCTOS =================
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Cambiar estado activo de los botones de filtro
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostrar u ocultar productos según la categoría seleccionada
    cards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}