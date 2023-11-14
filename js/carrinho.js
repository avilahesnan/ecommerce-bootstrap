const btnAdd = document.querySelectorAll(".add-to-cart");

btnAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Produto Adicionado ao carrinho");
  });
});
