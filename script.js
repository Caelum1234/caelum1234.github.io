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



// Modal gallery
const galleryItems = document.querySelectorAll('.project-card img');
galleryItems.forEach(img => {
    img.addEventListener("click", () => {
        alert("Galerie améliorée !");
    });
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
