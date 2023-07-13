var sequence2 = [];
var konamiCode2 = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // Flèches haut, haut, bas, bas, gauche, droite, B, A, Entrée

document.addEventListener('keydown', function(event) {
  sequence2.push(event.keyCode);

  // Vérifiez si la séquence correspond à l'easter egg
  if (sequence2.toString().indexOf(konamiCode2) >= 0) {
    // Effectuez l'action de l'easter egg ici (par exemple, affichez un message)
    // alert('Easter egg activé !');
    console.log("GG");
    window.location.href = "../menu.html";

  }

  // Réinitialisez la séquence si trop de temps s'est écoulé entre les pressions de touches
  setTimeout(function() {
    sequence2 = [];
  }, 10000); // Temps d'attente en millisecondes (2 secondes)
});


const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const boxSize = 20;
let snake = [{ x: 0, y: 0 }];
let food = { x: 0, y: 0 };
let score = 0;
let direction = 'right';

function getRandomPosition() {
  return Math.floor(Math.random() * (canvas.width / boxSize)) * boxSize;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Dessiner le serpent
  snake.forEach(segment => {
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(segment.x, segment.y, boxSize, boxSize);
  });

  // Dessiner la nourriture
  ctx.fillStyle = '#4CAF50';
  ctx.fillRect(food.x, food.y, boxSize, boxSize);

  // Dessiner le score
  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Score: ' + score, 10, 25);
}

function update() {
  const head = { x: snake[0].x, y: snake[0].y };

  // Mettre à jour la position de la tête en fonction de la direction
  if (direction === 'up') head.y -= boxSize;
  if (direction === 'down') head.y += boxSize;
  if (direction === 'left') head.x -= boxSize;
  if (direction === 'right') head.x += boxSize;

  snake.unshift(head);

  // Vérifier si le serpent a mangé la nourriture
  if (head.x === food.x && head.y === food.y) {
    score++;
    food.x = getRandomPosition();
    food.y = getRandomPosition();
  } else {
    snake.pop();
  }
}

function changeDirection(event) {
  const keyPressed = event.keyCode;
  const upArrow = 38;
  const downArrow = 40;
  const leftArrow = 37;
  const rightArrow = 39;

  if (keyPressed === upArrow && direction !== 'down') direction = 'up';
  if (keyPressed === downArrow && direction !== 'up') direction = 'down';
  if (keyPressed === leftArrow && direction !== 'right') direction = 'left';
  if (keyPressed === rightArrow && direction !== 'left') direction = 'right';
}

function gameLoop() {
  update();
  draw();
}

// Gérer les événements clavier pour changer la direction du serpent
document.addEventListener('keydown', changeDirection);

// Générer la position aléatoire de la nourriture
food.x = getRandomPosition();
food.y = getRandomPosition();

setInterval(gameLoop, 100);
