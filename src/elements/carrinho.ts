import {Produto} from './produto'
import {currency, html} from '../utilities'

export class CarrinhoElement extends HTMLElement {
  #itens: Produto[] = []

  get total() {
    return this.#itens.reduce((prev, curr) => {
      return prev + curr.quantidade
    }, 0)
  }

  get valor() {
    return this.#itens.reduce((prev, curr) => {
      return prev + curr.preco * curr.quantidade
    }, 0)
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = this.render()
  }

  render() {
    return html`
      <h2>Produtos ${this.total}</h2>
      <h2>Total R$ ${currency(this.valor)}</h2>
      ${this.#itens
        .map((item, index) => {
          return html`<produto-el
            id="${index}"
            nome="${item.nome}"
            preco="${item.preco}"
            quantidade="${item.quantidade}"
          ></produto-el>`
        })
        .join('')}
    `
  }

  #atualiza() {
    this.shadowRoot.innerHTML = this.render()
    this.shadowRoot.querySelectorAll('produto-el').forEach((produto) => {
      produto.shadowRoot.querySelector('button').onclick = () => {
        this.deleta(+produto.id)
      }
    })
  }

  adiciona(...produtos: Produto[]) {
    this.#itens.push(...produtos)
    this.#atualiza()
  }

  deleta(index: number) {
    this.#itens.splice(index, 1)
    this.#atualiza()
  }
}
customElements.define('carrinho-el', CarrinhoElement)
declare global {
  interface HTMLElementTagNameMap {
    'carrinho-el': CarrinhoElement
  }
}
