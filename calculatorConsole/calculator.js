let acumulador = [];

function acumular() {

    //caso haja erro na conversão o valor será um NaN
    const numero = parseFloat(document.getElementById("valorDigitado").value)
    
    //é um numero? 
    if (!isNaN(numero)) {
        //Acumulador recebe o número digitado
        acumulador.push(numero);  
        console.log(acumulador) 
        document.getElementById("valorDigitado").value = "";
    } else {
        alert("digite um número")
    }

}

function soma() {
    const resultado = acumulador.reduce(executarSoma)
    console.log(resultado)
    acumulador = [];
    const mostraResult = document.getElementById("result") 
    mostraResult.innerHTML = resultado;
}

function subt() {
    const resultado = acumulador.reduce(executarSubt)
    console.log(resultado)
    acumulador = [];
    const mostraResult = document.getElementById("result") 
    mostraResult.innerHTML = resultado;
}

function mult() {
    const resultado = acumulador.reduce(executarMult)
    console.log(resultado)
    acumulador = [];
    const mostraResult = document.getElementById("result") 
    mostraResult.innerHTML = resultado;
}

function divi() {
    const resultado = acumulador.reduce(executarDivi)
    console.log(resultado)
    acumulador = [];
    const mostraResult = document.getElementById("result") 
    mostraResult.innerHTML = resultado;
}

function executarSoma(total, numero) {
    return total + numero;
}

function executarSubt(total, numero) {
    return total - numero;
}

function executarMult(total, numero) {
    return total * numero;
}

function executarDivi(total, numero) {
    return total / numero;
}
