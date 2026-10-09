function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    
    const translations = {
        es: {
            navHome: "Inicio",
            navCeramics: "Cerámica",
            navMetal: "Metal",
            navWood: "Madera",
            navContact: "Contacto",
            heroTitle: "Arte y Tradición en Tus Manos",
            heroText: "Difundiendo nuestra artesanía única a nivel nacional e internacional.",
            heroBtn: "Ver Catálogo",
            f1Title: "Cerámica",
            f1Text: "Piezas artísticas, menaje, recipientes, botijos y vasijas modeladas con maestría.",
            f2Title: "Metal y Forja",
            f2Text: "Trabajos de fundición, armas históricas, armaduras y forja tradicional.",
            f3Title: "Madera y Étnica",
            f3Text: "Mobiliario nacional, artesanía religiosa, máscaras y tambores internacionales.",
            footerText: "&copy; 2026 Artesanía Artesana. Todos los derechos reservados."
        },
        en: {
            navHome: "Home",
            navCeramics: "Ceramics",
            navMetal: "Metal",
            navWood: "Wood",
            navContact: "Contact",
            heroTitle: "Art and Tradition in Your Hands",
            heroText: "Spreading our unique craft nationally and internationally.",
            heroBtn: "View Catalog",
            f1Title: "Ceramics",
            f1Text: "Artistic pieces, tableware, containers, water jugs and vessels masterfully molded.",
            f2Title: "Metal & Ironwork",
            f2Text: "Casting work, historical weapons, armor and traditional forge.",
            f3Title: "Wood & Ethnic",
            f3Text: "National furniture, religious crafts, international masks and drums.",
            footerText: "&copy; 2026 Artesanía Artesana. All rights reserved."
        },
        fr: {
            navHome: "Accueil",
            navCeramics: "Céramique",
            navMetal: "Métal",
            navWood: "Bois",
            navContact: "Contact",
            heroTitle: "Art et Tradition dans Vos Mains",
            heroText: "Diffusant notre artisanat unique à l'échelle nationale et internationale.",
            heroBtn: "Voir le Catalogue",
            f1Title: "Céramique",
            f1Text: "Pièces artistiques, vaisselle, récipients et vases modelés avec maîtrise.",
            f2Title: "Métal et Forge",
            f2Text: "Travaux de fonderie, armes historiques, armures et forge traditionnelle.",
            f3Title: "Bois et Ethnique",
            f3Text: "Mobilier national, artisanat religieux, masques et tambours internationaux.",
            footerText: "&copy; 2026 Artesanía Artesana. Tous droits réservés."
        },
        it: {
            navHome: "Inizio",
            navCeramics: "Ceramica",
            navMetal: "Metallo",
            navWood: "Legno",
            navContact: "Contatto",
            heroTitle: "Arte e Tradizione nelle Tue Mani",
            heroText: "Diffondendo la nostra artigianalità unica a livello nazionale e internazionale.",
            heroBtn: "Vedi Catalogo",
            f1Title: "Ceramica",
            f1Text: "Pezzi artistici, stoviglie, contenitori, brocche e vasi modellati con maestria.",
            f2Title: "Metallo e Forgiatura",
            f2Text: "Lavori di fonderia, armi storiche, armature e forgiatura tradizionale.",
            f3Title: "Legno ed Etnico",
            f3Text: "Arredamento nazionale, artigianalità religiosa, maschere e tamburi internazionali.",
            footerText: "&copy; 2026 Artesanía Artesana. Tutti i diritti riservati."
        }
    };

    // Actualizamos los elementos en la página
    document.getElementById('navHome').innerText = translations[lang].navHome;
    document.getElementById('navCeramics').innerText = translations[lang].navCeramics;
    document.getElementById('navMetal').innerText = translations[lang].navMetal;
    document.getElementById('navWood').innerText = translations[lang].navWood;
    document.getElementById('navContact').innerText = translations[lang].navContact;
    document.getElementById('heroTitle').innerText = translations[lang].heroTitle;
    document.getElementById('heroText').innerText = translations[lang].heroText;
    document.getElementById('heroBtn').innerText = translations[lang].heroBtn;
    document.getElementById('f1Title').innerText = translations[lang].f1Title;
    document.getElementById('f1Text').innerText = translations[lang].f1Text;
    document.getElementById('f2Title').innerText = translations[lang].f2Title;
    document.getElementById('f2Text').innerText = translations[lang].f2Text;
    document.getElementById('f3Title').innerText = translations[lang].f3Title;
    document.getElementById('f3Text').innerText = translations[lang].f3Text;
    document.getElementById('footerText').innerHTML = translations[lang].footerText;
}