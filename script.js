const animais = ["Leão","girafa","elefante","zebra","hipopotamo","tigre","macaco"];
let cardAtual, cardAnterior, controlador, carta01, carta02,cartas, cards, entrada, acertos, quantidadeJogadas, tempo, segundo, tempoJogo, bloqueio

tempo = document.querySelector(".relogio p")

function  iniciarJogo() {
  entrada = true
  cartas = []
  controlador = false
  acertos= 0
  quantidadeJogadas = 0 
  segundos = 0;
  bloqueio = false

  while ( entrada) {
    quantidadeCartas = parseInt(prompt("Qual a quantidade de Cartas? [min: 4 max:14]"))
    
    if(Number.isInteger(quantidadeCartas)){
      if(quantidadeCartas % 2 === 0 && quantidadeCartas >= 4 && quantidadeCartas <=14 ){
        jogo(quantidadeCartas)
        entrada = false
        tempo.innerHTML = 0
        tempoJogo = setInterval(relogio,1000)
      }
      
    } else entrada = true
  } 
}

function jogo(quantidadeCartas){

  cards = document.querySelector(".cards")
  animais.sort(comparador); 
  
  for (let i = 0; i < quantidadeCartas/2; i++) {
    cartas.push(animais[i],animais[i])
  }

  cartas.sort(comparador)
  cartas.forEach(element => {
      cards.innerHTML += `

      <div class="card" onclick="virarCartas(this,'${element}')" data-identifier="card">
        <div class=" face" data-identifier="back-face">
          <img src="./imagens/front.png">
        </div>
        <div class="back-face face">
          <img src="./imagens/${element}.png" data-identifier="front-face">
        </div>
      </div>
  `
      
  });

}

function comparador() { 
	return Math.random() - 0.5; 
}


 function virarCartas(carta,animal){
  if(bloqueio === false){
     
      quantidadeJogadas++
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
        bloqueio = true
        validarJogada()
      }
  }

 }

 function validarJogada(){

     if( cardAnterior === cardAtual  ){
       bloqueio = false
       acertos++
      if(acertos === quantidadeCartas/2) {
        clearInterval(tempoJogo)
        setTimeout(continuarJogo, 500)
      }
     } else{
       
       setTimeout(devirarCartas, 1000)
   }
   
 }

 function continuarJogo(){
    let continuar = true
    let jogar = ""

    alert(`"Você ganhou em ${quantidadeJogadas} jogadas e ${segundos} segundos!"`)
    
    do{

      jogar = prompt(` Deseja jogar novamente? N/S`)
      jogar = jogar.toUpperCase()
      console.log(jogar)

      switch (jogar) {
        case 'S':
          cards.innerHTML = ""
          iniciarJogo()
          continuar = false
          break;

        case 'N':
          alert(`Não se esqueça de voltar,viu!`)
          continuar = false
          break;
      
      }

    }while (continuar)
      
 }

 function devirarCartas(){

      carta01.children[0].classList.remove("front-face")
      carta01.children[1].classList.remove("back-face1")

      carta02.children[0].classList.remove("front-face")
      carta02.children[1].classList.remove("back-face1")
      bloqueio = false

 }

 function relogio(){
    
    tempo.innerHTML = ++segundos
 }
  
 iniciarJogo()
 
 
 