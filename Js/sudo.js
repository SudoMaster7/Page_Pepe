/*function carConteudo(){
    let score_a = 0;
    let score_b = 0;
    
    let raquete_a = {x: -250, y: 0, dy: 0};
    let raquete_b = {x: 250, y: 0, dy: 0};
    
    let bola = {x: 0, y: 0, dx: 2, dy: -2};
    
    function setup() {
      createCanvas(600, 400);
      textAlign(CENTER);
    }
    
    function draw() {
      background('black');
    
      // Desenha as raquetes
      rect(raquete_a.x, raquete_a.y, 10, 50);
      rect(raquete_b.x, raquete_b.y, 10, 50);
    
      // Desenha a bola
      circle(bola.x, bola.y, 10);
    
      // Movimenta a bola
      bola.x += bola.dx;
      bola.y += bola.dy;
    
      // Verifica colisão com as bordas
      if (bola.y < 0 || bola.y > height) {
        bola.dy *= -1;
      }
    
      // Verifica se a bola saiu do campo
      if (bola.x < 0) {
        bola.x = width / 2;
        bola.y = height / 2;
        score_b += 1;
      } else if (bola.x > width) {
        bola.x = width / 2;
        bola.y = height / 2;
        score_a += 1;
      }
    
      // Verifica colisão com as raquetes
      if (bola.x < raquete_a.x + 10 && bola.y > raquete_a.y && bola.y < raquete_a.y + 50) {
        bola.dx *= -1;
      } else if (bola.x > raquete_b.x && bola.y > raquete_b.y && bola.y < raquete_b.y + 50) {
        bola.dx *= -1;
      }
    
      // Movimenta as raquetes
      raquete_a.y += raquete_a.dy;
      raquete_b.y += raquete_b.dy;
    
      // Limita o movimento das raquetes dentro da tela
      raquete_a.y = constrain(raquete_a.y, 0, height - 50);
      raquete_b.y = constrain(raquete_b.y, 0, height - 50);
    
      // Desenha o placar
      fill('white');
      textSize(24);
      text(`Jogador A: ${score_a}  Jogador B: ${score_b}`, width / 2, 30);
    }
    
    function keyPressed() {
      if (key == 'w') {
        raquete_a.dy = -2;
      } else if (key == 's') {
        raquete_a.dy = 2;
      }
    
      if (keyCode === UP_ARROW) {
        raquete_b.dy = -2;
      } else if (keyCode === DOWN_ARROW) {
        raquete_b.dy = 2;
      }
    }
    
    function keyReleased() {
      if (key == 'w' || key == 's') {
        raquete_a.dy = 0;
      }
    
      if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
        raquete_b.dy = 0;
      }
    }
}
*/
function carConteudo(){
    console.log("'777' talvez seja uma senha")
    alert("Olhe o console")
}