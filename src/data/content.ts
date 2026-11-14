export type Metric = {
  /** Valeur numérique utilisée par le compteur animé. Absente pour une donnée non numérique. */
  value?: number;
  display: string;
  prefix?: string;
  suffix?: string;
  label: string;
  detail?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  subtitle: string;
  summary: string;
  problem: string;
  solution: string;
  note?: string;
  version?: string;
  metrics: Metric[];
  stack: string[];
  features: string[];
  code: {
    access: string;
    url?: string;
    cta?: string;
    ctaHref?: string;
  };
  pdf?: string;
  demoUrl?: string;
  videoUrl?: string;
  coverTone: "accent" | "forest" | "ink";
  coverKicker: string;
  images: ProjectImage[];
};

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-tojo.vercel.app",
  name: "Tojo Nambinina Randriamifaly",
  shortName: "Tojo Randriamifaly",
  monogram: "TN",
  role: "Développeur web junior",
  location: "Antananarivo, Madagascar",
  availability: "Stage ou poste junior",
  tagline:
    "Je construis des applications web et mobiles utiles : gestion scolaire, vie étudiante, pointage des employés.",
  description:
    "Portfolio de Tojo Nambinina Randriamifaly, développeur web junior à Antananarivo. Trois projets documentés : gestion scolaire, plateforme BDE et pointage mobile.",
  email: "tojo.devpro@gmail.com",
  github: "https://github.com/tojodevpro-blip",
  githubLabel: "github.com/tojodevpro-blip",
  whatsapp: {
    url: "https://wa.me/261387729958?text=Bonjour%20Tojo%2C%20je%20vous%20contacte%20depuis%20votre%20portfolio",
    label: "+261 38 77 29958",
  },
  cv: "/cv/CV_Tojo_Randriamifaly.pdf",
  ogImage: "/og.png",
};

