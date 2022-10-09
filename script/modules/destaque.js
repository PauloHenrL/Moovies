export default function initDestaque() {
  const destaque = document.querySelector("[data-destaque]");
  const listaFilmes = document.querySelectorAll("[data-lista] img");
  const listaLinks = document.querySelectorAll("[data-lista] a");

  function handleMovie() {
    destaque.querySelector("img").src = this.src;
    destaque.querySelector("h2").innerText = this.alt;
    destaque.querySelector("a").href = this.parentElement.href;
    destaque.querySelector("p").innerText = this.nextElementSibling.innerText;
  }

  function previnePadrao(event) {
    event.preventDefault();
  }

  listaLinks.forEach((link) => {
    link.addEventListener("click", previnePadrao);
  });
  listaFilmes.forEach((img) => {
    img.addEventListener("click", handleMovie);
  });
}
