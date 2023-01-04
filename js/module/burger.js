const burgerBtn = document.querySelector(".burger");
const navigationMenu = document.querySelector(".navigation");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger__active");
  navigationMenu.classList.toggle("navigation_active");
});
