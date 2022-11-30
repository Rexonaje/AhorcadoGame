let cantidad=palabras.length;

let spanWords=document.getElementById('cantidadWords');
spanWords.innerHTML=cantidad;

let newWord=document.getElementById('word');

function addWord(){
    word=newWord.value;
    if(word===''||word===' '){return;}
    
    palabras.push(word);
    console.log(word)

    
    cantidad=cantidad + 1;
    spanWords.innerHTML=cantidad;


}
function done(){

    let  word =sessionStorage.setItem("palabras", JSON.stringify(palabras));
   }

