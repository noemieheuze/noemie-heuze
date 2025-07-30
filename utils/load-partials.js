import { projects } from "./data/projects.js";
import { initAnimations } from "./initAnimations.js"; // ✅ importer l’init

function loadPartial(id, url) {
  return fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((err) =>
      console.error(`Erreur lors du chargement de ${url} :`, err)
    );
}

window.addEventListener("DOMContentLoaded", () => {
  const navbarPromise = loadPartial("navbar", "navbar.html");
  const footerPromise = loadPartial("footer", "footer.html");

  // Attendre que les deux soient finis, puis lancer les animations
  Promise.all([navbarPromise, footerPromise]).then(() => {
    initAnimations(); // ✅ maintenant sûr que navbar & footer sont là

    // Optionnel : mise à jour du compteur
    const countEl = document.getElementById("projects-count");
 
      countEl.textContent = projects.length;
    
  });
});

export default loadPartial;
