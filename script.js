var input = document.querySelector("input");
input.focus();

var button = document.querySelector("button");
button.onclick;

var copiar = document.querySelector("copy");


function codificar() {

    var texto = document.querySelector("#input").value;
    var codifica = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúãõâêîôûÁÉÍÓÚÂÊÎÔÛÃÕ@#$%&*123456789]/g, "  Apenas letras minúsculas e sem acento ");
    document.querySelector("#out").value = codifica;
    document.querySelector("#input").value;
    var procuraErro = codifica.search(/[A-Z||áàâãä-úùũûü||Çç]/);
    if(procuraErro != -1){
    alert ('Apenas letras minúsculas e sem acento.');
    }
   else if (codifica) {
        document.querySelector("#out").style.backgroundImage = "none";
    }

};

function decodificar() {

    var texto = document.querySelector("#input").value;
    var descodifica = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#out").value = descodifica;
    document.querySelector("#input").value;

};

function copiar(){
    var copiaTexto = document.querySelector("#out").value;
    navigator.clipboard.writeText(copiaTexto);
    copiaTexto = '';
}

