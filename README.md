# Portfolio — Tojo Nambinina Randriamifaly

Portfolio professionnel de Tojo Nambinina Randriamifaly, développeur web junior à Antananarivo. Le site présente trois projets documentés : Novaskol, la Plateforme BDE et PointagePro.

Construit avec Next.js 15, React 19, TypeScript et Tailwind CSS. Le site est entièrement statique : pas de serveur, pas de base de données, pas de cookie ni de traqueur.

## Démarrage

Prérequis : Node.js 20 LTS ou plus récent, npm.

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Génère le site statique dans `out/` |
| `npm start` | Sert le dossier `out/` avec `serve` |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run typecheck` | Vérifie les types avec TypeScript |

Avant toute livraison :

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

```text
src/
  app/                 Pages, layout, métadonnées, sitemap, robots, icônes
    projets/[slug]/    Page générée pour chaque projet
  components/          Composants d'interface et sections de l'accueil
  data/content.ts      Tout le contenu du site
  fonts/               Polices locales
  lib/                 URL, chemins d'assets, polices, vérification des PDF
public/
  captures/            Captures WebP des projets
  cv/                  CV au format PDF
  fiches/              Fiches techniques PDF
captures/              Captures sources fournies
cv/                    CV source
fiches/                Fiches techniques sources
```

## Modifier le contenu

Le contenu est centralisé dans `src/data/content.ts`.

- `site` : nom, rôle, coordonnées, CV, image Open Graph.
- `hero` : accroche, boutons et stack affichée en haut de l'accueil.
- `projects` : nom, résumé, problème, solution, chiffres, stack, fonctionnalités, liens et images de chaque projet.
- `skills`, `path`, `method`, `contact` : sections Compétences, Parcours, Méthode et Contact.
- `footer` : mention de copyright et note de bas de page.

Les liens de démonstration et de vidéo sont masqués quand `demoUrl` ou `videoUrl` est vide.

### Remplacer une capture

1. Déposer l'image dans `public/captures/<projet>/` au format WebP.
2. Renseigner `src`, `alt`, `width` et `height` dans le tableau `images` du projet.
3. Pour la couverture, modifier `coverImage`. Laisser la valeur vide pour utiliser la couverture typographique.
4. La galerie de la page projet exclut automatiquement l'image de couverture.

Les captures doivent rester lisibles : préférer des images nettes, sans données personnelles sensibles. Les dimensions exactes évitent les décalages de mise en page.

### Remplacer le CV ou une fiche technique

- CV : `public/cv/CV_Tojo_Randriamifaly.pdf`, référencé par `site.cv`.
- Fiches : `public/fiches/`, référencées par `project.pdf`.

Si un fichier est absent, le bouton correspondant n'est pas affiché au build.

### Polices

Les polices sont locales dans `src/fonts/` et chargées avec `next/font/local` dans `src/lib/fonts.ts` : Fraunces (titres), Public Sans (texte) et JetBrains Mono (labels). Aucune requête vers Google Fonts n'est effectuée.

## Choix de conception

- Direction éditoriale : fond papier chaud, encre presque noire, accent terre cuite et vert forêt.
- Mode sombre automatique avec `prefers-color-scheme`, sans bouton ni stockage local.
- Mise en page responsive, navigation clavier, lien d'évitement et respect de `prefers-reduced-motion`.
- Images non optimisées à la volée (`images.unoptimized`) pour rester compatible avec l'export statique. Les fichiers sont déjà préparés en WebP.
- Aucun formulaire de contact : uniquement des liens directs (e-mail, WhatsApp, GitHub).

## Variables d'environnement

| Variable | Exemple | Usage |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://portfolio-tojo.vercel.app` | Origine publique du site, sans `basePath` |
| `NEXT_PUBLIC_BASE_PATH` | `/portfolio-pro` | Sous-chemin de déploiement, vide par défaut |

Ces variables sont intégrées au moment du build. Il faut donc reconstruire après chaque changement.

## Déploiement

Le dossier `out/` contient le site statique complet.

### Vercel

1. Importer le dépôt dans Vercel.
2. Laisser la commande de build `npm run build`.
3. Définir `NEXT_PUBLIC_SITE_URL` avec l'URL publique finale.
4. Ne pas définir `NEXT_PUBLIC_BASE_PATH`.

### Netlify

1. Build command : `npm run build`.
2. Publish directory : `out`.
3. Définir `NEXT_PUBLIC_SITE_URL`.
4. Ne pas définir `NEXT_PUBLIC_BASE_PATH`.

### GitHub Pages

Le fichier `public/.nojekyll` est déjà présent pour que GitHub Pages serve correctement le dossier `_next`.

Pour un dépôt nommé `portfolio-pro` :

```text
NEXT_PUBLIC_BASE_PATH=/portfolio-pro
NEXT_PUBLIC_SITE_URL=https://<utilisateur>.github.io
```

Le `basePath` ne doit pas figurer dans `NEXT_PUBLIC_SITE_URL` : il est ajouté automatiquement au sitemap, aux métadonnées et aux fichiers de `public/`.

Exemple de workflow GitHub Actions :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /portfolio-pro
          NEXT_PUBLIC_SITE_URL: https://<utilisateur>.github.io
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Avec un nom de domaine personnalisé, laisser `NEXT_PUBLIC_BASE_PATH` vide et utiliser le domaine dans `NEXT_PUBLIC_SITE_URL`.

## Référencement et partage

- `src/app/sitemap.ts` génère `sitemap.xml`.
- `src/app/robots.ts` génère `robots.txt`.
- `public/og.png` sert d'image Open Graph (1200 × 630).
- `src/app/icon.svg` et `src/app/apple-icon.png` fournissent les favicons.

Après un changement de domaine, mettre à jour `NEXT_PUBLIC_SITE_URL` puis reconstruire le site.

## Contact

- E-mail : tojo.devpro@gmail.com
- GitHub : [github.com/tojodevpro-blip](https://github.com/tojodevpro-blip)
- WhatsApp : +261 38 77 29958
