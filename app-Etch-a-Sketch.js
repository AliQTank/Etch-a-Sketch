const container = document.getElementById('container');
let redRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let greenRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let blueRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let oneRandomColor = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`; // ONLY ONE VALUE PER PAGE LOAD

/* FUNCTION TO CALL DIFERENT COLORS EVERY TIME IS CALLED */

function randomColorsGenerator() {
    return `rgb(${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)},
    ${Math.floor(Math.random()*255)})`;
}

// FUNCTION TO CALL ONE SINGLE COLOR

function oneSingleColor() {
    return oneRandomColor;
}

// DARKER MODE



// FUNCTION TO ASK SQUARES PER SIDE OF GRID

function makeGridXAndY(rows, cols) {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (let c = 0; c < (rows*cols); c++) {
                let cells = document.createElement('div');
                container.appendChild(cells).className = 'grid-item';
            }    
        }
        
makeGridXAndY(10, 10);

// 

const divSelector = document.querySelectorAll('#container>div');

//RAINBOW COLORS

// for(let i = 0; i < divSelector.length; i++){
//     divSelector[i].style.backgroundColor = oneRandomColor;
//     divSelector[i].addEventListener('mouseover', selectItem);
//     }

//BLACK COLOR

for(let i = 0; i < divSelector.length; i++){
    divSelector[i].style.backgroundColor = oneRandomColor;
    divSelector[i].addEventListener('mouseover', coldplayMode);
    }


/* FUNCTION TO SELECT INDIVIDUAL CELL AND CALL RANDOMCOLOR FOR EVENT */

function selectItem(e) {
    e.target.style.backgroundColor = randomColorsGenerator();
    console.log(e.target);
}


//FUNCTION TO SELECT CELL INTO BLACK COLOR 
function blackItem(e) {
    e.target.style.backgroundColor = 'black';
    console.log(e.target);
}

// FUNCTION TO YELLOW
function coldplayMode(e) {
    e.target.style.backgroundColor = 'yellow';
    console.log(e.target);
}

// FUNCTION TO DARKER SIDE
function toEternalDarkness(e) {
    console.log(e.target);
}


// to restart

const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
    console.log("clicked restart");
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].style.backgroundColor = 'white';
        }
    })

const rainbowSix = document.getElementById('rainbow');

rainbowSix.addEventListener('click', () => {
    console.log("clicked rainbow");
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', blackItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', toEternalDarkness);
        divSelector[i].addEventListener('mouseover', selectItem);
        }
})

const blackout = document.getElementById('blackout');

blackout.addEventListener('click', () => {
    console.log('clicked blackout');
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', selectItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', toEternalDarkness);
        divSelector[i].addEventListener('mouseover', blackItem);
        }
})

const darker =document.getElementById('darker');

darker.addEventListener('click', () => {
    console.log('darker');
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].removeEventListener('mouseover', selectItem);
        divSelector[i].removeEventListener('mouseover', coldplayMode);
        divSelector[i].removeEventListener('mouseover', blackItem);
        divSelector[i].addEventListener('mouseover', toEternalDarkness);
        }
})

const gridPrompter = document.querySelector('.button-options');

gridPrompter.children[0].addEventListener('click', () => {
    console.log('clicked prompter');
})