let personagem
let grama

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64

let restart

function setup() {
  createCanvas(576, 576)
  personagem = loadImage('personagem.png')
  grama = loadImage('grama.jpg')
}

function draw() {
  if(andarX < 0){
    andarX = 0
  }
  if(andarY < 0){
    andarY = 0
  }
  
  if(andarX > tamanho*8){
    andarX = tamanho*8
    
  }
  background(220)
  
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      image(grama, tamanho * i , tamanho * j, tamanho, tamanho)
    } // preenche o fundo com a imagem 9X em cada eixo
  }
  image(personagem, andarX, andarY, tamanho, tamanho)
  if(andarX === tamanho*8 && andarY ===tamanho*8){
    rect(160, 160, 256, 256)
    textSize(35)
    text('GANHOU', 220, 300)
    
    restart = createButton('Reiniciar')
    restart.mousePressed(reset) // qndo mouse clicar no botão
    
    noLoop()
  }
  
}

function reset(){
  andarX = 0
  andarY = 0
  restart.remove()
  loop()
}

function keyPressed(){ 
  if(keyIsDown(UP_ARROW)) {
    andarY -= velocidade
}
 if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade   
 }
   if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade   
 }
   if(keyIsDown(RIGHT_ARROW)){
   andarX += velocidade
 }
}