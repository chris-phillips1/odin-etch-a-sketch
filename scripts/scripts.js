
function makeGrid(rows, columns) {
    const container = document.querySelector('.container');
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);

    for (let item = 0; item < rows * columns; item++) {
        const newDiv = document.createElement('div');
        newDiv.textContent =  item + 1;
        container.appendChild(newDiv);
    }
}


makeGrid(16, 16);