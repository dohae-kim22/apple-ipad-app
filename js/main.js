// Cart
const cartStarterEl = document.querySelector(".cart-starter");
const cartEl = cartStarterEl.querySelector(".cart");

cartStarterEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (cartEl.classList.contains("show")) {
    cartEl.classList.remove("show");
  } else {
    cartEl.classList.add("show");
  }
});

window.addEventListener("click", () => {
  cartEl.classList.remove("show");
});

cartEl.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Search Bar
const headerEl = document.querySelector("header");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");

searchStarterEl.addEventListener("click", addSearching);

searchCloserEl.addEventListener("click", removeSearching);

searchShadowEl.addEventListener("click", removeSearching);

function addSearching() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
}

function removeSearching() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
}
