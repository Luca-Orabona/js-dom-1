const btnLampadina = document.querySelector(".btn-lampadina");

const lampadina = document.getElementById("lampadina");

btnLampadina.addEventListener("click", function () {
    


    if (lampadina.src === "http://127.0.0.1:5500/img/white_lamp%201.png") {

        lampadina.src = "./img/yellow_lamp 1.png";

        btnLampadina.innerText = "Spegni";


    } else {

        lampadina.src = './img/white_lamp 1.png';

        btnLampadina.innerText = "Accendi";
    }
});