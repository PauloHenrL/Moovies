export default function initMenuMobile() {}

const btnMenu = document.querySelectorAll("[data-menu-btn]");
const menu = document.querySelector("[data-menu]");
const eventList = ["click", "touchstart"];

function handleMenu(event) {
  menu.classList.toggle("ativo");
}

eventList.forEach((userEvent) => {
  btnMenu.forEach((btn) => {
    btn.addEventListener(userEvent, handleMenu);
  });
});
