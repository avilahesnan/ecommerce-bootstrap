const open = document.querySelector(".open_carrinho");
const close = document.querySelector(".btn-close");
const div = document.querySelector(".carrinho");

function openCarrinho() {
  div.classList.toggle("show");
}

open.addEventListener("click", openCarrinho);
close.addEventListener("click", openCarrinho);
