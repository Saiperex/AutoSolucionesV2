const servicios=document.querySelectorAll(".serv_card")
const paginas=["consulta.html","esquematica.html","reporte.html","diagnostico.html"]
for(let i=0;i<servicios.length;i++)
{
    servicios[i].addEventListener("click", function()
    {
        console.log(servicios[i])
        console.log(paginas[i])
        window.location.href=paginas[i]
    })
}