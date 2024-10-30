const distancia = document.querySelector("#distancia")
const consumo = document.querySelector("#consumo")
const preco = document.querySelector("#preco")
const botao = document.querySelector("#botao_calcular")
const resultado = document.querySelector("#resultado")

botao.addEventListener('click', viagem)

function viagem(){
    d = Number(distancia.value)
    c = Number(consumo.value)
    p = Number(preco.value)

    calculo = (d/c)*p

    resultado.textContent = `Considerando os dados informados,\nA sua viagem vai custar R$${calculo.toFixed()}`
}