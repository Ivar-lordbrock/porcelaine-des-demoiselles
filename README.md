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
│   ├── layout.css          en-tête, bandes de couleur, pied de page
│   ├── sections.css        le style de chaque partie (accueil, atelier, rendez-vous…)
│   └── galerie.css         la grille de photos et la visionneuse
├── js/
│   └── galerie.js          agrandit une photo au clic (rien à y toucher)
├── fonts/                  les deux polices, hébergées sur le site
├── images/
│   ├── site/               image d’accueil et icône d’onglet (favicon)
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
| Haut de page        | `<!-- ============ ACCUEIL ============ -->` |
| L’atelier           | `<!-- ============ L'ATELIER ============ -->` |
| Nous rejoindre      | `<!-- ============ NOUS REJOINDRE ============ -->` |
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

Sur le site, ces informations apparaissent en violet, soulignées de tirets. Elles sont à remplacer par les vraies :

**Dans index.html, partie « INFOS PRATIQUES ET CONTACT » :**

- **Adresse e-mail** — remplacez `<span class="a-completer">Adresse à compléter</span>` par la ligne donnée juste en dessous en commentaire :
  `<a href="mailto:votre.adresse@exemple.fr">votre.adresse@exemple.fr</a>` (mettez la vraie adresse aux deux endroits).
- **Téléphone** — même principe, avec `<a href="tel:+33600000000">06 00 00 00 00</a>` : dans `href`, le numéro sans espaces, en remplaçant le premier 0 par +33 ; dans le texte visible, le numéro habituel avec espaces.
- **Lieu**, **Jours et horaires**, **Cotisation** — remplacez `<span class="a-completer">À compléter</span>` par le texte, par exemple : `Le mardi de 14&nbsp;h à 17&nbsp;h`.

Une information que vous ne voulez pas afficher (la cotisation, par exemple) : supprimez tout le bloc `<div> … </div>` qui la contient.

**Dans mentions-legales.html :** l’adresse du siège, l’e-mail de contact et le nom de la personne responsable de la publication (souvent la présidente). Si le site n’est pas hébergé sur GitHub Pages, adaptez aussi le paragraphe « Hébergement ».

## Annoncer le prochain rendez-vous

Dans la partie « RENDEZ-VOUS » :

1. **Le prochain rendez-vous** — remplacez la phrase « Date à venir… » dans `<span class="prochain__texte">`. Un exemple est donné en commentaire juste au-dessus.
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
   - `<figcaption>` : la légende courte affichée sous la photo.

La visionneuse (photo agrandie au clic, boutons Précédente / Suivante) prend la nouvelle photo en compte toute seule.

Pour retirer une photo : supprimez son bloc `<figure> … </figure>` et le fichier dans `images/galerie/`.

**Photos de personnes** : le dossier `images/atelier/` est prévu pour les moments de groupe. Ne publiez une photo où l’on reconnaît quelqu’un qu’avec son accord.

### Changer l’image d’accueil

Remplacez `images/site/accueil-rouge-gorge.jpg` par une autre image (portrait, environ 1000 × 1400 pixels), ou changez le nom du fichier dans la partie « ACCUEIL » d’index.html, sans oublier `width`, `height` et `alt`.

## Changer les couleurs ou les tailles

Tout est réglé au début de **css/base.css**, dans le bloc `:root { … }` :

- `--fond`, `--eau`, `--eau-claire` : le blanc et les bleus clairs des bandes ;
- `--profond` : le bleu foncé (bande « Nous rejoindre », pied de page) ;
- `--encre`, `--encre-douce` : la couleur du texte ;
- `--lavande` : la couleur d’accent (liens, mise en avant) ;
- `--texte` : la taille du texte courant.

Changez une valeur à cet endroit, elle s’applique à tout le site. Gardez un texte bien foncé sur fond clair : le site est pensé pour être lu sans effort.

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

- les trois étapes de « Nous rejoindre » (Prenez contact / Venez nous rencontrer / Lancez-vous), notamment « Passez voir l’atelier » : est-ce possible de venir à une séance ?
- « avec les conseils de l’animatrice et des autres » (partie L’atelier) ;
- l’exposition des **21 et 22 novembre** : l’année **2026** a été déduite de la date de publication sur Facebook ;
- les légendes et descriptions des photos de la galerie.

## Polices

Alegreya (titres) et Atkinson Hyperlegible Next (texte) sont sous licence libre SIL Open Font License : voir `fonts/LICENCES.txt`.
