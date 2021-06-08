// // estrutura básica
// function somar(a,b){
//     return a + b;
// }

// // funções declaradas -> carregadas antes que qualquer código seja executado
// function fazerSorvete(quantidade){
//     return 'sorvete' .repeat(quantidade);
// }
// console.log(fazerSorvete(4))

// // funções expressas -> atribuídas como um valor de uma variável. Neste caso, a função em si não tem nome, é uma função anonima.
// let fazerSushi = function (quantidade){
//     return 'sushi' .repeat(quantidade);
// }
// console.log(fazerSushi(2))

// // armazenando resultados -> para salvar o que uma função retorna, deve-se salvar em uma variável
// function fazerPipoca(quantidade){
//     return 'pipoca' .repeat(quantidade);
// }
// let minhaPipoca = fazerPipoca(5);
// console.log(minhaPipoca)

// function saudacao(nome, sobrenome){
//     return 'Olá,' + ' ' + nome + ' ' + sobrenome;    
// }
// console.log(saudacao('Natalia','Gomes'))

// Exercicio 1 Playground
// Declare uma variável com o nome DADO e atribua um valor booleano.
// Então você deve fazer um  if para avaliar essa variável: se for true imprimir "É verdadeiro!", caso contrário "É falso!".

var dado = true
if (dado == true){
    console.log('É verdadeiro!')
}else{
    console.log('É falso!')
}

// Exercicio 2 Playground
// Neste exercício te damos uma variável chamada linguagem, que tem uma String atribuída. 
// Seu trabalho agora é construir uma condicional if / else para que, se a variável contém "javascript",
// imprima no console o texto "Estou aprendendo", se não imprima"Vou aprender mais pra frente".

let linguagem = "javascript"
if(linguagem === 'javascript'){
    console.log('Estou aprendendo')
}else{
    console.log('Vou aprender mais pra frente')
}
