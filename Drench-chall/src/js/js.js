document.addEventListener('DOMContentLoaded', ()=> {
    const app = document.querySelector('#app');

    function renderGame() {
        for (let x = 0; x < 14; x++) {
            const row = document.createElement('tr');
            row.className = 'div-' + Math.floor(Math.random()* (6 - 1 + 1)+ 1);
            app.appendChild(row);
            row.id = x + '.' +  0;
            row.innerText = x + '.' +  0;
            for (let y = 1; y < 14; y++) {
                const column = document.createElement('td');
                column.className = 'div-' + Math.floor(Math.random()* (6 - 1 + 1)+ 1);
                app.appendChild(column);
                column.id = x + '.' + y;
                column.innerText =  x + '.' + y;
            };
        }
    }
    
    renderGame();

    const id1 = 4.5;
    const z = id1.toFixed(1);
    const start = document.getElementById(4.5);
    start.innerText = 'start';


    let drenched = [];

    const greenButton = document.getElementById('green');
    greenButton.addEventListener("click", () => {
        changeOneColor(start,1)});
    const pinkButton = document.getElementById('pink');
    pinkButton.addEventListener("click", () => {
        changeOneColor(start, 2)});
    const purpleButton = document.getElementById('purple');
    purpleButton.addEventListener("click", () => {
        changeOneColor(start, 3)});
    const blueButton = document.getElementById('blue');
    blueButton.addEventListener("click", () => {
        changeOneColor(start, 4)});
    const redButton = document.getElementById('red');
    redButton.addEventListener("click", () => {
        changeOneColor(start, 5)});
    const orangeButton = document.getElementById('orange');
    orangeButton.addEventListener("click", () => {
        changeOneColor(start, 6)});


    function isTheColorSame (start, drenched) {
        let coordinates = firstSetUp();
        let colors = getBoxColor(coordinates);
        const x = start.className.slice(4);
        drenched.push(x);
        console.log(drenched);
        addtoDrenched(colors, x, drenched, coordinates);
    }

    function firstSetUp() {
        const axeX = start.id[0];
        const axeY = start.id[2];
        let left = axeX + '.' + (parseInt(axeY) - 1);
        let right = axeX + '.' + (parseInt(axeY) + 1);
        let up = (parseInt(axeX) - 1) + '.' + axeY;
        let down = (parseInt(axeX) + 1) + '.' + axeY;
        let coordinates = [left, right, up, down];
        return coordinates;
    }

    function getElement(array) {
        array.forEach(element => {
            element = document.getElementById(element);
            return element;
        });
    }

    function getBoxColor (array) {
        array.forEach(element => {
            element = document.getElementById(element).className.slice(4);
        });
        return array;
    }

    function changeOneColor (start, color) {
        start.className = 'div-' + color;
        isTheColorSame(start, drenched);
    }

    function changeMultipleColors(array) {
        array.forEach(element => {
            element.className = 'div-' + color;
        });
    }

    function addtoDrenched (array, x, drenched, coordinates) {
        array.forEach(element => {
            if (x == element) {
                console.log('same');
                drenched.push(element);
                let elements = getElement(coordinates);
                changeMultipleColors(elements);
            }
            console.log(drenched);
        });
    }

})


