export default function initMenuMobile() {
  const btnMenu = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  const menuLinks = menu.querySelectorAll("li a");
  const className = "ativo";

  function preventLinks(event) {
    event.preventDefault();
  }

  function handleMenu() {
    btnMenu.classList.toggle(className);
    menu.classList.toggle(className);
  }

  function outsideClick(event) {
    if (event.target != btnMenu && event.target != menu) {
      menu.classList.remove(className);
      btnMenu.classList.remove(className);
    }
  }

  window.addEventListener("click", outsideClick);
  btnMenu.addEventListener("click", handleMenu);
  menuLinks.forEach((link) => {
    link.addEventListener("click", preventLinks);
  });
}
