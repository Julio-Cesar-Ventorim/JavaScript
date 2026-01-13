var lista = new Array()

function adicionar() {
    let num = document.getElementById('num')
    let numlist = document.getElementById('selecnum')
    if (num.value.lenght == 0 || Number(num.value) < 1 || Number(num.value) > 100 || lista.indexOf(Number(num.value)) != -1) {
        alert(`O valor ${num.value} é inválido ou já foi adicionado a lista, tente outro.`)
    } else {
        lista.push(num.value)
        numlist.appendChild(new Option(`Valor ${num.value} adicionado.`))
    }
}

function verificar() {
    let res = document.getElementById('resp')
    res.appendChild(document.createTextNode(`Ao todo, temos ${lista.length} números cadastrados.`))
    res.appendChild(document.createTextNode(`O maior valor informado foi ${Math.max.apply(null, lista)}.`))
    res.appendChild(document.createTextNode(`O menor valor informado foi ${Math.min.apply(null, lista)}.`))
    res.appendChild(document.createTextNode(`A soma dos valores é ${soma(lista)}.`))
}

function soma(array) {
    let total = 0
    for (let c = 0; c < array.length; c++) {
        total += Number(array[c])
    }
    return total
}