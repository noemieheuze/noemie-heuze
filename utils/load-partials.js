// load-partials.js

function loadPartial(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) =>
      console.error(`Erreur lors du chargement de ${url} :`, err)
    );
}

window.addEventListener("DOMContentLoaded", () => {
  loadPartial("navbar", "navbar.html");
  loadPartial("footer", "footer.html");
});

export default loadPartial;
