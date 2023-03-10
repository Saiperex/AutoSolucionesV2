var boton1=document.querySelector(".izquierda")
var boton2=document.querySelector(".derecha")
var panel=document.querySelector(".opciones")
var panelDer=document.querySelector(".panelDer")
var panelIzq=document.querySelector(".panelIzq")
var mediaQuery = window.matchMedia('(max-width: 1000px)');
function mover() 
{
    if (mediaQuery.matches) 
    {
        boton1.addEventListener("click",function()
        {
            panel.style.left="0%"
            panel.style.top="50%"
            panelDer.style.display="flex"
            panelIzq.style.display="none"
        })
        boton2.addEventListener("click",function()
        {
            panel.style.left="0%"
            panel.style.top="0%"
            panelDer.style.display="none"
            panelIzq.style.display="flex"
        })
    } 
    else 
    {
        boton1.addEventListener("click",function()
        {
            panel.style.top="0%"
            panel.style.left="50%"
            panelDer.style.display="flex"
            panelIzq.style.display="none"
        })
        boton2.addEventListener("click",function()
        {
            panel.style.top="0%"
            panel.style.left="0%"
            panelDer.style.display="none"
            panelIzq.style.display="flex"
        })
    }
}
mover()
mediaQuery.addListener(mover);