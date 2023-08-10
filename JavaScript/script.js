const collapsibles = document.querySelectorAll(".collapsible");
const contents = document.querySelectorAll(".content");

collapsibles.forEach((collapsible, index) => {
  collapsible.addEventListener("click", function() {
    contents[index].classList.toggle("active");
    collapsible.classList.toggle("active");
  });
});