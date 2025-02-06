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
const menuListEls = [...headerEl.querySelectorAll(".menu > li")];
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];
const searchInputEl = searchWrapEl.querySelector("input");

searchStarterEl.addEventListener("click", addSearching);

searchCloserEl.addEventListener("click", removeSearching);

searchShadowEl.addEventListener("click", removeSearching);

function addSearching() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  menuListEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = (i * 0.4) / menuListEls.length + "s";
  });
  searchDelayEls.forEach((el, i) => {
    el.style.transitionDelay = (i * 1) / searchDelayEls.length + "s";
  });
  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
}

function removeSearching() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  menuListEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = (i * 0.4) / menuListEls.length + "s";
  });
  searchDelayEls.reverse().forEach((el, i) => {
    el.style.transitionDelay = (i * 0.4) / searchDelayEls.length + "s";
  });
  searchDelayEls.reverse();
  searchInputEl.value = "";
}

// Intersection Observer
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
});

const infoEls = document.querySelectorAll(".info");
infoEls.forEach((el) => {
  io.observe(el);
});

// Video Player
const videoEl = document.querySelector(".stage video");
const playBtn = document.querySelector(".video-play");
const pauseBtn = document.querySelector(".video-pause");

playBtn.addEventListener("click", () => {
  videoEl.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
});

pauseBtn.addEventListener("click", () => {
  videoEl.pause();
  pauseBtn.classList.add("hide");
  playBtn.classList.remove("hide");
});
