const imgs = document.querySelectorAll(".carrossel");
imgs[0].classList.add("ativo");

let i = 0;

setInterval(() => {
  i == imgs.length - 1 ? (i = 0) : i++;

  imgs.forEach((img) => {
    img.classList.remove("ativo");
  });

  imgs[i].classList.add("ativo");
}, 3000);
