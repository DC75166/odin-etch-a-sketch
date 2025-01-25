function etchSketch() {
    const container = document.querySelector("#container");
    const sketchContainer = document.createElement("div");
    sketchContainer.classList.add("sketch-container");
    const sketchScreen  = document.createElement("div");
    sketchScreen.classList.add("sketch-screen");
    container.appendChild(sketchContainer);
    container.appendChild(sketchScreen);

    // Function to create the grid boxes
  function makeGrid(size) {
    for (let i = 0; i < size; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      container.appendChild(row);
      for (let j = 1; j <= size; j++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.textContent = "This is a test";
        column.style.border = "1px solid red";
        column.innerText = i * size + j;
        container.appendChild(column);
      }
    }
  }
  makeGrid(16);
}
etchSketch();