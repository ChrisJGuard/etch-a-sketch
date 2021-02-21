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
