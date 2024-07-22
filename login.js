function logar() {
  const nomeInput = document.getElementById("nome");
  const senhaInput = document.getElementById("sobrenome");

  if (nomeInput.value.trim() !== "" && senhaInput.value.trim() !== "") {
    console.log("Login efetuado!");

    console.log("Botão clicado! Redirecionando...");
    window.location.href = "telainicial/index.html";
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}
