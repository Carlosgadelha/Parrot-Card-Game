const animais = ["./imagens/Leão.png","./imagens/girafa.png","./imagens/elefante.png","./imagens/zebra.png","./imagens/hipopotamo.png","./imagens/tigre.png","./imagens/macaco.png"];

let main = document.querySelector("main")

animais.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

let cartas = []
for (let i = 0; i < 7; i++) {
    cartas.push(animais[i],animais[i])
    
}

cartas.sort(comparador);

 cartas.forEach(element => {
     main.innerHTML += `
 <div>
   <img src="${element}">
 </div>`
     
 });
 