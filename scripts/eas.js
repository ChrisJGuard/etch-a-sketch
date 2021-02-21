function computeWidth(res) {
  return 400 / res + "px";
}

function addSquare(res) {
  const container = document.querySelector(".container");
  const div = document.createElement("div");

  div.style.width = computeWidth(res);
  div.style.height = computeWidth(res);

  div.classList.add("square");

  container.appendChild(div);
}

function resetContainer() {
  const container = document.querySelector(".container");
  const currentSquares = document.querySelectorAll(".square");

  currentSquares.forEach((square) => {
    container.removeChild(square);
  });
}

function populateContainer(res) {
  resetContainer();

  const totalSquares = res ** 2;

  for (let i = 0; i < totalSquares; i++) {
    addSquare(res);
  }
}
