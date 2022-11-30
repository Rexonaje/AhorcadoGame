


TempKeys= document.getElementById("TempKey");
Keys=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

 for(i=0;i<Keys.length;i++){
	
 	TempKeys.innerHTML +="<button class='keys' onclick='KeyPress("+i+")'>"+Keys[i]+"</button>";
}

 
function KeyPress(code){
    console.log("working" + code);
      key=Keys[code];

      key=key.toUpperCase();

      
  ascii=key.length==1?key.charCodeAt(0):0;	

  let IsThere=lettersPressed.includes(key);
  if(IsThere==true){
    console.log("was pressed");
    return;
  }else{
    lettersPressed.push(key);
  }
		
  if(ascii>"64" && ascii<"91" || ascii=="0209"){//detecta si es letra, el 0209 es Ñ mayus
        
      let incluye=palabra.includes(key);
      
      if (incluye==true){
        for(i=0;i<palabra.length;i++){
          if(key==palabra[i]){//comparará 
            letraChange=document.getElementById(numb).style.visibility='visible';
            WinCouner=WinCouner+1;
            console.log(WinCouner); 
          } 				
        numb=numb+1;
        }
            
      } 
      if (incluye == false){

        if(WinCouner<palabra.length&&LostCouner<11){//si el wincounter es mayor que la palabra 0 lostcouner es menor a 11, dejara de detectar letras erroneas
          //lista de letras erroneas
          letrasNo=document.querySelector('.letrasNo'); 
          letras=letrasNo.textContent;
          letras.toString(); 
          
          letrasNo.innerHTML+=key;
          LostCouner=LostCouner+1;
          console.log("error N"+LostCouner);
            
            draw(LostCouner);
          
            if(LostCouner>=10){//al llegar a 11 se muestra el cartel de perdida
            let imagenAhorcado=document.querySelector(".lost").style.visibility='visible';
            return;
          }
        }
      }
      if(WinCouner==palabra.length){//ver si la palabra esta completa cada vez que se inserta una key
        let imagenAhorcado=document.querySelector(".win").style.visibility='visible';
      }
    numb=0;//reiniica el contador para re-utilizarlo 
    }

  }
      
  //reiniciar juego
  function reloadGame(){
    document.location.reload();
  }
