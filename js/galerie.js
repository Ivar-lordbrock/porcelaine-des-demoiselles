/* =========================================================
   galerie.js — faire défiler la rangée de pièces avec les boutons,
   et agrandir une photo au clic.
   Sans ce script, le site marche quand même : la rangée défile au doigt
   ou à la souris, et le lien ouvre simplement la photo.
   Rien à modifier ici pour ajouter une photo.
   ========================================================= */

// Les boutons « Précédentes » et « Suivantes » sous la rangée.
// Ils marchent toujours : au bout de la rangée, « Suivantes » revient
// à la première pièce ; au début, « Précédentes » va à la dernière.
(function () {
  var rangee = document.getElementById("galerie-rangee");
  var boutons = Array.prototype.slice.call(document.querySelectorAll(".galerie__fleche"));
  if (!rangee || !boutons.length) return;

  var douceur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      var sens = Number(bouton.getAttribute("data-sens"));
      var fin = rangee.scrollWidth - rangee.clientWidth;
      var position = rangee.scrollLeft;
      var cible;

      if (sens > 0 && position >= fin - 2) {
        cible = 0;                       // au bout : retour au début
      } else if (sens < 0 && position <= 2) {
        cible = fin;                     // au début : on va au bout
      } else {
        // sinon, on avance d'à peu près une largeur d'écran de pièces
        cible = position + sens * Math.max(rangee.clientWidth * 0.8, 200);
      }
      rangee.scrollTo({ left: cible, behavior: douceur });
    });
  });
})();

// La visionneuse : la photo en grand, avec son nom
(function () {
  var liens = Array.prototype.slice.call(document.querySelectorAll(".galerie__lien"));
  var boite = document.getElementById("visionneuse");

  // Navigateur trop ancien ou page sans galerie : on ne fait rien.
  if (!liens.length || !boite || typeof boite.showModal !== "function") return;

  var image = boite.querySelector(".visionneuse__image");
  var legende = boite.querySelector(".visionneuse__legende");
  var compteur = boite.querySelector(".visionneuse__compteur");
  var actuel = 0;

  function afficher(numero) {
    actuel = (numero + liens.length) % liens.length;
    var lien = liens[actuel];
    var vignette = lien.querySelector("img");
    var texte = lien.parentNode.querySelector("figcaption");

    image.src = lien.getAttribute("href");
    image.alt = vignette ? vignette.alt : "";
    legende.textContent = texte ? texte.textContent : "";
    compteur.textContent = "Photo " + (actuel + 1) + " sur " + liens.length;
  }

  liens.forEach(function (lien, numero) {
    lien.addEventListener("click", function (evenement) {
      evenement.preventDefault();
      afficher(numero);
      boite.showModal();
    });
  });

  boite.querySelector('[data-action="precedente"]').addEventListener("click", function () {
    afficher(actuel - 1);
  });
  boite.querySelector('[data-action="suivante"]').addEventListener("click", function () {
    afficher(actuel + 1);
  });
  boite.querySelector('[data-action="fermer"]').addEventListener("click", function () {
    boite.close();
  });

  // Flèches du clavier pour passer d'une photo à l'autre (Échap ferme déjà).
  boite.addEventListener("keydown", function (evenement) {
    if (evenement.key === "ArrowLeft") afficher(actuel - 1);
    if (evenement.key === "ArrowRight") afficher(actuel + 1);
  });

  // Un clic sur le fond sombre ferme la visionneuse.
  boite.addEventListener("click", function (evenement) {
    if (evenement.target === boite) boite.close();
  });

  // À la fermeture, on revient sur la photo regardée en dernier.
  boite.addEventListener("close", function () {
    liens[actuel].focus();
  });
})();
