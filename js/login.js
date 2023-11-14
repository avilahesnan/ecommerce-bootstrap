const email = document.querySelector("#typeEmailX");
const senha = document.querySelector("#typePasswordX");
const dados = localStorage.getItem("dados");
const statusLog = localStorage.getItem("statusLog");
const modalLogin = document.querySelector(".container-form-login");
let boasVindas = document.querySelector(".boas-vindas");
const submit = document.querySelector(".btn-outline-light");
const btnUserDados = document.querySelector(".fa-user");

const logout = document.querySelector(".logout");

if (localStorage.getItem("dados")) {
  let dadosJSON = JSON.parse(dados);

  let arr = Object.values(dadosJSON);

  const userLogado = arr[0];

  if (localStorage) {
    boasVindas.innerText = `Bem vindo(a) ${userLogado}`;

    btnUserDados.addEventListener("click", (e) => {
      e.preventDefault();
      modalLogin.classList.remove("active");
      location.href = "user.html";
    });
  }
}

if (!Boolean(statusLog)) {
  function logar(e) {
    const emailUser = arr[2];
    const userPass = arr[3];
    e.preventDefault();
    if (email.value == emailUser && senha.value == userPass) {
      modalLogin.classList.remove("active");
      boasVindas.innerText = `Bem vindo(a) ${userLogado}`;
      alert("Logado com sucesso!");
    } else {
      alert("Email ou senha incorreto");
    }
  }

  submit.addEventListener("click", logar);
}

logout.addEventListener("click", () => {
  let statusLogado = Boolean(statusLog);
  statusLogado = false;
  boasVindas.innerText = "Bem vindo(a)";
});
