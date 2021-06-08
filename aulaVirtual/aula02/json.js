// string em formato de json, que é muito parecido com o formato de um objeto literal.
//A diferença é que usa aspas dentro da propriedade e dois pontos para trabalhar com as informações.
let pessoa = {
    nome: 'Natália',
    idade: 31,
    altura: 1.67,
}

let json = JSON.stringify(pessoa);
console.log(json)

//JSON.parse converte o arquivo texto em objeto literal
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo)