const imagenes = ["imagenes/consulta1.jpg", "imagenes/consulta2.jpg", "imagenes/consulta3.jpg", "imagenes/consulta4.jpg"];
let index = 0;

function cambiarImagen() {
  const imagen = document.querySelector(".imagen");
  imagen.style.opacity = 0;
  setTimeout(() => {
    imagen.style.backgroundImage = `url(${imagenes[index]})`;
    imagen.style.opacity = 1;
  }, 300);
  setTimeout(() => {
    imagen.style.opacity = 0;
  }, 2300);
  index = (index + 1) % imagenes.length;
}

cambiarImagen();
setInterval(cambiarImagen, 2600);
