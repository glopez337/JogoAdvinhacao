let btn = document.getElementById("botao")
let mensagem = document.getElementById("mensagem")

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click',function () {


    let input = document.getElementById("usuario").value;
    if(input == number) {
        mensagem.innerHTML = "parabéns você acertou"
    }else if (input < number) {
        mensagem.innerHTML = "seu numero é muito baixo"
    }else if (input > number)
        mensagem.innerHTML = "seu numero é muito alto"
})
