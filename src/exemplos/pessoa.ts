export interface Pessoa {
	nome: string
	idade: number
	nascimento?: Date
}

const p1: Pessoa = {
	nome: 'Gui',
	idade: 17
}

p1.nascimento = new Date('02/22/2022')

// console.log(p1)