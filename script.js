function contar() {

    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.querySelector('div#res')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        res.innerHTML = 'IMPOSSIVEL CONTAR!'
        //window.alert('[Erro] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if( p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            P = 1
        }

        if (i < f ) {
        //contagem Crescente
        for (let c = i ; c <= f ; c += p) {
            res.innerHTML += `${c}  \u{1F449}`    
        }
    }else{
        //contagem regressiva
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1f449}`
        }

     }
        res.innerHTML += `\u{1f3c1}`
   }
}