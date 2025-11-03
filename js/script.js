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
