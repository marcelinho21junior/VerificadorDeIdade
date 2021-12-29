function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var nasc = document.getElementById("nascText")

    if(nasc.value ==0 || Number(nasc.value) > ano){
        window.alert('ERRO, verifique os dados e tente novamente!')
        res.innerHTML = `UNDEFINED`
    }else{
        var img = document.getElementById("img")
        var idade = ano - (nasc.value)
        var fsex = document.getElementsByName("radsex")
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','')
            }else if(idade >= 21){
                //jovem
                img.setAttribute('src','')
            }else if(idade >= 49){
                //adulto
                img.setAttribute('src','')
            }else{
                //idoso
                img.setAttribute('src','')
            }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','')
            }else if(idade >= 21){
                //jovem
                img.setAttribute('src','')
            }else if(idade >= 49){
                //adulto
                img.setAttribute('src','')
            }else{
                //idoso
                img.setAttribute('src','')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com Idade: ${idade} anos`
    }
}