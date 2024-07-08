document.addEventListener("DOMContentLoaded", function () {
  const MenuPagina = document.getElementById("menu-pagina-inicial");
  const navInicial = document.querySelector(".nav-pagina-inicial");

  MenuPagina.addEventListener("click", function () {
    navInicial.classList.toggle("show");
  });
});
