# Porcelaine des Demoiselles — site web

Petit site statique (HTML + CSS, un peu de JavaScript) de l’atelier de peinture sur porcelaine de Port-des-Barques.
Aucun outil à installer, aucune base de données : on modifie les fichiers, on les envoie sur GitHub, c’est en ligne.

## Où se trouve quoi

```
porcelaine-des-demoiselles/
├── index.html              la page d’accueil (tout le contenu du site)
├── mentions-legales.html   la page des mentions légales
├── css/
│   ├── base.css            couleurs, polices, tailles, boutons, liens
│   ├── layout.css          l’en-tête, le menu, les parties (fonds de couleur), le pied de page
│   ├── sections.css        le style de chaque partie (accueil, atelier, rendez-vous…)
│   └── galerie.css         la rangée de photos qui défile et la visionneuse
├── js/
│   ├── menu.js             le bouton « Menu » sur téléphone (rien à y toucher)
│   └── galerie.js          fait défiler la rangée et agrandit une photo au clic (rien à y toucher)
├── fonts/                  les deux polices, hébergées sur le site
├── images/
│   ├── site/               l’icône d’onglet (favicon.svg)
│   ├── galerie/            les photos des pièces peintes
│   └── atelier/            réservé aux photos de la vie du groupe (vide pour l’instant)
├── README.md               ce fichier
├── DESIGN.md               les choix de style, pour garder le site cohérent
└── PRODUCT.md, .impeccable/  notes de conception (ne s’affichent pas sur le site)
```

## Modifier un texte

Tout le texte est dans **index.html**. Le fichier est découpé en parties repérées par de grands commentaires :

| Partie du site      | Repère dans index.html                    |
|---------------------|-------------------------------------------|
| Menu                | `<!-- ============ EN-TÊTE ============ -->` |
| Haut de page        | `<!-- ============ ACCUEIL ============ -->` |
| L’atelier (et « Venir peindre avec nous ») | `<!-- ============ L'ATELIER ============ -->` |
| Galerie             | `<!-- ============ GALERIE ============ -->` |
| Rendez-vous         | `<!-- ============ RENDEZ-VOUS ============ -->` |
| Contact et infos    | `<!-- ============ INFOS PRATIQUES ET CONTACT ============ -->` |
| Pied de page        | `<!-- ============ PIED DE PAGE ============ -->` |

Ouvrez le fichier avec un éditeur de texte (Bloc-notes, ou mieux : VS Code), cherchez le repère avec `Ctrl + F`, et changez le texte **entre** les balises (`<p>…</p>`, `<h2>…</h2>`, etc.). Ne supprimez pas les balises elles-mêmes.

### Les espaces insécables `&nbsp;`

En français, on met une espace avant `:` `;` `!` `?` et à l’intérieur des guillemets `« … »`.
Dans le code, cette espace s’écrit `&nbsp;` : elle empêche le signe de se retrouver seul en début de ligne.
Exemple : `Débutantes bienvenues&nbsp;: la peinture…`. Gardez-les quand vous modifiez une phrase.

## Remplir les informations « à compléter »

Sur le site, ces informations apparaissent en ocre, soulignées de tirets. Elles sont à remplacer par les vraies :

**Dans index.html, partie « INFOS PRATIQUES ET CONTACT » :**

- **Adresse e-mail** — remplacez `<span class="a-completer">Adresse à compléter</span>` par la ligne donnée juste en dessous en commentaire :
  `<a href="mailto:votre.adresse@exemple.fr">votre.adresse@exemple.fr</a>` (mettez la vraie adresse aux deux endroits).
- **Téléphone** — même principe, avec `<a href="tel:+33600000000">06 00 00 00 00</a>` : dans `href`, le numéro sans espaces, en remplaçant le premier 0 par +33 ; dans le texte visible, le numéro habituel avec espaces.
- **Lieu**, **Jours et horaires**, **Cotisation** — remplacez `<span class="a-completer">À compléter</span>` par le texte, par exemple : `Le mardi de 14&nbsp;h à 17&nbsp;h`.

