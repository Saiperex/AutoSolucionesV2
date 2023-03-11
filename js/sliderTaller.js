const botonOjo=document.querySelector(".eye")
const sliderBuscador=document.querySelector(".buscador")
botonOjo.addEventListener("click", function()
{
    botonOjo.classList.toggle("changeEye")
    validar2()
    
})
function validar2 ()
{
    if(botonOjo.classList.contains("changeEye"))
    {
        sliderBuscador.style="right: -50%" 
    }
    else
    {
        sliderBuscador.style="right: 0%"
    }
}
validar2()