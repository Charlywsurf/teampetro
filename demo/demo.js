const tiTulo = document.querySelector(".titulo");
const conTenedor = document.querySelector(".contenedor");

let boton = ["carlos", "sebastian", "petro", "naty", "aixa"];

console.log(boton.length);

for (let i = 0; i < boton.length; i++) {
  // btn.setAttribute("data-click", true);
  console.log(boton[i]);
}

// tiTulo.addEventListener("click", () => {
//     conTenedor.classList.add('mostrar');
// });

//let btn = document.getElementById("titulo");
//let btn = document.getElementById("titulo2")
//for (let i = 0; i < btn.length; i++) {
//    btn[i].setAttribute("carlos", true);
//    console.log(btn[i]);
//}

//for (let i = 0; i < btn.length; i++) {

function Primero() {
  conTenedor.classList.add("mostrar");
}
function Segundo() {
  conTenedor.classList.remove("mostrar");
}

function clickenbtn() {
  let btn = document.getElementById("titulo");
  // let titulo2 = document.getElementById("titulo2");

  // if (titulo1 != 'undefined') {
  //     let btn = titulo1;
  //     console.log(btn);

  btn.setAttribute("data-click", true);
  btn.addEventListener("click", function () {
    if (eval(btn.getAttribute("data-click"))) {
      Primero();
      btn.setAttribute("data-click", false);
    } else {
      Segundo();
      btn.setAttribute("data-click", true);
    }
  });
}
clickenbtn();

function clickenbtn1() {
  let btn = document.getElementById("titulo2");
  // let titulo2 = document.getElementById("titulo2");

  // if (titulo1 != 'undefined') {
  //     let btn = titulo1;
  //     console.log(btn);

  btn.setAttribute("data-click", true);
  btn.addEventListener("click", function () {
    if (eval(btn.getAttribute("data-click"))) {
      Primero();
      btn.setAttribute("data-click", false);
    } else {
      Segundo();
      btn.setAttribute("data-click", true);
    }
  });
}

clickenbtn1();