export const navigation = [
  { label: "Projets", href: "/#projets" },
  { label: "Compétences", href: "/#competences" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
];

export const sections = {
  projects: {
    index: "01",
    title: "Projets",
    kicker: "Trois projets, trois fiches techniques.",
  },
  skills: {
    index: "02",
    title: "Compétences",
    kicker: "Web, backend, mobile et outils.",
  },
  path: {
    index: "03",
    title: "Parcours",
    kicker: "Formation et expérience.",
  },
  method: {
    index: "04",
    title: "Ma méthode",
    kicker: "Comment je travaille.",
  },
  contact: {
    index: "05",
    title: "Contact",
    kicker: "Pas de formulaire, seulement des liens directs.",
  },
};

export const hero = {
  eyebrow: "Portfolio — 2026",
  primaryCta: { label: "Voir mes projets", href: "/#projets" },
  secondaryCta: { label: "Télécharger mon CV", href: site.cv },
  stack: ["PHP · Laravel", "Next.js · TypeScript", "Flutter · Dart"],
  note: "Applications web et mobiles",
};

export const projects: Project[] = [
  {
    slug: "novaskol",
    index: "01",
    name: "Novaskol",
    subtitle: "Logiciel de gestion scolaire pour les écoles de Madagascar",
    summary:
      "Un seul logiciel pour les inscriptions, les notes, les bulletins, les présences, les paiements et le personnel. Il fonctionne sur l'ordinateur de l'école sans Internet, ou en ligne sur un hébergement web. Chaque école garde sa propre base de données. En service dans plusieurs établissements.",
    problem:
      "Une école doit suivre les inscriptions, les notes, les bulletins, les présences, les paiements et le personnel.",
    solution:
      "Novaskol réunit ces usages dans un seul logiciel. Il fonctionne sur l'ordinateur de l'école sans Internet, ou en ligne sur un hébergement web. Chaque école garde sa propre base de données.",
    note: "En service dans plusieurs établissements.",
    metrics: [
      { value: 104, prefix: "≈ ", display: "104", label: "tables" },
      {
        value: 3,
        display: "3",
        label: "éditions",
        detail: "web ou local, Windows, réseau local",
      },
      {
        value: 5,
        display: "5",
        label: "profils utilisateurs",
        detail: "admin, staff, enseignant, parent, élève",
      },
      { value: 64, display: "64", label: "migrations" },
    ],
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "SQLite",
      "MySQL",
      "Blade",
      "Tailwind CSS",
      "Electron",
    ],
    features: [
      "Calcul des bulletins (moyennes pondérées, rangs, mentions)",
      "Paiements partiels avec blocage des doublons",
      "Pointage par QR code",
      "Portails parents et élèves",
      "Sauvegarde et restauration",
      "Synchronisation sur réseau local",
    ],
    code: {
      access: "Dépôt privé, sur invitation",
      cta: "Demander un accès",
      ctaHref:
        "mailto:tojo.devpro@gmail.com?subject=Demande%20d'acc%C3%A8s%20au%20code%20Novaskol",
    },
    pdf: "/fiches/Fiche-technique-Novaskol.pdf",
    demoUrl: "",
    videoUrl: "",
    coverTone: "accent",
    coverKicker: "Gestion scolaire",
    images: [],
  },
  {
    slug: "bde",
    index: "02",
    name: "Plateforme BDE",
    subtitle: "Application web de gestion de la vie étudiante",
    summary:
      "L'espace officiel du BDE d'une université : annonces, programme, demandes, archives, discussions, trésorerie et élection en ligne. Les comptes étudiants sont vérifiés par matricule.",
    problem:
      "Le BDE d'une université doit gérer les annonces, le programme, les demandes, les archives, les discussions, la trésorerie et l'élection en ligne.",
    solution:
      "L'espace officiel du BDE réunit ces usages. Les comptes étudiants sont vérifiés par matricule.",
    metrics: [
      { value: 65, display: "65", label: "pages" },
      { value: 74, display: "74", label: "routes API" },
      { value: 37, display: "37", label: "tables" },
      { value: 35, display: "35", label: "tests automatisés" },
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    features: [
      "Inscription vérifiée",
      "Annonces ciblées par classe",
      "Événements avec QR de présence",
      "Tickets de demandes",
      "Trésorerie avec reçus PDF",
      "Élection avec vote unique (le bulletin n'est pas lié au votant)",
      "Journal d'audit",
      "Application installable (PWA)",
    ],
    code: {
      access: "Dépôt privé, sur invitation",
      cta: "Demander un accès",
      ctaHref:
        "mailto:tojo.devpro@gmail.com?subject=Demande%20d'acc%C3%A8s%20au%20code%20BDE",
    },
    pdf: "/fiches/Fiche-technique-BDE.pdf",
    demoUrl: "",
    videoUrl: "",
    coverTone: "forest",
    coverKicker: "Vie étudiante",
    images: [],
  },
  {
    slug: "pointagepro",
    index: "03",
    name: "PointagePro",
    subtitle: "Application Android de pointage par badge QR",
    summary:
      "Le directeur scanne le badge de chaque employé. Les arrivées, départs, retards et heures supplémentaires sont calculés automatiquement, puis exportés en PDF, CSV ou Excel. Tout fonctionne hors ligne, sans abonnement.",
    problem:
      "Le directeur doit relever les arrivées, départs, retards et heures supplémentaires de chaque employé.",
    solution:
      "Le directeur scanne le badge de chaque employé. Les arrivées, départs, retards et heures supplémentaires sont calculés automatiquement, puis exportés en PDF, CSV ou Excel. Tout fonctionne hors ligne, sans abonnement.",
    version: "1.1.0",
    metrics: [
      { value: 5, display: "5", label: "écrans" },
      { value: 12, display: "12", label: "tests automatisés" },
      { value: 100, suffix: " %", display: "100", label: "hors ligne" },
      {
        display: "HMAC-SHA256",
        label: "badges signés",
      },
    ],
    stack: ["Flutter", "Dart", "SQLite (Drift)", "Riverpod"],
    features: [
      "Scan par caméra avec anti-doublon",
      "Badges QR signés et révocables",
      "Rapports sur période libre",
      "Corrections avec journal d'audit",
      "Code PIN et biométrie",
      "Sauvegarde et restauration",
    ],
    code: {
      access: "Dépôt public : github.com/tojodevpro-blip/Pointage-mobile",
      url: "https://github.com/tojodevpro-blip/Pointage-mobile",
      cta: "Ouvrir le dépôt",
    },
    pdf: "/fiches/Fiche-technique-PointagePro.pdf",
    demoUrl: "",
    videoUrl: "",
    coverTone: "ink",
    coverKicker: "Pointage mobile",
    images: [],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { label: "Web", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js"] },
  { label: "Backend", items: ["PHP", "Laravel", "MySQL"] },
  { label: "Mobile", items: ["Flutter", "Dart"] },
  { label: "Outils", items: ["Git", "GitHub", "VS Code"] },
];

export type PathItem = {
  kind: "Formation" | "Expérience";
  title: string;
  org: string;
  period?: string;
};

export const path: PathItem[] = [
  {
    kind: "Formation",
    title: "Audiovisuel et Numérique",
    org: "E-média, Antananarivo",
  },
  {
    kind: "Expérience",
    title: "Modérateur francophone",
    org: "Shakti Outsourcing",
    period: "juin 2023 — décembre 2024",
  },
];

export const method =
  "Je conçois mes projets à partir d'un vrai besoin, puis je les développe avec l'aide d'un agent de code IA que je dirige : je définis le besoin, je fixe les priorités, je vérifie et je teste. Chaque projet est documenté par une fiche technique.";

export const contact = {
  intro: "Pour un stage, un poste junior ou une question sur un projet.",
  email: site.email,
  whatsapp: site.whatsapp,
  github: site.github,
  githubLabel: site.githubLabel,
};

export const footer = {
  copyright: "© 2026 Tojo Nambinina Randriamifaly",
  note: "Site statique, sans cookie ni traqueur.",
};

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
