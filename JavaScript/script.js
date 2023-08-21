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
showImagesOnScroll(); 


// BOTÃO DE POSTAR COM FUNÇÃO ON CLICK
function postar() {
  var confirmacaoElement = document.getElementById("confirmacao");
  var inputElement = document.getElementById("post-input");
  

  confirmacaoElement.innerHTML = "Post enviado com sucesso!";
  confirmacaoElement.style.color = "green";

  setTimeout(function () {
      confirmacaoElement.innerHTML = ""; 
  }, 3000); 
}

function limparCampo() {
  var inputElement = document.getElementById("post-input");
  inputElement.value = ""; 
}

// comentarios


function enviarComentario(event, confirmacaoId, comentariosId) {
  if (event.key === "Enter") {
      var confirmacaoComentarioElement = document.getElementById(confirmacaoId);
      var comentarioInputElement = event.target;

      confirmacaoComentarioElement.innerHTML = "Comentário enviado com sucesso!";
      confirmacaoComentarioElement.style.color = "green";

      setTimeout(function () {
          confirmacaoComentarioElement.innerHTML = ""; 
      }, 3000); 

      comentarioInputElement.value = ""; 

    }
}

function toggleRecolhivel(elementId) {
  var recolhivelElement = document.getElementById(elementId);
  recolhivelElement.style.maxHeight = recolhivelElement.style.maxHeight ? null : recolhivelElement.scrollHeight + "px";
}

//APARECER OS ELEMENTOS NA PAGINA AO SCROLLAR
const elements = document.querySelectorAll('.hidden');

function checkVisibility() {
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 50) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

checkVisibility();

//esconder a senha 

function togglePasswordVisibility(inputId, buttonId) {
  const passwordInput = document.getElementById(inputId);
  const toggleButton = document.getElementById(buttonId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.textContent = "Esconder";
  } else {
    passwordInput.type = "password";
    toggleButton.textContent = "Mostrar";
  }
}


