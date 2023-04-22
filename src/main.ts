import './style.css'
// import './exemplos/vector2'
// import './exemplos/pessoa'
// import './exemplos/listas'
// import './exemplos/imc'
// import './exemplos/classes'
import './exemplos/tuplas'
import {Produto, Carrinho} from './exemplos/compras'

const form = document.querySelector('form')!

const carrinho = new Carrinho()

const table = document.querySelector('table')

form.onsubmit = (ev) => {
  ev.preventDefault()

  const data = new FormData(form)

  const produto = new Produto(
    carrinho.quantidade,
    data.get('nome').toString(),
    +data.get('preco'),
    +data.get('quantidade')
  )

  carrinho.adiciona(produto)

  table.innerHTML = carrinho.html
}

