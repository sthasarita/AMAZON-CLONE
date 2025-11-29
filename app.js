let scrollup = document.querySelector(".scrollup");

scrollup.addEventListener("click", () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const imgs = document.querySelectorAll(".header-slider ul .header-img");
const prev_btn = document.querySelector(".control_back");
const next_btn = document.querySelector(".control_next");

let n = 0;
function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(
  ".products-slider .products "
);
scrollContainer.forEach((containers) => {
  containers.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    containers.scrollLeft += evt.deltaY;
  });
});

const scrollContainerWithPrice = document.querySelector(
  ".products-with-price "
);

scrollContainerWithPrice.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainerWithPrice.scrollLeft += evt.deltaY;
});

// const sliders = document.querySelectorAll(".hover-slider");

// sliders.forEach((slider) => {
//   const container = slider.querySelector(".products");
//   const leftBtn = slider.querySelector(".arrow.left");
//   const rightBtn = slider.querySelector(".arrow.right");

//   leftBtn.addEventListener("click", () => {
//     container.scrollLeft -= 300; // scroll left
//   });

//   rightBtn.addEventListener("click", () => {
//     container.scrollLeft += 300; // scroll right
//   });
// });
