export class Produto {
	constructor(
		public nome: string,
		public preco: number,
		public quantidade: number
	) {}

	calcula() {
		return this.preco * this.quantidade
	}

	toString() {
		return `O produto ${this.nome} com preço ${this.preco} e quantidade ${this.quantidade}`
	}
}

// const produtos: Produto[] = [
// 	new Produto('Batata', 5, 2),
// 	new Produto('Coca cola', 8, 12),
// ]

// produtos.forEach(produto => {
// 	console.log(produto.toString())
// })