var selecione = document.querySelector(".select")
var selectchave = document.querySelector (".chave-container")


// fazendo com que quando selecionar opções seja clicada, que a função aconteça: se cifra de césar for selecionada, então apareça a opção de escolher a chave, se não, caso base64 seja selecionada, então suma a opção de escolher a chave!
selecione.addEventListener ("click", function () {
   if (selecione.value == "cifraDeCésar") {
    selectchave.style.display = "block";
   } else {
    selectchave.style.display = "none";
   }
});