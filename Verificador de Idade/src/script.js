function verificar() {
    
    var mas = document.getElementById('mas')
    var fem = document.getElementById('fem')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var rs = document.getElementById('rs')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    } else {
        var fsex = document.getElementsByName('rdsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-m.png');
                document.body.style.background = '#b8b247'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png');
                document.body.style.background = '#242728'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
                document.body.style.background = '#534232'
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png');
                document.body.style.background = '#929ba0'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-f.png');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png');
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'foto-adulto-f.png');
            } else {
                // Idosa
                img.setAttribute('src', 'foto-idosa-f.png');
            }
        }
        res.innerHTML = `Detectamos ${gênero} com a idade de ${idade} anos!`
        res.appendChild(img)
    }
}
    