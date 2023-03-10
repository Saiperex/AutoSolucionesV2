var boton1=document.querySelector(".izquierda")
var boton2=document.querySelector(".derecha")
var panel=document.querySelector(".opciones")
var panelDer=document.querySelector(".panelDer")
var panelIzq=document.querySelector(".panelIzq")
boton1.addEventListener("click",function()
{
    panel.style.left="50%"
    panelDer.style.display="flex"
    panelIzq.style.display="none"
})
boton2.addEventListener("click",function()
{
    panel.style.left="0%"
    panelDer.style.display="none"
    panelIzq.style.display="flex"
})