# Design

## Intent

Scène : quelqu'un a faim, ouvre la page sur son téléphone et veut savoir quoi prendre avant d'appeler. L'interface doit garder le choc noir et jaune de La P'tite Frite, mais remplacer les photos du menu par des illustrations appétissantes et dédiées à chaque catégorie.

## Palette

Stratégie couleur : surface sombre engagée, jaune de friterie comme accent unique, blanc très lisible et quelques touches alimentaires rouges ou vertes seulement quand elles servent l'imaginaire burger.

```css
:root {
  --bg: oklch(0.145 0.014 85);
  --panel: oklch(0.19 0.018 82);
  --ink: oklch(0.982 0.006 85);
  --muted: oklch(0.805 0.018 85);
  --brand: oklch(0.86 0.17 92);
  --line: oklch(0.33 0.026 78);
}
```

## Typography

Titres massifs en sans lourd pour rappeler le mot MENU du flyer. Script ponctuel uniquement pour le nom La P'tite Frite, sans dépendance webfont. Corps en Arial pour vitesse, lisibilité et rendu robuste.

## Layout

Premier écran divisé : promesse et appel à gauche, illustration burger/frites à droite. Ensuite bande de spécialités, puis menu complet en panneaux alternés. Chaque grande famille du menu a son image : gros burgers pour les burgers maison, petits burgers pour les classiques, frites, snacks, assiettes, box enfant et boissons/sauces.

## Motion

Motion courte et tactile : apparition douce au scroll via IntersectionObserver, boutons qui réagissent au clic, pas de chorégraphie lourde. Tout reste visible sans animation et `prefers-reduced-motion` neutralise les transitions.
