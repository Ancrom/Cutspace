// =============== BURGER ===============
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-list");
const navLink = navMenu.children;

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burger.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });
}

// =============== TOOLTIP ===============
const imageCards = document.querySelector(".image-cards");
const tooltip = document.querySelector(".tooltip");

imageCards.addEventListener("mousemove", (e) => {
  let blockRect = imageCards.getBoundingClientRect();
  let relY = e.clientY - blockRect.top;
  let relX = e.clientX - blockRect.left;
  tooltip.style.top = relY + "px";
  tooltip.style.left = relX + "px";
});

