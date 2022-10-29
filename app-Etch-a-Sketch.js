const container = document.getElementById('container');
let redRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let greenRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let blueRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let randomColors = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`; // ONLY ONE VALUE PER PAGE LOAD

/* FUNCTION TO CALL DIFERENT COLORS EVERY TIME IS CALLED */

function randomColorsGenerator() {
    return `rgb(${Math.floor(Math.random()*255)},
     ${Math.floor(Math.random()*255)},
     ${Math.floor(Math.random()*255)})`;
}

/* FUNCTION TO MAKE CELLS DEPENDING OF NUMBERS REQUIRED */

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement('div');
        container.appendChild(cells).className = 'grid-item';  
    }
}

makeDivs(256);

const divSelector = document.querySelectorAll('#container>div');

// for(div of divSelector) {
//     div.style.backgroundColor = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`;
//     }

for(let i = 0; i < divSelector.length; i++){
    divSelector[i].style.backgroundColor = randomColors;
    divSelector[i].addEventListener('mouseover', selectItem);
}



/* FUNCTION TO SELECT INDIVIDUAL CELL AND CALL RANDOMCOLOR FOR EVENT */

function selectItem(e) {
    e.target.style.backgroundColor = randomColorsGenerator();
    console.log(e.target);
}




