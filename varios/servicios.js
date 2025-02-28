// const servDesc = document.querySelector(".servi_titulo");
// const contenedorLeft = document.getElementById('conte_nedor').style.left;
// const contEnedor = document.querySelector(".contenedor");
// // let servicios = [
// //     {
// //         'nombre': 'Carlos',
// //         'apellido': 'Giba',
// //         'sergundo': 'sebastian'
// //     },
// //     {
// //         'nombre': 'petro',
// //         'apellido': 'solis',
// //         'sergundo': 'pereira'
// //     }
// // ];

// // let daTos = servicios.slice(1);

// console.log("dato",contenedorLeft);

// servDesc.addEventListener("click", () => {

//     // console.log("hola charles");
//     // contEnedor.classList.remove("contenedor");
//     contEnedor.setAttribute('style', 'top:50px');


// });
// var mostrar = true;

// function trespuntos(){
//     if(mostrar==true){
//         document.getElementById('conte_nedor').style.visibility="visible";
//         mostrar=false;
//     }
//     else
//    {
//         document.getElementById("conte_nedor").style.visibility="hidden";
//         mostrar=true;
//    }
// }

// window.addEventListener("click", function(event){
//    if(event.target !=true){
//       document.getElementById('conte_nedor').style.visibility="hidden"
//       mostrar = true;
//     }
// },true);

var conTenedor = document.getElementById("conte_nedor");
var leftStat = conTenedor.getAttribute("color");
alert(leftStat);
