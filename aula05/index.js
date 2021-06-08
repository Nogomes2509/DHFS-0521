// Criar um projeto simplificado de PetShop com algumas funções
//criar e cadastrar animais, validar dados antes de cadastrar, vacinar 
// animais, listar pets, comtar quantos pets estão vacinados,
// disparar e-mail de campanha, ...

// criar um array contendo objetos. A ideia é criar uma lista de pets
let pets = [
    {
        nome:'Canela',
        nomeDono: 'Natália',
        idade: 2,
        tipo: 'cachorro',
        raca: 'SRD',
        peso: 7,
        genero: 'femea',
        cor: 'marrom',
        vacinado: true,        
    },
    {
        nome:'Jade',
        nomeDono: 'Nancy',
        idade: 4,
        tipo: 'cachorro',
        raca: 'SRD',
        peso: 11,
        genero: 'femea',
        cor: 'branca',
        vacinado: true,        
    },
    {
        nome:'Flor',
        nomeDono: 'Milena',
        idade: 4,
        tipo: 'papagaio',
        raca: 'SRD',
        peso: 1,
        genero: 'femea',
        cor: 'amarelo',
        vacinado: false,        
    },
    {
        nome:'Marley',
        nomeDono: 'Francisco',
        idade: 5,
        tipo: 'bezerro',
        raca: 'SRD',
        peso: 15,
        genero: 'macho',
        cor: 'branco',
        vacinado: false,        
    }
]

// criar uma função para listar todos os objetos que temos dentro do array acima.
// Listar animais contidos na lista
// o nome da funcao deverá ser listarPets

// let listarPets = () => 
// {
//     for(let i=0; i < pets.length; i++){
//         console.log('Nome: '+ pets[i].nome)
//     } 
// }
// listarPets();

let listarPets= () =>{
    pets.forEach(element => {
        console.log(element.nome)
    });
}

//listarPets()

// criar uma função para cadastrar pets.
//Essa função deverá receber um parâmetro. Recomendável que 
// o parametro seja um objeto com as mesmas propriedades dos 
// outros objetos existentes

function cadastrarPet(arrayPets, objetoPet){
    return arrayPets.push(objetoPet)
}

let novoPet = {
    nome:'Chico',
    nomeDono: 'Matt',
    idade: 6,
    tipo: 'gato',
    raca: 'SRD',
    peso: 4,
    genero: 'macho',
    cor: 'cinza',
    vacinado: false,
}
cadastrarPet(pets, novoPet)
listarPets()

// criar função validarDados para validar se o objeto passado para
// a função cadastrarPet possui as propriedades necessárias. Caso não possua, 
// deverá retornar false. Caso esteja OK, retonar true.

function validaDados(objetoPet){
    return (objeto.nome && 
        objetoPet.nomeDono && 
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado
        )
}

function cadastrarPet(arrayPets, objetoPet){
    if (typeof objetoPet == "object"){
        if(validaDados(objetoPet) == true){
            arrayPets.push(objetoPet)
            console.log(pets)        
    }else{
        console.log('Insira um objeto válido')
    }    
}

cadastrarPet(pets, [])
