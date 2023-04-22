export function currency(value: number) {
	const intl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
	return intl.format(value)
}