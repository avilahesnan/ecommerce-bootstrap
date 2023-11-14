const submenuLink = document.querySelector(".link-submenu");
const submenu = document.querySelector(".itens-eletronic");

function toggleMenu() {
  submenu.classList.add("active");
}

function removeClass() {
  submenu.classList.remove("active");
}

submenuLink.addEventListener("mouseover", toggleMenu);
submenu.addEventListener("mouseover", toggleMenu);
submenu.addEventListener("mouseleave", removeClass);
submenuLink.addEventListener("mouseleave", removeClass);

const linkInfos = document.querySelector(".link-info");
const lista = document.querySelector(".infos-lista");

function modalMenu() {
  lista.classList.add("active");
}

function removerModal() {
  lista.classList.remove("active");
}

linkInfos.addEventListener("mouseover", modalMenu);
linkInfos.addEventListener("mouseleave", removerModal);
lista.addEventListener("mouseover", modalMenu);
lista.addEventListener("mouseleave", removerModal);
