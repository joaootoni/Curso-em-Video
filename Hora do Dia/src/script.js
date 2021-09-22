function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 21 //data.getHours()
        
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        msg.innerHTML = `Bom dia. Agora são ${hora} horas!`
        img.src = 'public/fotomanha.png'
        document.body.style.background = '#c7dbe4'
    } else if (hora >= 12 && hora <18){
        // BOA TARDE!
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas!`
        img.src = 'public/fototarde.png'
        document.body.style.background = '#fd5202'
    } else {
        // BOA NOITE!
        msg.innerHTML = `Boa noite! Agora são ${hora} horas!`
        img.src = 'public/fotonoite.png'
        document.body.style.background = '#33282d'
    }
        
}