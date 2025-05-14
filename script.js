const player = document.getElementById("player");
const walls = document.querySelectorAll(".wall");
const game = document.getElementById("game");
const message = document.getElementById("message");

// Muovi il player col mouse
game.addEventListener("mousemove", (e) => {
  const rect = game.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Mantieni il player dentro l'area di gioco
  if (x >= 0 && x <= game.clientWidth - 20 && y >= 0 && y <= game.clientHeight - 20) {
    player.style.left = x + "px";
    player.style.top = y + "px";
  }
});

// Controlla le collisioni ogni 10ms
setInterval(() => {
  const playerRect = player.getBoundingClientRect();

  for (let wall of walls) {
    const wallRect = wall.getBoundingClientRect();

    if (
      playerRect.left < wallRect.right &&
      playerRect.right > wallRect.left &&
      playerRect.top < wallRect.bottom &&
      playerRect.bottom > wallRect.top
    ) {
      gameOver();
    }
  }
}, 10);

function gameOver() {
  message.textContent = "💀 GAME OVER! U lost Lol!";
  game.style.pointerEvents = "none";
}
