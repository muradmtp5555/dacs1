const active = document.querySelector("#active");
const menu = document.querySelector("nav");

menu.addEventListener("click", (e) => {
  if ((e.target.nodeName = "A")) {
    active.style.left = e.target.offsetLeft + "px";
    active.style.width = e.target.offsetWidth + "px";
    active.style.display = "block";
  }
});

const logoclick = document.querySelector(".logo-click");

logoclick.onclick = function () {
  active.style.display = "none";
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//----------------------------------------------------------------------------------------------
