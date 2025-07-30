import { projects } from "./data/projects.js";
import { initAnimations } from "./initAnimations.js"; 

function injectProjectCount() {
  const el = document.getElementById("projects-count");
  if (el) {
    el.textContent = projects.length;
  }
}

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
// injectProjectCount();

    
  });
});

export default loadPartial;
