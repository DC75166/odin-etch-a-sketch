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
  button = document.createElement("button");
  button.textContent = "Click to play";
  heading.appendChild(button);

  // Function to create the grid boxes
  function makeGrid(size) {
    if (size <= 100) {
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
    } else {
      alert("The size of the grid should be less than or equal to 100");
      sketchContainer.textContent = "Reload to play again";
    }
  }

  // Function to change the color of the grid boxes
  function changeColor() {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.addEventListener("mouseover", () => {
        row.setAttribute("style", "background-color: black");
      });
    });
  }

  function playGame(){
     button.addEventListener("click",()=>{
      makeGrid(window.prompt("Enter the size of the grid"));
      changeColor();
     })
  }

  playGame();
}
etchSketch();
