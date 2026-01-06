function contador() {
    var ni = document.getElementById('inumi')
    var nf = document.getElementById('inumf')
    var np = document.getElementById('inump')
    var resp = document.getElementById('res')
    if (ni.value.length == 0 || nf.value.length == 0 || np.value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        resp.innerHTML = 'Contando... <br>'
        let i = Number(ni.value)
        let f = Number(nf.value)
        let p = Number(np.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                resp.innerHTML += ` ${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                    resp.innerHTML += ` ${c} \u{1F449} `
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }
}