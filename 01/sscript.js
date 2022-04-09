(function readyJS (win,doc){
    'use strict'

let btn = doc.querySelector(".btn");

function calcular(){
    let nome = doc.querySelector("#nome");
    let altura = doc.querySelector("#altura");
    let peso = doc.querySelector("#peso");
    let result = doc.querySelector("#texto");

    let values = [nome.value, altura.value, peso.value];
    let IMC = values[2] / (values[1] * values[1]);
    let estatus;

    if (IMC <  18.5){
        estatus = "abaixo do peso"
    }else if (IMC >= 18.5 && IMC <= 25){
        estatus = "com o peso ideal"
    }
    else if (IMC > 25 && IMC <= 30){
        estatus = "acima do peso"
    }    
    else if (IMC > 30 ){
        estatus = "obeso"
    };

    if (nome !=  '' && altura != '' && peso != ''){
        result.textContent = `${values[0]} seu IMC é ${IMC.toFixed(2)} e você está ${estatus} `
    } 
    else {
        alert("Preencha todos os campos!");
    };
   console.log(`${values[0]} seu IMC é ${IMC.toFixed(2)} e você está ${estatus} `)

};



btn.addEventListener("click",calcular,false);



})(window,document);