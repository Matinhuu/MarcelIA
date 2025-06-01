import * as funcao from './funcoes.js'
let op;
await funcao.apresentacao()
await funcao.menu()
op =  funcao.escolhas()
await funcao.viagens(op)