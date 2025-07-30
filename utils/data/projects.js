// utils/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "equilibre",
    title: "Équilibre",
    link: "./projets.html?slug=equilibre",
    heroImage: "./assets/images/project-equilibre-cover.jpg",
    type: "Analyse",
    context: [
      "Équilibre est un institut de recherche spécialisé dans la santé mentale. Il souhaitait transformer leur site dense et peu ergonomique en une application mobile plus claire, accessible et centrée sur l’utilisateur.",
      "Le défi consistait à structurer une application simple, intuitive et utile, capable d’organiser des contenus sensibles tout en s’adaptant aux usages et aux états émotionnels variés des utilisateurs.",
    ],
    process: [
      {
        step: "Note de synthèse",
        description:
          "Analyse de deux applications concurrentes pour identifier une structure claire adaptée aux contenus de santé mentale.",
      },
      {
        step: "Tri de cartes",
        description:
          "J’ai mené des tests de tri de cartes avec des utilisateurs pour valider ou ajuster les catégories proposées. Leur retour a permis de construire une structure intuitive, basée sur leur logique.",
        images: [
          "./assets/images/ph-projet.jpg",
          "./assets/images/ph-projet.jpg",
        ],
      },
      {
        step: "Parcours utilisateurs des personas",
        description:
          "J’ai modélisé les parcours de profils aux besoins variés pour comprendre leurs usages, émotions et blocages, ce qui a aidée à identifier les moments clés de l’expérience et les opportunités.",
        images: ["./assets/images/ph-projet.jpg"],
      },
      {
        step: "Architecture de l’information",
        description:
          "J’ai structuré les contenus de l’application en hiérarchisant les pages selon les besoins réels des utilisateurs, ce qui a posé les fondations d’une navigation claire et fonctionnelle.",
        images: [],
      },
      {
        step: "Wireframes",
        description:
          "J’ai conçu des maquettes basse fidélité pour tester l’organisation des contenus avant de passer au design final. Cette étape a permis de valider l’ergonomie générale et la fluidité des parcours imaginés.",
        images: ["./assets/images/ph-projet.jpg"],
      },
    ],
    result:
      "J’ai structuré une application claire et apaisante, pensée pour guider les utilisateurs avec douceur, tout en leur offrant une navigation simple et adaptée à leurs besoins.",
    toolsUsed: ["Figma"],
  },
  {
    id: 2,
    slug: "seconde-peau",
    title: "Seconde Peau",
    link: "./projets.html?slug=seconde-peau",
    heroImage: "./assets/images/project-secondepeau-cover.jpg",
    type: "Analyse",
    context: [
      "Seconde Peau, une application e-commerce de seconde main, a récemment lancé une fonctionnalité de recommandations personnalisées basée sur les préférences vestimentaires de ses utilisateurs. L’idée était prometteuse, mais les performances ont chuté et les plaintes se sont multipliées.",
      "Le défi a été de comprendre les sources de friction liées à cette nouvelle fonctionnalité afin de proposer des améliorations concrètes, tout en conservant l’intérêt de la personnalisation.",
    ],
    process: [
      {
        step: "État des lieux",
        description:
          "Pour comprendre ce rejet, j’ai analysé les retours utilisateurs, et les données pour identifier les premiers points de friction.",
      },
      {
        step: "Visualisation des conclusions",
        description:
          "Pour mieux comprendre l’expérience vécue, j’ai réalisé une carte d’empathie et un parcours utilisateur. Ces outils ont mis en évidence les émotions, les blocages et les attentes non comblées.",
        images: [
          "./assets/images/project-secondepeau-cartedempathie.jpg",
          "./assets/images/project-secondepeau-parcoursutilisateuractuel.jpg",
        ],
      },
      {
        step: "Recommandations",
        description:
          "J’ai proposé des solutions pour simplifier la personnalisation.",
        images: ["./assets/images/project-secondepeau-recommandations.jpg"],
      },
      {
        step: "Visualisation des recommandations",
        description:
          "J’ai conçu un parcours utilisateur idéal intégrant ces améliorations pour projeter une expérience plus fluide, libre et intuitive.",
        images: [
          "./assets/images/project-secondepeau-parcoursutilisateurideal.jpg",
        ],
      },
    ],
    result:
      "J’ai permis de clarifier l’expérience, de fluidifier le parcours et de redonner à l’utilisateur le contrôle sur la personnalisation.",
    toolsUsed: ["Figma"],
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
      "Filtre avancé et géolocalisation performant pour optimiser la recherche.",
    ],
    process: [
      {
        step: "Benchmark",
        description:
          "Analyse des apps concurrentes pour identifier les fonctionnalités différenciantes.",
        images: ["./assets/images/ph-projet.jpg"],
      },
      {
        step: "Tests utilisateurs",
        description:
          "Prototypes en papier testés en conditions réelles pour affiner l’interface.",
      },
    ],
    result:
      "Lancement avec 4,7 étoiles et 25 000 téléchargements en trois mois.",
    toolsUsed: ["Figma", "Maze", "Zeplin"],
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
      "Galerie responsive mettant en avant ses meilleures séries.",
    ],
    process: [
      {
        step: "Moodboard",
        description:
          "Sélection des visuels clés et définition de l’ambiance graphique générale.",
      },
      {
        step: "Prototype haute fidélité",
        description:
          "Maquettes Figma validées par le client avant développement front‑end.",
        images: ["./assets/images/ph-projet.jpg"],
      },
    ],
    result:
      "Site live en deux semaines, +50 % de trafic organique sur les galeries.",
    toolsUsed: ["Figma", "Next.js", "Vercel"],
  },
];
