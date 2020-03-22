document.addEventListener('DOMContentLoaded', ()=> {
    console.log('ahoj');
    const app = document.querySelector('#app');
    for (let x = 0; x < 14; x++) {
        const row = document.createElement('tr');
        row.className = 'div-' + Math.floor(Math.random()* (6 - 1 + 1)+ 1);
        app.appendChild(row);
        for (let y = 0; y < 14; y++) {
            const column = document.createElement('td');
            column.className = 'div-' + Math.floor(Math.random()* (6 - 1 + 1)+ 1);
            app.appendChild(column);
            row.id = x + '.' +  x;
            row.innerText = x + '.' +  x;
            if(y = 0){
                column.id = x + '.' + (y + 1);
                column.innerText =  x + '.' + (y + 1);
            } if (y > 13) {
                column.id = x + '.' + (y - 1);
                column.innerText =  x + '.' + (y - 1);
            } else {
                column.id = x + '.' + y;
                column.innerText =  x + '.' + y;
            }
            
        };
    }
})

const start = document.getElementById(0.0);
start.innerText = 'start';

let drenched = start;


function isTheColorSame () {
    console.log('cuus');

}