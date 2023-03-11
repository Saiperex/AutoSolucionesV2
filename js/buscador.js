var jsonTalleres=`[
    
    {
        "nombre":"AUTOSOLUCIONES",
        "dueño":"Marino y Agustin Picatto",
        "direccion":"Dr. Moyano 504 Olivia, Cordoba",
        "telefono":"+5493532418532",
        "wa":"https://wa.me/+5493532418532",
        "mapa":"Cordoba"
    },
    
    {
        "nombre":"Servicio Mecanico D.G",
        "dueño":"Diego Garabano",
        "direccion":"Liniers 121, Salto, B.S A.S",
        "telefono":"+549247443025",
        "wa":"https://wa.me/+549247443025",
        "mapa":"B.S.A.S"
    },

    {
        "nombre":"Yacare Garage",
        "dueño":"javier flores",
        "direccion":"Guarda nacional 455, Bº Las Palmas, Cordoba",
        "telefono":"+5493516208802",
        "wa":"https://wa.me/+5493516208802",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Inyeccion Electronica y Mecanica Poman",
        "dueño":"Nieva",
        "direccion":"Pte Castillo 407, Poman, Catamarca",
        "telefono":"+5493834904980",
        "wa":"https://wa.me/+5493834904980",
        "mapa":"Catamarca"
    },

    {
        "nombre":"Lian Servicio Mecanico",
        "dueño":"Lian",
        "direccion":"Intendente Pedro Paolini 15, Justiniano Pose, CBA",
        "telefono":"+5493537676089",
        "wa":"https://wa.me/+5493537676089",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Electronica Service",
        "dueño":"Ale Sonnenfeld",
        "direccion":"Av. Recta Martinilli 8333, Cordoba",
        "telefono":"+5493516818254",
        "wa":"https://wa.me/+5493516818254",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ramiro",
        "dueño":"Ramiro",
        "direccion":"Ruta Nac. Nº 8 Km 410, Cordoba",
        "telefono":"+5493468643175",
        "wa":"https://wa.me/+5493468643175",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Ruta 38",
        "dueño":"",
        "direccion":"Belgrano 0, Bialet Masse, Cordoba",
        "telefono":"+5493541606226",
        "wa":"https://wa.me/+5493541606226",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Servicios Fariceli",
        "dueño":"Privado",
        "direccion":"Libertad 435, Alcira Gigena, Cordoba",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Virgen Del Lujan",
        "dueño":"Molina Jose Esteban",
        "direccion":"No proporcionada",
        "telefono":"+5493804236069",
        "wa":"https://wa.me/+5493804236069",
        "mapa":"La Rioja"
    },

    {
        "nombre":"A.V - Electricidad del Automotor",
        "dueño":"Alejandro Viñatti",
        "direccion":"Av. Los paraisos S/N, Calera, Cordoba",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba"
    },

    {
        "nombre":"Taller Integral de Electricidad-Mecanica-Inyeccion Electronica",
        "dueño":"Privado",
        "direccion":"Rivadavia 166, Saldan",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba"
    },
    {
        "nombre":"TEC-CAT",
        "dueño":"Elias Cativa",
        "direccion":"No Proporcionado",
        "telefono":"+5493543584259",
        "wa":"https://wa.me/+5493543584259",
        "mapa":"Cordoba"
    },
    {
        "nombre":"Mecanica Jose- Inyeccion Electronica",
        "dueño":"Jose",
        "direccion":"Rio Penitente 1934, B° residencial Sud",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba"
    }
]
`
var encontrados
var jsonTalleresData= JSON.parse(jsonTalleres)
function cearTallerConteiner()
{
    encontrados=jsonTalleresData.length
    contador(encontrados)
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
    newh42.innerText="DUEÑO: "+jsonTalleresData[index].dueño;
    var newh43=document.createElement("h4")
    newh43.innerText="DIRECCION: "+jsonTalleresData[index].direccion;
    var newh44=document.createElement("h4")
    newh44.innerText="TELEFONO: "+jsonTalleresData[index].telefono;
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
let arrayProvincias = jsonTalleresData.filter((item, index, self) => {
    return index === self.findIndex((i) => i.mapa === item.mapa);
  });
  function crearItemsSelect()
  {
      var contenedor=document.getElementById("prov")
      for(let i=0;i<arrayProvincias.length;i++)
      {
          var item=document.createElement("option")
          var id="items"
          item.id=id;
          item.innerHTML=arrayProvincias[i].mapa;
          contenedor.appendChild(item)
      }
  }
  /*Buscar segun la provincia */
  var sel=document.getElementById("prov")
  sel.addEventListener("click", function()
  {
    var newARR;
    var cont=document.querySelector(".talleres_lista");
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
      }
    var texto=sel.options[sel.selectedIndex].text;
    if(texto=="Todos")
    {
        newARR=jsonTalleresData
    }
    else
    {
        newARR=jsonTalleresData.filter(objeto => objeto.mapa === texto);
    }
    for(let i=0;i<newARR.length;i++)
    {

        var newDiv=document.createElement("div")
        newDiv.className="taller"
        cont.appendChild(newDiv);

        var newDiv1=document.createElement("div")
        var newDiv2=document.createElement("div")
        newDiv1.className="ti img-ubi"
        newDiv2.className="ti datos-taller"
        newDiv.appendChild(newDiv1);
        newDiv.appendChild(newDiv2);

        var newh41=document.createElement("h4")
        newh41.innerText=newARR[i].nombre;
        var newh42=document.createElement("h4")
        newh42.innerText="DUEÑO: "+newARR[i].dueño;
        var newh43=document.createElement("h4")
        newh43.innerText="DIRECCION: "+newARR[i].direccion;
        var newh44=document.createElement("h4")
        newh44.innerText="TELEFONO: "+newARR[i].telefono;
        newDiv2.appendChild(newh41);
        newDiv2.appendChild(newh42);
        newDiv2.appendChild(newh43);
        newDiv2.appendChild(newh44);

        var newImg=document.createElement("img")
        var newI=document.createElement("i")
        newI.className="fa-sharp fa-solid fa-location-dot"
        newDiv1.appendChild(newImg);
        newDiv1.appendChild(newI);
    }
    contador(newARR.length)
  });

  var buscar=document.getElementById("quest")

  buscar.addEventListener("click",function()
  {
    var cont=document.querySelector(".talleres_lista");
    var texto=sel.options[sel.selectedIndex].text;
    var name=document.getElementById("nombre").value.toLowerCase()
    while (cont.firstChild) 
    {
        cont.removeChild(cont.firstChild);
    }

    var filter;
    if(texto=="Todos")
    {
        filter=jsonTalleresData
    }
    else
    {
        filter=jsonTalleresData.filter(objeto => objeto.mapa === texto);
    }
    var filter2=filter.filter(objeto=>objeto.nombre.toLowerCase().includes(name))
    contador(filter2.length)
    for(let i=0;i<filter2.length;i++)
    {
        var newDiv=document.createElement("div")
        newDiv.className="taller"
        cont.appendChild(newDiv)

        var newDiv1=document.createElement("div")
        var newDiv2=document.createElement("div")
        newDiv1.className="ti img-ubi"
        newDiv2.className="ti datos-taller"
        newDiv.appendChild(newDiv1);
        newDiv.appendChild(newDiv2);

        var newh41=document.createElement("h4")
        newh41.innerText=filter2[i].nombre;
        var newh42=document.createElement("h4")
        newh42.innerText="DUEÑO: "+filter2[i].dueño;
        var newh43=document.createElement("h4")
        newh43.innerText="DIRECCION: "+filter2[i].direccion;
        var newh44=document.createElement("h4")
        newh44.innerText="TELEFONO: "+filter2[i].telefono;
        newDiv2.appendChild(newh41);
        newDiv2.appendChild(newh42);
        newDiv2.appendChild(newh43);
        newDiv2.appendChild(newh44);

        var newImg=document.createElement("img")
        var newI=document.createElement("i")
        newI.className="fa-sharp fa-solid fa-location-dot"
        newDiv1.appendChild(newImg);
        newDiv1.appendChild(newI);
    }
  })
function contador(num)
{
    document.querySelector(".nim").innerText="TALLERES ENCONTRADOS: "+num
}
crearItemsSelect()
cearTallerConteiner()