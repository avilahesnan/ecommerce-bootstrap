const btnAdd = document.querySelectorAll(".add-to-cart");

btnAdd.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Product Added to Cart");
  });
});
