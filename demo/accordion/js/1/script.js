let items = document.querySelectorAll(".accordion__item");

items.forEach((item) => {
  item.addEventListener("click", accordionHandler);
});

function accordionHandler() {
  this.classList.toggle("active");
}