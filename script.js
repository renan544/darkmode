var titulo = document.getElementById("titulo")
var btn = document.querySelector("#btn")
/*titulo.innerText = "Rafael"/* serve para alterar objeto ou tag*/

function disparaAlerta(){
var body = document.querySelector("body")
body.classList.toggle("dark-mode")

if ( btn.innerText =="ativar") {
    btn.innerText = ("Desativar")
    } else {
        btn.innerText  = "ativar"
    }

}

btn.addEventListener("click",disparaAlerta)



