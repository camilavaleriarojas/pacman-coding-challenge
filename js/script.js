var pacman;
var ghost;
var cookie;

function resetPacmanPosition() {
  pacman.style.top = "10px";
  pacman.style.left = "10px";
}

window.addEventListener("DOMContentLoaded", function () {
  pacman = document.getElementById("pacman");
  ghost = document.getElementById("ghost");
  cookie = document.getElementById("cookie");

  window.addEventListener("keydown", function (event) {
    var stepSize = 5;

    switch (event.key) {
      case "ArrowUp":
        pacman.style.top = pacman.offsetTop - stepSize + "px";
        break;
      case "ArrowDown":
        pacman.style.top = pacman.offsetTop + stepSize + "px";
        break;
      case "ArrowLeft":
        pacman.style.left = pacman.offsetLeft - stepSize + "px";
        break;
      case "ArrowRight":
        pacman.style.left = pacman.offsetLeft + stepSize + "px";
        break;
    }

    if (checkCollision(pacman, cookie)) {
      alert("Ganaste!");
      resetPacmanPosition();
    }

    if (checkCollision(pacman, ghost)) {
      alert("Perdiste!");
      resetPacmanPosition();
    }
  });
});

function checkCollision(elementOne, elementTwo) {
  var pacmanPosition = elementOne.getBoundingClientRect();
  var ghostPosition = elementTwo.getBoundingClientRect();

  console.log(pacmanPosition.right);
  console.log(ghostPosition.right);

  return (
    pacmanPosition.left < ghostPosition.right &&
    pacmanPosition.right > ghostPosition.left &&
    pacmanPosition.top < ghostPosition.bottom &&
    pacmanPosition.bottom > ghostPosition.top
  );
}
