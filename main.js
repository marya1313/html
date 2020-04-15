
 const elemento =document.getElementById('nombre');
 console.log(elemento);
 const palabras =[];
console.log(document.querySelector('#guarda'));
let codeHTML="";

function imprimetxt(){
    
    alert(elemento.value);
    valor = elemento.value;
    palabras.push(elemento.value);
    elemento.value="";

    codeHTML+= "<div>"+valor+"</div>";
    document.getElementById('palabras').innerHTML=codeHTML;
    

}

function imprimepalabras(){
    let codeHTML="";
 palabras.forEach((valor, posicion) => {
     //codeHTML+= ´<div>${posicion} = ${valor}</div>´; 
    codeHTML+= "<div>"+valor+"</div>";
     
 });
 document.getElementById('palabras').innerHTML=codeHTML;
}
