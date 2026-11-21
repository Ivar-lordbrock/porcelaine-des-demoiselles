/* =========================================================
   menu.js — bouton « Menu » sur téléphone.
   Ouvre et ferme la liste des liens. Sans ce script, les liens
   restent simplement affichés. Rien à modifier ici.
   ========================================================= */
(function () {
  var entete = document.querySelector(".entete");
  var bouton = document.querySelector(".menu-bouton");
  var navigation = document.getElementById("navigation-principale");

  if (!entete || !bouton || !navigation) return;

  function ouvrir(etat) {
    entete.classList.toggle("est-ouvert", etat);
    bouton.setAttribute("aria-expanded", etat ? "true" : "false");
  }

  function estOuvert() {
    return bouton.getAttribute("aria-expanded") === "true";
  }

  bouton.addEventListener("click", function () {
    ouvrir(!estOuvert());
  });

  // Quand on choisit un lien, le menu se referme puis on descend à la partie choisie.
  // (Le navigateur seul s'arrête en route, car le menu disparaît pendant le clic.)
  navigation.addEventListener("click", function (evenement) {
    var lien = evenement.target.closest("a");
    if (!lien || !estOuvert()) return;

    ouvrir(false);

    var cible = lien.hash ? document.getElementById(lien.hash.slice(1)) : null;
    if (!cible || lien.pathname !== location.pathname) return; // lien vers une autre page

    evenement.preventDefault();
    history.pushState(null, "", lien.hash);
    cible.scrollIntoView();

    // Pour le clavier : on continue depuis la partie choisie.
    cible.setAttribute("tabindex", "-1");
    cible.focus({ preventScroll: true });
  });

  // La touche Échap referme le menu et revient sur le bouton.
  document.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape" && estOuvert()) {
      ouvrir(false);
      bouton.focus();
    }
  });
})();
