var btnCalcularImc = document.getElementById('btnCalcularImc')

btnCalcularImc.addEventListener('click', function (e) {
    e.preventDefault()

    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultado = document.getElementById('resultado')
    var resultadoImc = document.getElementById('resultadoImc')

    var res = peso / (altura * altura)

    if (res < 18.5) {
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce esta muito baixo de peso`
    } else if (res > 18.5 && res <= 24.99) {
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce tem peso normal`
    }else if(res > 24.99 && res <= 30){
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce esta acima do peso`
    }else if(res > 30 && res<= 34.99){
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce tem obesidade grau I`
    }else if(res > 35 && res <= 39.99){
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce tem obesidade grau II`
    }else{
        resultadoImc.innerHTML += `seu IMC é ${res.toFixed(2)}`
        resultado.innerHTML += `voce tem obesidade grau III`
    }

    resultadoImc.innerHTML = res.replace('.', ',')
    // console.log('seu imc é: ', res)
})



// var calcularImc = document.getElementById('btnCalcularImc')

// calcularImc.addEventListener('submit', function(event){
//     event.preventDefault()

//     var peso = document.getElementById('peso').value
//     var altura = document.getElementById('altura').value
//     var resultado = document.getElementById('resultado')

//     var res = peso / (altura * altura)

//     if (res < 18.5) {
//         console.log("voce esta muio baixo de peso")
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)} voce esta muio baixo de peso  `
//     } else if (res > 18.5 && res <= 24.99) {
//         console.log("voce tiene un peso normal")
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)} voce tiene un peso normal `
//     } else if (res > 24.99 && res <= 30) {
//         console.log("voce tiene sobre peso")
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)} <br> voce tiene sobre peso `
//     } else if (res > 30 && res <= 34.99) {
//         console.log("voce tiene obesidad")
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)} voce tiene obesidad `
//     } else if (res > 35 && res <= 39.99) {
//         console.log('voce tiene obesidad severa')
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)} voce tiene obesidad severa`
//     } else if (res >= 40) {
//         console.log('voce tiene obesidad mordida')
//         resultado.innerText += `seu IMC é: ${res.toFixed(2)}`
//         resultado.innerHTML += `voce tiene obesidad mordida`
//     }

//     // res.innerText += `seu IMC é: ${res}`

//     console.log('seu IMC é:', res.toFixed(2))
// })

