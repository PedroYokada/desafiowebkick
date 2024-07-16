function voltar() {
  console.log("Redirecionando para a página de acessórios...");
  window.location.href = "../../telainicial/index.html";
}

var index_fotos = 1;
mostrar_fotos(index_fotos);

function plusSlides(n) {
  mostrar_fotos((index_fotos += n));
}

function currentSlide(n) {
  mostrar_fotos((index_fotos = n));
}

function mostrar_fotos(n) {
  let i;
  let fotos = document.getElementsByClassName("games");
  let pontos = document.getElementsByClassName("ponto");

  if (n > fotos.length) {
    index_fotos = 1;
  }
  if (n < 1) {
    index_fotos = fotos.length;
  }

  for (i = 0; i < fotos.length; i++) {
    fotos[i].style.display = "none";
    fotos[i].getElementsByTagName("img")[0].classList.remove("active");
  }

  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" active", "");
  }

  fotos[index_fotos - 1].style.display = "block";
  fotos[index_fotos - 1].getElementsByTagName("img")[0].classList.add("active");
  pontos[index_fotos - 1].className += " active";
}
