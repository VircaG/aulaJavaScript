function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
   // window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemover").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemover").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("pagina carregada");
}
 function funcaoChange(elemento){
     console.log(elemento.value);
 }
/*
function soma(n1 , n2){
    return n1 + n2;
}


var validar = 0;
function validaIdade(idade){
  
    if(idade >=18){
        validar = true;
       
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade");
validaIdade(idade)
cosole.log(validar);
console.log(validaIdade(idade))
*/

/*
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*

var d = new Date()
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());

*/

/*
var d = new Date()
alert(d.getMonth()+1);
*/


/*var count;
for( count = 0; count <=5; count ++){
    alert(count);
};
*/



/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count += 1;
};
*/

/* var idade = prompt("Qual a sua idade"); //brower pergunta a idade para utilizador
 var idade = 18;
 if(idade >=18){
     alert("maior de idade");
 }else{
     alert("menor de idade");
 };
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"} , {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var nome ="Virca Gonçalves";
//var n1 = 12;
//var n2 = 1;
//var idade = 29;
//var idade2 = 10;
//var frase =" Eu sou maravilhosa e uma ótima programadora"
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
//console.log( n1 + n2);
//console.log(nome);
//console.log(idade +idade2);
//console.log(frase.toLowerCase())

//Arrays

//var lista = ["maca", "pera","morango"];
//lista.push("banana");
//lista.pop("morango");
//console.log(lista);
//console.log(lista[0]);
//console.log(lista.join("*"));
//console.log(lista.toString());
//console.log(lista.reverse());