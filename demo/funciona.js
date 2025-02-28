function Primero() {
    alert("click uno");
}
function Segundo() {
    alert("click dos");
}

function clickenbtn() {
    let btn = document.getElementById("elem");
    btn.setAttribute("data-click", true);

    btn.addEventListener("click", function () {

        if (eval(btn.getAttribute("data-click"))) {
            Primero();
            btn.setAttribute("data-click", false);
        }

        // else if (eval(btn.getAttribute("data-click", false))) {
        else {
            Segundo();
            btn.setAttribute("data-click", true);
        }

    });
}

    clickenbtn();
