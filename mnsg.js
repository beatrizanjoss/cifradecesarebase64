var selecione = document.querySelector(".select")
var selectchave = document.querySelector (".chave-container")
var btn = document.querySelector ("button")
var codificar = document.querySelector ("#codificar")
var decodificar = document.querySelector ("#decodificar")
var radiobtn = document.querySelector (".radio-button")

// fazendo com que quando selecionar opções seja clicada, que a função aconteça: se cifra de césar for selecionada, então apareça a opção de escolher a chave, se não, caso base64 seja selecionada, então suma a opção de escolher a chave!
selecione.addEventListener ("click", function () {
   if (selecione.value == "cifraDeCésar") {
    selectchave.style.display = "block";
   } else {
    selectchave.style.display = "none";
   }
});

// base64

function base64 () {
   var mensagem = document.querySelector ("#mensagem").value;
   if (codificar.checked) {
      var codificado = btoa(mensagem);
      return codificado;
   } else if (decodificar.checked) {
     var decodificado = atob(mensagem);
     return decodifcado;
   }
}

// mudando a descrição do botão conforme opções "codificar e decodificar" seja selecionada

radiobtn.addEventListener ("click", function (event) {
   if (codificar.checked) {
      btn.innerHTML = "Codificar mensagem!";
   } else if (decodificar.checked) {
      btn.innerHTML = "Decodificar mensagem!";
   }
})


btn.addEventListener ("click", function (event) {
   event.preventDefault();
   if (selecione.value === "base64") {
      resultado.innerText = base64();
   } else if (selecione.value === "cifraDeCésar") {
      resultado.innerText = cifraDeCésar();
   }
})
