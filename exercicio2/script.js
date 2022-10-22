// Acessar o documento todo
console.log(document)
// Acessar o valor da tag "nome" acessando direto pelo DOM:
console.log(document.getElementById("nome").value)
// Acessar o valor da tag "nome" (criando uma variável):
let valorDoNome = document.getElementById("nome")
console.log(valorDoNome)
// Acessar o valor de um item.
console.log(valorDoNome.value)
// Como fazer para apagar/alterar esse valor do item acima:
valorDoNome.value = ""
// Por ser muito rápido, não dá para perceber no console da página.

// Fazendo nas outras Tags:
// Tag "endereco"
console.log(document.getElementById("endereco"))
// Acessando o valor:
console.log(document.getElementById("endereco").value)
// Alterando o elemento acima:
document.getElementById("endereco").value = ""
// Fazendo tudo isso por meio de variável
let valorDoEndereco = document.getElementById("endereco")
console.log(valorDoEndereco)
console.log(valorDoEndereco.value)
valorDoEndereco.value = ""

// Tag "email"
console.log(document.getElementById("email"))
// Acessando o valor:
console.log(document.getElementById("mail").value)
// Alterando o elemento acima:
document.getElementById("email").value = ""
// Fazendo tudo isso por meio de variável
let valorDoEmail = document.getElementById("email")
console.log(valorDoEmail)
console.log(valorDoEmail.value)
valorDoEmail.value = ""