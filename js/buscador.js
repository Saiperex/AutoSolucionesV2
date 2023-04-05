var jsonTalleres=`[
    
    {
        "nombre":"AUTOSOLUCIONES",
        "dueño":"Marino y Agustin Picatto",
        "direccion":"Dr. Moyano 504 Olivia, Cordoba",
        "telefono":"+5493532418532",
        "wa":"https://wa.me/+5493532418532",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/s7pqiuTU8PFwYA8n9"
    },
    
    {
        "nombre":"D&M Cajas Automatizada",
        "dueño":"Privado",
        "direccion":"Alvear 2844, Lomas del mirador, B.S A.S",
        "telefono":"+5491130732002",
        "wa":"https://wa.me/+5491130732002",
        "mapa":"B.S.A.S",
        "ubicacion":"https://goo.gl/maps/1xKrqpLCgjm9Wjxy5"
    },

    {
        "nombre":"D&M Cajas Automatizada",
        "dueño":"Privado",
        "direccion":"Sadi Carnot 1972, Cordoba",
        "telefono":"+5493512077300",
        "wa":"https://wa.me/+5493512077300",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/duPYenAAshoiJutq9"
    },

    {
        "nombre":"Servicio Mecanico D.G",
        "dueño":"Diego Garabano",
        "direccion":"Liniers 121, Salto, B.S A.S",
        "telefono":"+549247443025",
        "wa":"https://wa.me/+549247443025",
        "mapa":"B.S.A.S",
        "ubicacion":"https://goo.gl/maps/3GSxpbb8Q9YzwAaq6"
    },

    {
        "nombre":"Yacare Garage",
        "dueño":"javier flores",
        "direccion":"Guarda nacional 455, Bº Las Palmas, Cordoba",
        "telefono":"+5493516208802",
        "wa":"https://wa.me/+5493516208802",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/YzC9ueTcQerParpS8"
    },

    {
        "nombre":"Inyeccion Electronica y Mecanica Poman",
        "dueño":"Nieva",
        "direccion":"Pte Castillo 407, Poman, Catamarca",
        "telefono":"+5493834904980",
        "wa":"https://wa.me/+5493834904980",
        "mapa":"Catamarca",
        "ubicacion":"https://goo.gl/maps/YFfCeVUfXMhdoJ8eA"
    },

    {
        "nombre":"Lian Servicio Mecanico",
        "dueño":"Lian",
        "direccion":"Intendente Pedro Paolini 15, Justiniano Pose, CBA",
        "telefono":"+5493537676089",
        "wa":"https://wa.me/+5493537676089",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/rcgvA2TPJUX4kuZY8"
    },

    {
        "nombre":"Electronica Service",
        "dueño":"Ale Sonnenfeld",
        "direccion":"Av. Recta Martinilli 8333, Cordoba",
        "telefono":"+5493516818254",
        "wa":"https://wa.me/+5493516818254",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/igQbqfXgPWJBHVeVA"
    },

    {
        "nombre":"Taller Ramiro",
        "dueño":"Ramiro",
        "direccion":"Ruta Nac. Nº 8 Km 410, Cordoba",
        "telefono":"+5493468643175",
        "wa":"https://wa.me/+5493468643175",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/A71rKGs14egcYb5h9"
    },

    {
        "nombre":"Taller Ruta 38",
        "dueño":"Privado",
        "direccion":"Belgrano 0, Bialet Masse, Cordoba",
        "telefono":"+5493541606226",
        "wa":"https://wa.me/+5493541606226",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/Vnizeu8EhuangZVH8"
    },

    {
        "nombre":"Servicios Fariceli",
        "dueño":"Privado",
        "direccion":"Libertad 435, Alcira Gigena, Cordoba",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/ARFuBCBW7w72GXpn8"
    },

    {
        "nombre":"Taller Virgen Del Lujan",
        "dueño":"Molina Jose Esteban",
        "direccion":"No proporcionada",
        "telefono":"+5493804236069",
        "wa":"https://wa.me/+5493804236069",
        "mapa":"La Rioja",
        "ubicacion":"https://goo.gl/maps/"
    },

    {
        "nombre":"A.V - Electricidad del Automotor",
        "dueño":"Alejandro Viñatti",
        "direccion":"Av. Los paraisos S/N, Calera, Cordoba",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/uyLx25FgqQRHqJZ17"
    },

    {
        "nombre":"Taller Integral de Electricidad-Mecanica-Inyeccion Electronica",
        "dueño":"Privado",
        "direccion":"Rivadavia 166, Saldan, Cordoba",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/eWak8SEBmaryVvcHA"
    },
    {
        "nombre":"TEC-CAT",
        "dueño":"Elias Cativa",
        "direccion":"No Proporcionado",
        "telefono":"+5493543584259",
        "wa":"https://wa.me/+5493543584259",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/"
    },
    {
        "nombre":"Mecanica Jose- Inyeccion Electronica",
        "dueño":"Jose",
        "direccion":"Rio Penitente 1934, B° residencial Sud",
        "telefono":"No proporcionado",
        "wa":"https://wa.me/",
        "mapa":"Cordoba",
        "ubicacion":"https://goo.gl/maps/7XPo8J38e8XmCENB7"
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
    var wa=document.createElement("a")
    wa.setAttribute("href",jsonTalleresData[index].wa)
    wa.textContent=+jsonTalleresData[index].telefono
    newh44.innerHTML="TELEFONO: +";
    newh44.appendChild(wa)
    obj.appendChild(newh41);
    obj.appendChild(newh42);
    obj.appendChild(newh43);
    obj.appendChild(newh44);
}
function createcontentDiv2(obj,index)
{
    var newImg=document.createElement("img")
    var newI=document.createElement("a")//cambio
    newI.className="fa-sharp fa-solid fa-location-dot"
    newI.setAttribute("href",jsonTalleresData[index].ubicacion)
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
        var wa=document.createElement("a")
        wa.setAttribute("href",newARR[i].wa)
        wa.textContent=newARR[i].telefono
        newh44.innerHTML="TELEFONO: ";
        newh44.appendChild(wa)
        newDiv2.appendChild(newh41);
        newDiv2.appendChild(newh42);
        newDiv2.appendChild(newh43);
        newDiv2.appendChild(newh44);

        var newImg=document.createElement("img")
        var newI=document.createElement("a")//cambio
        newI.className="fa-sharp fa-solid fa-location-dot"
        newI.setAttribute("href",newARR[i].ubicacion)
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
        newh44.innerHTML="TELEFONO: "+filter2[i].telefono;

        var wa=document.createElement("a")
        wa.setAttribute("href",filter2[i].wa)
        wa.textContent=filter2[i].telefono
        newh44.innerHTML="TELEFONO: ";
        newh44.appendChild(wa)

        newDiv2.appendChild(newh41);
        newDiv2.appendChild(newh42);
        newDiv2.appendChild(newh43);
        newDiv2.appendChild(newh44);

        var newImg=document.createElement("img")
        var newI=document.createElement("a")//cambio
        newI.className="fa-sharp fa-solid fa-location-dot"
        newI.setAttribute("href",filter2[i].ubicacion)
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