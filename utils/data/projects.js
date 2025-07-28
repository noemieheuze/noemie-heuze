// utils/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "equilibre",
    title: "Équilibre",
    link: "./projets.html?slug=equilibre",
    heroImage: "../assets/images/ph-projet.jpg",
    context: [
      " Application fonctionnelle déployée sur iOS et Android, avec un taux d'engagement de 65 % des utilisateurs actifs mensuels et une réduction de 20 % des plaintes liées aux troubles musculo‑squelettiques.",
       " Application fonctionnelle déployée sur iOS et Android, avec un taux d'engagement de 65 % des utilisateurs actifs mensuels et une réduction de 20 % des plaintes liées aux troubles musculo‑squelettiques."
    ],
    process: [
      {
        step: "Note de synthèse",
        description:
          "Compilation des insights utilisateurs, analyse des points de douleur et définition des objectifs fonctionnels."
      },
      {
        step: "Tri de cartes",
        description:
          "Organisation des fonctionnalités par affinities pour structurer les écrans clés de l'application.",
        images: [
          "../assets/images/ph-projet.jpg",
          "../assets/images/ph-projet.jpg"
        ]
      },
      {
        step: "Parcours utilisateurs & personas",
        description:
          "Création de trois personas et cartographie de leurs scénarios d’usage dans l’app.",
        images: [
          "../assets/images/ph-projet.jpg",
          "../assets/images/ph-projet.jpg"
        ]
      },
      {
        step: "04 – Architecture de l’information",
        description:
          "Arborescence et flux de navigation validés pour s’assurer d’une expérience fluide.",
        images: ["../assets/images/ph-projet.jpg"]
      },
      {
        step: "05 – Wireframes",
        description:
          "Esquisses basse fidélité pour valider l’ergonomie et le placement des contenus principaux.",
        images: [
          "../assets/images/ph-projet.jpg",
          "../assets/images/ph-projet.jpg"
        ]
      }
    ],
    result: `
      Application fonctionnelle déployée sur iOS et Android, avec un taux d’engagement
      de 65 % des utilisateurs actifs mensuels et une réduction de 20 % des plaintes
      liées aux troubles musculo‑squelettiques.
    `,
    toolsUsed: ["Figma", "Miro", "Sketch", "InVision"],
    otherProjects: [
      {
        slug: "seconde-peau",
        title: "Seconde Peau",
        link: "./projets.html?slug=seconde-peau",
        image: "../assets/images/seconde-peau-thumb.jpg"
      },
      {
        slug: "foodles",
        title: "Foodles",
        link: "./projets.html?slug=foodles",
        image: "../assets/images/foodles-thumb.jpg"
      },
      {
        slug: "lyman-abid",
        title: "Lyman Abid",
        link: "./projets.html?slug=lyman-abid",
        image: "../assets/images/lyman-abid-thumb.jpg"
      }
    ]
  },

  {
    id: 2,
    slug: "seconde-peau",
    title: "Seconde Peau",
    link: "./projets.html?slug=seconde-peau",
    heroImage: "../assets/images/seconde-peau-hero.jpg",
    context: `
      Seconde Peau est une plateforme e‑commerce de vêtements techniques sur mesure.
      L’objectif est de simplifier la configuration des tailles et modèles pour améliorer
      la conversion.
    `,
    process: [
      {
        step: "01 – Atelier co‑créatif",
        description:
          "Session avec les stylistes et clients pour lister les besoins fonctionnels et esthétiques.",
        images: ["../assets/images/seconde-peau-process-atelier.jpg"]
      },
      {
        step: "02 – Prototype rapide",
        description:
          "Wireframes cliquables pour tester le parcours de personnalisation avant le développement.",
        images: ["../assets/images/seconde-peau-process-proto.jpg"]
      }
    ],
    result: `
      Augmentation de 30 % du taux d’ajout au panier et baisse de 15 % du taux d’abandon
      du panier sur la plateforme.
    `,
    toolsUsed: ["Adobe XD", "Webflow", "Google Analytics"],
    otherProjects: [
      {
        slug: "equilibre",
        title: "Équilibre",
        link: "./projets.html?slug=equilibre",
        image: "../assets/images/equilibre-thumb.jpg"
      },
      {
        slug: "foodles",
        title: "Foodles",
        link: "./projets.html?slug=foodles",
        image: "./assets/images/foodles-thumb.jpg"
      },
      {
        slug: "lyman-abid",
        title: "Lyman Abid",
        link: "./projets.html?slug=lyman-abid",
        image: "./assets/images/lyman-abid-thumb.jpg"
      }
    ]
  },

  {
    id: 3,
    slug: "foodles",
    title: "Foodles",
    link: "./projets.html?slug=foodles",
    heroImage: "./assets/images/foodles-hero.jpg",
    context: `
      Foodles est une application mobile de recommandation de restaurants healthy.
      L’enjeu était de créer un filtre avancé et un système de géolocalisation performant.
    `,
    process: [
      {
        step: "01 – Benchmark",
        description:
          "Analyse des applications concurrentes pour identifier les fonctionnalités différenciantes.",
        images: ["./assets/images/foodles-process-benchmark.jpg"]
      },
      {
        step: "02 – Tests utilisateurs",
        description:
          "Prototypes en papier testés en conditions réelles pour affiner l’interface.",
        images: ["./assets/images/foodles-process-tests.jpg"]
      }
    ],
    result: `
      Lancement de l’app sur les stores, avec 4,7 étoiles et 25 000 téléchargements
      en trois mois.
    `,
    toolsUsed: ["Figma", "Maze", "Zeplin"],
    otherProjects: [
      {
        slug: "equilibre",
        title: "Équilibre",
        link: "./projets.html?slug=equilibre",
        image: "./assets/images/equilibre-thumb.jpg"
      },
      {
        slug: "seconde-peau",
        title: "Seconde Peau",
        link: "./projets.html?slug=seconde-peau",
        image: "./assets/images/seconde-peau-thumb.jpg"
      },
      {
        slug: "lyman-abid",
        title: "Lyman Abid",
        link: "./projets.html?slug=lyman-abid",
        image: "./assets/images/lyman-abid-thumb.jpg"
      }
    ]
  },

  {
    id: 4,
    slug: "lyman-abid",
    title: "Lyman Abid",
    link: "./projets.html?slug=lyman-abid",
    heroImage: "./assets/images/lyman-abid-hero.jpg",
    context: `
      Portfolio en ligne pour le photographe Lyman Abid, mettant en avant ses meilleures
      séries via un système de galerie responsive.
    `,
    process: [
      {
        step: "01 – Moodboard",
        description:
          "Sélection des visuels clés et définition de l’ambiance graphique générale.",
        images: ["./assets/images/lyman-abid-process-mood.jpg"]
      },
      {
        step: "02 – Prototype haute fidélité",
        description:
          "Maquettes Figma validées par le client avant développement front‑end.",
        images: ["./assets/images/lyman-abid-process-proto.jpg"]
      }
    ],
    result: `
      Site en ligne en moins de deux semaines, générant +50 % de trafic organique sur ses photos.
    `,
    toolsUsed: ["Figma", "Next.js", "Vercel"],
    otherProjects: [
      {
        slug: "equilibre",
        title: "Équilibre",
        link: "./projets.html?slug=equilibre",
        image: "./assets/images/equilibre-thumb.jpg"
      },
      {
        slug: "seconde-peau",
        title: "Seconde Peau",
        link: "./projets.html?slug=seconde-peau",
        image: "./assets/images/seconde-peau-thumb.jpg"
      },
      {
        slug: "foodles",
        title: "Foodles",
        link: "./projets.html?slug=foodles",
        image: "./assets/images/foodles-thumb.jpg"
      }
    ]
  }
];
