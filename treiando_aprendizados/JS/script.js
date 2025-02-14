let tempCelcius = 0;
let tempFahrenheit = 0;
let tempKelvin = 0;

function converteTemperaturaKelvin(){
    let temperaturaUser = document.querySelector('.input-temperatura').value;
    
    tempKelvin = parseInt(temperaturaUser) + 273;

    let divresult = document.getElementById("resultado");
    divresult.innerHTML = '';
    let textoResposta = document.createElement("p");

    textoResposta.textContent = tempKelvin;

    divresult.appendChild(textoResposta);

}

function converteTemperaturaHehrenheit(){

    let temperaturaUser = document.querySelector('.input-temperatura').value;
    
    tempKelvin = (parseInt(temperaturaUser) * 1.8) + 32;

    let divresult = document.getElementById("resultado");
    divresult.innerHTML = '';
    let textoResposta = document.createElement("p");

    textoResposta.textContent = tempKelvin;

    divresult.appendChild(textoResposta);
    
}