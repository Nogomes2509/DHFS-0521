// Length - retorna o comprimento da string
let texto = '            oi eu sou a natália'
console.log(texto.length);

// IndexOf
console.log(texto.indexOf("nat"))

// Slice
console.log(texto.slice(0,7))
// outra forma
let palavra = texto.slice(0,7)
console.log(palavra)
console.log(texto)

// Split
console.log("Sou do planeta Terra".split(" "));

// .trim() -> não recebe nenhum parâmetro - remove espaços desnecessários no começo ou no fim de uma string.
//Não remove os espaços entre as palavras
console.log(texto.trim());



