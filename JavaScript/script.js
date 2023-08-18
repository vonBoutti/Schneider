const collapsibles = document.querySelectorAll(".collapsible, .collapsible2");
const contents = document.querySelectorAll(".content, .content2");

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


// BOTÃO DE POSTAR COM FUNÇÃO ON CLICK
function postar() {
  var confirmacaoElement = document.getElementById("confirmacao");
  var inputElement = document.getElementById("post-input");
  
  // Coloque aqui o código para enviar o post

  confirmacaoElement.innerHTML = "Post enviado com sucesso!";
  confirmacaoElement.style.color = "green";

  setTimeout(function () {
      confirmacaoElement.innerHTML = ""; // Limpar a mensagem após alguns segundos
  }, 3000); // Limpar após 3 segundos
}

function limparCampo() {
  var inputElement = document.getElementById("post-input");
  inputElement.value = ""; // Limpar o valor do campo
}

// comentarios


function enviarComentario(event, confirmacaoId, comentariosId) {
  if (event.key === "Enter") {
      var confirmacaoComentarioElement = document.getElementById(confirmacaoId);
      var comentarioInputElement = event.target;

      // Coloque aqui o código para enviar o comentário

      confirmacaoComentarioElement.innerHTML = "Comentário enviado com sucesso!";
      confirmacaoComentarioElement.style.color = "green";

      setTimeout(function () {
          confirmacaoComentarioElement.innerHTML = ""; // Limpar a mensagem após alguns segundos
      }, 3000); // Limpar após 3 segundos

      comentarioInputElement.value = ""; // Limpar o campo de comentário

    }
}

function toggleRecolhivel(elementId) {
  var recolhivelElement = document.getElementById(elementId);
  recolhivelElement.style.maxHeight = recolhivelElement.style.maxHeight ? null : recolhivelElement.scrollHeight + "px";
}