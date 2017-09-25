import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro("dodge journey", 4)
let carroB = new Carro("veloster", 3)
let carroC = new Carro("cerato", 4)

let listaDeCarros: Carro[] = [ carroA, carroB, carroC ]

let concessionaria = new Concessionaria("Av Paulista", listaDeCarros)

// console.log(concessionaria.mostrarListaDeCarros())

let cliente = new Pessoa("João", "veloster")

console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        
        // comprar carro
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())