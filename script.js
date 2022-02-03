const animais = ["Leão","girafa","elefante","zebra","hipopotamo","tigre","macaco"];
let cardAtual, cardAnterior, controlador, carta01, carta02, cartas, main, entrada

entrada = true
cartas = []
controlador = false

while ( entrada) {
  quantidadeCartas = parseInt(prompt("Qual a quantidade de Cartas?"))
  
  if(Number.isInteger(quantidadeCartas)){
    if(quantidadeCartas % 2 === 0 && quantidadeCartas >= 4 && quantidadeCartas <=14 ){
      jogo(quantidadeCartas)
      entrada = false 
    }
    
  } else entrada = true
}




function jogo(quantidadeCartas){

  main = document.querySelector("main")
  animais.sort(comparador); 
  
  for (let i = 0; i < quantidadeCartas/2; i++) {
    cartas.push(animais[i],animais[i])
  }

  cartas.sort(comparador);

  cartas.forEach(element => {
      main.innerHTML += `

      <div class="card" onclick="virarCartas(this,'${element}')">
        <div class=" face">
        <img src="./imagens/front.png">
        </div>
        <div class="back-face face">
          <img src="./imagens/${element}.png">
        </div>
      </div>
  `
      
  });

}


function comparador() { 
	return Math.random() - 0.5; 
}

 function virarCartas(carta,animal){
   
    carta.children[0].classList.add("front-face")
    carta.children[1].classList.add("back-face1")

  
    if(controlador === false){
      cardAnterior = animal
      controlador = true;
      carta01 = carta
    }else{
      cardAtual = animal
      controlador = false;
      carta02 = carta
      validarJogada()
    }

 }

 function validarJogada(){

     if( cardAnterior === cardAtual  ){
       console.log("Voce esta no caminho Certo!")
     } else{
       setTimeout(devirarCartas, 1000)
       console.log("nao foi dessa vez!")
   }
   
   

 }

 function devirarCartas(){

      carta01.children[0].classList.remove("front-face")
      carta01.children[1].classList.remove("back-face1")

      carta02.children[0].classList.remove("front-face")
      carta02.children[1].classList.remove("back-face1")

 }
  
 