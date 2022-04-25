const container = document.querySelector('.container');
const black = document.querySelector('#black');
const reset = document.querySelector('#reset');
const rgb = document.querySelector('#rgb');
const slider = document.querySelector('#slider');
const value = document.querySelector('.value');

slider.addEventListener('input', () => {
    let val = slider.value;
    value.textContent = val;
    createGrid(val);
})

black.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    Array.from(cells).forEach(cell => cell.addEventListener('mouseenter', () => cell.style.backgroundColor = 'black'));
});

rgb.addEventListener('click', () => {
    let cells = document.querySelectorAll('.cell');
    Array.from(cells).forEach(cell => cell.addEventListener('mouseenter', () => cell.style.backgroundColor = randomColor()));
});

reset.addEventListener('click', () => {
    removeGrid();
    createGrid(value.textContent)
})

function createGrid(value) {
    removeGrid();
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    for (let i = 0; i < value**2; i++){
        let cell = document.createElement('div');
        cell.className = 'cell';
        container.appendChild(cell);
    }
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function randomColor(min = 0, max = 255) {
    let r = Math.floor(Math.random() * (max - min + 1) + min);
    let g = Math.floor(Math.random() * (max - min + 1) + min);
    let b = Math.floor(Math.random() * (max - min + 1) + min);
    return `rgb(${r},${g},${b})`;
}

createGrid(16);


