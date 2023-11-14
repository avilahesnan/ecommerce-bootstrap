const modal = document.querySelector(".container-form-login");
const btnUser = document.querySelector(".fa-user");
const closeModal = document.querySelector(".closeModal");

function openModal() {
  modal.classList.toggle("active");
}

btnUser.addEventListener("click", openModal);
closeModal.addEventListener("click", openModal);
