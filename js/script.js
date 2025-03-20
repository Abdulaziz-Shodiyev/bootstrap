const loading = document.getElementById("loading");
const loadingDuration = 5100; 

setTimeout(() => {
  loading.classList.add("loading-none"); 
}, loadingDuration);




console.clear();
// var element = document.getElementById("slide-menu");
// element.addEventListener("animationstart", listener, false);
// element.addEventListener("animationend", listener, false);
// element.addEventListener("animationiteration", listener, false);

// function listener(event){
//   console.log(event.elapsedTime)
// }

var isAnimating = false;
var isOpen = false;
var button = document.querySelector(".sticky-menu-container .outer-button");
var menu = document.querySelector(".sticky-menu-container .inner-menu");
var closeIcon = document.querySelector(
  ".sticky-menu-container .outer-button .close-icon"
);
var arrowIcon = document.querySelector(
  ".sticky-menu-container .outer-button .arrow-icon"
);
var menuItems = document.querySelectorAll(
  ".sticky-menu-container .inner-menu > .menu-list > .menu-item"
);

var itemTexts = document.querySelectorAll(
  ".sticky-menu-container .inner-menu > .menu-list > .menu-item > .item-text"
);

button.addEventListener("click", function () {
  if (isAnimating) return;
  this.classList.add("clicked");
  menu.classList.toggle("closed");

  if (isOpen) {
    closeIcon.classList.remove("show");
    closeIcon.classList.add("hide");
    arrowIcon.classList.remove("hide");
    arrowIcon.classList.add("show");
    menuItems.forEach(function (item) {
      console.log(item);
      item.classList.add("text-hides");
    });
    itemTexts.forEach(function (text, index) {
      setTimeout(function () {
        text.classList.remove("text-in");
      });
    });
    isOpen = false;
  } else {
    closeIcon.classList.remove("hide");
    closeIcon.classList.add("show");
    arrowIcon.classList.remove("show");
    arrowIcon.classList.add("hide");
    menuItems.forEach(function (item) {
      console.log(item);
      item.classList.remove("text-hides");
    });
    itemTexts.forEach(function (text, index) {
      setTimeout(function () {
        text.classList.add("text-in");
      }, index * 150);
    });
    isOpen = true;
  }
});

button.addEventListener("animationstart", function (event) {
  isAnimating = true;
});

button.addEventListener("animationend", function (event) {
  isAnimating = false;
  this.classList.remove("clicked");
});




  // document.addEventListener("DOMContentLoaded", function () {
  //   const cards = document.querySelectorAll(".pricing-card");

  //   cards.forEach((card) => {
  //     card.addEventListener("mouseenter", function () {
  //       this.style.backgroundColor = "#1C1E53";
  //       this.style.color = "white";

   
  //       const button = this.querySelector(".btn");
  //       if (button) {
  //         if (button.classList.contains("btn-dark")) {
  //           button.classList.remove("btn-dark");
  //           button.classList.add("btn-warning");
  //         } else if (button.classList.contains("btn-outline-dark")) {
  //           button.classList.remove("btn-outline-dark");
  //           button.classList.add("btn-warning");
  //         }
  //       }

     
  //       const textElements = this.querySelectorAll(
  //         ".card-subtitle, .price-label"
  //       );
  //       textElements.forEach((el) => {
  //         el.style.color = "rgba(255, 255, 255, 0.7)";
  //       });

       
  //       const icons = this.querySelectorAll(".feature-icon");
  //       icons.forEach((icon) => {
  //         icon.style.color = "#a8b0d3";
  //       });

  //       const footer = this.querySelector(".card-footer");
  //       if (footer) {
  //         footer.style.backgroundColor = "#1C1E53";
  //       }
  //     });

  //     card.addEventListener("mouseleave", function () {
  //       this.style.backgroundColor = "#F4F6FC";
  //       this.style.color = "";

    
  //       const button = this.querySelector(".btn");
  //       if (button) {
  //         if (
  //           button.classList.contains("btn-warning") &&
  //           this.querySelector(".btn-action:not(.btn-outline-dark)") &&
  //           !button.classList.contains("btn-outline-dark")
  //         ) {
  //           button.classList.remove("btn-warning");
  //           button.classList.add("btn-dark");
  //         } else if (
  //           button.classList.contains("btn-warning") &&
  //           !button.classList.contains("btn-dark")
  //         ) {
  //           button.classList.remove("btn-warning");
  //           button.classList.add("btn-outline-dark");
  //         }
  //       }

     
  //       const textElements = this.querySelectorAll(
  //         ".card-subtitle, .price-label"
  //       );
  //       textElements.forEach((el) => {
  //         el.style.color = "";
  //       });

  //       const footer = this.querySelector(".card-footer");
  //       if (footer) {
  //         footer.style.backgroundColor = "#F4F6FC";
  //       }
  //     });
  //   });
  // });

