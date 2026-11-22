---
name: Porcelaine des Demoiselles
description: La table de l'exposition-vente, un après-midi d'automne : salle lin, nappe rose poudré, pièces peintes debout.
colors:
  fond: "#f2e9de"
  fond-doux: "#f6e1d9"
  fort: "#ebcfc6"
  fort-texte: "#3b2e28"
  fort-doux: "#6e4a3e"
  fort-titre: "#85432d"
  fort-lien: "#85432d"
  fort-filet: "rgb(59 46 40 / 0.2)"
  pied: "#8e4a33"
  pied-texte: "#fbefe6"
  pied-doux: "#f3d9cb"
  encre: "#3b2e28"
  encre-douce: "#6e4a3e"
  accent: "#9e5239"
  lien: "#85432d"
  ocre: "#7a4f06"
  filet: "rgb(59 46 40 / 0.2)"
  selection: "#e9b8a6"
  survol: "rgb(59 46 40 / 0.07)"
typography:
  titre-1:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(3rem, 1.1rem + 5.6vw, 5.875rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  titre-2:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.375rem, 1.3rem + 3vw, 3.875rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  titre-3:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.5rem, 1.35rem + 0.5vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  cartel-nom:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
  texte:
    fontFamily: "'Atkinson Hyperlegible Next', 'Segoe UI', Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  texte-petit:
    fontFamily: "'Atkinson Hyperlegible Next', 'Segoe UI', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  rayon: "14px"
  pilule: "999px"
spacing:
  espace-1: "0.5rem"
  espace-2: "1rem"
  espace-3: "1.5rem"
  espace-4: "2.5rem"
  espace-5: "clamp(3rem, 2rem + 3vw, 4.5rem)"
  espace-section: "clamp(4rem, 2.5rem + 4vw, 6rem)"
  marge: "clamp(1.25rem, 4.5vw, 4rem)"
  gouttiere: "clamp(1rem, 2.2vw, 2rem)"
components:
  bouton:
    backgroundColor: "transparent"
    textColor: "{colors.encre}"
    typography: "{typography.texte-petit}"
    rounded: "{rounded.pilule}"
    padding: "0.6rem 1.4rem"
    height: "3rem"
  bouton-survol:
    backgroundColor: "{colors.survol}"
    textColor: "{colors.encre}"
  carton-prochain:
    backgroundColor: "{colors.fort}"
    textColor: "{colors.fort-texte}"
    padding: "clamp(1.25rem, 1rem + 1vw, 1.75rem) clamp(1.25rem, 1rem + 1.2vw, 2rem)"
  piece:
    rounded: "{rounded.rayon}"
  pied:
    backgroundColor: "{colors.pied}"
    textColor: "{colors.pied-texte}"
  a-completer:
    textColor: "{colors.ocre}"
---

# Design System: Porcelaine des Demoiselles

## Overview

**Creative North Star : « La table de l'exposition-vente »**

Le site est une salle couleur lin, un après-midi d'automne. Les pièces peintes sont posées debout sur une nappe rose poudré ; « L'atelier » est sur la même nappe, « Rendez-vous » sur un rose plus clair, et un pied de page terre cuite ferme la page. Tout est doux, chaud et calme : les photos des pièces font la décoration, rien d'autre.

Le ton est celui d'un petit carton posé à côté d'une pièce, pas d'une publicité. Le texte est grand et très lisible, pensé pour des personnes souvent retraitées, sur tablette ou téléphone, à la vue parfois faible.

**Points clés :**
- Fonds de couleur par partie (lin, rose poudré, rose clair, terre cuite) ; jamais de blanc, jamais de bleu.
- Titres en Newsreader droit, un mot en italique terre cuite dans le grand titre.
- Photos aux coins doux avec une ombre chaude ; elles se soulèvent au survol.
- Listes et fiches en lignes fines, comme un inventaire.
- Palette choisie par l'association le 22 novembre 2026 : ne pas la changer sans leur accord.

## Colors

Une palette de terre et de tissu : lin, rose poudré, terre cuite, brun très foncé. Chaque couleur est un rôle dans `css/base.css`, pas une teinte libre.

### Primary
- **Terre cuite accent** (accent) : uniquement le mot en italique du grand titre (« Demoiselles »), le survol du nom et du menu. Rare, c'est ce qui le rend visible.
- **Terre cuite foncée** (lien) : titres des parties (h2) et liens soulignés. Assez foncée pour le texte courant.

### Secondary
- **Rose poudré, la nappe** (fort) : bande sous les trois pièces du haut, partie « L'atelier », carton « Prochaine exposition ». Sur ce fond, textes, cartels, titres et liens prennent leurs variantes `fort-*`.
- **Terre cuite du pied** (pied) : fond du pied de page seulement, avec texte clair (pied-texte) et note (pied-doux).

### Tertiary
- **Ocre** (ocre) : réservé aux informations encore « à compléter », soulignées en tirets.

### Neutral
- **Lin** (fond) : fond général (haut de page, galerie, contact, visionneuse).
- **Rose clair** (fond-doux) : partie « Rendez-vous ».
- **Brun encre** (encre) : texte principal, contour clavier, boutons.
- **Brun doux** (encre-douce) : cartels, légendes, notes, intitulés de fiches.
- **Filet** (filet) : traits fins entre lignes de listes, fiches et tableau.
- **Sélection** (selection) et **Survol** (survol) : sélection de texte, fond des boutons au survol.

### Named Rules
**La règle Ni blanc ni bleu.** Aucun fond blanc, aucun bleu, nulle part. Demande explicite de l'association (« trop de blanc », « le bleu ne va pas »).

**La règle Couleur = rôle.** Une nouvelle partie prend `fond`, `fond-doux` ou `fond-fort` (avec ses variantes de texte), jamais une couleur nouvelle. Tout texte garde un contraste d'au moins 4,5:1 sur son fond.

**La règle Palette choisie.** La palette lin, rose poudré et terre cuite a été choisie par l'association le 22 novembre 2026 parmi quatre propositions. On ne la change pas sans leur accord.

## Typography

**Titres :** Newsreader (repli Georgia, Times New Roman), droit et italique, fichiers locaux.
**Texte :** Atkinson Hyperlegible Next (repli Segoe UI, Arial), fichier local.

**Caractère :** un serif chaleureux et posé pour les noms et les titres, une linéale conçue pour la lisibilité pour tout le reste.

### Hierarchy
- **Titre 1** (400, 48 à 94 px, interligne 0,98) : le nom de l'atelier sur deux lignes, un mot en italique terre cuite.
- **Titre 2** (400, 38 à 62 px, interligne 1,02) : titres des parties, en terre cuite foncée.
- **Titre 3** (500, 24 à 28 px, interligne 1,2) : sous-titres, carton du prochain rendez-vous, nom dans le pied.
- **Nom de pièce** (Newsreader 500, 19 à 22 px) : cartels, légendes de la galerie et de la visionneuse, dates du tableau.
- **Texte** (400, 19 à 21 px, interligne 1,6, 62 caractères maximum par ligne) : tout le texte courant.
- **Texte petit** (17 px, interligne 1,4) : cartels, légendes, menu, boutons, en-têtes de tableau.
- **Intitulé italique** (Newsreader italique 400, 19 px, brun doux) : intitulés des fiches de contact et ligne de lieu de l'accueil.

### Named Rules
**La règle 19 / 17.** Le texte courant ne descend jamais sous 19 px, les légendes et cartels jamais sous 17 px.

**La règle Un mot en italique.** Seul le grand titre porte un mot en italique coloré. Les autres titres restent droits.

## Layout

Page unique à ancres, contenu centré jusqu'à 90 rem avec une marge latérale de 20 à 64 px. Chaque partie est une bande de couleur pleine largeur, espacée de 64 à 96 px en bas.

Sur ordinateur (dès 960 px), chaque partie suit une grille de 12 colonnes : titre (et sa pièce, qui reste collée en défilant) sur les colonnes 1 à 5, texte sur 7 à 12. En dessous, tout s'empile.

L'accueil : nom à gauche, texte d'entrée à droite (dès 1024 px), puis trois pièces de hauteurs différentes (100 %, 77 %, 58 %) debout sur une même ligne de base. La nappe rose poudré part du tiers bas de la grande pièce et court d'un bord à l'autre de l'écran jusqu'à « L'atelier ». Cartel à droite de chaque pièce dès 1200 px, dessous entre 768 et 1200 px ; sur téléphone, grande pièce à gauche et deux pièces empilées à droite.

La galerie : une seule rangée qui défile de côté (au doigt, à la souris, au clavier, ou avec les boutons « Précédentes » et « Suivantes » dessous), qui va jusqu'au bord de l'écran, la première pièce alignée sur le titre. Toutes les photos sont debout sur une même ligne, dans une hauteur commune (240 à 384 px) ; elles gardent leurs proportions (rien n'est rogné), et une photo en largeur ne dépasse pas 78 % de l'écran.

## Elevation & Depth

La profondeur vient des fonds de couleur et d'une ombre chaude, brune, réservée aux pièces et aux objets posés (photos, carton, visionneuse). Le reste est plat.

### Shadow Vocabulary
- **Pièce posée** (`0 2px 4px rgb(58 42 35 / 0.08), 0 18px 36px -12px rgb(58 42 35 / 0.30)`) : toutes les photos de pièces.
- **Pièce soulevée** (`0 4px 8px rgb(58 42 35 / 0.10), 0 30px 52px -14px rgb(58 42 35 / 0.38)`) : galerie au survol ou au focus, avec un léger soulèvement de 6 px.

### Named Rules
**La règle Seules les pièces ont une ombre.** Pas d'ombre sur le texte, les titres, les boutons ni les parties.

## Shapes

Coins doux sur tout ce qui est posé : photos (14 px ; 12 px dans la galerie), carton du prochain rendez-vous (16 px), visionneuse (20 px). Le rayon de référence reste 14 px. Boutons en pilule. Les séparations sont des filets de 1 px ; aucun cadre, aucune bordure décorative.

## Components

### Boutons
- **Forme :** pilule (999 px), contour de 1,5 px de la couleur du texte, fond transparent, hauteur minimale 48 px.
- **Texte :** Atkinson 17 px, gras.
- **Survol :** fond brun très léger. **Focus :** contour brun de 3 px décalé de 3 px.
- Utilisés seulement pour la visionneuse et le bouton « Menu » du téléphone. Jamais de bouton plein, jamais de bouton d'appel.

### Pièce et cartel
- Photo aux coins doux avec l'ombre « pièce posée ».
- Cartel : le nom de la pièce en Newsreader 500, puis une ligne d'explication en texte petit brun doux.

### Galerie et visionneuse (signature)
- La rangée s'arrête sur une pièce (accroche au début de chaque pièce). Les boutons de défilement sont en contour et toujours actifs : au bout de la rangée, « Suivantes » revient à la première pièce ; au début, « Précédentes » va à la dernière. Sans JavaScript, les boutons disparaissent et la rangée défile quand même.
- Au survol ou au focus, la pièce se soulève (6 px, ombre plus profonde, 360 ms, courbe douce).
- Un clic l'ouvre en grand sur fond lin, voile brun derrière, avec son nom, un compteur et des boutons en contour. Ouverture douce de 280 ms, coupée si l'on préfère moins d'animations.

### Carton « Prochaine exposition »
- Petit bloc rose poudré, coins doux, ombre chaude légère, titre 3 en terre cuite foncée.

### Listes, fiches et tableau
- Lignes séparées par des filets fins, comme un inventaire. Fiches de contact : intitulé en italique brun doux, valeur dessous. Tableau des expositions : dates en Newsreader, et sur colonne étroite chaque ligne devient un petit bloc.

### Navigation
- Nom de l'atelier en Newsreader à gauche, liens en Atkinson 17 px demi-gras à droite ; survol en terre cuite souligné. Sur téléphone, les liens se rangent derrière un bouton « Menu » en pilule (trois traits qui deviennent une croix) et s'ouvrent en liste à filets.

### À compléter
- Toute information inconnue s'affiche « à compléter » en ocre, soulignée en tirets, jusqu'à ce que l'association donne la vraie valeur.

### Pied de page
- Fond terre cuite, texte clair ; nom en Newsreader, liens soulignés à demi-opacité, note séparée par un filet clair.

## Do's and Don'ts

### Do:
- **Do** utiliser uniquement les rôles de couleur de `css/base.css` (`fond`, `fond-doux`, `fond-fort`, `pied`…).
- **Do** garder le texte à 19 px minimum, les légendes à 17 px minimum, et un contraste d'au moins 4,5:1.
- **Do** laisser les photos des pièces faire la décoration, en proportions réelles, coins de 14 px et ombre chaude.
- **Do** écrire simplement, comme un cartel d'exposition.
- **Do** laisser visiblement « à compléter » (ocre, tirets) toute information inconnue ; ne rien inventer.
- **Do** garder des zones cliquables d'au moins 44 px et un contour clavier bien visible.

### Don't:
- **Don't** utiliser de blanc ni de bleu, en fond comme en accent.
- **Don't** prendre un ton publicitaire : pas de bouton d'appel, pas d'étapes numérotées, pas d'étiquette au-dessus des titres.
- **Don't** faire enfantin ni vieillot : pas d'écriture manuscrite, de touches de peinture, de cadre doré.
- **Don't** recopier le site Création K (arches, pointillés « couture », Fraunces).
- **Don't** remplir un bouton de couleur ni ajouter d'ombre hors des pièces.
- **Don't** changer la palette sans l'accord de l'association.
