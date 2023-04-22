import {Produto} from './produto'

export class Carrinho {

	get quantidade() {
		return this.#itens.length
	}

  #itens: Produto[] = []

  get total() {
    return this.#itens.reduce((prev, curr) => {
      return prev + curr.preco * curr.quantidade
    }, 0)
  }

  get html() {
    const thead = `<thead>
			<th>Nome</td>
			<th>Preço</td>
			<th>Quantidade</td>
			<th></th>
		</thead>`

		const tbody = document.createElement('tbody')
		this.#itens.forEach(produto => {
			tbody.innerHTML += produto.html(produto)
		})

    const tfoot = `<tfoot>
		<td></td>
		<td></td>
		<td>${this.total}</td>
		<td></td>
	</tfoot>`

    return thead + tbody.innerHTML + tfoot
  }

	remove(index: number) {
		this.#itens.splice(index, 1)
	}

  adiciona(...produtos: Produto[]) {
    this.#itens.push(...produtos)
  }

  adicionaUm(produto: Produto) {
    this.#itens.push(produto)
  }

  adicionaMuitos(produtos: Produto[]) {
    produtos.forEach((produto) => {
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
