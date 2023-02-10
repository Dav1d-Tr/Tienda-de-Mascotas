hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}

window.onload = function () {
    let contenedor = document.getElementById('cargador');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}

submit = document.querySelector(".button-submit");
submit.onclick = function () {
    document.getElementById('windows').style.display = "grid";
}

close = document.querySelector(".close");
close.onclick = function () {
    document.getElementById('windows').style.display = "none";
}