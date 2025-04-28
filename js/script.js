const btnLampadina = document.querySelector(".btn-lampadina");

const lampadina = document.getElementById("lampadina");


let accesa = false;

btnLampadina.addEventListener("click", function () {
    
    if (accesa) {

        lampadina.src = "./img/white_lamp 1.png";
        btnLampadina.innerText = "Accendi"
        accesa = false;

    } else {

        lampadina.src = "./img/yellow_lamp 1.png";
        btnLampadina.innerText = "Spegni"
        accesa = true;
    }
    
    
});