function etchSketch() {
  const container = document.querySelector("#container");
  const sketchContainer = document.createElement("div");
  sketchContainer.classList.add("sketch-container");
  const sketchScreen = document.createElement("div");
  sketchScreen.classList.add("sketch-screen");
  container.appendChild(sketchContainer);
  sketchContainer.appendChild(sketchScreen);
  const heading = document.createElement("h1");
  heading.textContent = "Etch-A-Sketch";
  sketchContainer.appendChild(heading);

  // Function to create the grid boxes5
  function makeGrid(size) {16
    for (let i = 0; i < size; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      for (let j = 1; j <= size; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
      }
      sketchScreen.appendChild(column);
    }
  }
  makeGrid(window.prompt("Enter the size of the grid"));
}
etchSketch();
