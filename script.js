const GRID_DIMENSIONS = 512;
const GRID_LIMIT = 100;

const select = document.getElementById('color-picker');

let currentGridSize = 16;
let currentColor = 'black';

const container = document.querySelector('.container');
const btnClear = document.querySelector('.btn-clear');
const btnNewGrid = document.querySelector('.btn-new-grid');

function setColor(color) {
    currentColor = color;
}

select.onchange = (e) => setColor(e.target.value);

function genGrid(size) {
    for(let i = 0;i < size;i++) {
        let col = document.createElement('div');
        col.classList.add('col');

        for(let x = 0;x < size;x++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-square');
            cell.style.width = ((GRID_DIMENSIONS/size).toString() + 'px');
            cell.style.height = ((GRID_DIMENSIONS/size).toString() + 'px');

            cell.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = currentColor;
            });

            col.appendChild(cell);
        }
        container.appendChild(col);
    }
}

function removeGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearGrid() {
    removeGrid();
    genGrid(currentGridSize);
}

btnClear.addEventListener('click', clearGrid);

btnNewGrid.addEventListener('click', () => {
    let input = parseInt(prompt('Enter a new grid size (limit 100):'));
    if(input > GRID_LIMIT || input <= 0) {
        alert('Grid size out of range. Enter a number between 1 and 100');
    }
    else {
        currentGridSize = input;
        removeGrid();
        genGrid(input);
    }
});

genGrid(currentGridSize);
