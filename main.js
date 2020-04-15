
 const elemento =document.getElementById('nombre');
 console.log(elemento);
 const palabras =[];
console.log(document.querySelector('#guarda'));

function imprimetxt(){
    alert(elemento.value);
    palabras.push(elemento.value);
    elemento.value="";
    imprimepalabras();
}

function imprimepalabras(){
    let codeHTML="";
 palabras.forEach((valor, posicion) => {
     
    codeHTML+= "<div>"+valor+"</div>";
     
 });
 document.getElementById('palabras').innerHTML=codeHTML;
}
