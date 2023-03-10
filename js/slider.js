const botonMenu=document.querySelector(".button_slider")
const menu=document.querySelector(".menu_slider")
botonMenu.addEventListener("click", function()
{
    botonMenu.classList.toggle("change")
    validar()
    
})
function validar ()
{
    if(botonMenu.classList.contains("change"))
    {
        menu.style="left: 0px" 
    }
    else
    {
        menu.style="left: -250px"
    }
}
validar ()