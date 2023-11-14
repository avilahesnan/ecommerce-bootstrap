const divSlide = document.querySelector("#best-sellers");
const newArrivals = document.querySelector("#new-arrivals");
const link = document.querySelector('a[href^="#best"]');
const newArrivalsLink = document.querySelector('a[href^="#new"]');

const homeLink = document.querySelector('a[href^="#home"]');
const home = document.querySelector("#home");

function scrollSection(event) {
  event.preventDefault();

  divSlide.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollIntoNewArrivals(event) {
  event.preventDefault();

  newArrivals.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function scrollHome(event) {
  event.preventDefault();

  home.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

homeLink.addEventListener("click", scrollHome);
newArrivalsLink.addEventListener("click", scrollIntoNewArrivals);
link.addEventListener("click", scrollSection);
