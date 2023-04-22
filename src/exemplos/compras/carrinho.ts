import { Produto } from "./produto";

export class Carrinho {
	#itens: Produto[] = []

	get total() {
		return this.#itens.reduce((prev, curr) => {
			return prev + (curr.preco * curr.quantidade)
		}, 0)
	}

	adiciona(...produtos: Produto[]) {
		this.#itens.push(...produtos)
	}

	adicionaUm(produto: Produto) {
		this.#itens.push(produto)
	}

	adicionaMuitos(produtos: Produto[]) {
		produtos.forEach(produto => {
			this.#itens.push(produto)
		})
	}
}

// const batata = new Produto('Batata', 2, 10)
// const cocaCola = new Produto('Coca-cola', 6, 10)

// const carrinho = new Carrinho()

// carrinho.adicionaUm(batata)

// carrinho.adicionaMuitos([batata, cocaCola])

// carrinho.adiciona(batata, cocaCola)

// console.log(carrinho.total)