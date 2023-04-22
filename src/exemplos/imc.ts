
export const imc = {
	peso: prompt('Peso') ?? '0',
	altura: prompt('Altura') ?? '0'
}

console.log(+imc.peso, +imc.altura)

console.log(+imc.peso / (+imc.altura * +imc.altura))
