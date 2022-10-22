// Para editar o arquivo HTML por meio DOM - através do "id":
let fraseDoSapo = document.getElementById("sapo")
// Para concatenar(adicionar ao que já existe):
// fraseDoSapo.innerHTML = fraseDoSapo.innerHTML + " pé, não lava porque não quer."
// Modo mais simples de se fazer isso:
fraseDoSapo.innerHTML += " pé, não lava porque não quer."
// Fazendo com as outras frases:
let fraseDoPoema = document.getElementById("poema")
fraseDoPoema.innerHTML += " evidências."
let fraseDeSabedoria = document.getElementById("sabedoria")
fraseDeSabedoria.innerHTML += " voando."
let fraseDaBorboleta = document.getElementById("borboleta")
fraseDaBorboleta.innerHTML += " pica-pau."
let fraseDoRoberto = document.getElementById("roberto")
fraseDoRoberto.innerHTML += " vivi."
// acessando o Dom pelo console:
// console.log(window)
console.log(window.document)
// Obs: o "window" vem antes do document, mas por padrão ele fica oculto.