Une information que vous ne voulez pas afficher (la cotisation, par exemple) : supprimez tout le bloc `<div> … </div>` qui la contient.

**Dans mentions-legales.html :** l’adresse du siège, l’e-mail de contact et le nom de la personne responsable de la publication (souvent la présidente). Si le site n’est pas hébergé sur GitHub Pages, adaptez aussi le paragraphe « Hébergement ».

## Annoncer le prochain rendez-vous

Dans la partie « RENDEZ-VOUS » :

1. **Le prochain rendez-vous** — remplacez la phrase « Date à venir… » dans `<span class="prochain__texte">`. Un exemple est donné en commentaire juste au-dessus. Sur ordinateur, cet avis s’affiche sous le titre « Rendez-vous ».
2. **Le tableau des expositions** — pour ajouter un événement, copiez un bloc `<tr> … </tr>` et collez-le **en haut** du tableau (juste après `<tbody>`), puis changez la date, l’événement et le lieu.

Pour écrire « 1er », utilisez `1<sup>er</sup>`.

## Ajouter une photo dans la galerie

1. **Préparez l’image** : format JPG, **1400 pixels maximum** sur le plus grand côté (le site reste rapide). Nommez le fichier en minuscules, sans accent ni espace, avec des tirets : `assiette-coquelicots.jpg`.
2. **Copiez-la** dans le dossier `images/galerie/`.
3. **Notez sa taille** en pixels : clic droit sur le fichier → Propriétés → Détails → Largeur et Hauteur.
4. **Dans index.html**, partie « GALERIE », copiez un bloc complet, de `<figure class="galerie__item">` jusqu’à `</figure>`, et collez-le là où vous voulez la photo (l’ordre des blocs = l’ordre sur le site) :

```html
<figure class="galerie__item">
  <a class="galerie__lien" href="./images/galerie/assiette-coquelicots.jpg">
    <img src="./images/galerie/assiette-coquelicots.jpg" width="1050" height="1400" loading="lazy"
         alt="Assiette blanche peinte de coquelicots rouges.">
  </a>
  <figcaption>Assiette aux coquelicots</figcaption>
</figure>
```

5. **Changez** :
   - le nom du fichier, **aux deux endroits** (`href` et `src`) ;
   - `width` et `height` avec la taille notée à l’étape 3 (cela évite que la page « saute » au chargement) ;
   - `alt` : une phrase qui décrit la pièce pour les personnes qui ne voient pas l’image ;
   - `<figcaption>` : le nom de la pièce, affiché sous la photo.

La visionneuse (photo agrandie au clic, boutons Précédente / Suivante) prend la nouvelle photo en compte toute seule.

Pour retirer une photo : supprimez son bloc `<figure> … </figure>` et le fichier dans `images/galerie/`.

**Photos de personnes** : le dossier `images/atelier/` est prévu pour les moments de groupe. Ne publiez une photo où l’on reconnaît quelqu’un qu’avec son accord.

### Changer les pièces du haut de page

Le haut de page montre trois pièces posées côte à côte sur une même ligne, comme sur la table d’une exposition-vente, chacune avec son cartel (le petit texte à côté : le nom de la pièce, puis une ligne d’explication). Derrière elles, une bande rose poudré (la « nappe ») part du bas des pièces et rejoint la partie « L’atelier », qui a la même couleur.

Dans la partie « ACCUEIL » d’index.html, chaque pièce est un bloc `<figure class="oeuvre …"> … </figure>` :

- `oeuvre--grande` : la plus haute, à gauche (une pièce en hauteur, comme un plateau long, lui va bien) ;
- `oeuvre--moyenne` : au milieu ;
- `oeuvre--petite` : à droite.

Pour changer une pièce, modifiez `src`, `width`, `height`, `alt` et le texte du cartel. Les photos ne sont jamais recadrées : elles gardent leurs proportions.

