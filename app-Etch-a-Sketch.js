const container = document.getElementById('container');
const squareGarden = document.getElementById('square-garden');
const cuadrantSelector = document.getElementById('cuadrant');
const buttonSquaresOpt = document.querySelector('#square-garden input[type="submit"');
let squaresPerLine = 7
let redRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let greenRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let blueRgb = Math.floor(Math.random()*255); // ONLY ONE VALUE PER PAGE LOAD
let oneRandomColor = `rgb(${redRgb}, ${greenRgb}, ${blueRgb})`; // ONLY ONE VALUE PER PAGE LOAD

/* FUNCTION TO CALL DIFERENT COLORS EVERY TIME IS CALLED */

container.style.backgroundColor = 'rgb(0, 0, 0)';

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

function makeGridXAndY(squaresPerLine) {
    let rows = squaresPerLine;
    let cols = squaresPerLine;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows*cols); c++) {
        let cells = document.createElement('div');
        container.appendChild(cells).className = 'grid-item';
        }    
    }
        
makeGridXAndY(squaresPerLine);

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
    e.target.style.removeProperty('opacity');
    //element.style.opacity = "" // THIS OPTION IS MORE COMPATIBLE WITH ELDER BROWSERS
    console.log(e.target);
}


//FUNCTION TO SELECT CELL INTO BLACK COLOR 
function blackItem(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.removeProperty('opacity');
    console.log(e.target);
}

// FUNCTION TO YELLOW
function coldplayMode(e) {
    e.target.style.backgroundColor = 'yellow';
    console.log(e.target);
}

// FUNCTION TO DARKER SIDE
function toEternalDarkness(e) {
    let opacityValue = 9;
    let opacityDegree; 
    if (!e.target.style.opacity) {     
        opacityDegree = opacityValue / 10;   
        e.target.style.opacity = opacityDegree;
        console.log(opacityValue);
    } else if (opacityValue > 0) {
        opacityValue--;
        opacityDegree = opacityValue / 10; 
        e.target.style.opacity = opacityDegree;
        console.log(opacityValue);
    }  else {return}
    console.log(e.target);
}


// TO RESTART

const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
    console.log("clicked restart");
    for(let i = 0; i < divSelector.length; i++){
        divSelector[i].style.backgroundColor = 'white';
        divSelector[i].style.removeProperty('opacity');
        }
    })

// ADDEVENTLISTENER FOR RANDOMCOLORS

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

// ADDEVENTLISTENER FOR BLACK COLOR

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

// ADDEVENTLISTENER FOR OPACITY

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

// ADDEVENTLISTENER TO SHOW SQUARES OPTIONS

const gridPrompter = document.querySelector('.button-options');

gridPrompter.children[0].addEventListener('click', () => {
    console.log('clicked prompter');
    squareGarden.style.visibility = "visible";
})

// ADDEVENTLISTENER FOR SQUAREGARDENOPT BUTTON

buttonSquaresOpt.addEventListener('click', (e) => {
    console.log('clicked buttonSquareOpt');
    squareGarden.style.visibility = "hidden";
    e.preventDefault();
})