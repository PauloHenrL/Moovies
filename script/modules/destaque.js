export default function initDestaque() {
  const destaque = document.querySelector("[data-destaque]");
  const listaFilmes = document.querySelectorAll("[data-lista] img");
  const listaLinks = document.querySelectorAll("[data-lista] a");
  const eventos = ["click", "touchstart"];

  function handleMovie() {
    destaque.querySelector("img").src = this.src;
    destaque.querySelector("h2").innerText = this.alt;
    destaque.querySelector("a").href = this.parentElement.href;
    destaque.querySelector("p").innerText = this.nextElementSibling.innerText;
  }

  function previnePadrao(event) {
    event.preventDefault();
  }

  eventos.forEach((userEvent) => {
    listaLinks.forEach((link) => {
      link.addEventListener(userEvent, previnePadrao);
    });
    listaFilmes.forEach((img) => {
      img.addEventListener(userEvent, handleMovie);
    });
  });
}
