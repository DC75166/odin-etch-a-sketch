function etchSketch() {
  const container = document.querySelector("#container");
  const sketchContainer = document.createElement("div");
  sketchContainer.classList.add("sketch-container");
  const sketchScreen = document.createElement("div");
  sketchScreen.classList.add("sketch-screen");
  container.appendChild(sketchContainer);
  container.appendChild(sketchScreen);
  const heading = document.createElement("h1");
  heading.textContent = "Etch-A-Sketch";
  sketchContainer.appendChild(heading);

  // Function to create the grid boxes
  function makeGrid(size) {
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 1; j <= size; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = "This is a test";
        column.style.border = "1px solid red";
        column.innerText = i * size + j;
        row.appendChild(column);
      }
      sketchScreen.appendChild(row);
    }
  }
  makeGrid(16);
}
etchSketch();
