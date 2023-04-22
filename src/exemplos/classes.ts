class IMC {
  constructor(private peso: number, private altura: number) {}

  #formata(valor: number) {
    switch (true) {
      case valor < 18.5:
        return 'Abaixo do peso'
      case valor < 25:
        return 'Peso normal'
      case valor < 30:
        return 'Sobrepeso'
      default:
        return 'Obesidade'
    }
  }

  calcular() {
    const formatado = this.#formata(this.peso / (this.altura * this.altura))
    return formatado
  }
}

const imc = new IMC(72, 1.75)
console.log(imc.calcular())
