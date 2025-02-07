import ipads from "../data/ipads.js";
import navigations from "../data/navigations.js";

// Cart
const cartStarterEl = document.querySelector(".cart-starter");
const cartEl = cartStarterEl.querySelector(".cart");

cartStarterEl.addEventListener("click", (event) => {
  event.stopPropagation();
  cartEl.classList.toggle("show");
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

searchCloserEl.addEventListener("click", (event) => {
  event.stopPropagation();
  removeSearching();
});

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

// Mobile Menu
const menuStarterEl = headerEl.querySelector(".menu-starter");
menuStarterEl.addEventListener("click", () => {
  if (headerEl.classList.contains("menu-open")) {
    document.documentElement.classList.remove("fixed");
    headerEl.classList.remove("menu-open");
    searchInputEl.value = "";
  } else {
    document.documentElement.classList.add("fixed");
    headerEl.classList.add("menu-open");
  }
});

// Mobile Search
const searchTextFieldEl = searchWrapEl.querySelector(".text-field");
const searchCancelerEl = searchWrapEl.querySelector(".search-canceler");
searchTextFieldEl.addEventListener("click", () => {
  headerEl.classList.add("searching-mobile");
  searchInputEl.focus();
});

searchCancelerEl.addEventListener("click", () => {
  headerEl.classList.remove("searching-mobile");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 740) {
    headerEl.classList.remove("searching");
  } else {
    headerEl.classList.remove("searching-mobile");
    headerEl.classList.remove("menu-open");
  }
});

//Mobile Navigation Toggler
const navEl = document.querySelector("nav");
const navTogglerEl = navEl.querySelector(".menu-toggler");
const shadowEl = navEl.querySelector(".shadow");
navTogglerEl.addEventListener("click", () => {
  if (navEl.classList.contains("menu-open")) {
    closeMenu();
  } else {
    navEl.classList.add("menu-open");
  }
});

navEl.addEventListener("click", (event) => {
  event.stopPropagation();
});

shadowEl.addEventListener("click", closeMenu);

window.addEventListener("click", closeMenu);

function closeMenu() {
  navEl.classList.remove("menu-open");
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

// Compare Ipads Rendering
const itemsEl = document.querySelector(".compare .items");
ipads.forEach((ipad) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");

  let colorList = "";
  ipad.colors.forEach((color) => {
    colorList += `<li style="background-color:${color}"></li>`;
  });

  itemEl.innerHTML = /*HTML*/ `
    <div class="thumbnail">
      <img src="${ipad.thumbnail}" alt="${ipad.name}">
    </div>
    <ul class="colors">
      ${colorList}
    </ul>
    <h3>${ipad.name}</h3>
    <p class="tagline">${ipad.tagline}</p>
    <p class="price">From ₩${ipad.price.toLocaleString("en-US")}</p>
    <button class="btn">Buy</button>
    <a href="javascript:void(0)" class="link">Learn more</a>
  `;

  itemsEl.appendChild(itemEl);
});

// Navigation Rendering
const navigationsEl = document.querySelector("footer .navigations");
navigations.forEach((nav) => {
  const navigationEl = document.createElement("div");
  navigationEl.classList.add("nav");

  let navList = "";
  nav.maps.forEach((map) => {
    navList += `<li><a href="${map.url}">${map.name}</a></li>`;
  });

  navigationEl.innerHTML = /*HTML*/ `
    <h3>${nav.title}</h3>
    <ul>${navList}</ul>
  `;

  navigationsEl.appendChild(navigationEl);
});

// Get Current Year
const thisYearEl = document.querySelector(".this-year");
thisYearEl.textContent = new Date().getFullYear();
