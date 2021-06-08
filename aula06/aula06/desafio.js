//-------------Desafio

//Instruções: Baixe o arquivo da que o professor irá te passar. 

/*
Desafio1 : Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomePets" que exiba no terminal o NOME de todos os pets. 
(utilizar o foreach)

Desafio2: Utilizando o Array de Pets disponibilizado, criar uma função "ListarNomeDonoPets" que exiba no terminal o NOMEDONO de todos os pets.  (Usar for of)

Desafio3: Utilizando o Array de Pets disponibilizado, criar uma função "ListarTipo" que irá receber um parâmetro com o tipo e retornar todos os pets desse tipo. (Usar o Filter)

Desafio4: Utilizando o Array de Pets disponibilizado, criar uma função "DataDeCadastro". Essa função deve retornar um array onde será adicionado a data de hoje em todos os objetos. O nome da nova propreie e dade deve ser "DataCadastro". (Usar Object Date e MAP)

Desafio5: Utilizando o Array de Pets disponibilizado, criar uma função "ListaDadosPet" que irá receber como parâmetro um objeto. Essa função deve exibir os dados de um pet. (usar Desestruturação de objetos)

Desafio6: Utilizando o Array e a função do desafio 5 , criar uma função "LitarPets" que irá receber como parâmetro o array de pets e um callback. Essa função deve exibir os dados de todos os pets cadastrados.  (aplicar a função ListaDadosPet utilizada como callback)


*/
let pets = [
    {
      nome: 'Yoshi',
      nomeDono: 'Victor',
      idade: 7,
      tipo: 'Cachorro',
      raca: 'Akita Inu',
      peso: 40,
      genero: 'Macho',
      cor: 'ruivo',
      vacinado: true
    },
    {
      nome: 'Pituco',
      nomeDono: 'Victor',
      idade: 2,
      tipo: 'ave',
      raca: 'Calopsita',
      peso: 0.5,
      genero: 'Macho',
      cor: 'cinza',
      vacinado: true
    },
    {
      nome: 'Pitty',
      nomeDono: 'Rose',
      idade: 2,
      tipo: 'ave',
      raca: 'Agapornis',
      peso: 0.5,
      genero: 'Fêmea',
      cor: 'verde',
      vacinado: true
    },
    {
        nome: 'Bixano',
        nomeDono: 'Rose',
        idade: 10,
        tipo: 'Cachorro',
        raca: 'PastorAlemão',
        peso: 0.5,
        genero: 'Fêmea',
        cor: 'Amarelo',
        vacinado: true
      },
  ]

// Desafio 1 - Resolução

// const listarNomePets = () => {
// pets.forEach(function(pet){
//   console.log(pet.nome)
// });
// }
// listarNomePets()

// Desafio 2 - Resolução

// const ListarNomeDonoPets = () => {
// for (var listar of pets){
//   console.log(listar.nomeDono)
// }
// }
// ListarNomeDonoPets()

// Desafio 3 - Resolução
// const ListarTipo = () => {
//   var listar = pets.filter(function(elemento){
//     return elemento.tipo == 'ave';    
//   });
//   console.log(listar)
// }

// ListarTipo()

// Desafio 4 - Resolução
function DataDeCadastro(){
  var guardar = pets.map(function(elemento){
    var DataCadastro = new Date()
    elemento["DataCadastro"] = DataCadastro
    return elemento
  })
  console.log(guardar)
}
DataDeCadastro()

// Desafio 5 - Resolução
function ListaDadosPet(pet){
  let {nome,nomeDono,idade} = pet
  return
}
ListaDadosPet()