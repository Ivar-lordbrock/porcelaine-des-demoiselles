/* =========================================================
   galerie.js — agrandir une photo de la galerie au clic.
   Sans ce script, le site marche quand même : le lien ouvre
   simplement la photo. Rien à modifier ici pour ajouter une photo.
   ========================================================= */
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
