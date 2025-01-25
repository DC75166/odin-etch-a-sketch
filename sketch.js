function etchSketch() {
  // Create the container for the sketch
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
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-div");
  heading.appendChild(buttonDiv);

  // Function to create the grid boxes
  function makeGrid(size) {
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

  // Function to change the color of the grid boxes
  function changeColor() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.addEventListener("mouseover", () => {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const random = Math.random();
        row.setAttribute(
          "style",
          `background-color: rgba(${randomR},${randomG},${randomB},${random}`
        );
      });
    });
  }

  // Function to initiate the game
  function playGame() {
    button = document.createElement("button");
    button.textContent = "Click to play";
    buttonDiv.appendChild(button);
    button.addEventListener("click", () => {
      const size = parseInt(window.prompt("Enter the size of the grid"));
      if (!isNaN(size) && size > 0 && size <= 100) {
        sketchScreen.textContent = "";
        makeGrid(size);
        changeColor();
      } else if (size <= 0 || size > 100) {
        alert(
          "The size of the grid should be greater than 0 and less than or equal to 100"
        );
        sketchScreen.textContent = "Click the button to Refresh";
      } else {
        alert("Please enter a valid number");
        sketchScreen.textContent = "Click the button to Refresh";
      }
    });
  }

  //Function to reset the grid
  function clearGrid() {
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Grid";
    buttonDiv.appendChild(clearButton);
    clearButton.addEventListener("click", () => {
      sketchScreen.setAttribute("style", "background-color: white");
      sketchScreen.textContent = "";
    });
  }

  playGame();
  clearGrid();
}
etchSketch();
