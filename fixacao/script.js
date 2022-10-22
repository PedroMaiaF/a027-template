// Primeiro modo de fazer o exercício de fixação

// let lerValorElementoP = document.getElementById("paragrafo")
// lerValorElementoP.innerHTML
// console.log(lerValorElementoP)

// function printarInput(){
//     let printInput = document.getElementById("texto")
//     console.log(printInput.value)
// }

// function mostraInput() {
//     let inputTela = document.getElementById("texto")
//     let valorInner = document.getElementById("paragrafo")
//     valorInner.innerHTML += inputTela.value

// }

// Outro modo - feito pelo Prof.Murilo na Ammal B

let texto = document.getElementById("paragrafo")
// imprimir a teg do elemento inteiro:
console.log(texto.innerHTML)


function imprimirTextoDigitado(){
    let textoDoInput = document.getElementById("texto")
    // imprimir o valor específico que há dentro da Tag:
    console.log(textoDoInput.value)
}
// criei no arquivo index.html na linha 14, criei um evento(event) chamado "onkeydown"
// e chamei a função "imprimirTextoDigitado", esse evento é ativado ao ser apertado qualquer tecla
// ou seja, nessa função criada, após cada tecla apertada, ele imprimirá o que foi digitado.

function mudarElementoP(){
    // valor do elemento p que vai receber valor que está no input
    texto.innerHTML = document.getElementById("texto").value
}