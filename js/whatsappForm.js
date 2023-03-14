const botonEnviar=document.querySelector(".enviar_formulario")
const botonEnviarTaller=document.querySelector(".enviar_taller")
var nombre,email,telefono,mensaje,tipoContacto
nombre=document.querySelector(".nombre_u")
email=document.querySelector(".email_u")
telefono=document.querySelector(".tel_u")
mensaje=document.querySelector(".mensaje_u")
const arreglo =document.getElementsByClassName("contactRadio");


botonEnviar.addEventListener("click",function()
{
    tc=espacios()
    n=document.querySelector(".nombre_u").value
    e=document.querySelector(".email_u").value
    t=document.querySelector(".tel_u").value
    m=document.querySelector(".mensaje_u").value
    h=radioSelected()
    if(n.trim().length>0 && e.trim().length>0 && t.trim().length>0 )
    {
        window.open("https://wa.me/5493541544495?text=Mensaje%20de:%20"+n+"%0AAsunto:%20"+tc+"%0AE-Mail:%20"+e+"%0ATelefono:%20"+t+"%0Amensaje:%20"+m+"%0AEn%20el%20transcurso%20de%20la%20"+h);
        borrar();
    }
    else
    {
        alert("Hay campos que no lleno. Llenelos para continuar");
    }
})

function espacios()
{
    var select=document.getElementById("changeForm")
    var texto=select.options[select.selectedIndex].text;
    if(texto.includes(" "))
    {
        texto = texto.replaceAll(" ","%20")
    }
    return texto;
}

function borrar()
{
    document.querySelector(".nombre_u").value=""
    document.querySelector(".email_u").value=""
    document.querySelector(".tel_u").value=""
    document.querySelector(".mensaje_u").value=""
}

function radioSelected()
{
    var resultado;
    for(var i=0;i<arreglo.length;i++)
    {
        if(arreglo[i].checked)
        {
            resultado=arreglo[i]
        }
    }
    return resultado.value
}

var nombreT,direccionT;
nombreT=document.querySelector(".nombre_taller")
direccionT=document.querySelector(".direccion_taller")
const buttonTaller=document.querySelector(".enviar_taller")
buttonTaller.addEventListener("click",function()
{
    nombre=nombreT.value
    direc=direccionT.value
    window.open("https://wa.me/5493541544495?text=Mensaje%20de:%20"+nombre+"%0AQuiere%20unirse%20a%20la%20RED%0ADireccion:%20"+direc);
})