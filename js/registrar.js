const btn = document.querySelector(".btn-primary");

const inputs = document.querySelectorAll("input");

let valores = [
  { nome: "", sobrenome: "" },
  { email: "", senha: "" },
  { rua: "", bairro: "" },
  { cidade: "", estado: "", numero: "" },
];

let statusLog = false;

for (let chave of valores) {
  console.log(chave);
}

function enviarForm() {
  for (let i = 0; i < inputs.length; i++) {
    valores[i] = inputs[i].value;
  }
  statusLog = true;
  saveOnLocalStorage();
}

function saveOnLocalStorage() {
  localStorage.setItem("dados", JSON.stringify(valores));
  localStorage.setItem("statusLog", JSON.stringify(statusLog));
}

btn.addEventListener("click", enviarForm);
