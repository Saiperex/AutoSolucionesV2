const menuBoton=document.querySelector(".menu_button")
const MenuSlider2=document.querySelector(".menu_slider")
menuBoton.addEventListener("click", function()
{
    menuBoton.classList.toggle("change")
    validar()
})
function validar()
{
    if(menuBoton.classList.contains("change"))
    {
        MenuSlider2.style ="left:0px"
    }
    else
    {
        MenuSlider2.style ="left: -250px"
    }
}
const secciones=["inicio","nosotros","talleres","contacto"]
const listaOpciones=document.querySelectorAll(".slider_item")
for (let i = 0; i < listaOpciones.length; i++) {

    listaOpciones[i].addEventListener("click", function (event)
    {
        window.location.href ="../index.html#"+secciones[i];
    })
}