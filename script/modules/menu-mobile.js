export default function initMenuMobile() {
  const btnMenu = document.querySelector("[data-menu-btn]");
  const menu = document.querySelector("[data-menu]");
  const menuLinks = menu.querySelectorAll("li a");
  const className = "ativo";
  const eventList = ["click", "touchstart"];

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

  eventList.forEach((userEvent) => {
    window.addEventListener(userEvent, outsideClick);
    btnMenu.addEventListener(userEvent, handleMenu);
    menuLinks.forEach((link) => {
      link.addEventListener(userEvent, preventLinks);
    });
  });
}
