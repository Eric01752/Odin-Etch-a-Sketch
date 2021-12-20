function genGrid(size) {
    let container = document.querySelector('.container');

    for(let i = 0;i < size;i++) {
        let col = document.createElement('div');
        col.classList.add('col');

        for(let x = 0;x < size;x++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-square');

            cell.addEventListener('mouseover', (e) => {
                e.target.classList.add('hover-color');
            });

            col.appendChild(cell);
        }
        container.appendChild(col);
    }
}

genGrid(16);

const btn = document.querySelector('.btn');
const cells = document.querySelectorAll('.grid-square');

btn.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.classList.remove('hover-color');
    });
});