// Este script tiene la única funcionalidad de agregar cuadrados a la página de forma dinámica

const items = document.querySelector(".flex-container");

for (let i = 1; i <= 8; i++) {
  const square = document.createElement("div");
  square.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia amet ratione aspernatur necessitatibus , error eum aliquam ab spernatur necessitatibus possimus similique eligendi, erro?"
  square.classList.add("square");
  items.appendChild(square);
}

document.addEventListener("DOMContentLoaded", function() {
  var opcionesBtn = document.getElementById("opcionesBtn");
  var accordion = document.getElementById("accordionFlushExample");

  opcionesBtn.addEventListener("click", function(event) {
    event.preventDefault();

    // Cambiar la clase d-none para mostrar u ocultar el accordion
    if (window.getComputedStyle(accordion).display === "none") {
      accordion.classList.remove("d-none");
    } else {
      accordion.classList.add("d-none");
    }
  });
});
