//Desafio: obter a quantidade de dias que temos de diferente entre as datas 15/05/2020 até 15/05/2021 utilizando moment e date-fns

const moment = require("moment")
const { differenceInDays, differenceInMonths } = require("date-fns")
//passo 1 -> criar uma variável para atribuie a dataInicial e colocar o ano formatado com moment;
let dataInicial = moment('2020-05-15')

//passo 2 -> criar uma variável para atribuie a dataFinal e colocar o ano.
let dataFinal = moment('2021-05-15')

//passo 3 -> criar uma variável que irá receber a quantidade de dias
// já retornarada da comparação entre duas datas, lembre-se de usar o métodod diif do moment
let resultado = dataFinal.diff(dataInicial, 'days')
let resultadoMeses = dataFinal.diff(dataInicial, 'months')


//passo 4 -> exibir mensagem com a diferença de dias
console.log('a diferença de dias entre 15/05/2020 e 15/05/2021 é ' + resultado)
console.log('a diferença de meses entre 15/05/2020 e 15/05/2021 é ' + resultadoMeses)

//Resolvendo o mesmo problema com o date-fns
let dataInicialFns = new Date(2020,05,15)
let dataFinalFns = new Date(2021,05,15)
let diasDeDiferencaFNS = differenceInDays(dataFinalFns,dataInicialFns)
let mesesDeDiferencaFNS = differenceInMonths(dataFinalFns,dataInicialFns)
console.log('a diferença de dias entre 15/05/2020 e 15/05/2021 em FNS é ' + diasDeDiferencaFNS)
console.log('a diferença de meses entre 15/05/2020 e 15/05/2021 em FNS é ' + mesesDeDiferencaFNS)
