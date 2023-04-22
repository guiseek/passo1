import { html, currency } from '../utilities'

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public quantidade: number
  ) {}
}

export class ProdutoElement extends HTMLElement {
  static get observedAttributes() {
    return ['id', 'nome', 'preco', 'quantidade']
  }

  id = ''
  nome = ''
  preco = 0
  quantidade = 0

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'})
    shadow.innerHTML = this.render()
  }

  render() {
    return html`
      <p>Nome: ${this.nome}</p>
      <p>Preço: ${currency(this.preco)}</p>
      <p>Qtde: ${this.quantidade}</p>
      <button>x</button>
    `
  }

  attributeChangedCallback(name: string, prev: string, next: string) {
    this[name] = next
  }
}
customElements.define('produto-el', ProdutoElement)
declare global {
  interface HTMLElementTagNameMap {
    'produto-el': ProdutoElement
  }
}
