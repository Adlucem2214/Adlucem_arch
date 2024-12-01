document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");
  
    gridItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        gridItems.forEach((el) => {
          if (el !== item) {
            el.style.opacity = "0.5";
          }
        });
      });
  
      item.addEventListener("mouseleave", () => {
        gridItems.forEach((el) => {
          el.style.opacity = "1";
        });
      });
    });
  });