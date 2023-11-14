const btnLogout = document.querySelector(".logout");
const bemvindo = document.querySelector(".boas-vindas");

btnLogout.addEventListener("click", () => {
  bemvindo.innerText = "Bem vindo(a)";
});
