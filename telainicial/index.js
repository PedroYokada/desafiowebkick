document.addEventListener("DOMContentLoaded", function () {
  const MenuPagina = document.getElementById("menu-pagina-inicial");
  const navInicial = document.querySelector(".nav-pagina-inicial");

  MenuPagina.addEventListener("click", function () {
    navInicial.classList.toggle("show");
  });
});

function acessorios() {
  window.location.href = "acessorios/index.html";
}

function jogar() {
  window.location.href = "tela-gamepass/index.html";
}

function cadastro() {
  window.location.href = "cadastro/index.html";
}

function logout() {
  window.location.href = "../index.html"; 
}


