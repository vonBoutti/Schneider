const collapsibles = document.querySelectorAll(".collapsible");
const contents = document.querySelectorAll(".content");

collapsibles.forEach((collapsible, index) => {
  collapsible.addEventListener("click", function() {
    contents[index].classList.toggle("active");
    collapsible.classList.toggle("active");
  });
});

// IMAGENS que aparecem ao rolar a pagina



function showImagesOnScroll() {
  const imageContainers = document.querySelectorAll(".image-container");
  
  imageContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top <= windowHeight * 0.8) {
      container.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showImagesOnScroll);
showImagesOnScroll(); // Exibe as imagens visíveis ao carregar a página



