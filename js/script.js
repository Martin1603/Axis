/* 
  script.js (básico y claro)
  - En móvil: abrir/cerrar navegación con ☰ (clase "abierto")
  - En todas las pantallas: mostrar/ocultar la barra de búsqueda con 🔍 (clase "abierto")
*/

/* Tomamos los elementos por su id */
var btnMenu   = document.getElementById('btnMenu');   // Botón ☰
var btnBuscar = document.getElementById('btnBuscar'); // Botón 🔍
var nav       = document.getElementById('navegacion');// <nav> centrado
var buscador  = document.getElementById('buscador');  // Sección del buscador

/* Al hacer clic en ☰: alternamos la clase "abierto" para mostrar/ocultar el nav */
if (btnMenu && nav){
  btnMenu.onclick = function(){
    if (nav.className.indexOf('abierto') === -1){
      nav.className = 'fila navegacion abierto';
    } else {
      nav.className = 'fila navegacion';
    }
  };
}

/* Al hacer clic en 🔍: alternamos la clase "abierto" para mostrar/ocultar el buscador */
if (btnBuscar && buscador){
  btnBuscar.onclick = function(){
    if (buscador.className.indexOf('abierto') === -1){
      buscador.className = 'fila buscador abierto';
    } else {
      buscador.className = 'fila buscador';
    }
  };
}

/* ====== SLIDER DE NOTICIAS ====== */
let indice = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function mostrarSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('activo', i === index);
  });
}

// Botones de navegación
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    indice = (indice - 1 + slides.length) % slides.length;
    mostrarSlide(indice);
  });
  nextBtn.addEventListener('click', () => {
    indice = (indice + 1) % slides.length;
    mostrarSlide(indice);
  });
}

// Avance automático cada 5 segundos
setInterval(() => {
  indice = (indice + 1) % slides.length;
  mostrarSlide(indice);
}, 5000);

// Mostrar primero
mostrarSlide(indice);


/* ====== MODALES ====== */
function abrirModal(num) {
  const modal = document.getElementById(`modal${num}`);
  if (modal) modal.style.display = "block";
}

function cerrarModal(num) {
  const modal = document.getElementById(`modal${num}`);
  if (modal) modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera
window.onclick = function(e) {
  const modales = document.querySelectorAll('.modal');
  modales.forEach(m => {
    if (e.target === m) {
      m.style.display = "none";
    }
  });
};