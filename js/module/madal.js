const buttonsOrder = document.querySelectorAll(".product__button-order");
const overlayOrder = document.querySelector(".overlay__order");
const order = document.querySelector(".modal__order");

buttonsOrder.forEach((buttonOrder) => {
  buttonOrder.addEventListener("click", () => {
    overlayOrder.classList.add("overlay__active");
    order.value = buttonOrder.dataset.order;
  });
});

overlayOrder.addEventListener("click", (event) => {
  const target = event.target;

  if (target === overlayOrder || target.closest(".modal__close"))
    overlayOrder.classList.remove("overlay__active");
});
