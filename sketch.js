function makeGrid(size) {
    const container = document.querySelector("#container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 1; j <= size; j++) {
            const column = document.createElement("div");
            column.classList.add("column");
            column.textContent = "This is a test";
            column.style.border = "1px solid red";
            column.innerText = (i * size) + j;
            container.appendChild(column);
        }
    }
}
makeGrid(16);