const arrow = document.querySelector(".fa-circle-arrow-left");
const wallet = document.querySelector(".carteira");

arrow.addEventListener("click", () => {
  wallet.classList.toggle("active");
});
