function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var nasc = document.getElementById("nascText")

    if(nasc.value ==0 || Number(nasc.value) > ano){
        window.alert('ERRO, verifique os dados e tente novamente!')
        res.innerHTML = `UNDEFINED`
    }else{
        var idade = ano - (nasc.value)
        res.innerHTML = `Idade ${idade} anos`
    }
}