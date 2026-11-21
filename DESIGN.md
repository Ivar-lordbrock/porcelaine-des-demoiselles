---
name: Porcelaine des Demoiselles
description: La côte de Port-des-Barques vue comme une carte marine rehaussée à la main.
colors:
  fond-porcelaine: "#f7fafa"
  blanc: "#ffffff"
  eau-claire: "#e5eff0"
  eau: "#cfe1e4"
  profond: "#17384a"
  encre: "#15303d"
  encre-douce: "#3c5664"
  obione: "#6a8873"
  lavande: "#6b4c84"
  lavande-claire: "#d8c8e6"
  sur-profond: "#e8f1f2"
  sur-profond-doux: "#c6d8dc"
typography:
  titre-1:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.4vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
  titre-2:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(2.125rem, 1.6rem + 2vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  titre-3:
    fontFamily: "Alegreya, Georgia, serif"
    fontSize: "clamp(1.375rem, 1.25rem + 0.5vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.08
  texte:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.3vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  texte-petit:
    fontFamily: "Atkinson Hyperlegible Next, Segoe UI, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  bouton: "3px"
  aucun: "0"
spacing:
  espace-1: "0.5rem"
  espace-2: "1rem"
  espace-3: "1.5rem"
  espace-4: "2.5rem"
  espace-5: "clamp(3rem, 2rem + 3vw, 4.5rem)"
  espace-section: "clamp(4.5rem, 3rem + 6vw, 8rem)"
components:
  bouton:
    backgroundColor: "{colors.profond}"
    textColor: "{colors.sur-profond}"
    typography: "{typography.texte}"
    rounded: "{rounded.bouton}"
    padding: "0.75rem 1.75rem"
    height: "3.25rem"
  bouton-clair:
    backgroundColor: "{colors.fond-porcelaine}"
    textColor: "{colors.profond}"
    rounded: "{rounded.bouton}"
    padding: "0.75rem 1.75rem"
    height: "3.25rem"
  cartouche:
    backgroundColor: "{colors.blanc}"
    rounded: "{rounded.aucun}"
    padding: "clamp(0.625rem, 1.4vw, 1rem)"
---

# Design System: Porcelaine des Demoiselles

## Overview

Le site est la côte de Port-des-Barques dessinée comme une **carte marine rehaussée à la main** : un fond blanc froid qui est aussi le blanc de la porcelaine, des bandes d’eau peu profonde en aplats pleine largeur, un texte bleu encre, des lignes de sonde pointillées vert des prés salés, et une seule couleur d’accent, la lavande de mer.

Les cadres reprennent à la fois les **cartouches** des cartes anciennes et les **filets** peints au bord des assiettes : un trait épais, un trait fin, un écart blanc entre les deux. Une seule ligne de côte courbe ferme le haut de page. Les expositions sont présentées comme un annuaire des marées.

Le public est d’abord local et souvent âgé : tout est grand, contrasté, calme. Pas d’effet, pas d’animation décorative, pas d’icônes. Les photos des pièces peintes sont l’ornement principal.

## Colors

### Primary
- **Encre** `#15303d` : texte principal, filets des cartouches, bordures fortes. 13:1 sur le fond.
- **Profond** `#17384a` : bande « Nous rejoindre », pied de page, boutons.

### Secondary
- **Lavande de mer** `#6b4c84` : le seul accent. Soulignement des liens, phrase « Débutantes bienvenues », informations à compléter, contour de focus. Au moins 5:1 sur tous les fonds clairs.
- **Lavande claire** `#d8c8e6` : le même accent sur fond profond.

### Neutral
- **Fond porcelaine** `#f7fafa` et **blanc** `#ffffff` (intérieur des cartouches).
- **Eau claire** `#e5eff0` et **eau** `#cfe1e4` : les deux teintes de bandes.
- **Encre douce** `#3c5664` : texte secondaire, légendes (5,7:1 au minimum).
- **Obione** `#6a8873` : uniquement les traits pointillés (lignes de sonde), jamais du texte.
- **Sur profond** `#e8f1f2` et **sur profond doux** `#c6d8dc` : texte sur fond foncé.

### Named Rules
- **Un seul accent.** La lavande ne se mélange avec aucune autre couleur vive. Pas de dégradé.
- **Les bandes alternent par aplats francs**, sans ombre ni transition entre elles.

## Typography

- **Alegreya** (titres) : un serif calligraphique, humain, proche de la plume. Chiffres alignés (`lining-nums`) pour les dates.
- **Atkinson Hyperlegible Next** (texte) : conçue pour la lisibilité par le Braille Institute.
- Les deux sont hébergées dans `fonts/` (aucun appel à Google).

### Hierarchy
- Texte courant de 19 à 21 px, interligne 1,6, lignes de 62 caractères au plus.
- Plus petite taille : 17 px (légendes, intitulés). Jamais en dessous.
- Titres équilibrés (`text-wrap: balance`), plus d’espace au-dessus d’un sous-titre qu’en dessous.

### Named Rules
- **Typographie française** : espaces insécables (`&nbsp;`) avant `: ; ! ?` et dans les guillemets `« »`, apostrophe typographique `’`.
- Pas de petit sur-titre au-dessus des titres, pas de numéros de section.

## Layout

- Une seule page, une colonne de 72 rem au plus, marges latérales de 20 à 48 px.
- Chaque partie est une **bande** pleine largeur (`.bande`, `.bande--eau-claire`, `.bande--eau`, `.bande--profonde`) ; le contenu est centré dans `.conteneur`.
- Accueil : texte et image côte à côte à partir de 56 rem ; l’image déborde légèrement sur la ligne de côte.
- Galerie en colonnes « en mur » (`columns`) : 2 sur téléphone, 3 à partir de 48 rem, 4 à partir de 72 rem. Les photos gardent leurs proportions, rien n’est rogné.
- Tableau des expositions : chaque ligne devient un petit bloc sous 40 rem.

## Elevation & Depth

Aucune ombre. La profondeur vient uniquement des aplats de couleur (l’eau plus ou moins profonde) et des doubles filets. Seule exception : le voile sombre derrière la visionneuse.

## Shapes

- Angles droits partout, sauf les boutons (3 px, à peine adoucis) et les pastilles numérotées des étapes (cercles à double anneau, comme une assiette vue de dessus).
- **Double filet** : `border` épais + `outline` fin décalé (`outline-offset`). C’est la signature du site.
- **Ligne de sonde** : trait pointillé obione, pour séparer les lignes de listes et de tableaux.

## Components

### Buttons
- `.bouton` : fond profond, texte clair, 52 px de haut au minimum. Au survol, un second filet fin apparaît autour (outline décalé de 4 px).
- `.bouton--clair` : la version pour fond foncé.
- `.lien-fort` : lien en gras à côté d’un bouton, même hauteur.

### Cards / Containers
- `.cartouche` : fond blanc, filet épais 3 px + filet fin 1 px à 5 px d’écart. Utilisé pour l’image d’accueil, l’assiette de l’atelier et le bloc contact.
- `.galerie__lien` : mini cartouche autour de chaque photo. Au survol, le filet fin s’écarte et passe en lavande.

### Navigation
- Liens de menu de 44 px de haut au minimum, soulignés seulement au survol.
- Sous 48 rem (téléphone) : les liens se rangent derrière un bouton « Menu » (trois traits + le mot, filet 2 px). Ouvert, les traits deviennent une croix et les liens s’empilent sous l’en-tête, 52 px chacun, séparés par des lignes de sonde. Un lien choisi referme le menu ; Échap aussi. Sans JavaScript, les liens restent affichés (`js/menu.js`, classe `js` posée dans le `<head>`).
- Liens dans le texte : soulignés en lavande, **double soulignement** au survol.
- Focus clavier : contour lavande de 3 px, toujours visible.

### Annuaire (tableau des expositions)
- Chiffres alignés et à chasse fixe, date en Alegreya grasse, filet épais sous l’en-tête, lignes de sonde entre les rangées.
- Le prochain rendez-vous est encadré d’un **double filet horizontal** (`border-block: 4px double`).

### Visionneuse
- `<dialog>` natif, ouvert par `js/galerie.js`. Sans JavaScript, le lien ouvre simplement la photo.
- Boutons Précédente / Fermer / Suivante, flèches du clavier, Échap, clic sur le fond. Le focus revient sur la photo regardée.
- Ouverture en fondu de 240 ms, désactivée si l’on préfère moins d’animations.

## Do's and Don'ts

### Do:
- Garder un texte foncé sur fond clair, ou clair sur profond, avec un contraste d’au moins 4,5:1.
- Laisser les photos des pièces faire la couleur du site.
- Utiliser le double filet et la ligne de sonde pour tout nouveau cadre ou séparateur.
- Garder les zones cliquables à 44 px de haut au minimum.

### Don't:
- Pas de deuxième couleur d’accent, pas de dégradé, pas de texte en dégradé.
- Pas d’ombre portée, pas d’effet verre, pas de cartes à icônes.
- Pas de bordure colorée à gauche des encadrés.
- Pas d’animation décorative ni de défilement animé.
- Pas de photo où l’on reconnaît quelqu’un sans son accord.
