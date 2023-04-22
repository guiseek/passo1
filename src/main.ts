import './style.css'
// import './exemplos/vector2'
// import './exemplos/pessoa'
// import './exemplos/listas'
// import './exemplos/imc'
// import './exemplos/classes'
import {Produto, Carrinho} from './exemplos/compras'

const form = document.querySelector('form')!

const carrinho = new Carrinho()

form.onsubmit = (ev) => {
  ev.preventDefault()

  const data = new FormData(form)

  const produto = new Produto(
    data.get('nome').toString(),
    parseFloat(data.get('preco').toString()),
    parseFloat(data.get('quantidade').toString())
  )

	carrinho.adiciona(produto)
	console.log(carrinho.total);
	
}
