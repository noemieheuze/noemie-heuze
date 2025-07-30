// utils/data/projects.js

export const projects = [
  {
    id: 1,
    slug: "equilibre",
    title: "Équilibre",
    link: "./projets.html?slug=equilibre",
    heroImage: "./assets/images/project-equilibre-cover.jpg",
    type: "Conception UX",
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
          "./assets/images/project-equilibre-tridecartes-1.jpg",
          "./assets/images/project-equilibre-tridecartes-2.jpg",
          "./assets/images/project-equilibre-tridecartes-3.jpg",
        ],
      },
      {
        step: "Parcours utilisateurs des personas",
        description:
          "J’ai modélisé les parcours de profils aux besoins variés pour comprendre leurs usages, émotions et blocages, ce qui a aidée à identifier les moments clés de l’expérience et les opportunités.",
        images: [
          "./assets/images/project-equilibre-parcoursutilisateur-1.jpg",
          "./assets/images/project-equilibre-parcoursutilisateur-2.jpg",
          "./assets/images/project-equilibre-parcoursutilisateur-3.jpg",
          "./assets/images/project-equilibre-parcoursutilisateur-4.jpg",
        ],
      },
      {
        step: "Architecture de l’information",
        description:
          "J’ai structuré les contenus de l’application en hiérarchisant les pages selon les besoins réels des utilisateurs, ce qui a posé les fondations d’une navigation claire et fonctionnelle.",
        images: ["./assets/images/project-equilibre-diagrammearchitecture.jpg"],
      },
      {
        step: "Wireframes",
        description:
          "J’ai conçu des maquettes basse fidélité pour tester l’organisation des contenus avant de passer au design final. Cette étape a permis de valider l’ergonomie générale et la fluidité des parcours imaginés.",
        images: ["./assets/images/project-equilibre-wireframe.jpg"],
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
    type: "Analyse de données",
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
    heroImage: "./assets/images/project-foodles-cover.jpg",
    type: "Recherche utilisateur",
    context: [
      "Foodles propose des réfrigérateurs connectés en entreprise, accessibles via une application mobile. L’application présente des points de friction identifiés par les utilisateurs et les parties prenantes. L’équipe produit souhaite donc améliorer l’expérience utilisateur pour la rendre plus fluide, intuitive et adaptée aux usages réels.",
      "Le défi a été de comprendre ces irritants, les valider à travers des tests, et formuler des recommandations concrètes pour faire évoluer le service.",
    ],
    process: [
      {
        step: "Hypothèse UX",
        description:
          "J’ai formulé une série d’hypothèses à partir des retours utilisateurs. Chaque point soulevé visait à résoudre une gêne concrète liée à la réservation ou à la compréhension des plats.",
      },
      {
        step: "Tests utilisateurs",
        description:
          "J’ai testé un prototype avec des utilisateurs pour valider ou non ces hypothèses. Leurs réactions m’ont permis de confirmer certains besoins clés.",
      },
      {
        step: "Analyse",
        description:
          "J’ai structuré les résultats sous forme de matrice pour croiser les irritants, les usages et les attentes. Cette analyse m’a aidée à prioriser les solutions en fonction de leur impact et de la pénibilité perçue.",
          images: [
            "./assets/images/project-foodles-matriceanalyse-1.jpg",
            "./assets/images/project-foodles-matriceanalyse-2.jpg",
          ],
      },
      {
        step: "Recommandations UX",
        description:
          "J’ai proposé des améliorations ciblées.",
          images: ["./assets/images/project-foodles-recommandations.jpg"],
      },
    ],
    result:
      "J’ai permis de clarifier l’interface, renforcer la transparence des informations, et améliorer la fluidité du parcours de commande pour une expérience plus fiable et rassurante.",
    toolsUsed: ["AdobeXD", "Excel", "Figma"],
  },
  {
    id: 4,
    slug: "lyman-abid",
    title: "Lyman Abid",
    link: "./projets.html?slug=lyman-abid",
    heroImage: "./assets/images/project-lymanabid-cover.jpg",
    type: "Conception UX - UI",
    context: [
      "Lyman Abid est un développeur créatif qui souhaitait concevoir la maquette de son portfolio, à son image, capable de valoriser à la fois ses projets techniques et son univers visuel.",
      "Le défi était de traduire une personnalité technique et artistique en une interface claire, immersive et cohérente, tout en laissant suffisamment de liberté pour qu’il puisse l’animer et le développer lui-même ensuite.",
    ],
    process: [
      {
        step: "Moodboard",
        description:
          "Sélection des visuels clés et définition de l’ambiance graphique générale.",
      },
      {
        step: "Wiframe",
        description:
          "J’ai conçu des wireframes basse fidélité pour définir l’architecture du site et organiser les contenus en fonction de ses besoins.",
      },
      {
        step: "Maquette",
        description:
          "J’ai décliné un univers visuel sur mesure pensé pour mettre en valeur ses réalisations sans surcharger.",
      },
      {
        step: "Prototype",
        description:
          "J’ai conçu un prototype interactif sur Figma pour simuler l’expérience et valider les intentions d’interaction, les enchaînements de pages et les micro-transitions imaginées.",
      },
    ],
    result:
      "J’ai conçu une interface claire, créative et flexible, pensée pour révéler la personnalité du développeur tout en facilitant sa mise en œuvre technique.",
    toolsUsed: ["Figma", "Spline"],
  },
];
