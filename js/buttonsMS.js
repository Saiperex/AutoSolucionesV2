var botones=document.querySelectorAll(".menu_item");
var botonesSlider=document.querySelectorAll(".slider_item")
var secciones=document.querySelectorAll(".seccion")
for(let i=0;i<botones.length;i++)
{
    botones[i].addEventListener("click",function(event)
    {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
    botonesSlider[i].addEventListener("click",function(event)
    {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
}