let lista = new Array()
let res = document.getElementById('resp')

function adicionar() {
    let num = document.getElementById('num')
    let numlist = document.getElementById('selecnum')
    if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100 || lista.indexOf(Number(num.value)) != -1) {
        alert(`O valor ${num.value} é inválido ou já foi adicionado a lista, tente outro.`)
    } else {
        res.innerHTML = ''
        lista.push(Number(num.value))
        numlist.appendChild(new Option(`Valor ${num.value} adicionado.`))
    }
    num.value = ''
    num.focus()
}

function verificar() {
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let maior = lista[0]
        let menor = lista[0]
        for (let pos in lista) {
            if (lista[pos] > maior) {
                maior = lista[pos]
            }
            if (lista[pos] < menor) {
                menor = lista[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma(lista)}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media(lista)}</p>`
    }
}

function soma(array) {
    let total = 0
    for (let c = 0; c < array.length; c++) {
        total += Number(array[c])
    }
    return total
}

function media(array) {
    let tot = soma(array)
    let med = tot / array.length
    return med
}