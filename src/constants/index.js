export const navLinks = [
  {
    id: 1,
    name: 'Acceuil',
    href: '#home',
  },
  {
    id: 2,
    name: 'A propos',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projets',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Expériences',
    href: '#experiences',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
]

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
]

export const myProjects = [
  {
    title: 'Dashboard',
    desc: "Conception d'un dashboard en temps réel avec Next.js sans rechargement de page, pour des mises à jour dynamiques et une interaction fluide.",
    subdesc:
      "Conception d'un dashboard en temps réel avec Next.js sans rechargement de page, pour des mises à jour dynamiques et une interaction fluide.",
    href: 'https://dashboard-omega-blush.vercel.app/unauth-page',
    texture: '/textures/project/Dashboard.mp4',
    logo: '/assets/dashboard.svg',
    logoStyle: {
      backgroundColor: '#262627',
      border: '0.2px solid #262627',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma.png',
      },
    ],
  },
  {
    title: 'Carhub',
    desc: "Réalisation d'une appli web front-end de réservation de voitures, intégrant l'API pour la recherche rapide et le filtrage des véhicules.",
    subdesc:
      "Réalisation d'une appli web front-end de réservation de voitures, intégrant l'API pour la recherche rapide et le filtrage des véhicules.",
    href: 'https://car-hub-psi-nine.vercel.app/',
    texture: '/textures/project/Carhub.mp4',
    logo: '/assets/carhub.png',
    logoStyle: {
      backgroundColor: '#262627',
      border: '0.2px solid #262627',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Bloggy',
    desc: 'Blog avec authentification : seuls les utilisateurs avec les droits admin peuvent poster et gérer. Seuls les utilisateurs connectés ont accès aux publications.',
    subdesc:
      'Blog avec authentification : seuls les utilisateurs avec les droits admin peuvent poster et gérer. Seuls les utilisateurs connectés ont accès aux publications.',
    href: 'https://bloggy-xi-three.vercel.app/',
    texture: '/textures/project/Bloggy.mp4',
    logo: '/assets/bloggy.png',
    logoStyle: {
      backgroundColor: '#262627',
      border: '0.2px solid #262627',
    },

    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },

      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Mongo DB',
        path: '/assets/mongo.svg',
      },
    ],
  },
]

export const calculateSizes = (
  isSmall,
  isMobile,
  isTablet,
  isHeightMobile,
  isHeightSmall,
  isHeightMedium,
  isHeightXs,
  ipadPro,
  nestHubMax
) => {
  return {
    deskScale: isSmall ? 0.32 : isMobile ? 0.4 : 0.6,
    deskPosition:
      (isHeightXs && isSmall) || (isHeightXs && isMobile)
        ? [0.1, -6, -10]
        : (isHeightSmall && isSmall) || (isHeightSmall && isMobile)
          ? [0.1, -6.5, -10]
          : (isHeightMedium && isSmall) || (isHeightMedium && isMobile)
            ? [0.1, -5, -10]
            : (isHeightMobile && isSmall) || (isHeightMobile && isMobile)
              ? [0.1, 6, -10]
              : !isMobile && isHeightMobile
                ? [0.1, -7.5, -10]
                : ipadPro
                  ? [0.1, -6.5, -10]
                  : isSmall && nestHubMax
                    ? [0.1, -4, -10]
                    : isMobile && nestHubMax
                      ? [0.1, -4, -10]
                      : nestHubMax
                        ? [0.1, -5, -10]
                        : !isMobile && isHeightSmall
                          ? [0.1, -5, -10]
                          : !isMobile && isHeightMedium
                            ? [0.1, -3, -10]
                            : !isMobile && isHeightXs
                              ? [0.1, -4, -10]
                              : !isHeightMobile && isMobile
                                ? [-0.1, 2, -10]
                                : [0.1, -3, -10],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [3, 9, 0]
        : isTablet
          ? [6, 7, 0]
          : [6, 7, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: 'AFPA',
    pos: 'Développeur web / web mobile',
    duration: '2023 - 2024',
    title:
      "Front-end, back-end + autoformation parallèle en React et Node.js. Réalisation d'un projet full stack en équipe avec Symfony. Développement autonome d'une application mobile en React Native pour une association aidant les personnes âgées (Coopérative Chibanis), lors de mon stage.",
    icon: '/assets/afpa.jpeg',
    animation: 'victory',
    color: 'bg-white',
  },
  {
    id: 2,
    name: 'Happy Pedagogie',
    pos: 'Développeur front-end',
    duration: '2019 - 2020',
    title:
      "J'ai participé à la création de l'application web happypedagogie.com, une entreprise spécialisée dans le développement personnel et les méthodes d'apprentissage techniques. Mon rôle s'est concentré exclusivement sur la partie front-end.",
    icon: '/assets/happy.png',
    animation: 'clapping',
    color: 'bg-white',
  },
  {
    id: 3,
    name: 'Webforce 3',
    pos: 'Développeur intégrateur web',
    duration: '2019 - du 7 janvier au 26 avril',
    title:
      "Bootcamp de trois mois en développement intégrateur web, j'ai acquis des compétences fondamentales en front-end et back-end, avec une focalisation sur Symfony pour le back-end.",
    icon: '/assets/wf3.jpg',
    animation: 'salute',
    color: 'bg-[#605C9F]',
  },
]
