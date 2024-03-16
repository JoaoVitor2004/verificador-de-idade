function verificar() {
    var txtano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
    let sexo = document.getElementsByName('sexo')
    let data = new Date()
    let ano = data.getFullYear()
    if (txtano.value == 0 || txtano.value > ano) {
        alert('[ERRO] tente novamente')
    } else {
        let anos = ano - Number(txtano.value)
        let img = document.createElement('img')
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = '50%'
        img.style.objectFit = 'cover'
        img.style.marginTop = '18px'
        let genero = ''
        if (sexo[0].checked) {
            genero = 'homem'
            if (anos >= 0 && anos <= 10) {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/homem-bebe.jpg'
            } else if (anos > 10 && anos <= 21) {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/homem-jovem.jpg'
            } else if (anos > 21 && anos <= 59)  {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/homem-adulto.jpg'
            } else {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/homem-idoso.jpg'
            }
        }
        else if (sexo[1].checked) {
            genero = 'mulher'
            if (anos >= 0 && anos <= 10) {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/mulher-bebe.jpg'
            } else if (anos > 10 && anos <= 21) {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/mulher-jovem.jpg'
            } else if (anos > 21 && anos <= 59) {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/mulher-adulta.jpg'
            } else {
                res.innerHTML = `Detectamos ${genero} com ${anos} anos`
                img.src = 'imagens/mulher-idosa.jpg'
            }
        }
        res.appendChild(img)
    }
}
