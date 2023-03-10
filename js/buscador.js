var jsonTalleres=`[
    
    {
        "nombre":"AUTOSOLUCIONES",
        "dueño":"Marino y Agustin Picatto",
        "direccion":"Dr. Moyano 504 Olivia, Cordoba",
        "telefono":"+5493532418532",
        "mapa":"Cordoba"
    },
    
    {
        "nombre":"Servicio Mecanico D.G",
        "dueño":"Diego Garabano",
        "direccion":"Liniers 121, Salto, B.S A.S",
        "telefono":"+549247443025",
        "mapa":"B.S.A.S"
    },

    {
        "nombre":"Yacare Garage",
        "dueño":"javier flores",
        "direccion":"Guarda nacional 455, Bº Las Palmas, Cordoba",
        "telefono":"+5493516208802",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Inyeccion Electronica y Mecanica Poman",
        "dueño":"Nieva",
        "direccion":"Pte Castillo 407, Poman, Catamarca",
        "telefono":"+5493834904980",
        "mapa":"Catamarca"
    },

    {
        "nombre":"Lian Servicio Mecanico",
        "dueño":"Lian",
        "direccion":"Intendente Pedro Paolini 15, Justiniano Pose, CBA",
        "telefono":"+5493537676089",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Electronica Service",
        "dueño":"Ale Sonnenfeld",
        "direccion":"Av. Recta Martinilli 8333, Cordoba",
        "telefono":"+5493516818254",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ramiro",
        "dueño":"Ramiro",
        "direccion":"Ruta Nac. Nº 8 Km 410, Cordoba",
        "telefono":"+5493468643175",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ruta 38",
        "dueño":"",
        "direccion":"Belgrano 0, Bialet Masse, Cordoba",
        "telefono":"+5493541606226",
        "mapa":"Cordoba"
    }
]
`
var jsonTalleresData= JSON.parse(jsonTalleres)
function cearTallerConteiner()
{
    var contenedor=document.querySelector(".talleres_lista");
    for(let i=0;i<jsonTalleresData.length;i++)
    {
        var newDiv=document.createElement("div")
        newDiv.className="taller"
        contenedor.appendChild(newDiv);
        createDIvsTaller(newDiv,i)
    }
}
function createDIvsTaller(obj,index)
{
    var newDiv1=document.createElement("div")
    var newDiv2=document.createElement("div")
    newDiv1.className="ti img-ubi"
    newDiv2.className="ti datos-taller"
    obj.appendChild(newDiv1);
    obj.appendChild(newDiv2);
    createTextDiv2(newDiv2,index)
    createcontentDiv2(newDiv1,index)

}
function createTextDiv2(obj,index)
{
    var newh41=document.createElement("h4")
    newh41.innerText=jsonTalleresData[index].nombre;
    var newh42=document.createElement("h4")
    newh42.innerText="DUEÑO"+jsonTalleresData[index].dueño;
    var newh43=document.createElement("h4")
    newh43.innerText="DIRECCION"+jsonTalleresData[index].direccion;
    var newh44=document.createElement("h4")
    newh44.innerText="TELEFONO"+jsonTalleresData[index].telefono;
    obj.appendChild(newh41);
    obj.appendChild(newh42);
    obj.appendChild(newh43);
    obj.appendChild(newh44);
}
function createcontentDiv2(obj,index)
{
    var newImg=document.createElement("img")
    var newI=document.createElement("i")
    newI.className="fa-sharp fa-solid fa-location-dot"
    obj.appendChild(newImg);
    obj.appendChild(newI);
}
/* creando objetos del select*/

cearTallerConteiner()