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

function changeMono(square) {
  square.style.backgroundColor = "#000000";
}

function addSquareListeners() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      changeMono(square);
    });
  });
}

function addToolboxListeners() {
  const slider = document.querySelector("#slider");
  const label = document.querySelector('label[for="slider"]');
  const button = document.querySelector("button");

  slider.addEventListener("mousemove", () => {
    label.textContent = "Grid Size: " + slider.value + "x" + slider.value;
  });

  button.addEventListener("mouseup", () => {
    populateContainer(slider.value);
  });
}

function populateContainer(res) {
  resetContainer();

  const totalSquares = res ** 2;

  for (let i = 0; i < totalSquares; i++) {
    addSquare(res);
  }

  addSquareListeners();
}

addToolboxListeners();
