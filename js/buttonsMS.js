var botones = document.querySelectorAll(".menu_item");
var botones2 = document.querySelectorAll(".menu_item2")
var botonesSlider = document.querySelectorAll(".slider_item")
var botonesSlider2 = document.querySelectorAll(".slider_item2")
var secciones = document.querySelectorAll(".seccion")
var buttonT = document.querySelector(".btaller")
var buttonContact = document.querySelector(".con-button")

if (buttonContact != null) {
    buttonContact.addEventListener("click", function (event) {
        secciones[3].scrollIntoView({ behavior: 'smooth' });
    })
}
const sect = ["inicio", "nosotros", "talleres", "contacto"]
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function (event) {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
    botonesSlider[i].addEventListener("click", function (event) {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
}
for (let i = 0; i < botones2.length; i++) {

    botones2[i].addEventListener("click", function (event) {
        window.location.href = "index.html#" + sect[i];
    })
    botonesSlider2[i].addEventListener("click", function (event) {
        window.location.href = "index.html#" + sect[i];
    })
}
if (buttonT != null)
    (
        buttonT.addEventListener("click", function () {
            window.location.href = "talleres.html";
        })
    )