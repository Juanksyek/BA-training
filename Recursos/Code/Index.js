(function () {
  "use strict";

  var app = (function () {
    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;

    var init = function init() {
      body = document.querySelector("body");
      menu = document.querySelector(".menu-icon");
      menuItems = document.querySelectorAll(".nav__list-item");
      applyListeners();
    };

    var applyListeners = function applyListeners() {
      menu.addEventListener("click", function () {
        return toggleClass(body, "nav-active");
      });
    };

    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass))
        element.classList.remove(stringClass);
      else element.classList.add(stringClass);
    };

    init();
  })();
})();

const container = document.querySelector("main");
const search = document.querySelector(".search label");
const expander = document.querySelector("main .menu .expander");
const current = document.querySelector(".current");
const menuItems = document.querySelectorAll("main .menu .primary .menu-item");
const mainCards = document.querySelectorAll("main .dashboard .card");
const weatherContent = document.querySelector(".side .weather .content");
const date = document.querySelector("main .side .date");
const time = document.querySelector("main .side .time");

document.addEventListener("touchstart", () => {}, true);

search.addEventListener("click", () => container.classList.toggle("search"));

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    current.innerText = item.querySelector(".desc").textContent;
    menuItems.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});