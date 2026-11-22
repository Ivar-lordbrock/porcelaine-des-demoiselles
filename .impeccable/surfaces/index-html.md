---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["mentions-legales.html"]
---

# Accueil — page unique

Scope: index.html (page unique à ancres) + mentions-legales.html. Mode: Experience (les pièces mènent la page ; l'invitation à rejoindre reste, dite simplement).
Audience: futures adhérentes (souvent retraitées, Port-des-Barques et alentours, tablette ou téléphone, vue parfois faible), visiteurs des expositions-ventes.
Action: voir les pièces, puis écrire, appeler ou passer à une exposition-vente.
Proof: 17 photos d'œuvres réelles, les expositions passées.
Constraints: rien d'inventé (contact, lieu des séances, cotisation à compléter), aucun ton publicitaire (« trop marketing », « refléter le côté artisanal ») et rien d'enfantin ni de vieillot (« trop enfantin, trop vieillot »), demandes de l'association du 22 novembre 2026 ; puis « de la couleur, une ambiance chaleureuse », en prenant exemple sur le site Création K sans le recopier (même jour) ; puis « trop de blanc, pas assez chaleureux, le bleu ne va pas » (même jour) : aucun fond blanc, aucun bleu ; puis les couleurs elles-mêmes refusées plusieurs fois, jusqu'au choix de la palette lin et rose poudré parmi quatre (même jour) ; texte ≥ 19 px, aucune mention d'animatrice.

## Direction contract

THESIS: Le site est la table de l'exposition-vente, un après-midi d'automne : une salle couleur lin, les pièces debout sur une nappe rose poudré, « L'atelier » sur la même nappe, « Rendez-vous » sur un rose plus clair, et un pied de page terre cuite. Jamais de blanc, jamais de bleu. Il prend l'esprit doux et chaleureux du site Création K (fond lin, rose poudré, terre cuite en accent, titres à empattements avec un mot en italique coloré, photos aux coins doux) sans le recopier : ni arches, ni pointillés « couture », ni Fraunces, ni bouton d'appel, ni étiquette au-dessus des titres. Il refuse aussi la salle froide gris-vert et le décor « fait main » enfantin (écriture manuscrite, touches de peinture, cadre doré).

OWN-WORLD: fond lin #f2e9de (haut de page, galerie, contact, visionneuse) ; nappe rose poudré #ebcfc6 (bas du haut de page, partie « L'atelier », carton « Prochaine exposition ») ; rose clair #f6e1d9 (rendez-vous) ; terre cuite #8e4a33 pour le pied de page, texte #fbefe6. Texte brun #3b2e28, brun doux #6e4a3e pour les cartels et notes. Accent terre cuite #9e5239 (le mot en italique du titre), #85432d pour les titres des parties et les liens ; ocre #7a4f06 pour « à compléter » ; contour clavier brun. Les couleurs sont des rôles dans css/base.css (--fond, --fond-doux, --fort*, --pied*, --encre, --encre-douce, --accent, --lien, --ocre) ; classes de partie fond-fort et fond-doux. Titres en Newsreader (droit 400, italique pour le mot accent), texte courant en Atkinson Hyperlegible Next. Photos aux coins doux (14 px) avec une ombre chaude décalée et floue ; boutons en contour arrondi, jamais pleins.

STORY: Elle arrive dans une salle chaude, voit tout de suite des pièces peintes posées sur la nappe, comprend qu'une dizaine d'amies peignent ensemble à Port-des-Barques et qu'on peut commencer sans savoir dessiner, parcourt les pièces, puis trouve la prochaine exposition et comment écrire.

FIRST VIEWPORT: En haut, le nom de l'atelier en Newsreader à gauche, le menu à droite. Le nom en grand Newsreader sur deux lignes, « Demoiselles » en italique terre cuite ; à droite le texte d'entrée. Dessous, sur toute la largeur, trois pièces de tailles différentes (plateau long, vase, assiette) debout sur une même ligne de base, leur tiers bas sur la bande de nappe rose poudré qui court jusqu'au bord de l'écran et se prolonge dans la salle « L'atelier » ; le cartel de chaque pièce en bas à droite, sur la nappe. Sur téléphone, deux colonnes (la grande pièce à gauche, les deux autres empilées à droite), la nappe commence juste dessous. Aucun bouton d'appel. Signature : au survol ou au focus, une pièce de la galerie se soulève (ombre chaude plus profonde) ; un clic l'ouvre en grand avec son nom.

FORM: Brief épinglé par la propriétaire le 22 novembre 2026 (« prends plutôt exemple, et pas un copier-coller, sur Création K ; de la couleur, une ambiance chaleureuse »), après la salle d'exposition jugée trop froide ; puis « trop de blanc, pas assez chaleureux, le bleu ne va pas » : bleu retiré ; puis palette lin, rose poudré et terre cuite choisie par l'association parmi quatre (dont trois inspirées de Color Hunt) ; pas de nouveau tirage. seed:ac088da96b439866

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
