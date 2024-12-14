// Sticky menu on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Filter Buttons for Competences
const competences = {
    "Gérer le patrimoine informatique": [
        "Agenda EPSI",
        "Star Wars",
        "Projet Voyage",
        "Infra Serveur Web",
        "Restauration WordPress",
        "QCMaster"
    ],
    "Répondre aux incidents et aux demandes d’assistance et d’évolution": [
        "Agenda EPSI",
        "Star Wars",
        "Projet Voyage",
        "QCMaster"
    ],
    "Développer la présence en ligne de l’organisation": [
        "QCMaster"
    ],
    "Travailler en mode projet": [
        "Agenda EPSI",
        "Star Wars",
        "Projet Voyage",
        "Infra Serveur Web",
        "Restauration WordPress",
        "QCMaster"
    ],
    "Mettre à disposition des utilisateurs un service informatique": [
        "Agenda EPSI",
        "Star Wars",
        "Projet Voyage",
        "Infra Serveur Web",
        "Restauration WordPress",
        "QCMaster"
    ],
    "Organiser son développement professionnel": [
        "Agenda EPSI",
        "Restauration WordPress",
        "QCMaster"
    ]
};

const competenceItems = document.querySelectorAll(".competence-item");
const competenceTitle = document.getElementById("competence-title");
const competenceDescription = document.getElementById("competence-description");
const projectList = document.getElementById("project-list");

competenceItems.forEach(item => {
    item.addEventListener("click", () => {
        const competence = item.getAttribute("data-competence");
        competenceTitle.textContent = competence;
        projectList.innerHTML = "";

        const projects = competences[competence] || [];
        if (projects.length === 0) {
            competenceDescription.textContent = "Aucun projet associé pour cette compétence.";
        } else {
            competenceDescription.textContent = "Projets associés :";
            projects.forEach(project => {
                const li = document.createElement("li");
                li.textContent = project;
                projectList.appendChild(li);
            });
        }
    });
});



const galleryItems = document.querySelectorAll('.project-card img');
const projectDetails = document.getElementById("project-details");
const detailsTitle = document.getElementById("details-title");
const detailsDescription = document.getElementById("details-description");
const detailsButtons = document.getElementById("details-buttons");
const closeDetails = document.querySelector(".close-details");

// Données des projets (contenu riche)
const projectData = {
    "Projet 1": {
        title: "Agenda EPSI",
        description: `
            <h2>Contexte</h2>
            <p>Développement d’une application web de gestion d’agenda pour les étudiants et administrateurs de l’EPSI.</p>
            <h2>Technologies utilisées</h2>
            <p>HTML, CSS, PHP, MySQL</p>
            <h2>Fonctionnalités principales</h2>
            <p>- Gestion des événements<br>- Interface utilisateur dynamique<br>- Base de données relationnelle</p>
        `,
        buttons: [
            { text: "Voir le code source", link: "https://github.com/lucien-wrq/Agenda" },
        ]
    },
    "Projet 2": {
        title: "Star Wars",
        description: `
            <h2>Contexte</h2>
            <p>Un site web interactif basé sur l'API Star Wars, permettant d'explorer des données en temps réel sur les personnages, vaisseaux, et planètes de cet univers célèbre.</p>
            <h2>Technologies utilisées</h2>
            <p>HTML, CSS, SWAPI</p>
            <h2>Fonctionnalités principales</h2>
            <p>- Recherche de personnages<br>- Exploration des planètes et vaisseaux<br>- Consommation de l'API Star Wars</p>
        `,
        buttons: [
            { text: "Voir le code source", link: "https://github.com/example/star-wars-api" }
        ]
    },
    "Projet 3": {
        title: "Projet Voyage",
        description: `
            <h2>Contexte</h2>
            <p>Outil de réservation de voyage en équipe.</p>
            <h2>Technologies utilisées</h2>
            <p>HTML/CSS, PHP, SQL, Looping(MCD, MLD)</p>
            <h2>Fonctionnalités principales</h2>
            <p>- Création d’itinéraires<br>- Gestion des participants<br>- Calcul des coûts partagés</p>
        `,
        buttons: [
            { text: "Voir le code source", link: "https://github.com/Caelum1234/ProjetVoyage" }
        ]
    },
    
    "Projet 4": {
        title: "Infra Serveur Web",
        description: `
            <h2>Contexte</h2>
            <p>Création d’une infrastructure serveur web pour héberger des applications et bases de données, avec une configuration sécurisée.</p>
            <h2>Technologies utilisées</h2>
            <p>Linux (Debian), Apache, MySQL</p>
            <h2>Fonctionnalités principales</h2>
            <p>- Hébergement sécurisé<br>- Monitoring et journalisation<br>- Optimisation des performances</p>
        `,
        buttons: [
            { text: "Documentation", link: "https://docs.example.com/server-infra" }
        ]
    },
    "Projet 5": {
        title: "QCMaster",
        description: `
            <h2>Contexte</h2>
            <p>Développement d’une plateforme mobile permettant de créer et gérer des QCM pédagogiques et/ou amusants</p>
            <h2>Technologies utilisées</h2>
            <p>Flutter</p>
            <h2>Fonctionnalités principales</h2>
            <p>- Création et édition de QCM<br>- Analyse des résultats<br>- Interface conviviale</p>
        `,
        buttons: [
            { text: "Voir la documentation technique", link: "cahierqcm.pdf" }
        ]
    }
};


// Ajouter un écouteur sur chaque image de projet
galleryItems.forEach(img => {
    img.addEventListener("click", () => {
        const projectKey = img.alt; // Utilise l'attribut alt pour identifier le projet
        const project = projectData[projectKey];

        if (project) {
            // Mettre à jour le contenu riche
            detailsTitle.textContent = project.title;
            detailsDescription.innerHTML = project.description; // Supporte HTML

            // Générer les boutons dynamiquement
            detailsButtons.innerHTML = ""; // Réinitialiser
            project.buttons.forEach(button => {
                const btn = document.createElement("a");
                btn.textContent = button.text;
                btn.href = button.link;
                btn.target = "_blank";
                btn.className = "details-button";
                detailsButtons.appendChild(btn);
            });

            // Afficher les détails
            projectDetails.style.display = "flex";
        }
    });
});

// Fermer les détails lorsqu’on clique sur la croix
closeDetails.addEventListener("click", () => {
    projectDetails.style.display = "none";
});

// Fermer les détails si on clique en dehors de la boîte
projectDetails.addEventListener("click", (e) => {
    if (e.target === projectDetails) {
        projectDetails.style.display = "none";
    }
});

// Typewriter Effect for Hero Section
const text = "Redwan Berki";
const typedText = document.getElementById("typed-text");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjust speed
    }
}

typeWriter();


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", event => {
    if (event.target === modal) modal.style.display = "none";
});

const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Ajouter un écouteur sur chaque carte projet
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        // Extraire les données de la carte cliquée
        const title = card.getAttribute("data-project");
        const description = card.getAttribute("data-description");

        // Mettre à jour la modale avec les données du projet
        modalTitle.textContent = title;
        modalDescription.textContent = description;

        // Afficher la modale
        modal.style.display = "block";
    });
});

// Fermer la modale lorsque l'utilisateur clique sur la croix
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer la modale si l'utilisateur clique à l'extérieur
window.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Interactivité des catégories du CV
document.querySelectorAll(".cv-category").forEach(category => {
    category.addEventListener("click", () => {
        const content = category.querySelector(".cv-content");
        if (content.classList.contains("hidden")) {
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
        }
    });
});
