import {Pessoa} from './pessoa'

const listaDePessoas: Pessoa[] = []

listaDePessoas.push({nome: 'Nome', idade: 10}, {nome: 'Nome 2', idade: 11})

// console.table(listaDePessoas)

function log<T>(value: T) {
  return {...value, nascimento: new Date()}
}

listaDePessoas.forEach((value: Pessoa) => {
  console.log(value)
})
listaDePessoas.forEach((value: Pessoa, index: number) => {
  console.log(value)
  console.log(index)
})
listaDePessoas.forEach((value: Pessoa, index: number, array: Pessoa[]) => {
  console.log(value)
  console.log(index)
  console.log(array)
})

listaDePessoas.map((value: Pessoa) => {
  console.log(value)
})
listaDePessoas.map((value: Pessoa, index: number) => {
  console.log(value)
  console.log(index)
})
listaDePessoas.map((value: Pessoa, index: number, array: Pessoa[]) => {
  console.log(value)
  console.log(index)
  console.log(array)
})

function pergunta() {
  document.body.append(JSON.stringify(listaDePessoas).trim())
  const nome = prompt('Qual seu nome?') || ''
  const idade = parseInt(prompt('Qual sua idade?') || '')

  // NaN: Not a Number
  if (nome.length > 0 && !isNaN(idade)) {
    listaDePessoas.push({nome, idade})

    document.body.append(JSON.stringify(listaDePessoas).trim())
  }
}

// pergunta()
