/* uso java para detectar cuando el mouse entra y sale de un proyecto y asi me de el nombre y detalles */

var proyectos = document.getElementsByClassName("proyecto");

for (var i = 0; i < proyectos.length; i++) {
  proyectos[i].onmouseover = function () {
    this.classList.add("activo");
  };

  proyectos[i].onmouseout = function () {
    this.classList.remove("activo");
  };
}