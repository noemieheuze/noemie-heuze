import { projects } from "./data/projects.js";

function loadPartial(id, url) {
  // On renvoie la Promise, pour pouvoir chaîner un .then
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
  // On lance les deux injections et on attend que celle du 'navbar' soit finie
  const navbarPromise = loadPartial("navbar", "navbar.html");
  const footerPromise = loadPartial("footer", "footer.html");

  // Quand la navbar est injectée, on peut mettre à jour le counter
  navbarPromise.then(() => {
    const countEl = document.getElementById("projects-count");
    if (countEl) {
      console.log("projects:", projects);
      countEl.textContent = projects.length;
    }
    
  });

  // Si tu veux faire quelque chose après le footer, tu peux l'écouter aussi :
  // footerPromise.then(() => { /* … */ });
});

export default loadPartial;
