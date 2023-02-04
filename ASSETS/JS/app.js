hamburger=document.querySelector(".hamburger");
hamburger.onclick = function() {
    nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

window.onload = function () {
    let contenedor = document.getElementById('cargador');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
  }