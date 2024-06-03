function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);     
  }
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 15;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
  }
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha = xBolinha + 1;
  }
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      //xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
      
      if (xBolinha > width || xBolinha < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha > height || yBolinha < 0) {
          velocidadeYBolinha *= -1;
      }
  }
  let raio = diametro
      velocidadeXBolinha *= -1;
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
  }
  
  function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro)
  }
  
  function movimentaBolinha() {
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
      if (xBolinha + raio > width || xBolinha - raio < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha + raio > height || yBolinha - raio < 0) {
          velocidadeYBolinha *= -1;
      }
  }
  //variáveis da bolinha
  //velocidade da bolinha
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
      rect(5, 150, 10, 90);
  }
  //variáveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComprimento = 10;
  let raqueteAltura = 90;
  function mostraRaquete() {
      rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  }
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
      mostraRaquete();
  }
  function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
  }
  function verificaColisaoRaquete() {
      if (xBolinha - raio < xRaquete + raqueteComprimento) {
          velocidadeXBolinha *= -1;
      }
  }
      if (xBolinha - raio < xRaquete + raqueteComprimento
          && yBolinha - raio < yRaquete + raqueteAltura
          && yBolinha + raio > yRaquete) {
          velocidadeXBolinha *= -1;
      }
    function draw() {
  
    background(0);
  
    mostraBolinha();
  
    movimentaBolinha();
  
    verificaColisaoBorda();
  
    mostraRaquete();
  
    movimentaMinhaRaquete();
  
    verificaColisaoRaquete();
  
  }
    function verificaColisaoRaquete() {
  
      if (xBolinha - raio < xRaquete + raqueteComprimento
  
          && yBolinha - raio < yRaquete + raqueteAltura
  
          && yBolinha + raio > yRaquete) {
  
          velocidadeXBolinha *= -1;
  
      }
  function mostraRaquete(x,y) {
  
    rect(x, y, raqueteComprimento, raqueteAltura);
  
  }
  
  
    //variáveis do oponente