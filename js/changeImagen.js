const imgURL=["imagenes/prisma1", "imagenes/prisma2", "imagenes/prisma3", "imagenes/prisma4"]
const lienzo=document.querySelector(".prisma");
var vuelta=1;
function cambioImagen ()
{
    lienzo.style.backgroundImage = `url('${imgURL[vuelta]}.png')`;
    vuelta = (vuelta + 1) % imgURL.length;
}
setInterval(cambioImagen, 5000);