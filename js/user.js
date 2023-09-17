let auth = JSON.parse(localStorage.getItem("auth")) || null;
let contenido = document.querySelector("#main");
let boton = document.querySelector("#logOut");


if (!auth) {
  boton.classList = "d-none";
  contenido.innerHTML = "";
  let mensaje = document.createElement("div");
  mensaje.classList = "alert alert-danger";
  mensaje.role = "alert";
  mensaje.innerText =
    "Lo siento, no tiene permisos para acceder a esta sección";
  contenido.append(mensaje);
}