### Changer la pièce de « L’atelier »

Dans la partie « L’ATELIER », la photo posée sous le titre est le bloc `<figure class="partie__piece"> … </figure>`. Même principe : `src`, `width`, `height`, `alt` et le cartel.

## Changer les couleurs ou les tailles

Tout est réglé au début de **css/base.css**, dans le bloc `:root { … }` :

- les fonds : `--fond` (lin : haut de page, galerie, contact, photo agrandie), `--fort` (rose poudré : la bande sous les pièces, « L’atelier » et le petit carton « Prochaine exposition »), `--fond-doux` (rose clair : « Rendez-vous »), `--pied` (terre cuite : le pied de page) ;
- les textes posés sur ces fonds : `--fort-texte`, `--fort-doux`, `--fort-titre`, `--fort-lien` (sur le rose poudré), `--pied-texte`, `--pied-doux` (sur le pied de page) ;
- le texte : `--encre` (texte principal), `--encre-douce` (cartels, légendes, notes) ;
- `--accent` (terre cuite : le mot « Demoiselles » du titre) et `--lien` (les titres des parties et les liens) ;
- `--filet` : les traits fins entre les lignes ; `--ocre` : le repère des informations « à compléter » ;
- `--rayon` : l’arrondi des coins des photos ; `--texte` : la taille du texte courant.

Chaque partie choisit son fond avec une classe dans index.html : `fond-fort` (L’atelier), `fond-doux` (Rendez-vous) ; sans classe, la partie garde le fond lin (Nos pièces, Contact). Pour changer le fond d’une partie, changez cette classe.

Changez une valeur à cet endroit, elle s’applique à tout le site. Pas de blanc ni de bleu : l’association les a refusés. Gardez un texte bien foncé sur fond clair : le site est pensé pour être lu sans effort.

## Voir le site sur son ordinateur

Le plus simple : double-cliquez sur `index.html`, il s’ouvre dans le navigateur.

Si quelque chose ne s’affiche pas comme en ligne (polices, photos), lancez un petit serveur local depuis le dossier du site, si Python est installé :

```powershell
python -m http.server 8000
```

puis ouvrez http://localhost:8000 dans le navigateur.

## Le site en ligne (GitHub Pages)

- Adresse du site : https://ivar-lordbrock.github.io/porcelaine-des-demoiselles/
- Dépôt GitHub : https://github.com/Ivar-lordbrock/porcelaine-des-demoiselles

GitHub Pages publie automatiquement la branche `main`, dossier racine. Après chaque modification, envoyez-la sur GitHub ; le site se met à jour en une ou deux minutes :

```powershell
git add -A
```

```powershell
git commit -m "Ajout des horaires de l'atelier"
```

```powershell
git push
```

Sans Git, on peut aussi modifier un fichier directement sur github.com (icône crayon), ou utiliser GitHub Desktop.

Tous les liens du site sont relatifs (`./css/…`, `./images/…`) : il fonctionne tel quel à cette adresse, sans réglage.
Le fichier vide `.nojekyll` indique à GitHub de publier les fichiers tels quels : ne le supprimez pas.

## Textes à faire relire par l’association

Ces passages ont été rédigés d’après le groupe Facebook ; à vérifier ou ajuster :

- les phrases du haut de page et de « L’atelier », réécrites plus simplement (« Une dizaine d’amies… », « On part d’une pièce blanche… ») ;
- « Venir peindre avec nous » : le site invite à écrire ou à venir à une exposition-vente ; s’il est possible d’assister à une séance, on peut l’ajouter ;
- l’exposition des **21 et 22 novembre** : l’année **2026** a été déduite de la date de publication sur Facebook ;
- les légendes et descriptions des photos de la galerie, et les cartels du haut de page (« Peinture à la main sur porcelaine »).

## Polices

Newsreader (titres, droit et italique) et Atkinson Hyperlegible Next (texte et menu) sont sous licence libre SIL Open Font License : voir `fonts/LICENCES.txt`.
