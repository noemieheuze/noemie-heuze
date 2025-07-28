// utils/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "equilibre",
    title: "Équilibre",
    link: "./projets.html?slug=equilibre",
    heroImage: "./assets/images/ph-projet.jpg",
    type: "Analyse",
    context: [
      "Application fonctionnelle déployée sur iOS et Android, avec un taux d'engagement de 65 % des utilisateurs actifs mensuels et une réduction de 20 % des plaintes liées aux troubles musculo‑squelettiques.",
      "Nous avons optimisé l’expérience en ajoutant des rappels et conseils de posture personnalisés."
    ],
    process: [
      {
        step: "Note de synthèse",
        description:
          "Compilation des insights utilisateurs, analyse des points de douleur et définition des objectifs fonctionnels.",
        // pas d'images pour cette étape
      },
      {
        step: "Tri de cartes",
        description:
          "Organisation des fonctionnalités par affinities pour structurer les écrans clés de l'application.",
        images: [
          "./assets/images/ph-projet.jpg",
          "./assets/images/ph-projet.jpg"
        ]
      },
      {
        step: "Parcours utilisateurs & personas",
        description:
          "Création de trois personas et cartographie de leurs scénarios d’usage dans l’app.",
        images: ["./assets/images/ph-projet.jpg"]
      },
      {
        step: "Architecture de l’information",
        description:
          "Arborescence et flux de navigation validés pour s’assurer d’une expérience fluide.",
        images: []
      },
      {
        step: "Wireframes",
        description:
          "Esquisses basse fidélité pour valider l’ergonomie et le placement des contenus principaux.",
        images: ["./assets/images/ph-projet.jpg"]
      }
    ],
    result:
      "Application finalisée avec un taux d’engagement de 65 % et une réduction de 20 % des plaintes, déployée sur iOS et Android.",
    toolsUsed: ["Figma", "Miro", "Sketch", "InVision"]
  },
  {
    id: 2,
    slug: "seconde-peau",
    title: "Seconde Peau",
    link: "./projets.html?slug=seconde-peau",
    heroImage: "./assets/images/ph-projet.jpg",
    type: "Analyse",
    context: [
      "Plateforme e‑commerce de vêtements techniques sur mesure.",
      "L’objectif était de simplifier la configuration des tailles et modèles pour améliorer la conversion."
    ],
    process: [
      {
        step: "Atelier co‑créatif",
        description:
          "Session avec les stylistes et clients pour lister les besoins fonctionnels et esthétiques."
      },
      {
        step: "Prototype rapide",
        description:
          "Wireframes cliquables pour tester le parcours de personnalisation avant développement.",
        images: ["./assets/images/ph-projet.jpg"]
      }
    ],
    result:
      "Augmentation de 30 % du taux d’ajout au panier et baisse de 15 % du taux d’abandon.",
    toolsUsed: ["Adobe XD", "Webflow", "Google Analytics"]
  },
  {
    id: 3,
    slug: "foodles",
    title: "Foodles",
    link: "./projets.html?slug=foodles",
    heroImage: "./assets/images/ph-projet.jpg",
    type: "Analyse",
    context: [
      "Application mobile de recommandation de restaurants healthy.",
      "Filtre avancé et géolocalisation performant pour optimiser la recherche."
    ],
    process: [
      {
        step: "Benchmark",
        description:
          "Analyse des apps concurrentes pour identifier les fonctionnalités différenciantes.",
        images: ["./assets/images/ph-projet.jpg"]
      },
      {
        step: "Tests utilisateurs",
        description:
          "Prototypes en papier testés en conditions réelles pour affiner l’interface."
      }
    ],
    result:
      "Lancement avec 4,7 étoiles et 25 000 téléchargements en trois mois.",
    toolsUsed: ["Figma", "Maze", "Zeplin"]
  },
  {
    id: 4,
    slug: "lyman-abid",
    title: "Lyman Abid",
    link: "./projets.html?slug=lyman-abid",
    heroImage: "./assets/images/ph-projet.jpg",
    type: "Analyse",
    context: [
      "Portfolio en ligne pour le photographe Lyman Abid.",
      "Galerie responsive mettant en avant ses meilleures séries."
    ],
    process: [
      {
        step: "Moodboard",
        description:
          "Sélection des visuels clés et définition de l’ambiance graphique générale."
      },
      {
        step: "Prototype haute fidélité",
        description:
          "Maquettes Figma validées par le client avant développement front‑end.",
        images: ["./assets/images/ph-projet.jpg"]
      }
    ],
    result:
      "Site live en deux semaines, +50 % de trafic organique sur les galeries.",
    toolsUsed: ["Figma", "Next.js", "Vercel"]
  }
];
