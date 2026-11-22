/* =========================================================
   galerie.js — faire défiler la rangée de pièces avec les boutons,
   et agrandir une photo au clic.
   Sans ce script, le site marche quand même : la rangée défile au doigt
   ou à la souris, et le lien ouvre simplement la photo.
   Rien à modifier ici pour ajouter une photo.
   ========================================================= */

// Les boutons « Précédentes » et « Suivantes » sous la rangée
(function () {
  var rangee = document.getElementById("galerie-rangee");
  var boutons = Array.prototype.slice.call(document.querySelectorAll(".galerie__fleche"));
  if (!rangee || !boutons.length) return;

  var douceur = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  // Un bouton est grisé quand on est déjà au début (ou à la fin) de la rangée.
  function mettreAJour() {
    var fin = rangee.scrollWidth - rangee.clientWidth - 2;
    boutons.forEach(function (bouton) {
      var versLaFin = bouton.getAttribute("data-sens") === "1";
      var bloque = versLaFin ? rangee.scrollLeft >= fin : rangee.scrollLeft <= 2;
      bouton.setAttribute("aria-disabled", bloque ? "true" : "false");
    });
  }

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      if (bouton.getAttribute("aria-disabled") === "true") return;
      // On avance d'à peu près une largeur d'écran de pièces.
      var pas = Math.max(rangee.clientWidth * 0.8, 200);
      rangee.scrollBy({ left: Number(bouton.getAttribute("data-sens")) * pas, behavior: douceur });
    });
  });

  rangee.addEventListener("scroll", mettreAJour, { passive: true });
  window.addEventListener("resize", mettreAJour);
  window.addEventListener("load", mettreAJour);
  mettreAJour();
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
