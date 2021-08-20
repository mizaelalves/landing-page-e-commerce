function cadastraUsuario() {
  var usuarioNome = document.getElementById("fname");
  var usuarioSobrenome = document.getElementById("lname");
  var usuarioEmail = document.getElementById("email");

  var dados = JSON.parse(localStorage.getItem("dadosUsuario"));
  if (dados == null) {
    localStorage.setItem("dadosUsuario", "[]");
    dados = [];
  }

  if (
    usuarioNome.value == "" ||
    usuarioSobrenome.value == "" ||
    usuarioEmail.value == ""
  ) {
    alert("Preencha o campo");
    return false;
  } else {
    var auxRegistro = {
      nome: usuarioNome.value,
      sobrenome: usuarioSobrenome.value,
      email: usuarioEmail.value,
    };

    dados.push(auxRegistro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
    console.log("Usuario " + auxRegistro.nome + " cadastrado");

    alert("Usuario " + auxRegistro.nome + " cadastrado");

    usuarioNome.value = "";
    usuarioSobrenome.value = "";
    usuarioEmail.value = "";
  }
}


