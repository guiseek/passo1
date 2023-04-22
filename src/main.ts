import './style.css'
import './elements'
import { Produto } from './elements'
const form = document.querySelector('form')!

const carrinhoEl = document.querySelector('carrinho-el')

form.onsubmit = (ev) => {
  ev.preventDefault()

  const data = new FormData(form)

  const produto = new Produto(
    data.get('nome').toString(),
    +data.get('preco'),
    +data.get('quantidade')
  )

  carrinhoEl.adiciona(produto)

  form.reset()
}

