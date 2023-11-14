const dados = localStorage.getItem("dados");
const inputs = document.querySelectorAll("input.condom");
const hiUser = document.querySelector(".hiuser");
const btnSave = document.querySelector(".btn-success");

arr = JSON.parse(dados);
hiUser.innerText = `Hi, ${arr[0]}`;
console.log(arr);
for (let chave in arr) {
  inputs[chave].value = arr[chave];
}

let valores = [
  { nome: "", sobrenome: "" },
  { email: "", senha: "" },
  { rua: "", bairro: "" },
  { cidade: "", estado: "", numero: "" },
];

function enviarForm() {
  for (let i = 0; i < inputs.length; i++) {
    valores[i] = inputs[i].value;
  }
  saveOnLocalStorage();
  location.href = "";
}

function saveOnLocalStorage() {
  localStorage.setItem("dados", JSON.stringify(valores));
}

btnSave.addEventListener("click", enviarForm);
